import GlobalStyle from "./GlobalStyle";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NotFound from "./pages/NotFound";
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <PrivateRoute path='/dashboard'>
                    <Dashboard />
                </PrivateRoute>
                <Route path='/*' component={NotFound} />
            </Switch>
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
