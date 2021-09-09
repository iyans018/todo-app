import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import ProfilePict from "../assets/img/profile-pict.jpeg";
import "./Header.css";
import { useHistory } from "react-router-dom";

// Redux
import { logoutUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const Header = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const navigateTo = (to) => {
    history.push(to);
  };
  return (
    <nav className="header">
      <div className="head-container">
        <div className="logo">TODO App</div>
        <div className="profile">
          
          {user ? <img src={ProfilePict} alt="profile" /> : "" }
          <DropdownButton
            variant="danger"
            title={user ? `Hello, ${user.email.split("@")[0]}` : `Welcome`}
            size="sm"
          >
            {!user && (
              <>
                <Dropdown.Item onClick={() => navigateTo("/login")}>
                  Login
                </Dropdown.Item>
                <Dropdown.Item onClick={() => navigateTo("/register")}>
                  Register
                </Dropdown.Item>
              </>
            )}
            {user && (
              <>
                <Dropdown.Item
                  onClick={() =>
                    navigateTo(user.role === "user" ? "/" : "/admin")
                  }
                >
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => dispatch(logoutUser(history))}>
                  Log Out
                </Dropdown.Item>
              </>
            )}
          </DropdownButton>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Header);
