import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Login    from    "./components/Login"
import Home     from    "./components/Home"
import SignIn   from    "./components/SignIn"
import NavBar   from    "./components/NavBar"
import colors   from    "./colors/colors"

const style = {
    link: {
        color: colors.light,
        textDecoration: 'none',
        padding: '15px 0',
    }
}


function App() {
  return (
      <>
              <Router>
                  <NavBar>
                      <Link to="/" style={style.link}>
                          Home
                      </Link>
                      <Link to="/login" style={style.link}>
                          Login
                      </Link>
                      <Link to="/sign-in" style={style.link}>
                          Sign in
                      </Link>
                  </NavBar>
                  <switch>
                      <Route    exact path={"/login"}      component={Login}    />
                      <Route     exact path={"/sign-in"}    component={SignIn}  />
                      <Route    exact path={"/"}           component={Home}     />
                  </switch>
              </Router>
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </>
  );
}

export default App;
