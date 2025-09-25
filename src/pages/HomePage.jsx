import Wrapper from "../components/Wrapper";
import Filters from "../components/Filters";
import Card from "../components/Card";
import FetchedProfiles from "../components/FetchedProfiles";
import { useState } from "react";

const HomePage = ({ profiles }) => {
  const titles = [...new Set(profiles.map((profile) => profile.title))];
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleClick = () => {
    setTitle("");
    setSearch("");
  };
  const filteredProfiles = profiles.filter(
    (profile) =>
      (!title || profile.title === title) &&
      profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Wrapper>
        <h1>Welcome to the Profile App</h1>
    </Wrapper>
      <Wrapper id="profiles">
        <h2>Example Profiles</h2>
        <Filters
          titles={titles}
          onChange={handleChange}
          onSearch={handleSearch}
          click={handleClick}
          title={title}
          search={search}
        />
        <div className="flex-container">
          {filteredProfiles.map((profile) => (
            <Card
              key={profile.email}
              name={profile.name}
              title={profile.title}
              email={profile.email}
              img={profile.img}
            />
          ))}
        </div>
      </Wrapper>
      <Wrapper>
        <h2>Fetched Profiles</h2>
        <FetchedProfiles />
      </Wrapper>
    </>
  );
};

export default HomePage;
