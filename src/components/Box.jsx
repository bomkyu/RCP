import React from 'react'

export default function Box({title, data, result}) {
  if(title != 'USER'){
    if(result == '이겼어용'){
      result = '졌어용'
    }else if(result == '비겼어용'){
      result = '비겼어용'
    }else if(result == '졌어용'){
      result = '이겼어용'
    }
  }
  return (
        <div className={result == '이겼어용' ? 'box win' : (result == '졌어용' ? 'box lose' : 'box tie') }>
            <h1>{title}</h1>
            <img src={data ? "./images/" + data.imgPath : "./images/rock.png"} alt={data ? data.name : 'rock'} />
            <h2>{result}</h2>
        </div>
  )
}
