import { useState } from "react";
import '../styles/addProfile.css';
const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const AddProfile = () => {

  return (
    <div className="add-profile">
      <h2>Add Profile</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name"/>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="bio">Bio:</label>
        <textarea name="bio" id="bio" placeholder="Add Bio..."></textarea>
        <label htmlFor="img">Image:</label>
        <input type="file" name="img" id="img" />
        <button type="submit" >Add Profile</button>
      </form>
    </div>
  );
};

export default AddProfile;

            