import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{ color: "#4fa94d" }}
      wrapperClass=""
    />
  );
};

export default Loader;
