import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Sidebar = ({ match }) => {
    const dispatch = useDispatch();
    const role = useSelector((state) => state.auth.user.role.slug);
    const handleLogout = () => {
        if (window.confirm("Bạn có chắc chắn muốn đăng xuất?") === true) {
            dispatch(logout({}));
        }
    }

    const styleButton = {
        fontSize: '0.9rem',
        backgroundColor: "#027581",
        border: "none",
        color: "#ffffff",
        cursor: "pointer"
    }

    const styleSapn = {
        marginRight: "10px"
    }

    return (
        <>
            <input type='checkbox' id='sidebar-toggle' />
            <div className='sidebar'>
                <div className='sidebar-header'>
                    <h3 className='brand'>
                        <span className='ti-unlink'></span>
                        <span>VinMart</span>
                    </h3>
                    <label htmlFor='sidebar-toggle' className='ti-menu-alt'></label>
                </div>
                <div className='sidebar-menu'>
                    <ul>
                        <li>
                            <NavLink exact to={`${match.url}`} activeClassName='selected'>
                                <span className='ti-home'></span>
                                <span>Tổng quan</span>
                            </NavLink>
                        </li>
                        
                        { (role === 'giam-doc' || role === 'quan-ly-cua-hang' ) && <li>
                            <NavLink exact to={`${match.url}/predict`} activeClassName='selected'>
                                <span className='ti-target'></span>
                                <span>Dự đoán</span>
                            </NavLink>
                        </li>}
                        {(role === 'giam-doc' || role === 'quan-ly-cua-hang' || role === 'thu-ngan') && 
                        <li>
                            <NavLink to={`${match.url}/orders`} activeClassName='selected'>
                                <span className='ti-shopping-cart-full'></span>
                                <span>Hóa đơn</span>
                            </NavLink>
                        </li>}
                        {role === 'giam-doc' &&
                        <li>
                            <NavLink to={`${match.url}/stores`} activeClassName='selected'>
                                <span className='ti-bag'></span>
                                <span>Cửa hàng</span>
                            </NavLink>
                        </li>}
                        {(role === 'giam-doc' || role === 'quan-ly-cua-hang') && 
                        <li>
                            <NavLink to={`${match.url}/employees`} activeClassName='selected'>
                                <span className='ti-user'></span>
                                <span>Nhân viên</span>
                            </NavLink>
                        </li>}
                        {(role === 'giam-doc' || role === 'quan-ly-cua-hang' || role === 'quan-kho' || role === 'thu-ngan') && 
                        <li>
                            <NavLink to={`${match.url}/products`} activeClassName='selected'>
                                <span className='ti-layout-grid3'></span>
                                <span>Sản phẩm</span>
                            </NavLink>
                        </li>}
                        {(role === 'giam-doc' || role === 'quan-ly-cua-hang' || role === 'quan-kho' || role === 'thu-ngan') && 
                        <li>
                            <NavLink to={`${match.url}/warehouses`} activeClassName='selected'>
                                <span className='ti-server'></span>
                                <span>Kho hàng</span>
                            </NavLink>
                        </li>}
                        <li>
                            <NavLink to={`${match.url}/profile`} activeClassName='selected'>
                                <span className='ti-book'></span>
                                <span>Cá nhân</span>
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={`${match.url}/account`} activeClassName='selected'>
                                <span className='ti-settings'></span>
                                <span>Account</span>
                            </NavLink>
                        </li> */}
                        <li>
                            <button onClick={handleLogout} style={styleButton}>
                                <span className='ti-shift-right-alt' style={styleSapn}></span>
                                <span>Đăng xuất</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
