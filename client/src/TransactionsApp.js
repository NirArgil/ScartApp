import React, {useState} from 'react'
import { Header } from './TransacionsApp/client/components/Header'
import { Balance } from './TransacionsApp/client/components/Balance'
import { IncomeExpenses } from './TransacionsApp/client/components/IncomeExpenses'
import { TransactionList } from './TransacionsApp/client/components/TransactionList'
import { AddTransaction } from './TransacionsApp/client/components/AddTransaction'
import { GlobalProvider } from './TransacionsApp/client/context/GlobalState'
import { CalendarV } from './TransacionsApp/client/components/Calender/Calendar'
import { ChartV } from './TransacionsApp/client/components/Charts/Chart'

// import './TransacionsApp/client/TransactionsApp.css'
import { AppContext } from './TransacionsApp/client/context/AppContext'

import styled from 'styled-components';

const Wrapper = styled.div`
 @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

:root {
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

* {
  box-sizing: border-box;
}

body {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Lato', sans-serif;
}

.container {
  margin: 30px auto;
  width: 350px;
  height: 700px;
}

h1 {
  letter-spacing: 3px;
  margin: 0;
}

h3 {
  border-bottom: 1px solid #bbb;
  padding-bottom: 10px;
  margin: 40px 0 10px;
}

h4 {
  margin: 0;
  text-transform: uppercase;
}

.inc-exp-container {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.inc-exp-container > div {
  flex: 1;
  text-align: center;
}

.inc-exp-container > div:first-of-type {
  border-right: 1px solid #dedede;
}

.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}

.money.plus {
  color: #2ecc71;
}

.money.minus {
  color: #c0392b;
}

label {
  display: inline-block;
  margin: 10px 0;
}

input[type='text'],
input[type='number'] {
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 100%;
}

.btn {
  cursor: pointer;
  background-color: #290149;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
}

.btn:focus,
.delete-btn:focus {
  outline: 0;
}

.list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
}

.list li {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  color: #333;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
}

.list li.plus {
  border-right: 5px solid #2ecc71;
}

.list li.minus {
  border-right: 5px solid #c0392b;
}

.delete-btn {
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  border-radius: 14%;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position:absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.list li:hover .delete-btn {
  opacity: 1;
}

@media (max-width: 320px) {
  .container {
    width: 300px;
  }
}

`;
function TransactionsApp() {
  
  const [tempIncome, setTempIncome] = useState(null);
  const [tempExpense, setTempExpense] = useState(null);
  
  const appContextValue = {
    tempExpense,
    setTempExpense,
    tempIncome,
    setTempIncome,
    IncomeExpenses,
  }
  return (
    <Wrapper>
      <GlobalProvider>
        <AppContext.Provider value={appContextValue}>
        <Header />
          <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
            <CalendarV />
            <ChartV />
          </div>
        </AppContext.Provider>
      </GlobalProvider>
    </Wrapper>
  );
}

export default TransactionsApp;