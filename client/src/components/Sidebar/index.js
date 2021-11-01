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
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/teams`} activeClassName='selected'>
                                <span className='ti-face-smile'></span>
                                <span>Teams</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/tasks`} activeClassName='selected'>
                                <span className='ti-agenda'></span>
                                <span>Tasks</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/leaves`} activeClassName='selected'>
                                <span className='ti-clipboard'></span>
                                <span>Leaves</span>
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
