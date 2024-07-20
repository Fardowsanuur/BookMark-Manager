// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchTable from './Components/SearchTable';
import CreateBookmark from './Components/CreateBookmark';
import EditBookmark from './Components/EditBookmark';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SearchTable />} />
          <Route path="/create-bookmark" element={<CreateBookmark />} />
          <Route path="/edit/:id" element={<EditBookmark />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
