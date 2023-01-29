import './App.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SubFooter from './components/SubFooter';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Aside/>
        <Home/>
      </main>
      <SubFooter/>
      <Footer/>
    </>
  );
}

export default App;
