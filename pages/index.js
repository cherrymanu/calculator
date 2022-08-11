import Head from 'next/head'
import keyPad from './keyPad'
import React, { useState } from "react";

export default function Home() {
  //const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);

  const handleClick = value =>{
    // setDisplay(value);
    if(value=="C"&& expression.length!=0){
      setExpression("");
    }else if(value=="CE" && expression.length!=0){
      setExpression(expression.pop(expression.length-1))
    }else{
    setExpression([...expression,value])
    }
  }

  const handleResult =() =>{

    let result = eval(expression.join(' '))
    //setDisplay(result);
    setExpression(result);
    
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

     
        <h3 className="expression">{expression}</h3>
        
        <div className="button">
                <button onClick={()=>handleClick("(")}>(</button>
                <button onClick={()=>handleClick("CE")}>CE</button>
                <button onClick={()=>handleClick(")")}>)</button>
                <button onClick={()=>handleClick("C")}>C</button><br/>

                <button onClick={()=>handleClick("9")}>9</button>
                <button onClick={()=>handleClick("8")}>8</button>
                <button onClick={()=>handleClick("7")}>7</button>
                <button onClick={()=>handleClick("+")}>+</button><br/>

                <button onClick={()=>handleClick("6")}>6</button>
                <button onClick={()=>handleClick("5")}>5</button>
                <button onClick={()=>handleClick("4")}>4</button>
                <button onClick={()=>handleClick("-")}>-</button><br/>

                <button onClick={()=>handleClick("3")}>3</button>
                <button onClick={()=>handleClick("2")}>2</button>
                <button onClick={()=>handleClick("1")}>1</button>
                <button onClick={()=>handleClick("*")}>*</button><br/>

                <button onClick={()=>handleClick("0")}>0</button>
                <button onClick={()=>handleClick(".")}>.</button>
                <button onClick={()=>handleResult()}>=</button>
                <button onClick={()=>handleClick("%")}>%</button><br/>
        </div>
     
        
      </main>
      <style jsx>{`
      main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
        }
        button {

          height:50px;
          width:50px;
     }
 
       

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
