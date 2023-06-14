

import Header from '../components/Header';
import NavFooter from '../components/NavFooter';


function CreateNewSession() {

  return (

    <div className="d-flex flex-column min-vh-100">
      <header className="">
        <Header />
      </header>

      <h1 className="homeTitle text-center mt-5"> Create New Surf Session</h1>

      <footer className="mt-auto mb-0">
        <NavFooter />
      </footer>
    </div>
  )

}

export default CreateNewSession;