import { useEffect, useState } from "react"
import { useDispatch, useStore} from "react-redux";
import { getCharacters } from "../../redux/actions/characters";

export default function Characters() {
    const dispatch = useDispatch();
    const store = useStore();
    const [characters, setCharacters] = useState([]);

    async function actualCharacters({ page }) {
        dispatch(getCharacters(page))
        const actualCharacters = await store.getState()
        setCharacters(actualCharacters.characters.characters)
    }

    useEffect(() =>{
        actualCharacters({ page: 1})
    // eslint-disable-next-line
    }, []);

    return (
        <div>
            {characters.length > 0 && characters.map((character, index) => {
                return (
                    <li key={index}>{character.name}</li>
                )
            })}
            <button onClick={() => {
                actualCharacters({page: 1});
                console.log(1);
            }}> 1 </button>
            <button onClick={() => {
                actualCharacters({page: 2});
                console.log(2);
            }}> 2 </button>
            <button onClick={() => {
                console.log(3);
                actualCharacters({page: 3});
            }}> 3 </button>
            <button onClick={() => {
                console.log(4);
                actualCharacters({page: 4});
            }}> 4 </button>
            <button onClick={() => {
                console.log(5);
                actualCharacters({page: 5});
            }}> 5 </button>
            <button onClick={() => {
                console.log(6);
                actualCharacters({page: 6});
            }}> 6 </button>
        </div>
    )
}
