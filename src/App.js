import React from 'react'
import { useState } from 'react'

import './components/app.scss'

export default function App() {

const [mensagem, setMensagem] = useState('');
const [resultado, setResultado] = useState('');

const [a, setA] = useState("");
const [b, setB] = useState("");
const [c, setC] = useState("");
const [d, setD] = useState("");

  function calcular(){
    const resposta = (parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d)) / 4;
    setResultado("Sua média é de " + resposta);

    if (resposta > 6){
      setMensagem(" você passou e não precisa fazer recuperação! ");
    } else if(resposta < 6){
      setMensagem(" Você está de recuperação! " );
    }
  }

  return (

    <div className='container'>

      <div className="containerinputs">

          <div className="tittle"> <h1> Calcular Média </h1> </div>
          <div className="inputn1"> <input type="text" value={a} onChange={(e) => setA(e.target.value) } placeholder='Digite sua primeira nota aqui' /> </div>
          <div className="inputn2"> <input type="text"  value={b} onChange={(e) => setB(e.target.value) } placeholder='Digite sua segunda nota aqui' /> </div>
          <div className="inputn3"> <input type="text"  value={c} onChange={(e) => setC(e.target.value) } placeholder='Digite sua terceira nota aqui' /> </div>
          <div className="inputn4"> <input type="text"  value={d} onChange={(e) => setD(e.target.value) } placeholder='Digite sua quarta nota aqui' /> </div>
          <div className="submitbutton"> <button onClick={calcular} > Calcular </button> </div>
          <div className="media"> <h4>  </h4> {resultado} </div>
          <div className="mensagem"> <h5> {mensagem} </h5> </div>

      </div>

    </div>

  )
}
