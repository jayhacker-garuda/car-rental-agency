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

const CarsRow = ({ Cars }) => (
  <tr>
    <td>{Cars.Name.toUpperCase()}</td>
    <td>{Cars.Year}</td>
    <td>{Cars.Origin}</td>
  </tr>
);

CarsRow.propTypes = {
  Cars: propTypes.shape({
    Name: propTypes.string
  }),
}

function App() {

  const [search, setSearch] = useState("");

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
            <input />
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
              {Cars.slice(0, 10).map((Cars) => (
                <CarsRow key={Cars.ID} Cars={Cars} />
              ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
