import { useDispatch, useSelector } from 'react-redux';  
import {fetchQuote} from '../../redux/generateQuoteSlice.js'; 
import { useEffect } from 'react';
import twitterIcon from '../../assets/twitter.png';
import './quoteBox.css'; 

export default function QuoteBox(){ 
    const {quote, author} = useSelector((state) => state.generateQuote);
    const dispatch = useDispatch();  
    const text = document.querySelector("#text");

    const _fetchQuoteOnClick = () => {
        dispatch(fetchQuote())
    };

    useEffect(()=>{
        if(text !== null){
            text.style.opacity='0';
            text.style.animation='none';

            setTimeout(() => {
                text.style.animation='visible 1s ease-in-out forwards'
            }, 10);
        }
    },[quote]);

    useEffect(()=>{
        dispatch(fetchQuote());   
    }, [dispatch]);
         

    return(
        <div id='quote-box'>
            <h2 id='text' >"{quote}"</h2>
            <p id='author'>- {author}</p>
            <div className='buttons'>
                <button className='tweet-quote' >
                    <a id='tweet-quote' target="_top" href="https://twitter.com/intent/tweet">
                        <img className='twitterLogo' src={twitterIcon} alt="twitter logo" />
                    </a>
                </button>
                <button id='new-quote'
                    onClick={_fetchQuoteOnClick}
                >New quote</button>   
            </div>
        </div>
    )
}; 