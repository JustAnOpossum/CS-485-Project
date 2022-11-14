import './styles.css';
import banner from './images/banner5.jpg';
import lostandfound from './images/lost-and-found-drawer.jpg'
import { Footer } from '../Components';

const Home = () => {
  return (
  <>  
    <header>
      <img src={banner} className='banner'/>
      <div className='divs'><h1 className='homeHeading'>Welcome to NMSU Lost and Found</h1></div>
    </header>
    <body>
    <div className='divs2'><h2 className='homeHeading2'>What is this site about?</h2></div>
      <div className='pDiv'><p>NMSU's Lost and Found website is a place for the NMSU community--including students, staff, and anyone with an aggie ID--to find and reclaim the things they have lost. If you've lost something and think we may be holding it at one of our lost and found locations, navigate to the "Search Found Items" tab to search through the available items. If you would like to file a report for an item that you lost so that we may keep an eye out for it, navigate to the "Report Lost Items" page by clicking on the tab in the navigation bar and fill out the form with information regarding this item.</p>
      <div className='div3'><h3 className='h3'>Getting Started</h3></div>
      <p> If you've lost something and think we may be holding it at one of our lost and found locations, navigate to the "Search Found Items" tab to search through the available items. <br/>If you would like to file a report for an item that you lost so that we may keep an eye out for it, navigate to the "Report Lost Items" tab and fill out the form with information regarding this item.</p>
      </div>
    </body>
    <Footer/>
    </>  
  );
}

export default Home;
