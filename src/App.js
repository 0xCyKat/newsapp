import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

function App() { 

  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <>
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<News apikey = {apiKey} key="general" pageSize = {6} country = 'in' category = 'general'/>} />
          <Route exact path="/business" element={<News apikey = {apiKey} key="business" pageSize = {6} country = 'in' category = 'business'/>} />
          <Route exact path="/entertainment" element={<News apikey = {apiKey} key="entertainment" pageSize = {6} country = 'in' category = 'entertainment'/>}/>
          <Route exact path="/health" element={<News apikey = {apiKey} key="health" pageSize = {6} country = 'in' category = 'health'/>} />
          <Route exact path="/science" element={<News apikey = {apiKey} key="science" pageSize = {6} country = 'in' category = 'science'/>}/>
          <Route exact path="/sports" element={<News apikey = {apiKey} key="sports" pageSize = {6} country = 'in' category = 'sports'/>}/>
          <Route exact path="/technology" element={<News apikey = {apiKey} key="technology" pageSize = {6} country = 'in' category = 'technology'/>}/>
        </Routes>
        </Router>
      </>
    );
  }

export default App; 
