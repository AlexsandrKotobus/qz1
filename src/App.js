import axios from "axios";
import './App.css';
// import { BrowserRouter} from "react-router-dom";
import { BrowserRouter,  Switch, Route} from "react-router-dom";
// import {  } from "react-router";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        {/* <Home/>
        <Quiz />
        <Result />  */}


        <Switch>
          <Route path ="/" exact>
            <Home />
          </Route>
          <Route path ="/quiz" exact>
            <Quiz />
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
