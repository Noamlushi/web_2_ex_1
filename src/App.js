import "./App.css";
import Dishes from "./components/Dishes";

function App() {
  const dishes = [
    {
      id: "d1",
      name: "Beef Burger",
      price: 72,
      description:
        "High quality beef medium to well with cheese on a multigrain bun.",
      weight: "300g",

      imgUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
    },

    {
      id: "d2",
      name: "Napolitan Pizza",
      price: 65,
      description:
        "Neapolitan pizza (Italian: pizza napoletana), also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      weight: "400g",

      imgUrl:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    },
    {
      id: "d3",
      name: "Nigiri Sushi",
      price: 69,
      description:
        "Nigiri sushi is that familiar style of sushi made up of an oval-shaped mound of rice with a slice of (usually) raw fish on top.",
      weight: "200g",
      imgUrl:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "d4",
      name: "Salad",
      price: 54,
      description:
        "a salad of romaine lettuce tossed with an olive oil dressing, a coddled or raw egg, garlic, and grated cheese and topped with croutons and sometimes anchovies.",
      weight: "350g",
      imgUrl:
        "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: "d5",
      name: "Steak",
      price: 110,
      description: "SERVED WITH CHIPS OR POTATO AND ONION RINGS.",
      weight: "500g",
      imgUrl:
        "https://images.unsplash.com/photo-1633237308525-cd587cf71926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  ];

  return (
    <div>
      <img
        className="cart"
        src="https://cdn-icons-png.flaticon.com/512/7852/7852408.png"
        alt=""
      />

      <div className="title">
        <h1>React Restaurant</h1>
      </div>
      <Dishes dishes={dishes} />
    </div>
  );
}

export default App;
