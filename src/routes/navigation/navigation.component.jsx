import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLog } from "../../assets/87 - crown.svg";

import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart.dropdown.component";
import {CartContext} from '../../context/cart.context'
import { LogoContainer, NavLinks, NavigationContainer, NavLink } from "./navigation.styles";




const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);


    return (
        <Fragment>

            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLog className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink className="nav-link" to='/shop'>
                        <div>SHOP</div>
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={SignOutUser}>SIGN OUT</NavLink>)
                            :
                            (<Link className="nav-link" to='/auth'>
                                <div>SIGN IN</div>
                            </Link>
                            )
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropDown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;