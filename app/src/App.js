import "./Components/layout.module.css";
import { Routes, Route } from 'react-router-dom';
import { ReportLostItems, SearchFoundItems, Home, ReportFoundItems } from './pages';
import { Navbar, Footer } from "./Components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/report-lost-items' element={<ReportLostItems />} />
        <Route path='/search-found-items' element={<SearchFoundItems />} />
        <Route path='/admin-reporting' element={<ReportFoundItems />} />
      </Routes>
    
    <Footer/></>


  );
}

export default App;