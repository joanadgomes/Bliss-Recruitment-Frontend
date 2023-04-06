import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import ListScreen from './Pages/ListScreen';
import QuestionDetails from './Pages/QuestionDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/questions" element={<ListScreen />} />
        <Route path="/questions/:id" element={<QuestionDetails />} />
      </Routes>
    </div>
  );
}

export default App;
