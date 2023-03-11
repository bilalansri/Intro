import { Link } from "react-router-dom";
import "./style.css";

function Intro() {
  return (
    <>
      <div className="intro-container">
        <h1>Welcome to my website!</h1>
        <p>Learn more about me and what I do</p>
        <Link className="btn" to={"/mySelf"}>
          Get started
        </Link>
      </div>
    </>
  );
}

export default Intro;
