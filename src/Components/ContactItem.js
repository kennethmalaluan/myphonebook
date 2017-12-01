import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { blue300, blue50, orange200, red400} from 'material-ui/styles/colors';
import FileFolder from 'material-ui/svg-icons/file/folder';
import { RaisedButton, TableRow, TableRowColumn } from 'material-ui';

class ContactItem extends Component {

	deleteContact(id){
		this.props.onDelete(id);
	}
   
	render() {
	const style = {margin: 1};
  	//console.log(this.props);
	    return (
	      <TableRow className="Contact">
	      	<TableRowColumn width={'10px'}><Avatar icon={<FileFolder />} color={orange200} backgroundColor={blue300} size={30} style={style}/></TableRowColumn>
	        <TableRowColumn>{this.props.contact.name}</TableRowColumn>
	        <TableRowColumn>{this.props.contact.number}</TableRowColumn>
	        <TableRowColumn>{this.props.contact.email}</TableRowColumn>
	        <TableRowColumn>{this.props.contact.address}</TableRowColumn>
	        <TableRowColumn><RaisedButton label="Delete"  backgroundColor={red400} labelColor={blue50} onClick={this.deleteContact.bind(this, this.props.contact.id)} /></TableRowColumn>
	      </TableRow>
	    );
	  }
}

export default ContactItem;
