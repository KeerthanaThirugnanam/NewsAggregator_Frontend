import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/nav';
import Politics from './components/Politics';
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import Technology from './components/Technology';
import CreateNews from './components/CreateNews';
import Home from './components/Home.js';
import Register from './components/Register.js';
import EditNews from './components/EditNews.js';
import Latest from './components/latest.js';


function App() {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Latest />} />
          <Route path="/entertainment" element={<Entertainment/>} />
          <Route path="/politics" element={<Politics/>} />
          <Route path="/sports" element={<Sports/>} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/createnews" element={<CreateNews/>} />
          <Route path="/profile" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/editnews/:id" element={<EditNews/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App;