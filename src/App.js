import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookmarkTable from './Components/BookmarkTable';
import CreateBookmark from './Components/CreateBookmark';
import EditBookmark from './Components/EditBookmark';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookmarkTable />} />
        <Route path="/create" element={<CreateBookmark />} />
        <Route path="/edit/:id" element={<EditBookmark />} />
      </Routes>
    </Router>
  );
}

export default App;
