import ExpenseItem from "./components/ExpenseItem";
import Products from "./components/Products";

function App() {
  const productsArr = [
    {
      Title: "Product 1",
      Price: 10,
      Description: "First product",
    },
    {
      Title: "Product 2",
      Price: 20,
      Description: "Second product",
    },
  ];
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      {/* <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
      <h1>My Demo Shop</h1>
      <Product
        title={productsArr[0].title}
        price={productsArr[0].price}
        description={productsArr[0].description}
      />

      <Product
        title={productsArr[1].title}
        price={productsArr[1].price}
        description={productsArr[1].description}
      />
    </div>
  );
}

export default App;
