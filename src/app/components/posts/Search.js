import React from 'react';

const Search = (props) => {
    const {onSearch, searchValue} = props;
    return (
        <div className="container">
            <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">search</i>
                    <input id="icon_prefix" type="text" className="validate" value={searchValue} onChange={onSearch} />
                    <label htmlFor="icon_prefix"></label>
                </div>
            </div>
        </div>
    );
}


export default Search;