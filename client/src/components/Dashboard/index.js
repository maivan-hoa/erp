import React from "react";
import Overview from "../../pages/Overview";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import "./styles.css";

const Dashboard = () => {
    let match = useRouteMatch();
    return (
        <>
            <Sidebar match={match} />
            <div className='main-content'>
                <Header />
                <main>
                    <Switch>
                        <Route exact path={`${match.url}`} component={Overview} />
                        <Route path={`${match.url}/teams`}>Teams</Route>
                        <Route path={`${match.url}/tasks`}>Tasks</Route>
                        <Route path={`${match.url}/leaves`}>Leaves</Route>
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
