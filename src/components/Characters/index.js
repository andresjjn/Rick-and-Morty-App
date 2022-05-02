import React, { useEffect }  from "react"
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../../redux/actions/characters"
import "../../assests/styles/characters.scss"
import Header from "../Header";
import Loading from "../Loading";

export default function Characters() {
    const characters = useSelector(state => state.characters.characters)
    const loading = useSelector(state => state.characters.loading)
    const error = useSelector(state => state.characters.error)
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { dispatch(getCharacters(1)) }, [])

    return (
        <div>
            <Header header="Characters"/>
            <p> {error ? `${error}` : ""} </p>
            {loading 
                ? <Loading />
                : <ul className="ul__cards">
                    {characters.length > 0 && characters.map((character, index) => {
                        return (
                            <li key={index} className="character-card">
                                <figure>
                                    <img src={character.image}
                                        alt="Character"
                                    />
                                    <figcaption>
                                        <h2>{character.name}</h2>
                                        <p>{`Location: ${character.location.name}`}</p>
                                        <p>{`Origin:   ${character.origin.name}`}</p>
                                        <p>{`Species:  ${character.species}`}</p>
                                    </figcaption>
                                </figure>
                            </li>
                        )
                    })}
                </ul>
            }
            <p> {error ? `${error}` : ""} </p>
        </div>
    )
}
