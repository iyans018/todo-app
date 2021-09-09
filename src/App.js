import './App.css';

import { BrowserRouter } from 'react-router-dom';
// import Navbar from './Components/Navbar';

// Libs
import { Routes } from "./libs/Routes";

// Bootstrap Component
import { Container } from "react-bootstrap";

// Component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

// FontAwesomeIcon
import './components/FontAwesomeIcon'

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App(props) {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Container>
            <Routes />
          </Container>
          <Footer></Footer>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
