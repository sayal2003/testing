import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Form from './components/Form';
import Table from './components/Table'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import APIData from './components/APIData';
import NewsSearch from './components/abc';
import Navbar from './components/Navbar';
import New from './components/New';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import Page from './components/Page';
import Abc from './components/abc';


function App() {
  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState("general")
  const [searchTerm, setSearchTerm] = useState("");
  const [current, setCurrent] = useState(1); 
  const [totalResults, setTotalResults] = useState(1);
  const pageSize = 12


  const fetchData = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchTerm}&pageSize=${pageSize}&page=${current}&apiKey=aabc6a31a37b45b2bea490f8209d4d3c`)
      .then(response => response.json())
      .then(response => {
        setArticles(response.articles);
        setTotalResults(response.totalResults)
      })
      .then(json => console.log(json))
  }

  useEffect(() => {
    fetchData()
    // console.log(setArticles, "data=======>");
  }, [category, current])

  return (
    <div className="App">

      {/* <BrowserRouter>
      <Home />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/form' element={<Form/>}></Route>
        <Route path='/edit/:id' element={<Form/>}></Route>
        <Route path='/table' element={<Table/>}></Route>
      </Routes>
      </BrowserRouter> */}
      <APIData/>
      {/* <NewsSearch /> */}

      {/* <Navbar setCategory={setCategory} setSearchTerm={setSearchTerm} fetchData={fetchData} />
      <New articles={articles} />
      <Page current={current} setCurrent={setCurrent}  pageSize={pageSize} total={totalResults} /> */}
      {/* <Card /> */}
      {/* <Abc /> */}
    </div>
  );
}

export default App;
