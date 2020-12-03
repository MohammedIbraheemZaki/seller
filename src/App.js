// import './App.css';
import Counter from "./components/Counter";
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div >
      <Header/>
      <p>hello from the other side</p>
      <Counter num={5} />
      <Footer/>
    </div>
  );
}

export default App;
