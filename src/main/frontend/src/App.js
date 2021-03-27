import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Login    from    "./pages/Login"
import Home     from    "./pages/Home"
import SignIn   from    "./pages/SignIn"
import NavBar   from    "./components/NavBar"
import colors   from    "./colors/colors"
import { UserContextProvider } from './context/UserContext'
import UserBar from "./components/UserBar";
import Game from "./pages/Game";
import {GameContextProvider} from "./context/GameContext";


const style = {
    link: {
        color: colors.light,
        textDecoration: 'none',
        padding: '15px 0',
    }
}


function App() {

    return (
      <UserContextProvider>
          <GameContextProvider>
              <Router>
                  <NavBar>
                      <Link to="/" style={style.link}>
                          Home
                      </Link>
                      <Link to="/login-page" style={style.link}>
                          Login
                      </Link>
                      <Link to="/sign-in" style={style.link}>
                          Sign in
                      </Link>
                  </NavBar>
                  <UserBar />
                  <switch>
                      <Route    exact path={"/login-page"}      component={Login}   />
                      <Route    exact path={"/sign-in"}         component={SignIn}  />
                      <Route    exact path={"/game"}            component={Game}    />
                      <Route    exact path={"/"}                component={Home}    />
                  </switch>
              </Router>
          <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </GameContextProvider>
      </UserContextProvider>
  );
}

export default App;
