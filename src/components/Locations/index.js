import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLocations } from "../../redux/actions/locations";
import Header from "../Header";
import Loading from "../Loading";

export default function Locations() {
  const locations = useSelector((state) => state.locations.locations);
  const loading = useSelector((state) => state.locations.loading);
  const pages = useSelector((state) => state.locations.pages);
  const error = useSelector((state) => state.locations.error);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  return (
    <div>
      <Header header="Locations" />
      {loading ? (
        <Loading />
      ) : (
        locations.length > 0 &&
        locations.map((location, index) => {
          return <li key={index}> {location.name} </li>;
        })
      )}
      <p> {error ? `${error}` : ""} </p>
      <h2>{pages}</h2>
    </div>
  );
}
