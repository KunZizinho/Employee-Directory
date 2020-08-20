import React from 'react';
import DataBody from './DataBody';

function DataTable(props){
    const {users, headings} = props;
    console.log('here is heading: ', headings)
    console.log('here is users: ', users)


    return(
        <div className='jumbotron-flex'>
            <table className='table table-responsive'>
                <thead>
                    <tr>
                        {headings.map(({name, width}) => {

                            return(
                                <th key={name}
                                style={{width, border:'solid 1px'}}
                                >
                                    {name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                 <DataBody
                    users={users}
                />
            </table>
        </div>
    );
};

export default DataTable;