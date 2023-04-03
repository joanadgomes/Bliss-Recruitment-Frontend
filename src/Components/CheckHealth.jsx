import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CheckHealth() {
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
    <div>
      {loading && <p>Loading...</p>}
      {health.status && (
        <>
          <p>Health Status: {health.status}</p>
          {health.status === 'OK' ? <Link to='/questions'>Questions List Screen</Link> : <button onClick={() => handleRefresh()}>Retry action</button> }
        </>
      )}
    </div>
  );
}

export default CheckHealth;
