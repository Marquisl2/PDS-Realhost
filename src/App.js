import {  Route} from 'react-router-dom';
import './App.css';
import Favourites from './components/Favourites';
import Games from './components/games';
import Landing from './components/Landing/landing';
import Products from './components/products';


function App() {



  return (
    <div className="App">




    <Route exact path={"/"} component={Landing}/>
    <Route exact path={"/games" } component={Games}></Route>
    <Route exact path={"/products" } component={Products}></Route>
    <Route exact path={"/favourites" } component={Favourites}></Route>



    </div>
  );
}

export default App;
