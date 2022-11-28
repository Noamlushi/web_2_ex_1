import Dish from "./Dish";

function Dishes(props) {
  return (
    <div>
      <Dish
        name={props.dishes[0].name}
        price={props.dishes[0].price}
        imgUrl={props.dishes[0].imgUrl}
        description={props.dishes[0].description}
        weight={props.dishes[0].weight}
      />
      <Dish
        name={props.dishes[1].name}
        price={props.dishes[1].price}
        imgUrl={props.dishes[1].imgUrl}
        description={props.dishes[1].description}
        weight={props.dishes[1].weight}
      />
      <Dish
        name={props.dishes[2].name}
        price={props.dishes[2].price}
        imgUrl={props.dishes[2].imgUrl}
        description={props.dishes[2].description}
        weight={props.dishes[2].weight}
      />
      <Dish
        name={props.dishes[3].name}
        price={props.dishes[3].price}
        imgUrl={props.dishes[3].imgUrl}
        description={props.dishes[3].description}
        weight={props.dishes[3].weight}
      />
      <Dish
        name={props.dishes[4].name}
        price={props.dishes[4].price}
        imgUrl={props.dishes[4].imgUrl}
        description={props.dishes[4].description}
        weight={props.dishes[4].weight}
      />
    </div>
  );
}

export default Dishes;
