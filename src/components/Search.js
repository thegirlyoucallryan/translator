
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import '../Search.css'

const Search = () => {

    const [term, setTerm] =useState('Meditation');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] =useState([]);//its an array ryan use an empty array

        useEffect(() => {
            const timerId = setTimeout (() => {
                setDebouncedTerm(term)
            }, 1000);
            return() => {
                clearTimeout(timerId);
            };
        }, [term]);

        useEffect(() => {
            const search =async () => {
                const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: "search",
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm,
                    },
                });
    
          
                setResults(data.query.search);
            };
            if(debouncedTerm)
            search();
        }, [debouncedTerm]);


  

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Read</a>
                </div>
                <div className="content">
                    <div className="header">
                        
                        {result.title}</div> 
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                       
                </div>
            </div>
        )
    })////leaving me open to xss attacks//how you link to wikipedia
    return (
        <div>
            <div className="ui form">
                <div className= 'field'>
                    <label> Enter Search Term</label>
                    <input
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                     type="text" 
                     className="input" />
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    )

}

export default Search;

