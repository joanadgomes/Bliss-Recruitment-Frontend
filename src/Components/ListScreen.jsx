import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import { Link } from 'react-router-dom';

function ListScreen() {
    const [list, setList] = useState([]);
    const [filter, setFilter] = useState(null);
    const [limit] = useState(10);
    const [offset] = useState(10);
    

    // get the list of the questions
    const getListQuestions = async () => {
        try {
            let response = await axios.get(`https://private-a7278-blissrecruitmentapi.apiary-mock.com/questions?limit={limit}&offset={offset}&filter={filter}`);
            setList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getListQuestions();
    }, [limit, offset, filter]);

    const handleRefreshQuestion = async () => {
        try {
            let response = await axios.get(`https://private-a7278-blissrecruitmentapi.apiary-mock.com/questions?limit={limit}&offset={offset}&filter={filter}`);
            setList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = (search) => {
        setFilter(search);
    }

  return (
    <div>
        <Search setSearch={handleSearch} />

        {list.map((question) => {
            return (
                <div key={question._id}>
                    <h2>{question.question}</h2>
                    <Link to={`/questions/${question.id}`}>See details</Link>
                </div>
            )
        })}
        <button onClick={() => handleRefreshQuestion()}>Refresh Questions</button>
    </div>
  )
}

export default ListScreen