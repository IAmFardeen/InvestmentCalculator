import React,{useState} from 'react';
import Header from './components/Headers/Header';
import Investment from './components/Investment/Investment';
import Table from './components/Table/Table';

function App() {
const[userInput, setUserInput]= useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; 

  if(userInput){
  let currentSavings = +userInput['current-saving']; 
  const yearlyContribution = +userInput['yearly-contribution']; 
  const expectedReturn = +userInput['expected-return'] / 100;
  const duration = +userInput['duration'];

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }
}

  return (
    <div>
      <Header></Header>

      <Investment calculate= {calculateHandler}></Investment>

{!userInput && <p style={{textAlign:'center'}}>No investment calculted yet</p>}

{userInput && <Table Data={yearlyData} initalInvestment={userInput['current-saving']}></Table>}

    </div>
  );
}

export default App;
