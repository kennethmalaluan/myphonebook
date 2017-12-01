import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { blue50 } from 'material-ui/styles/colors';
import uuid from 'uuid';

class AddContact extends Component {

  constructor(props){
    super(props);
    this.state = {
      newContact:{}
    }

    this.handleName = this.handleName.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
  }

   handleName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleNumber(e) {
        this.setState({
            number: e.target.value
        });
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

  handleSubmit(e){
    if(this.state.name === ''){
      alert('Title is required');
    } else {
      this.setState({
        newContact:{
          id: uuid.v4(),
          name: this.state.name,
          number: this.state.number,
          email: this.state.email,
          address: this.state.address
      }}, function(){
        //console.log(this.state);
        this.props.addContact(this.state.newContact);
      });
    }
    e.preventDefault();
  }

  render() {
    const style = {
      marginTop: 20,
      padding: 20,
      textAlign: 'center',
      height: '550px',
      backgroundColor: blue50
    };
    return (
      <div>
      <Paper style={style} zDepth={1}>
        <h3>Add New Contact</h3>
          <form> 
              <TextField value={ this.state.name } hintText="Name" onChange={ this.handleName }/> <br /><br />
              <TextField value={ this.state.number } hintText="Contact Number" onChange={ this.handleNumber }/> <br /><br />
              <TextField value={ this.state.email } hintText="E-Mail Address" onChange={ this.handleEmail }/> <br /><br />
              <TextField value={ this.state.address } hintText="Address" onChange={ this.handleAddress }/> <br /> <br /><br />
              <RaisedButton label="Save" primary={ true } onClick={ this.handleSubmit.bind(this) }/>
          </form>
        </Paper>
      </div>
    );
  }
}

export default AddContact;
