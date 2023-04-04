import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import ListScreen from './Components/ListScreen';
import QuestionDetails from './Components/QuestionDetails';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/questions" element={<ListScreen />}/>
        <Route path="/questions/:id" element={<QuestionDetails />}/>
      </Routes>
    </div>
  )
}

export default App
