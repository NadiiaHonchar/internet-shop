import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const AppBar = () => {
  //   const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <header
      style={{ padding: 8, borderBottom: "1px solid black", marginBottom: 12 }}
    >
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <NavLink to="/">HomeView</NavLink>
        <NavLink to="/register">RegisterView</NavLink>
        <NavLink to="/login">LoginView</NavLink>
        <NavLink to="/private">PrivateView</NavLink>
        {/* {isLoggedIn && <NavLink to="/global-user-menu">Global</NavLink>} */}
        {/* {isLoggedIn && <NavLink to="/collection">Collection</NavLink>} */}
        {/* <NavLink to="/clock">Clock</NavLink> */}
        {/* {isLoggedIn && <NavLink to="/signup">SingupForm</NavLink>}
        {isLoggedIn && <NavLink to="/colorpicker">ColorPicker</NavLink>}
        {isLoggedIn && <NavLink to="/counter">Counter</NavLink>}
        {isLoggedIn && <NavLink to="/pockemon">PockemonView</NavLink>}
        {isLoggedIn && <NavLink to="/friends">Friends</NavLink>}
        {isLoggedIn && <NavLink to="/news">NewsGeneral</NavLink>} */}
        {/* <NavLink to="/user">UserMenu</NavLink> */}
        {/* <NavLink to="/counter-with-redux">CounterWithRedux</NavLink> */}
      </nav>
    </header>
  );
};
