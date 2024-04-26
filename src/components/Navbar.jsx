import React from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  const logOut = () => {
    auth.signOut();
    navigate("/");
  };

  // console.log(auth.currentUser.photoURL);
  // console.log(useLocation());
  // console.log(getAuth());
  return (
    <>
      <div
        className="bg-primary d-flex  align-items-center p-2"
        style={{ justifyContent: "space-between" }}
      >
        <div className="user-content d-flex justify-content-center align-items-center">
          <img
            src={auth?.currentUser.photoURL}
            alt="Photo"
            style={{
              width: "20%",
              borderRadius: "50%",
              marginRight: "1rem ",
            }}
          />
          <h2>{auth?.currentUser.displayName}</h2>
        </div>

        <div
          className="email d-flex justify-content-center align-items-center"
          style={{ gap: "1rem" }}
        >
          {location.pathname === "/blogs" && (
            <Link to={"/addblog"} className="btn btn-success">
              AddBlog
            </Link>
          )}
          {location.pathname !== "/blogs" && (
            <Link to={"/blogs"} className="btn btn-success">
              Back To Blogs
            </Link>
          )}
          <h3>{auth?.currentUser.email}</h3>
          <button onClick={logOut} className="btn btn-danger">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
