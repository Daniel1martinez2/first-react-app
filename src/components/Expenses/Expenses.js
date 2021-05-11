import React, {useState} from 'react'; 
import ExpenseItem from './ExpenseItem'; 
import Card from '../UI/Card'; 
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'; 
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021'); 
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); 
    console.log(filteredYear);
  }
  return (
    
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       <ExpenseItem 
        title={props.list[0].title}
        amount={props.list[0].amount}
        date={props.list[0].date}
      />
      <ExpenseItem 
        title={props.list[1].title}
        amount={props.list[1].amount}
        date={props.list[1].date}
      />
      <ExpenseItem 
        title={props.list[2].title}
        amount={props.list[2].amount}
        date={props.list[2].date}
      />
      <ExpenseItem 
        title={props.list[3].title}
        amount={props.list[3].amount}
        date={props.list[3].date}
      />
    </Card>
    
  ); 
}
export default Expenses;
