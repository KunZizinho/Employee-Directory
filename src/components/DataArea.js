import React, { Component } from 'react';
import Nav from './Nav';
import DataTable from './DataTable';
import DataBody from './DataBody';
import API from '../utils/API';

class DataArea extends Component {
    state = {
        users: [{}],
        filterUsers: [{}]
    };

    headings = [
        {name:'image', width:'10%'},
        {name:'name', width:'10%'},
        {name:'phone', width:'10%'},
        {name:'email', width:'10%'},
        {name:'location', width:'10%'}

    ];



    handleSearchChange = event => {
        const filter = event.target.value;   
        const filteredArray = this.state.users.filter( item =>{
         //   console.log(item)
          //  console.log('item', Object.values(item))
        let values = Object.values(item).join('').toLowerCase();
        return values.indexOf(filter.toLowerCase()) !==-1;
     
        })
        console.log(filteredArray)
        this.setState({ filterUsers: filteredArray })
    };



    componentDidMount(){
        API.getUsers().then(res => {
            // console.log('res: ', res)
            this.setState({
                users: res.data.results,
                filterUsers: res.data.results
            })
        })
    };

    render() {

        return( 
            <table className='table table-responsive'>
                <Nav handleSearchChange={this.handleSearchChange}/>
                <DataTable
                    headings={this.headings}
                    users={this.state.filterUsers} 
               />

            </table>

        );
    }
};

export default DataArea;



