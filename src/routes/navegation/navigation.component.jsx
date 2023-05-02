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
                <Link className="nav-links-container" to='/shop'>
                    <div>SHOP</div>
                </Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;