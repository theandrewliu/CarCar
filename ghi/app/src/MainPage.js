import { Link } from 'react-router-dom'





function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">CarCar</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/hats/new" className="btn btn-primary btn-lg px-4 gap-3">Purchase your NEW Car!</Link>
            </div>
      </div>
    </div>
  );
}

export default MainPage;
