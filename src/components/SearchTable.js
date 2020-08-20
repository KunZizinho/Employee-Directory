import React from 'react';
function SearchTable({ handleSearchChange}) {
        return(
            <div>
                <form className='form-block' style={{marginTop:30, width:1500}}>
                   <input 
                   className="search" 
                    placeholder='look through employees...' 
                    style={{width: 1000,height: 40,marginRight: 10, border: 'solid 2px'}}
                    type='search'
                    onChange={e => handleSearchChange(e)}
                    />
                </form>
            </div>
        );
};

export default SearchTable;