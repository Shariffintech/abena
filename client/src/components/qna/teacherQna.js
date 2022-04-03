import React, { useState, useEffect, useRef } from "react";
// import * as tf from "../../../node_modules/@tensorflow/tfjs";
// import * as qna from "../../../node_modules/@tensorflow/qna";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from "react-loader-spinner";
import { Fragment } from "react";
import { Form } from "react-bulma-components";
const tf = require("@tensorflow/tfjs");
const qna = require("@tensorflow-models/qna");

export default function TeacherQna() {

  const { Input, Textarea } = {
    ...Form,
  };
  // setup references and state hooks
  const passageRef = useRef(null); 
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState(); 
  const [model, setModel] = useState(null); 

  // 4. Load Tensorflow Model
  const loadModel = async ()=>{
    const loadedModel = await qna.load()
    setModel(loadedModel); 
    console.log('Model loaded.')
  } 

  // 5. Handle Questions
  const answerQuestion = async (e) =>{
    if (e.which === 13 && model !== null ){
      console.log('Question submitted.')
      const passage = passageRef.current.value
      const question = questionRef.current.value

      const answers = await model.findAnswers(question, passage)
      setAnswer(answers); 
      console.log(answers)

    }  
  }

  useEffect(()=>{loadModel()}, [])

  // 2. Setup input, question and result area
  return (
    <div className="App">
      <header className="App-header">
        {model ==null ? 
          <div>
            <div>Model Loading</div>      
            <BallTriangle
            color="#00BFFF"
            height={100}
            width={100}/>
          </div> 
          :  
          <React.Fragment>
            Passage
            <textarea className="textarea" ref={passageRef} rows="10" cols="100"/>
            Ask a Question
            <input className="input" ref={questionRef} onKeyPress={answerQuestion} size="80"/>
            <br /> 
            Answers
            {answer ? answer.map((ans, idx) =><div><b>Answer {idx+1} - </b> {ans.text} ({Math.floor(ans.score*100)/100})</div>) : ""}
            </React.Fragment>
        } 
      </header>
    </div>
  );
}
