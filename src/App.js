import './App.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Galeria from './components/Galeria';
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
        {/* <Galeria/> */}
      </main>
      <SubFooter/>
      <Footer/>
    </>
  );
}

export default App;
