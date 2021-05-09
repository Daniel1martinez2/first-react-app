import React, {useState} from 'react';
import Card from '../UI/Card'; 
import ExpenseDate from './ExpenseDate'; 
import './ExpenseItem.css'
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); 
  const [amount, setAmount] = useState(props.amount); 
  const clickHandler = ()=>{
    setTitle('updated'); 
    setAmount(0); 
    console.log(title);
  }; 
  return (
  <Card className="expense-item">
    <ExpenseDate date={props.date}/> {/*self closing and this is a comment*/}
    <div className="expense-item__description" >
      <h2>{title}</h2>
      <div className="expense-item__price">$ {amount}</div>
    </div>
    <button onClick ={clickHandler} >Change title</button>
  </Card>
  ); 
}
export default ExpenseItem; 