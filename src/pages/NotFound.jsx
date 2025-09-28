import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const NotFound = () => {
  return (
    <Wrapper>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist. Go back to the <Link to="/">home page</Link>.</p>
    </Wrapper>
  );
};
export default NotFound;