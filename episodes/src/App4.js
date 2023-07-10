import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [catFact, setCatFact] = useState('');
  const [catImg, setCatImg] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchCatData = () => {
    setIsLoading(true);
    const factPromise = axios.get('https://catfact.ninja/fact');
    const imgPromise = axios.get('https://cataas.com/cat');

    Promise.all([factPromise, imgPromise])
      .then(([factResponse, imgResponse]) => {
        setCatFact(factResponse.data.fact);
        setCatImg(imgResponse.request.responseURL);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching cat data:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
    <div className="App">
      <h1>Random Cat Facts</h1>
      <button className="button" onClick={fetchCatData}>
        Generate Cat Fact
      </button>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          <p className="catFact">{catFact}</p>
          {catImg && <img className="catImage" src={catImg} alt="Random Cat" />}
        </>
      )}
    </div>
  );
}

export default App;
