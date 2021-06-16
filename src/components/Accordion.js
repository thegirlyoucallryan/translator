import React, {useState} from 'react';
import './Accordion.css'

const Accordion = ({items}) => {
//state = index of array (items)
    const [activeIndex, setActiveIndex] = useState(null)


//handler when clicked sets state to user clicked index of items array
    const onTitleClick = (index) => {
        setActiveIndex(index)
    }
    //map over array return item and its index 
   const renderedItems = items.map((item, index) => {
   
    //ternary sets class to display or not
        const active = index === activeIndex ? 'active': '';

       return <React.Fragment key={item.title}>
           <div className={`title ${active}`}
           onClick= {() => onTitleClick(index)} //we keep the arrow function here, so that it doesnt instatnly run the funtion when the page loads.  we want it called onclick. this click function calls the handler that sets the index
           >
               <i className="dropdown icon"></i>
               {item.title}
           </div>
           <div className={`content ${active}`}>
               <p> {item.content}</p>
           </div>
       </React.Fragment>
   })
//returns from map function compiled jsx inside of "ui styled accordion"
return <div className='ui styled accordion'>
    {renderedItems}
        <h1>{activeIndex}</h1>
</div>
};

export default Accordion;