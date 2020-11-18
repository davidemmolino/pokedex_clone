import React, { useEffect } from 'react';
import SearchResult from './SearchResult';
// import SearchResult from './SearchResult';

export default function Pokemon(props) {
    let results = [props];
    let cards = [];
    console.log('results: ',results)
    useEffect(() => {
        cards.push(results.map(el => {
            return <SearchResult name={el.name}/>
        }))
    }, [props.name])

    return (
        <div>
            {cards}
        </div>
    )
}
