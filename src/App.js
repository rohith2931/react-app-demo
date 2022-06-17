import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import Home from './components/home'
import Users from './components/users'
import Contactus from './components/contactus'
import Technologies from './components/technologies'
import HTML from './components/html'
import Javascript from './components/javascript';

function App() {
  return (
    <div >
      <nav className ="navbar navbar-expand-sm bg-dark ">
  <div className ="container-fluid">
    <a className ="navbar-brand" href="#">Myapp</a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <Link className ="nav-link active" to="">Home</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link active" to="users">Users</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link active" to="contactus">Contactus</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link active" to="technologies">Technologies</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/technologies" element={<Technologies/>}>
          <Route path="html" element={<HTML/>}></Route>
          <Route path="javascript" element={<Javascript/>} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
