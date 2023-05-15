import React, { useState } from 'react';
import './App.scss';
import Box from './components/Box';

function App() {
  const rcpImg = { 
    rock : {
      name : 'Rock',
      imgPath : 'rock.png'
    },
    scissor :
    {
      name : 'Scissor',
      imgPath : 'scissor.png'
    },
    paper :{
      name : 'Paper',
      imgPath : 'paper.png'
    }
   }

    const [userData, setUserData] = useState('');
    const [computerData, setComputerData] = useState();
    const [result, setResult] = useState('');
    const rcpFunc = (txt)=>{
      const keys = Object.keys(rcpImg);
      const randomIndex = Math.floor(Math.random() * keys.length);
      const randomKey = keys[randomIndex];
      const randomValue = rcpImg[randomKey];
    
      setUserData(rcpImg[txt]); // userData 상태 업데이트
      setComputerData(randomValue); // computerData 상태 업데이트
    
      const calculatedResult = rcpResult(rcpImg[txt], randomValue); // rcpResult 함수 호출하여 결과 계산
      setResult(calculatedResult); // result 상태 업데이트
   }
   const rcpResult = (user, computer) =>{
    if(user && computer){
      if(user.name == 'Rock' && computer.name == 'Scissor'){
        return '이겼어용'
      }else if(user.name == 'Rock' && computer.name == 'Paper'){
        return '졌어용'
      }else if(user.name == 'Rock' && computer.name == 'Rock'){
        return '비겼어용'
      }else if(user.name == 'Scissor' && computer.name == 'Paper'){
        return '이겼어용'
      }else if(user.name == 'Scissor' && computer.name == 'Rock'){
        return '졌어용'
      }else if(user.name == 'Scissor' && computer.name == 'Scissor'){
        return '비겼어용'
      }else if(user.name == 'Paper' && computer.name == 'Rock'){
        return '이겼어용'
      }else if(user.name == 'Paper' && computer.name == 'Scissor'){
        return '졌어용'
      }else if(user.name == 'Paper' && computer.name == 'Paper'){
        return '비겼어용'
      }
    }
  }
  return (
    <>
      <div className="main">
        <div className='inner'>
          <Box title='USER' data={userData} result={result}/>
          <Box title='COMPUTER' data={computerData} result={result}/>
        </div>
      </div>

      <div className="btn-area">
        <div className='inner'>
          <button onClick={()=>rcpFunc('scissor')}>가위</button>
          <button onClick={()=>rcpFunc('rock')}>바위</button>
          <button onClick={()=>rcpFunc('paper')}>보</button>
        </div>
      </div>
    </>
  );
}

export default App;
