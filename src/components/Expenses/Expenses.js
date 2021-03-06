import React, {useState} from 'react'; 
import ExpenseItem from './ExpenseItem'; 
import ExpensesChart from './ExpensesChart'; 
import Card from '../UI/Card'; 
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList'; 
import './Expenses.css'; 
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021'); 
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); 
    console.log(filteredYear);
  }
  const filteredExpenses = props.list.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear; 
  }); 
 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  ); 
}
export default Expenses;
