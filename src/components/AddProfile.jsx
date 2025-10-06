import { useState, useContext, useReducer, useRef, useEffect } from "react";
import "../styles/addProfile.css";
import { useNavigate } from "react-router-dom";
import ProfilesContext from "../contexts/ProfilesContext"
import { initialState, formReducer } from "../reducers/formReducer";


const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) =>
  String(s ?? "")
    .trim()
    .replace(/\s+/g, " ");
// const initialValues = {
//   name: "",
//   title: "",
//   email: "",
//   bio: "",
//   img: null,
// };
const AddProfile = () => {
  // const [values, setValues] = useState(initialValues);
  // const { name, title, email, bio, img } = values;
  // const [errors, setErrors] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [success, setSuccess] = useState("");
  const [state, dispatch] =useReducer(formReducer, initialState)
  const {values, errors, isSubmitting, success} = state
  const { name, title, email, bio, img } = values;
  const navigate = useNavigate()

  const nameRef = useRef(null)
  useEffect(()=>{
    console.log(nameRef)
    nameRef.current.focus();
  }, [])
  const { addProfiles } = useContext(ProfilesContext)

  const onChange = (event) => {
    if (event.target.name === "img") {
      const file = event.target.files[0];
      const isFileOK = file && file.size < 1024 * 1024
      dispatch({type: "SET_IMG", payload:isFileOK ? file : null})
    } else {
      const {name, value} = event.target;
      dispatch({type:"SET_VALUES", payload: {name, value}})
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: "START_SUBMITTING"})
    try {
      const cleanedValues = {
        name: stripTags(trimCollapse(name)),
        title: stripTags(trimCollapse(title)),
        email: stripTags(trimCollapse(email)),
        bio: stripTags(bio).trim(),
        img: URL.createObjectURL(img),
      };
      addProfiles(cleanedValues);
      dispatch({type: "SUBMIT_SUCCESS" })
      setTimeout(() => {
        dispatch({type: "CLEAR_SUCCESS"})
      }, 1000);
      event.currentTarget.reset();
      navigate("/")
    } catch (error) {
      dispatch({type: "HAS_ERROR"})
    } finally {
      dispatch({type: "FINISH_SUBMIT"})
    }
  };
  return (
    <div className="add-profile">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={onChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={title}
          onChange={onChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={onChange}
        />
        <label htmlFor="bio">Bio:</label>
        <textarea
          name="bio"
          id="bio"
          placeholder="Add Bio..."
          required
          value={bio}
          onChange={onChange}
        ></textarea>
        <label htmlFor="img">Image:</label>
        <input
          type="file"
          name="img"
          id="img"
          required
          accept="image/png, image/jpeg, image/jpg, image/gif"
          onChange={onChange}
        />
        {errors && <p className="error-message">{errors}</p>}
        <button
          type="submit"
          disabled={
            isSubmitting ||
            !stripTags(trimCollapse(name)) ||
            !stripTags(trimCollapse(title)) ||
            !stripTags(trimCollapse(email)) ||
            !stripTags(bio).trim() ||
            !img
          }
        >
          Add Profile
        </button>
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default AddProfile;
