import React, { useEffect } from "react";
import Overview from "../../pages/Overview";
import Sidebar from "../Sidebar";
import Stores from "../../pages/Stores";
import Employees from "../../pages/Employees";
import Products from "../../pages/Products";
import Warehouses from "../../pages/Warehouses";
import Store from "../Store";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { selectStore } from "../../redux/storeSlice";

const Dashboard = () => {
    let match = useRouteMatch();
    const role = useSelector((state) => state.auth.user.role.slug);
    const dispatch = useDispatch();

    useEffect(() => {
        const currentStore = sessionStorage.getItem("auth") ? JSON.parse(sessionStorage.getItem("auth")).user.storeId : "";
        dispatch(selectStore(currentStore));
    }, [dispatch]);

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
                        <Route path={`${match.url}/employees`} component={Employees} />
                        <Route path={`${match.url}/products`} component={Products} />
                        <Route path={`${match.url}/warehouses`} component={Warehouses} />
                        <Route path={`${match.url}/contacts`}>Contacts</Route>
                        <Route path={`${match.url}/account`}>Account</Route>
                    </Switch>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
