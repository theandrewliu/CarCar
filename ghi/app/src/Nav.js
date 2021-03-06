import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/models">Vehicle Models</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/autos">Automobiles</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/technicians">Technicians</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/service">Service Appointments</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/customer/new">Customer Sign Up</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/salesperson/new">Join Our Team</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/salesrecord/new">BUY NOW!</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/salesperson/">Sales Ladder</NavLink>
            </li>
            <li className="nav_item">
              <NavLink className="nav-link" aria-current="page" to="/salesrecord/">Sales History</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
