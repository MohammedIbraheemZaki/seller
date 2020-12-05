// import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import About from './views/About'
import ContactUs from './views/ContactUs'
function App() {
  return (
    <div >
      <Router>
        <Header/>
        <div className='p-3' >
          <Switch>
            <Route exact path='/' >
              <Home/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/contact-us'>
              <ContactUs/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
