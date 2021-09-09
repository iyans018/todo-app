import React from "react"; // Bootstrap Component
// import { BrowserRouter as Router, useHistory, Link } from "react-router-dom";

// Bootstrap Components
// import Button from "react-bootstrap/Button";

// Components
import Header from "./Header";

function Navbar(props) {
  return (
    <div>
      <Header />
      {/* <Button onClick={() => navigateTo("/")} variant="primary">
        To Dashboard
      </Button>
      <Button onClick={() => navigateTo("/register")} variant="primary">
        To Register
      </Button>
      <Button onClick={() => navigateTo("/login")} variant="primary">
        To Login
      </Button>
      <Button onClick={() => dispatch(logoutUser(history))} variant="primary">
        Logout
      </Button> */}
    </div>
  );
}

export default Navbar;
