import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label, options, selected, onSelectedChange})  => {
    const [open, setOpen] = useState(false)
    const ref = useRef();

    useEffect(() => {
        const onBodyClick =  (event) => {
            if (ref.current.contains(event.target)){//ref.current looks to see if the click is inside of e.listener if so return, if not close the dropdown by setting state to false or close with class removal of visible.
                return;
            }
            setOpen(false);//change state to false so box closes
        }
    
        document.body.addEventListener('click', onBodyClick,{ capture: true } );

        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true });
        };
    }, []);


   const renderedOptions = options.map((option) => {
       if(option.value === selected.value) {
           return null;
       }
        return(
            <div key={option.value} 
            className='item'
            onClick={() => {
                onSelectedChange(option);
                document.body.style.backgroundColor=`${color}`;
               
    
                }}>

                {option.label}

            </div>
        )
    })

    const color = selected.value;
    return (
        <div ref={ref} className="ui form">
            <div className='field'>
                <label className='label' style={{fontSize: '22px', color: 'white', marginBottom: '-30px', fontFamily: 'Montserrat'}}>{label}</label>
                <div onClick={ () => setOpen(!open)} className={`ui selection dropdown ${open? 'visible active' : ''}`}>
                        <i className='dropdown icon'></i>
                        <div className='text' style={{color: '#7F0000', fontFamily: 'Montserrat', fontSize: '25px'}}>{selected.label}</div>
                        <div className={`menu ${open? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                
                </div>
            </div>
            {/* <div style={{color: 'white', fontSize: '30px'}}>{selected.label}</div> */}
        </div>
    );
}//i tag is semantic ui for icon not the same in html

export default Dropdown;