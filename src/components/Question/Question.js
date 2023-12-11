import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Question.css';
import { Button } from '@mui/material';


const Question = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions,
}) => {
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

    //функция выбора singleQuestion
const handelSelect = (i) =>{
    if(selected === i && selected === correct){
        return 'select';
    }
    else if(selected === i && selected !== correct){
        return 'wrong';
    }
    else if(i === correct) {
        return 'select';
    }

};

const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1)
    setScore(false);
}




    return (
        <div className='question'>
           <h1>Question {currQues + 1}</h1>
           <div className='singleQuestion'>
            <h2>{questions[currQues].question }</h2>
            <div className='options'>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {options && 
                options.map(i=>
                        (<button
                        onClick={() => handleCheck(i)}
                        className={`singleOption ${selected && handelSelect(i)}`} key={i}
                        disabled = {selected}
                        >{i}</button>))
                }

            </div>
           </div>
        </div>
    );
}

export default Question;
