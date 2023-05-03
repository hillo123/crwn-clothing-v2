import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLog } from "../../assets/87 - crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
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
                <Link className="nav-link" to='/sign-in'>
                    <div>SIGN IN</div>
                </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;