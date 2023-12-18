import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Result = ({name, score}) => {
    console.log('name, score::  ',name, score)
    const history = useHistory()
    useEffect(()=>{
        if(!name){
            history.push('/')



        }

    }, [name, history])
    return (
        <div className='result'>
            <span className='title'>Final score: {score}</span>
            Result Page
        </div>
    );
}

export default Result;
