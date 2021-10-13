
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Shipping from './Components/Shipping/Shipping';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                      <Route path="/home">
                        <Home></Home>
                      </Route>
                      <Route path="/login">
                        <Login path="login"></Login>
                      </Route>
                      <Route path="/register">
                          <Register></Register>
                      </Route>
                      <PrivateRoute path="/shopping">
                        <Shipping></Shipping>
                      </PrivateRoute>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
    </div>
  );
}

export default App;
