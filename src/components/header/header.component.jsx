import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Connect is a higher order component

import { auth } from "../../firebase/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// mapStateToProps is used for selecting the part
// of the data from the store that the connected component needs
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  // Returns a plain object containing the required data
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
