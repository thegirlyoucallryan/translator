 import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search'
import Dropdown from './components/Dropdown';
import Translate from './components/Translate'
import Route from './components/Route';
import Header from './components/Header';
import './Search.css';




const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JS Library'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite Library amongst JS engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by Creating Components and wiring them together with props and state'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: '#FF3B2D'
    },
    {
        label: 'The Color Purple',
        value: '#5D46FA',
    
    },
    {
        label: 'A Shade of Blue',
        value: '#5D81A1'
    }
];


const App = () => {
 
    const[selected, setSelected] = useState(options[0]);
     
     return (
         <div>
             <Header className='item' />
           <Route path="/">
               <Accordion items={items}/>
           </Route>
           <Route path='/list'>
               <Search />
           </Route>
           <Route path="/dropdown">
               <Dropdown 
               label="Select a color"
               options={options}
               selected={selected}
               onSelectedChange={setSelected}
         
               />
           </Route>
           <Route path="/translate">
               <Translate />
           </Route>
         </div>
         
         
     
      
  
       
        
         );
 }
  
 export default App;