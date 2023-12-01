import React from "react";
import { useLocation } from "react-router-dom";
import "../SingleCard.css";

const SingleCard = () => {
  const location = useLocation();
  // getting data from path throuh useLocation
  const { filterData } = location.state || {};

  // getting the last value which is serial number
  const renderEpisodeList = () => {
    const episodeList = filterData.episode.map((episodeUrl, index) => {
      const episodeNumber = episodeUrl.split("/").pop();
      return (
        <div key={index} className="episode-item">
          Episode {episodeNumber}
        </div>
      );
    });

    return episodeList;
  };

  return (
    // displaying details for single card
    <div className="CharacterPage">
      <h1>{filterData.name}</h1>

      <img src={filterData.image} alt={filterData.name} />

      <div className="details">
        <div>
          <p>
            <b>Status:</b>
            {filterData.status}
          </p>
          <p>
            <b>Species:</b> {filterData.species}
          </p>
          <p>
            <b>Gender:</b> {filterData.gender}
          </p>
          <p>
            <b>Location:</b> {filterData.location.name}
          </p>
          <p>
            <b>First seen in:</b> {filterData.episode[0].split("/").pop()}
          </p>
        </div>

        <p>
          <b>Appears in:</b>
        </p>
        <div className="episode-list">{renderEpisodeList()}</div>
      </div>
    </div>
  );
};

export default SingleCard;
