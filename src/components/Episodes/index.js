import { useEffect } from "react"
import { useSelector, useDispatch} from "react-redux";
import { getEpisodes } from "../../redux/actions/episodes";

export default function Test() {
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters.characters)
    const loading = useSelector(state => state.characters.loading)
    const error = useSelector(state => state.characters.error)


    useEffect(() =>{
        dispatch(getEpisodes())
    // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1> {loading === null ? 'Loading...' : ''} </h1>
            {characters.length > 0 && characters.map((character, index) => {
                return (
                    <li key={index}>{character.name}</li>
                )
            })}
            <p> {error ? `${error}` : ''} </p>
        </div>
    )
}
