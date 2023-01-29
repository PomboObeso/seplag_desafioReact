import './App.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import './components/Header';
import Header from './components/Header';
import SubFooter from './components/SubFooter';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Aside/>
      </main>
      <SubFooter/>
      <Footer/>
    </>
  );
}

export default App;
