import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import "./App.css";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { ToastContainer, toast } from "react-toastify";
import { Image } from "./Global.types";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [inputIsEmpty, setInputIsEmpty] = useState<boolean>(false);

  const notify = (): void => {
    toast.info("The input must be filled!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setInputIsEmpty(true);
  };

  const onSearch = (value: string): void => {
    setSearchValue(value);
    setImages([]);
    setError(null);
    setPage(1);
  };

  const onLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const onImageClick = (targetImage: Image): void => {
    setSelectedImage(targetImage);
    setIsOpen(true);
  };

  useEffect(() => {
    if (searchValue === null) return;

    const fetchImages = async (): Promise<void> => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=qLSFnTXSNcWdo-WRETHz-Kj8eWsKPK6tzOx6jYGukQI&page=${page}&query=${searchValue}&per_page=12`
        );

        setTotalPages(data.total_pages);

        if (page !== 1 && images) {
          setImages((prevState) =>
            prevState ? [...prevState, ...data.results] : data.results
          );
        } else {
          setImages(data.results);
        }
      } catch (error: unknown) {
        const message =
          error instanceof Error ? error.message : "Unknown error occurred";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchValue, page]);

  useEffect(() => {
    if (page > 1 && images?.length) {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [images, page]);

  return (
    <>
      <SearchBar notify={notify} onSearch={onSearch} />
      <ImageGallery images={images} onImageClick={onImageClick} />
      {inputIsEmpty && <ToastContainer />}
      {!error && totalPages && totalPages > page && (
        <LoadMoreBtn onLoadMore={onLoadMore} />
      )}
      {isLoading && (
        <div className="loadDiv">
          <Loader />
        </div>
      )}
      {error && (
        <div className="loadDiv">
          <ErrorMessage error={error} />
        </div>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        selectedImage={selectedImage}
      />
    </>
  );
}

export default App;
