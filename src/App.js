import logo from './logo.svg';
import './App.css';
import Hed from './Hed';
import Home from './Home';
import Conter from './Conter';
import About from './About';
import Skills from './Skills';
import FFO from './FFO';
import Work from './Work';
import Skill from './Skill';
import Exp from './Exp';
import MyProject from './MyProject';
function App() {
  return (
    <div className="App">
      <header >
      </header>
      
      <Hed />
      <section id='#Home'><Home /></section>
      <section id='skil' ><Skill /></section>
      <section id='about'> <About /></section>
      <section id='skill'><Exp/></section>
      <section id='work'><MyProject /></section>
      
      
      
     
      
      

      
      
     
      
    </div>
  );
}

export default App;
