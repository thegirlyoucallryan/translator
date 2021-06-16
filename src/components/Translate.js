import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './Translate';
import Convert from './Convert';
import '../Search.css';

const options = [
    {
        label:  'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'

    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Armenian',
        value: 'hy'
    },
    {
        label: 'Corsican',
        value: 'co'
    },
    {
        label: 'Danish',
        value: 'da'
    },
    {
        label: 'Greek',
        value: 'el'
    },
    {
        label: 'Hawaiian',
        value: 'haw'
    },
    {
        label: 'Hebrew',
        value: 'he'
    },
    {
        label: 'Hungarian',
        value: 'hu'

    },
    {
        label: 'Icelandic',
        value: 'is'
    },
    {
        label: 'Irish',
        value: 'ga'
    },
    {
        label: 'Italian',
        value: 'it'
    }
]


const Translate = () => {
    const [language, setLanguage] =useState(options[3]);
    const [text, setText] = useState('');
    return (
        <div>
            <h1>Translator</h1>
            <div className='ui form'>
                <div className='field'>
                    <label style={{fontSize: '22px', color: 'white', fontFamily: 'Montserrat'}}>Enter Text</label>
                <input style={{color: '#7F0000', fontFamily: 'Montserrat', fontSize: '20px'}} type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
                </div>
            </div>
            <Dropdown selected={language} onSelectedChange={setLanguage} options={options} label="Select a Language" /><br></br>
            <hr />
            <h3 style={{color: 'white', fontSize: '22px', fontFamily: "Montserrat"}}>Translation:</h3>
      
            <Convert   language={language} text={text} />
            
        </div>
    );
};

export default Translate;