import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function QuestionDetails() {
    const [question, setQuestion] = useState(null)

    // URL parameter - id
    const { id } = useParams();

    // Get specific question by id
    const getQuestion = async () => {
        try {
            const response = await axios.get(`https://private-a7278-blissrecruitmentapi.apiary-mock.com/questions/${id}`);
            setQuestion(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getQuestion();
    }, [])

  return (
    <div>
        {question && (
            <>
            <h2>{question.question}</h2>
            <img src={question.image_url} alt="" />
            <h2>Published at: {question.published_at}</h2>
            </>
        )}
        <Link to="/listscreen">Back to the listing</Link>
    </div>
  )
}

export default QuestionDetails