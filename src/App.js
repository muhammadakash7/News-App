import './App.css';
import React from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App = ()=> {
  const apiKey= process.env.REACT_APP_API
    return (
      <>
      <div>
        <Router>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<News apiKey={apiKey} key="general"country="in" category="general"/>} />
        <Route exact path="/business" element={<News  apiKey={apiKey} key="business"country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News  apiKey={apiKey} key="entertainment"country="in" category="entertainment"/>} />
        <Route exact path="/general" element={<News  apiKey={apiKey} key="general"country="in" category="general"/>} />
        <Route exact path="/health" element={<News  apiKey={apiKey} key="health"country="in" category="health"/>} />
        <Route exact path="/science" element={<News  apiKey={apiKey} key="science"country="in" category="science"/>} />
        <Route exact path="/sports" element={<News  apiKey={apiKey} key="sports"country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News  apiKey={apiKey} key="technology"country="in" category="technology"/>} />
        </Routes>
        </Router>
      </div>
      </>
    )
}
export default App;

