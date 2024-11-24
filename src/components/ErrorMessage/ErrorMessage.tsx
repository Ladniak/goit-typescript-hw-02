import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p>{error}</p>;
};

export default ErrorMessage;
