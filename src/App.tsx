import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route, Routes} from 'react-router-dom';
import Search from './components/Search';
import ShowDetails from './containers/ShowDetails';

const App = () => {

  return (
    <div>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="/shows/:id" element={<ShowDetails />} />
          <Route path="*" element={<h2>Not found</h2>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
