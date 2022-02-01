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
                      <img src="http://pngimg.com/uploads/speedometer/speedometer_PNG50.png" alt="nike-air-shoe" />
                    </div>

                    <div class="contentBx">

                      <h2>{selectedCar.Name}</h2>

                      <div class="size">
                        <h3>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                      </div>

                      <div class="color">

                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <a href="#">Buy Now</a>
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
