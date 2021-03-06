import Item from "./Item.js";
import Cart from "./Cart.js";
function Home(props) {

    return(
        <div><div className="row">
        {props.data.map((item, i) => {
          return (
            <Item
              name={item.name}
              price={item.price}
              img={item.img}
              item={item}
              key={i}
            />
          );
        })}
      </div>
      <Cart newPrice={props.newPrice} discount={props.discount} apply={props.apply}/>
    </div>
    )
}

export default Home;