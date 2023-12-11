import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import "./Quiz.css";
import Qestion from'../../components/Qestion/Qestion.js';


const Quiz = ({name, score, questions, setQestions, setScore}) => {
    const [options, setOptions] = useState()
    const [currentQues, setCurrentQues] = useState(0)



    useEffect(() =>{
        console.log('1 ',questions);
        setOptions(
            questions &&
            handleShuffle([
                questions[currentQues]?.correct_answer,
                ...questions[currentQues]?.incorrect_answers,
            ]))
    }, [questions]);
    console.log(questions[currentQues]?.correct_answer)
    console.log(questions[currentQues]?.incorrect_answers)
    const arr = [questions[currentQues]?.correct_answer, questions[currentQues]?.incorrect_answers];
    console.log(arr)
    //проверка, как перетасовался массив вопросов
    console.log('2 ', options);
    // программа ПЕРЕТАСОВКИ элементов массива  -сейчас 1 эл правильный, ост - рандомно
    const handleShuffle = (optionss) =>{
        return optionss.sort(()=> Math.random() - 0.5);
    };
    
    return <div className='quiz'> 
        <span className='subtitle'>
            Welcome, {name}!
            </span>

            {questions ? (
                 <>
                 <div className='quizInfo'>
                    <span>{questions[currentQues].category}</span>
                    <span>Score : {score}</span>
                  
                  </div>
                  
                  <Qestion />

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
