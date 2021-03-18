import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import CartIcon from '../cart-icon/cartIcon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import {selectCartHidden} from '../../redux/cart/cart.selector.js'
import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header = ({currentUser,hidden}) => (
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
      {
        currentUser ?
        <div className='option' onClick={()=>auth.signOut()} >SIGN OUT</div>
        :
        <Link className="option" to="/signin">SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ? null: <CartDropDown/>
    }
   
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);