import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Header from './Components/Header';
import { NavLink } from 'react-router-dom';
import Home from './Components/Home';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Welcome from './Components/Welcome';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
         <Route path='/home' element={<Home />}></Route>
         <Route path='/project' element={<Project />}></Route>
         <Route path='/skills' element={<Skills />}></Route>
      </Routes>
    </>
  );
}

export default App;
