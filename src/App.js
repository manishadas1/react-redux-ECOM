import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomePage, categoryPage, cartPage} from './Pages/index';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import store from './Store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<HomePage />} /> 
          <Route path="/categoryPage/:id" element = {<categoryPage />} />
          <Route path="/cart" element = {<cartPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
