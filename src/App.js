import { useState } from 'react';
import propTypes from 'prop-types';

// css
import './App.css';
import './CarTable.css';

// json file
import Cars from './cars.json'


const Header = () => (
  <header>
    <div className="nav-wrapper">
      <div className="logo-container">
        <h1 className='logo'>LOGO</h1>
      </div>
      <nav>
        <input className="hidden" type="checkbox" id="menuToggle" />
        <label className="menu-btn" htmlFor="menuToggle">
          <div className="menu"></div>
          <div className="menu"></div>
          <div className="menu"></div>
        </label>
        <div className="nav-container">
          <ul className="nav-tabs">
            <li className="nav-tab">Home</li>
            <li className="nav-tab">Products</li>
            <li className="nav-tab">Services</li>
            <li className="nav-tab">FAQ</li>
            <li className="nav-tab">Contact</li>
            <li className="nav-tab">Careers</li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

const CarsRow = ({ Cars, onSelect }) => (
  <tr>
    <td>{Cars.Name.toUpperCase()}</td>
    <td>{Cars.Year}</td>
    <td>{Cars.Origin}</td>
    <td>
      <button
        onClick={() => onSelect(Cars)}
      >
        View
      </button>
    </td>
  </tr>
);

CarsRow.propTypes = {
  Cars: propTypes.shape({
    Name: propTypes.string,
    Year: propTypes.string,
    Origin: propTypes.string
  }),
  onSelect: propTypes.func,
}

function App() {

  const [search, setSearch] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div>
      {Header && (
        <Header />
      )}
      <div className="center">
        <h1>Search For Your Dream Car</h1>
      </div>
      <div>
        <div className='search-box'>
          <div className='center-serch-box'>
            <input
              placeholder='Search Here'
              value={search}
              onChange={e => setSearch(e.target.value) }
            />
          </div>
        </div>
        <div className='display-section'>
          <table className="CarTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Year</th>
                <th>Origin</th>
              </tr>
            </thead>
            <tbody>
              {Cars
                .filter((Cars) => Cars.Name.toLowerCase().includes(search.toLowerCase()) )
                .slice(0, 10)
                .map((Cars) => (
                  <CarsRow key={Cars.ID} Cars={Cars} onSelect={(Cars) => setSelectedCar(Cars)} />
              ))}
              </tbody>
          </table>
          <div>
            {selectedCar && (
              <div>
                <div class="container">
                  <div class="card">
                    <div class="imgBx">
                      <img src="http://pngimg.com/uploads/speedometer/speedometer_PNG48.png" alt="nike-air-shoe" />
                    </div>

                    <div class="contentBx">

                      <h2>{selectedCar.Name}</h2>

                      <span
                        style={{ 
                          color: "white",
                          backgroundColor: "blue",
                          padding: "10px",
                          border: "none",
                          borderRadius: "10px",
                          // boxShadow: "-moz-initial",
                          cursor: "pointer",
                         }}
                      >Buy Now</span>
                      <div className="size">
                        <h3>Horse-Power :</h3>
                        <span>{ selectedCar.Horsepower }</span>
                      </div>

                      <div className="color">

                        <h3>Acceleration :</h3>
                        <span>{selectedCar.Acceleration }</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
