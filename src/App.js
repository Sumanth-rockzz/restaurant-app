import { Fragment,useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from './Components/Cart/Cart';

function App() {
const [cartIsShown,setcartIsShown]=useState(false);

const showCartHandler=()=>{
  setcartIsShown(true);
}
const hideCartHandler=()=>{
  setcartIsShown(false);
}


  return (
    <Fragment>
      {cartIsShown && <Cart  onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
