import module from "./LoadMoreBtn.module.css";
import { LoadMoreProps } from "./LoadMoreBtn.types";

const LoadMoreBtn = ({ onLoadMore }: LoadMoreProps) => {
  const handleClick = () => {
    onLoadMore();
  };

  return (
    <>
      <button className={module.loadBtn} onClick={handleClick} type="button">
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
