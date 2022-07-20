import "./loading.css";
import loadingImage from "../../assets/images/loading.gif";

const Loading = () => {
  return (
    <h2 className="header__loading">
      <img src={loadingImage} alt="Loading" />
      <span> Loading ... </span>
    </h2>
  );
};

export default Loading;
