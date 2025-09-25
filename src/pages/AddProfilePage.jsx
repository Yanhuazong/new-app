import AddProfile from "../components/AddProfile";
import Wrapper from "../components/Wrapper";
const AddProfilePage = ({ addProfiles }) => {
  return (
    <Wrapper>
      <h1>Add Profile</h1>
      <AddProfile addProfiles={addProfiles} />
    </Wrapper>
  );
};

export default AddProfilePage;
