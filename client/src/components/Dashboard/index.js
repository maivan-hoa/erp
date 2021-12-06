import React from "react";
import Overview from "../../pages/Overview";
import Sidebar from "../Sidebar";
import Stores from "../../pages/Stores";
import Employees from "../../pages/Employees";
import Store from "../Store";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";

const Dashboard = () => {
    let match = useRouteMatch();
    const role = useSelector((state) => state.auth.user.role.slug);

    return (
        <>
            <Sidebar match={match} />
            <div className='main-content'>
                <main>
                    {role === "giam-doc" && <Store />}
                    <Switch>
                        <Route exact path={`${match.url}`} component={Overview} />
                        <Route path={`${match.url}/teams`}>Teams</Route>
                        <Route path={`${match.url}/stores`} component={Stores} />
                        <Route path={`${match.url}/employees`} component={Employees}></Route>
                        <Route path={`${match.url}/projects`}>Projects</Route>
                        <Route path={`${match.url}/timesheet`}>Timesheet</Route>
                        <Route path={`${match.url}/contacts`}>Contacts</Route>
                        <Route path={`${match.url}/account`}>Account</Route>
                    </Switch>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
