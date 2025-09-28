import Filters from "./Filters";
import Card from "./Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FetchedProfiles = () => {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [fetchedProfiles, setFetchedProfiles] = useState([]);

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
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
      .then((res) => res.json())
      .then((data) => setTitles(data.titles));
  }, []);

  useEffect(() => {
    fetch(
      `https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${title}&name=${search}&limit=1000`
    )
      .then((res) => res.json())
      .then((data) => setFetchedProfiles(data.profiles));
  }, [title, search]);

  return (
    <>
      <Filters
        titles={titles}
        onChange={handleChange}
        onSearch={handleSearch}
        click={handleClick}
        title={title}
        search={search}
      />
      <div className="flex-container">
        {fetchedProfiles.map((profile) => (
          <Link key={profile.id} to={`/fetched-profiles/profile/${profile.id}`}>
            <Card
              name={profile.name}
              title={profile.title}
              email={profile.email}
              img={profile.image_url}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default FetchedProfiles;
