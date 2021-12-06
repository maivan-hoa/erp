import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ match }) => {
    return (
        <>
            <input type='checkbox' id='sidebar-toggle' />
            <div className='sidebar'>
                <div className='sidebar-header'>
                    <h3 className='brand'>
                        <span className='ti-unlink'></span>
                        <span>easywire</span>
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
                        <li>
                            <NavLink to={`${match.url}/teams`} activeClassName='selected'>
                                <span className='ti-shopping-cart-full'></span>
                                <span>Hóa đơn</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/stores`} activeClassName='selected'>
                                <span className='ti-bag'></span>
                                <span>Cửa hàng</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/employees`} activeClassName='selected'>
                                <span className='ti-user'></span>
                                <span>Nhân viên</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/projects`} activeClassName='selected'>
                                <span className='ti-folder'></span>
                                <span>Projects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/timesheet`} activeClassName='selected'>
                                <span className='ti-time'></span>
                                <span>Timesheet</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/contacts`} activeClassName='selected'>
                                <span className='ti-book'></span>
                                <span>Contacts</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/account`} activeClassName='selected'>
                                <span className='ti-settings'></span>
                                <span>Account</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
