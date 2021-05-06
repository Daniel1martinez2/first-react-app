import ExpenseDate from './ExpenseDate'; 
import './ExpenseItem.css'
function ExpensiveItem(props)  {
 

  return (
  <div className="expense-item">
    <ExpenseDate date={props.date}/> {/*self closing and this is a comment*/}
    <div className="expense-item__description" >
      <h2>{props.title}</h2>
      <div className="expense-item__price">$ {props.amount}</div>
    </div>
  </div>
  ); 
}

export default ExpensiveItem; 