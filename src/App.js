import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
//import Dashboard

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import ScrollToTop from "./components/navbar/Scrolltotop";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && user.displayName && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
            <Route path="/dashboard">
              {user && user.displayName && <Redirect to="/" />}
              {!user && <Dashboard />}
            </Route>
          </Switch>
        </BrowserRouter>
        
      )}
    </div>
  );
}

export default App;