import React from "react";
import Row from "../Row/Row";
import "./rowList.css";
import requests from "../../../utilities/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Science Fiction" fetchUrl={requests.fetchSciFiMovies} />

      <Row title="Western Movies" fetchUrl={requests.fetchWesternMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
    </>
  );
};

export default RowList;
