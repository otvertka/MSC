import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expences = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
