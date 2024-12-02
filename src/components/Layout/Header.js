
import classes from "./Header.module.css"
import mainheaderImage from "../../assests/FoodBanner.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header =(props) => {
    return (

    
<>
<header className={classes.header}>
<h1>Food Ordering App</h1>
<h2 className={classes.h2}>LightBringer</h2>
<HeaderCartButton onClick={props.onShowCart} />
<button>Cart</button>
</header>
<div className={classes["main-image"]}> 
    <img src= {mainheaderImage} alt="A table full of delicious food!"/>
   
</div>

</>
)
}
export default Header;
