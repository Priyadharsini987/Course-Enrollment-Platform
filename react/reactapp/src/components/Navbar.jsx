import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

const Navbar = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <nav style={{
      padding: "10px",
      background: state.darkMode ? "#333" : "#eee",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div>
        <NavLink to="/" style={{ margin: "0 10px" }}>Home</NavLink>
        <NavLink to="/enroll" style={{ margin: "0 10px" }}>Enroll</NavLink>
        <NavLink to="/about" style={{ margin: "0 10px" }}>About</NavLink>
      </div>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {state.darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
