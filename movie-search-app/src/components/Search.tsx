import { useState } from 'react';
import './Search.css';

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    }
    return(
        <>
        <h4>{searchText}</h4>
        <div className='searchWrapper'>
            <span className="material-icons searchIcon">search</span>
            <input type='text' placeholder='Search' className='searchField' onChange={handleSearch}/>
        </div>
        </>
    )
}

export default Search