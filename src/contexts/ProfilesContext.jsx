import { createContext, useState } from "react";
import img1 from "../assets/headshot-man.png";
import img2 from "../assets/headshot-woman.png";

const ProfilesContext = createContext();

export default ProfilesContext;

const initialprofiles = [
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "john@example.com",
    img: img1,
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    email: "jane@example.com",
    img: img2,
  },
  {
    name: "Bob Smith",
    title: "UX Designer",
    email: "c@example.com",
    img: img2,
  },
  {
    name: "React Smith",
    title: "UX Designer",
    email: "a@example.com",
    img: img2,
  },
  {
    name: "Ava Doe",
    title: "Software Engineer",
    email: "b@example.com",
    img: img2,
  },
];
export const ProfilesProvider = ({children}) =>{
  const [profiles, setProfiles] = useState(initialprofiles);
  const addProfiles = (profile) => {
    setProfiles((prev) => [...prev, profile]);
  };
    return <ProfilesContext.Provider value={{profiles, addProfiles}}>
        {children}
    </ProfilesContext.Provider>
}
