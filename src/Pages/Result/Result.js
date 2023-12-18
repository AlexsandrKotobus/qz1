import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Result.css';



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
            <Button 
            variant='contained' color='secondary' size='large' style={{alignSelf: 'center', marginTop: 20}}
            
            href='/'
            
            >Go to Homepage</Button>
        </div>
    );
}

export default Result;
