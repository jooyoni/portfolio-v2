import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import History from './Components/History/History';
import Comment from './Components/Comment/Comment';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />}>
              <Route path=":title" />
            </Route>
            <Route path="history" element={<History />} />
            <Route path="comment" element={<Comment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
