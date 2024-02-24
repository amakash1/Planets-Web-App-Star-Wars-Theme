import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { from, zip } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

function App() {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastText, setToastText] = useState("");
  useEffect(() => {
    fetchPlanets(`https://swapi.dev/api/planets/?page=${currentPage}`);
  }, [currentPage]);

  const fetchPlanets = (url) => {
    from(fetch(url))
      .pipe(
        switchMap(response => response.json()),
        map(data => {
          setPlanets(data.results || []); // Ensure data.results is defined
          setNextPage(data.next);
        }),
        catchError(error => console.error('Error fetching planets:', error))
      )
      .subscribe();
  };

  const showToast = (text) => { // Accept text parameter for the toast message
    setToastText(text); // Set the text for the toast message
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000); // Hide toast after 3 seconds
  };

  const fetchNextPage = () => {
    showToast("Next Page clicked");
    if (nextPage) {
      setCurrentPage(prevPage => prevPage + 1);
    }
    
  };

  const fetchPrevPage = () => {
    showToast("Previous Page clicked"); 
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
    
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Star Wars Planets</h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage planets={planets} fetchNextPage={fetchNextPage} fetchPrevPage={fetchPrevPage} currentPage={currentPage} nextPage={nextPage} showToast={showToast} />} // Pass showToast here
            />
            <Route path="/planet/:id" element={<PlanetDetailsPage planets={planets} />} />
          </Routes>
        </main>
        {toastVisible && <div className="toast">{toastText}</div>}
        <footer>
          <p>© Star Wars Inc</p>
        </footer>
      </div>
    </Router>
  );
}

const HomePage = ({ planets, fetchNextPage, fetchPrevPage, currentPage, showToast }) => (
  <div>
    <div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="ag-courses_box">
  {planets && planets.map((planet, index) => (
    <div class="ag-courses_item" key={index}>
      <Link to={`/planet/${index}`} key={index} className="planet-link">
      <a href='#' class="ag-courses-item_link" target="_blank">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title" >
          {planet.name}
        </div>
      </a>
      </Link>
    </div>
  ))}
</div>


    <div className='pagination'>
      <button className="custom-btn btn-12" onClick={() => { fetchPrevPage() }} disabled={currentPage === 1}><span> Click ⏮️ </span><span>Previous Page</span></button>
      <button className="custom-btn btn-12" onClick={() => { fetchNextPage() }}><span> Click ⏮️ </span><span>Next Page</span></button>
      
    </div>

    {/* Line break */}
    <center><div className="page-counter">
      <p>Page: {currentPage}</p>
    </div></center>
  </div>
);

const PlanetDetailsPage = ({ planets }) => {
  const location = useLocation();
  const planetIndex = parseInt(location.pathname.split('/')[2]);
  const planet = planets[planetIndex];

  return (
    <div>
      <div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
<div class="snowflake"></div>
      <div className="planet-details-card">
        <h2>{planet.name}</h2>
        <p><strong>Climate:</strong> {planet.climate}</p>
        <p><strong>Population:</strong> {planet.population !== 'unknown' ? planet.population : 'Unknown'}</p>
        <p><strong>Terrain:</strong> {planet.terrain}</p>
        {planet.population !== 'unknown' && <ResidentsButton residentsUrls={planet.residents} />}
      </div>
      <Link to="/" className="home-btn">
      <button className="custom-btn btn-12" ><span> Click! </span><span>Home Page</span></button>
      </Link>
    </div>
  );
};

const ResidentsButton = ({ residentsUrls }) => {
  const [showResidents, setShowResidents] = useState(false);
  const [residents, setResidents] = useState([]);

  const toggleResidents = () => {
    const requests = residentsUrls.map(url => from(fetch(url)).pipe(switchMap(response => response.json())));
    zip(...requests)
      .pipe(
        map(data => {
          setResidents(data);
          setShowResidents(!showResidents);
        }),
        catchError(error => console.error('Error fetching residents:', error))
      )
      .subscribe();
  };

  return (
    <div>
      <button onClick={toggleResidents} className="residents-button">
        {showResidents ? 'Hide Residents' : 'Show Residents'}
      </button>
      {showResidents && <Residents residents={residents} />}
    </div>
  );
};

const Residents = ({ residents }) => (
  <div className="residents-card">
    <h3>Residents:</h3>
    <ul>
      {residents.map((resident, index) => (
        <li key={index}>
          <p><strong>Name:</strong> {resident.name}</p>
          <p><strong>Height:</strong> {resident.height}</p>
          <p><strong>Mass:</strong> {resident.mass}</p>
          <p><strong>Gender:</strong> {resident.gender}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default App;
