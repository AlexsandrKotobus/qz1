import axios from "axios";
import './App.css';
import { useState } from "react";
// import { BrowserRouter} from "react-router-dom";
import { BrowserRouter,  Switch, Route} from "react-router-dom";
// import {  } from "react-router";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';


function App() {
  const [name, setName] = useState("");

  const [questions, setQestions] = useState('');
  const [score, setScore]=useState(0);


  const fetchQuestions = async(category='', difficulty='') => {
    const {data} = await axios.get(
    `https://opentdb.com/api.php?amount=10${
      category &&`&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    // console.log(data);
    setQestions(data.results)
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        {/* <Home/>
        <Quiz />
        <Result />  */}


        <Switch>
          <Route path ="/" exact>
            <Home 
            name={name} 
            setName={setName} 
            fetchQuestions={fetchQuestions} />
          </Route>
          <Route path ="/quiz" exact>
            <Quiz
            name={name}
            questions = {questions}
            score = {score}
            setScore = {setScore}
            setQestions={setQestions}
            
            />
          </Route>
          <Route path ="/result" exact>
            <Result />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
    
  );
}

// https://www.youtube.com/watch?v=dg7XmuLvsbs


export default App;
