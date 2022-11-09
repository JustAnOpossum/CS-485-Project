import "./Components/layout.module.css";
import { Routes, Route } from 'react-router-dom';
import { ReportLostItems, SearchFoundItems, Home } from './pages';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/report-lost-items' element={<ReportLostItems />} />
        <Route path='/search-found-items' element={<SearchFoundItems />} />
      </Routes>
    </div>

  );
}

export default App;