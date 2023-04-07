import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './QuestionDetails.css';
import ShareScreen from '../Components/ShareScreen';

function QuestionDetails() {
  const [question, setQuestion] = useState(null);

  // URL parameter - id
  const { id } = useParams();

  // Get specific question by id
  const getQuestion = async () => {
    try {
      const response = await axios.get(
        `https://private-a7278-blissrecruitmentapi.apiary-mock.com/questions/${id}`);
      setQuestion(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);


  // update the vote
  const handleVote = async () => {
    try {
        const response = await axios.put(`https://private-a7278-blissrecruitmentapi.apiary-mock.com/questions/${id}`);
        setQuestion(response.data);
    } catch (error) {
        console.log(error);
    }
    
  };

  return (
    <div className="details">
      {question && (
        <>
          <img src={question.image_url} alt={question.id} />
          <h2 className="info">Published at: {question.published_at.slice(0, 10)}</h2>
          <h2 className="title-question">{question.question}</h2>
          <p>
            {question.choices.map((choice) => {
              return (
                <div className='votes' key={question._id}>
                  <h2>{choice.choice}</h2>
                  <p>Total votes: {choice.votes}</p>
                  <button onClick={() => handleVote()}>Vote</button>
                </div>
              ); 
            })}
          </p>
          <ShareScreen />
        </>
      )}

      <Link className="back-button" to="/questions">Back to the listing</Link>
    </div>
  );
}

export default QuestionDetails;
