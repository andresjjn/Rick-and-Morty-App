import React  from "react"
import { useSelector } from "react-redux";

export default function Episodes() {
    const episodes = useSelector(state => state.episodes.episodes)
    const loading = useSelector(state => state.episodes.loading)
    const error = useSelector(state => state.episodes.error)
    return (
        <div>
            <h1> Episodes </h1>
            <p> { loading ? "Loading..." : "" } </p>
            {episodes.length > 0 && episodes.map((episode, index) => {
                return (
                    <li key={index}>{episode.name}</li>
                )
            })}
            <p> {error ? `${error}` : ""} </p>
        </div>
    )
}
