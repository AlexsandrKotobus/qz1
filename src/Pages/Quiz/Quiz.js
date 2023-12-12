import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import "./Quiz.css";
import Question from'../../components/Question/Question.js';


const Quiz = ({name, score, questions, setQuestions, setScore}) => {
    const [options, setOptions] = useState()
    const [currQues, setCurrQues] = useState(0)



    useEffect(() =>{
        console.log('1 ',questions);
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ]))
    }, [questions, currQues]);
    console.log(questions[currQues]?.correct_answer)
    console.log(questions[currQues]?.incorrect_answers)
    const arr = [questions[currQues]?.correct_answer, questions[currQues]?.incorrect_answers];
    console.log(arr)
    //проверка, как перетасовался массив вопросов
    console.log('2 ', options);
    // программа ПЕРЕТАСОВКИ элементов массива  -сейчас 1 эл правильный, ост - рандомно
    const handleShuffle = (options) =>{
        return options.sort(()=> Math.random() - 0.5);
    };
    
    return <div className='quiz'> 
        <span className='subtitle'>
            Welcome, {name}!
            </span>

            {questions ? (
                 <>
                 <div className='quizInfo'>
                    <span>{questions[currQues].category}</span>
                    <span>Score : {score}</span>
                  
                  </div>
                  
                  <Question 
                    currQues = {currQues}
                    setCurrQues = {setCurrQues}
                    questions = {questions}
                    options = {options}
                    correct = {questions[currQues]?.correct_answer}
                    score={score}
                    setScore = {setScore}
                    setQuestions = {setQuestions}
                  
                  />

                  </> ) : (<CircularProgress 
                    style={{margin: 100}}
                    color='inherit'
                    size={150}
                    thinkness={1}
            />
                )
            }
        
        
        
        </div>
    ;
}

export default Quiz;
