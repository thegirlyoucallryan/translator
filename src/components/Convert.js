import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../Search.css';
// import key from '../key'
 
const Convert = ({ language, text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);
 
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        
        return () => {
            clearTimeout(timerId)
        }
    }, [text]);
 
 
    useEffect(()=> {
       
        const doTranslation = async () => {
         const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, { //1st{}= second argument, meaning we dont want to send anything in the body of the request???
            params: {
                q: debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            }
        });
 
     setTranslated(data.data.translations[0].translatedText)
        };
        doTranslation()
    }, [language, debouncedText])
     
    return  <div><h1 className='output' >{translated}</h1>
     <hr /></div>
   
};
 
export default Convert;