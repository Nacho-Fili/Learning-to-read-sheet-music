import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Login    from    "./pages/Login"
import Home     from    "./pages/Home"
import SignIn   from    "./pages/SignIn"
import NavBar   from    "./components/NavBar"
import colors   from    "./colors/colors"
import Div      from    "./components/Div";
import Flex     from    "./utils/Flex";
import { UserContextProvider } from './context/UserContext'


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
                  <Div height='50px' display={Flex} alignItems={'flex-end'} > </Div>
                  <switch>
                      <Route    exact path={"/login-page"}       component={Login}    />
                      <Route     exact path={"/sign-in"}    component={SignIn}  />
                      <Route    exact path={"/"}            component={Home}     />
                  </switch>
              </Router>
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </UserContextProvider>
  );
}

export default App;
