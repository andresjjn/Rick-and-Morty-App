import "../../assests/styles/loading.css"
import loadingImage from "../../assests/images/loading.gif"
export default function Loading() {
    return(
        <h2 className="header__loading"> 
            <img src={loadingImage} alt="Loading"/>
            <span> Loading ... </span>
        </h2>
    )
}
