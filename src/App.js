import React, { Component } from 'react';
import uuid from 'uuid';
import Contacts from './Components/Contacts';
import AddContact from './Components/AddContact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: (typeof localStorage["contacts"] !== "undefined") ? JSON.parse(localStorage.getItem('contacts')) : [
        {
          id:uuid.v4(),
          name: 'Kenneth',
          number: '09055197242',
          email: 'kenneth14.malaluan@gmail.com',
          address: 'Alabang, Muntinlupa City'
        },
         {
          id:uuid.v4(),
          name: 'John',
          number: '09079442609',
          email: 'johnkcm@yahoo.com',
          address: 'Bicutan, Taguig City'
        },
         {
          id:uuid.v4(),
          name: 'Malaluan',
          number: '09024382425',
          email: 'malaluanken0914@gmail.com',
          address: 'San Guillermo St., Bayanan, Muntinlupa City'
        }]
    }
    this.handleAddContact =  this.handleAddContact.bind(this);
    this.handleDeleteContact =  this.handleDeleteContact.bind(this);
  }

  

  handleAddContact(contact){
    let contacts = this.state.contacts;
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.setState({contacts:contacts});
    alert("Contact is added to your Phone Book");
  }

  handleDeleteContact(id){
    let contacts = this.state.contacts;
    let index = contacts.findIndex(x => x.id === id);
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    this.setState({contacts:contacts});

  }

  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <Grid>
        <Row>
          <AppBar title="My Phone Book" />
            <Col xs={4} md={8}>
              <Contacts contacts={this.state.contacts} onDelete={this.handleDeleteContact.bind(this)} />
            </Col>
            <Col xs={4} md={4}>
              <AddContact addContact={this.handleAddContact.bind(this)} />
            </Col>
        </Row>
      </Grid>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
