import React from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
//точки - на 2 папки выше, 
import Categories from '../../Data/Categories';
import './Home.css';



const Home = () => {
    return (
        <div className='content'>
            <div  className='setting'>
                <span style={{fontSize: 30}} >Quiz Settings</span>
                <div className='settings__select'>
                    <TextField style={{marginBottom: 30}}  
                    label="Enter Your Name" 
                    variant="outlined" />
                    <TextField  style={{marginBottom: 30}}
                    select
                    label="Select Category"
                    variant="outlined"
                    >
                        {
                        Categories.map((cat) => (
                            <MenuItem key = {cat.category} value={cat.value}>
                                {cat.category}

                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField  style={{marginBottom: 30}}
                    select
                    label="Select Difficulty"
                    variant="outlined"
                    >
                        <MenuItem key="Easy" value="easy">Easy</MenuItem>
                        <MenuItem key="Medium" value="medium">Medium</MenuItem>
                        <MenuItem key="Hard" value="hard">Hard</MenuItem>
                    </TextField>
                    <Button variant="contained" color="primary" size='large'>Start Quiz</Button>



                </div>
            </div>
            <img src="/quiz.svg" className='banner' alt='quiz img'></img>
        
        </div>
    );
}

export default Home;
