import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Homepage.css'
import logo from '../assets/logo.png'

function Homepage() {
  const [health, setHealth] = useState('');
  const [loading, setLoading] = useState(true);

  // access to the status of the health
  const getHealth = async () => {
    try {
      let response = await axios.get(
        `https://private-a7278-blissrecruitmentapi.apiary-mock.com/health`
      );
      setHealth(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHealth();
  }, []);

  // refresh de page in the status is NOT OK
  const handleRefresh = async () => {
    try {
        let response = await axios.get(
          `https://private-a7278-blissrecruitmentapi.apiary-mock.com/health`
        );
        setHealth(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className='homepage'>
      <h3>Welcome to</h3>
      <img className='logo-bliss' src={logo} alt="" />
      <h4>Recruitment.</h4>
      {loading && <p className='loader-container'></p>}
      {health.status && (
        <>
          {health.status === 'OK' ? <Link className='link-questions' to='/questions'>Ready to start? <span>Questions</span> </Link> : <button onClick={() => handleRefresh()}>Retry action</button> }
        </>
      )}
    </div>
  );
}

export default Homepage;
