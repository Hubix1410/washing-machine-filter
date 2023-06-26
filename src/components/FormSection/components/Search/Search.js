import React from 'react';
import "./search.scss";

function Search({searchConfig, setSearchConfig}){

    function handleSearch(event){
        let _setSearchConfig = {...searchConfig};
        _setSearchConfig.searchByName = event.target.value;
        setSearchConfig(_setSearchConfig);
    }

    return(
        <section className="search">
            <input
                type="text"
                name="search"
                placeholder="Search..."
                className="search__input"
                onChange={(event)=>handleSearch(event)}
                value={searchConfig.searchByName}
            />
        </section>
    )
}

export default Search;