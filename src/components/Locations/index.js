import React  from "react"
import { useSelector } from "react-redux";

export default function Locations() {
    const locations = useSelector(state => state.locations.locations)
    const loading = useSelector(state => state.locations.loading)
    const error = useSelector(state => state.locations.error)
    console.log(locations)
    return (
        <div>
            <h1> Locations </h1>
            <p> { loading ? "Loading..." : "" } </p>
            {locations.length > 0 && locations.map((location, index) => {
                return (
                    <li key={index}> {location.name} </li>
                )
            })}
            <p> {error ? `${error}` : ""} </p>
        </div>
    )
}
