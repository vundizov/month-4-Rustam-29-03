

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contacts from './pages/contacts';
import Portfolio from './pages/portfolio';
import Error from './pages/error';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </div>
    );
  }

export default App;
