import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app"></div>
        <Header/>
      </div>
    </BrowserRouter>
    
  );
}

// https://www.youtube.com/watch?v=dg7XmuLvsbs


export default App;
