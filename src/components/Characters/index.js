import React  from "react"
import { useSelector } from "react-redux";
import "../../assests/styles/characters.scss"

export default function Characters() {
    const characters = useSelector(state => state.characters.characters)
    const loading = useSelector(state => state.characters.loading)
    const error = useSelector(state => state.characters.error)
    return (
        <div>
            <h1> Characters </h1>
            <p> {loading ? "Loading..." : ""} </p>
            <p> {error ? `${error}` : ""} </p>
            <ul className="ul__cards">
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
            <p> {error ? `${error}` : ""} </p>
        </div>
    )
}
