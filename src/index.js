import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bars';

const API_KEY = 'AIzaSyD_LJHhbovOCGRUuc1TJ-a4GV_9eknScFc';

const App = () => {
    return(
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('.container'));