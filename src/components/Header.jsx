import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useState } from "react";
import { toast } from "react-toastify";

export const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      toast.success("Logged Successfully");
      localStorage.setItem("isAuth", JSON.stringify(true));
    });
  }

  function handleLogout() {
    signOut(auth);
    setIsAuth(!isAuth);
    toast.success("Logged Out Successfully");
    localStorage.setItem("isAuth", JSON.stringify(false));
    navigate("/");
  }
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
        <span>ContentCraft</span>
      </Link>

      <nav className="nav">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/createpost" className="link">
              Create
            </NavLink>

            <button onClick={handleLogout} className="auth">
              <i className="bi bi-box-arrow-in-left"></i> Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i>. Login
          </button>
        )}
      </nav>
    </header>
  );
};
