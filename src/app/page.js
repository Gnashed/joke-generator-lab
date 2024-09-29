'use client';

// import Signin from '../components/SignIn';
// import ViewDirector from '../utils/context/ViewDirector';

import getAJoke from '../api/getAJoke';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome</h1>
      <button className="btn btn-success" type="button" onClick={getAJoke}>
        Get a joke
      </button>
      {/* <Signin /> */}
    </div>
  );
}

export default Home;
