import FunComp from './components/FunComp';
import Cmp2 from './components/Cmp2';
import Template2 from './components/Template2';
import CardComponent from './components/CardComponent';
import MobileManufacture from './components/MobileManufacture';
import MobileOs from './components/MobileOs';

import './App.css';
// Q1. a. Make a class component as a child of App.js and print Hello world!. 
// Try using named and default exports.
// Q3. Make the following component structure using class components.
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <FunComp />
         <h1>Q1-c. Make a functional component as child of App.js and pass your name as prop, then "Hello name" must be printed.</h1>
         <Cmp2 name="Jai"/>
         <h1>Q2. Print the following data with two components MobileOS and MobileManufacturers using class components.</h1>
         <MobileOs />
         <MobileManufacture />
         <h1>Q3. Make the component structure as given in the attachment.</h1>
         <Template2/>
         <h1>Q3. Make the following design as shown.</h1>
         <div className='row final'>
         <CardComponent image="t1.jpg" title="Console"/>
         <CardComponent image="t2.jpg" title="Playground"/>
         <CardComponent image="t3.jpg" title="Adventure"/>
         </div>
      </header>
    </div>
  );
}

export default App;
