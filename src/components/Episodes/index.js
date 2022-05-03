import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEpisodes } from "../../redux/actions/episodes";
import Header from "../Header";
import Loading from "../Loading";

export default function Episodes() {
  const episodes = useSelector((state) => state.episodes.episodes);
  const loading = useSelector((state) => state.episodes.loading);
  const pages = useSelector((state) => state.episodes.pages);
  const error = useSelector((state) => state.episodes.error);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(getEpisodes());
  }, [dispatch]);

  return (
    <div>
      <Header header="Episodes" />
      {loading ? (
        <Loading />
      ) : (
        episodes.length > 0 &&
        episodes.map((episode, index) => {
          return <li key={index}>{episode.name}</li>;
        })
      )}
      <p> {error ? `${error}` : ""} </p>
      <h2>{pages}</h2>
    </div>
  );
}
