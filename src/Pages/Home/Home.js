import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='content'>
            <div  className='setting'>
                <span style={{fontSize: 30}} >Quiz Settings</span>
                <div className='settings_select'>
                    {/* <TextField></TextField> */}


                </div>
            </div>
            <img src="/quiz.svg" className='banner' alt='quiz img'></img>
        
        </div>
    );
}

export default Home;
