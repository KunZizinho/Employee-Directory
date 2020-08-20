import React from 'react';

function DataBody({users})   
    //map over users, for ea iteration well creat td tag
    {
        // let result=[];
  

    return (
                <tbody>
                {
                 users[0].name !== undefined ? (
                      users.map( ({picture, name, phone, email, location, login }) => {
                       
                    
                          return(
                          <tr key={login.uuid} >
                              <td>
                                  <img src={picture.medium}/>
                              </td>
                            <td> 
                                {name.first}
                            </td>
                            <td>
                                {phone}
                            </td>
                            <td>
                                {email}
                            </td>
                            <td>
                                {location.city}
                            </td>
                          </tr>
                          )
                        })
                        ) 
                        : (<></>)
                }

                    
                </tbody>
                
            );

};

export default DataBody;