import React, { useState } from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
import { useHistory } from "react-router";
//точки - на 2 папки выше, 
import Categories from '../../Data/Categories';

import './Home.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';





const Home = ({name, setName, fetchQuestions}) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

const history = useHistory();

const handleSubmit = ()=>{
    if(!category || !difficulty || !name){
        setError(true);
        return
    }
    else{
        setError(false)
        // fetchQuestions(category, difficulty); - функция получения ответов на вопросы
        fetchQuestions(category, difficulty);
        history.push("/quiz"); //history - hook
    }
}


    return (
        <div className='content'>
            <div  className='setting'>
                <span style={{fontSize: 30}} >Quiz Settings</span>
                <div className='settings__select'>
                    {error && <ErrorMessage>Please, fill all the feilds</ErrorMessage>}
                    
                    <TextField 
                    // {/* поле ввода имени */}
                    style={{marginBottom: 30}}  
                    label="Enter Your Name" 
                    variant="outlined" 
                    onChange={(e) => setName(e.target.value)}
                    
                    />

                    <TextField
                    //{/* поле выбора категории */}
                    style={{marginBottom: 30}}
                    select
                    label="Select Category"
                    variant="outlined"
                    onChange={(e) =>setCategory(e.target.value)}
                    value={category}
                    >
                        {Categories.map((cat) => (
                            <MenuItem key = {cat.category} value={cat.value}>
                                {cat.category}

                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField  
                    //{/* поле выбора сложности */}
                    style={{marginBottom: 30}}
                    select
                    label="Select Difficulty"
                    variant="outlined"
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                    >
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>
                    <Button variant="contained" color="primary" size='large'
                    onClick={handleSubmit}
                    
                    >Start Quiz</Button>

                </div>
            </div>
            <img src="/quiz.svg" className='banner' alt='quiz img'></img>
        
        </div>
    );
}

export default Home;
