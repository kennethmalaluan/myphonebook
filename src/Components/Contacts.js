import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {blue100, blue50} from 'material-ui/styles/colors';
import ContactItem from './ContactItem';

class Contacts extends Component {

deleteContact(id){
	this.props.onDelete(id);
}

  render() {
    const style = {backgroundColor : blue100, color : blue50};
  	let contactItems;
  	if(this.props.contacts){
  		contactItems = this.props.contacts.map(contact => {
  			//console.log(contact);
  			return (
  				<ContactItem onDelete={this.deleteContact.bind(this)} key={contact.id} contact={contact} />
  				);
  		});
  	}
    return (
      <div className="Contacts">
      <MuiThemeProvider>
      <Paper zDepth={3}>
	    <Table 
	      height={'400px'}
          fixedHeader={true}
          fixedFooter={true}
          >

	    	<TableHeader displaySelectAll={ false } style={style}>
            	<TableRow>
            		<TableHeaderColumn width={'5px'}></TableHeaderColumn>
                    <TableHeaderColumn>NAME</TableHeaderColumn>
                    <TableHeaderColumn>CONTACT NUMBER</TableHeaderColumn>
                    <TableHeaderColumn>E-MAIL ADDRESS</TableHeaderColumn>
                    <TableHeaderColumn>HOME ADDRESS</TableHeaderColumn>
                    <TableHeaderColumn className="action">ACTION</TableHeaderColumn>
                </TableRow>
            </TableHeader>
    		<TableBody>
        		{contactItems}
        	</TableBody>
        </Table>
        </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Contacts;
