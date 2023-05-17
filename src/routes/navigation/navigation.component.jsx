import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLog } from "../../assets/87 - crown.svg";
import './navigation.styles.scss';
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart.dropdown.component";

const Navigation = () => {

    const { currentUser } = useContext(UserContext);


    return (
        <Fragment>

            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <CrwnLog className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        <div>SHOP</div>
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={SignOutUser}>SIGN OUT</span>)
                            :
                            (<Link className="nav-link" to='/auth'>
                                <div>SIGN IN</div>
                            </Link>
                            )
                    }
                    <CartIcon/>
                </div>
                <CartDropDown/>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;