import React, { useState } from "react";
import "../Home.css";
import { useNavigate } from "react-router-dom";

// data is comming from App.js file data containe the Charactor array
const Home = ({ data }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  // filtering the data according to user search, status, gender, species
  const filteredCharacters = data?.filter(
    (character) =>
      character.name.toLowerCase().includes(search.toLowerCase()) &&
      (status === "" || character.status === status) &&
      (gender === "" || character.gender === gender) &&
      (species === "" || character.species === species)
  );

  // navigating to dynamic route with charactor id and details
  const handleNavigate = (id, character) => {
    navigate(`/character/${id}`, {
      state: { filterData: character },
    });
  };

  return (
    <div>
      {/* filter input  */}
      <div className="filter-container">
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div>
          <label>Species:</label>
          <select value={species} onChange={(e) => setSpecies(e.target.value)}>
            <option value="">All</option>

            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      {/* search field */}
      <label>
        Search your character
        <input
          type="text"
          placeholder="Search characters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>

      {/* displaying the data trough map function  */}
      <div className="character-cards">
        {filteredCharacters?.map((character) => (
          <div
            key={character.id}
            className="grid-item"
            onClick={() => handleNavigate(character.id, character)}
          >
            <div className="card">
              <img
                className="card-img"
                src={character.image}
                alt={character.name}
              />
              <div className="card-body">
                <h4 className="card-title"> {character.name}</h4>

                <p className="card-text">
                  {" "}
                  <b>Status:</b>
                  {character.status}
                </p>
                <p className="card-text">
                  {" "}
                  <b>Species:</b>
                  {character.species}
                </p>
                <p className="card-text">
                  {" "}
                  <b>Location:</b>
                  {character.gender}
                </p>
                <p>
                  <b>Location:</b> {character.location.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
