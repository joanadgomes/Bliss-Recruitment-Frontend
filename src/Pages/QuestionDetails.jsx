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
        `https://private-a7278-blissrecruitmentapi.apiary-mock.com/questions/${id}`
      );
      setQuestion(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);


  // update the vote
  const handleVote = (choice) => async (e) => {
    e.preventDefault();
    const updateQuestion = {...question,
        choices: question.choices.map(element => element.choice === choice.choice ? {...element, votes: element.votes + 1} : element)
    }
    try {
        const response = await axios.put(
        `https://private-a7278-blissrecruitmentapi.apiary-mock.com/questions/${id}`, updateQuestion);
        setQuestion(response.data);
    } catch (error) {
        console.log(error);
    }
    
  };

  return (
    <div className="details">
      {question && (
        <>
          <h2 className="title-question">{question.question}</h2>
          <img src={question.image_url} alt={question.id} />
          <h2 className="info">
            Published at: {question.published_at.slice(0, 10)}
          </h2>
          <p>
            {question.choices.map((choice) => {
              return (
                <div key={question._id}>
                  <p>{choice.choice}</p>
                  <p>Total votes: {choice.votes}</p>
                  <button onClick={() => handleVote(choice)}>Vote</button>
                </div>
              ); 
            })}
          </p>
          <ShareScreen />
        </>
      )}

      <Link className="back-button" to="/questions">
        Back to the listing
      </Link>
    </div>
  );
}

export default QuestionDetails;