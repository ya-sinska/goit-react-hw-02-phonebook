import { Component } from "react";
import { nanoid } from 'nanoid'
import { Forma } from "./Form/Form";
import { Contacts } from './Contacts/Contacts'
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
  contacts: [],
  } 
  getInputValue = (value) => {
    this.setState({ name: value.name });
    this.setState({ number: value.number });
    this.setState( prevState => ({
      contacts: [...prevState.contacts,
            {id: nanoid(),
            name: value.name ,
            number: value.number,
        }]
    }));
  }

  render() { 
    const { contacts} = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <Forma onSubmit={this.getInputValue} />
        <h2>Contacts</h2>
        <Filter/>
        <Contacts contacts={contacts}/>
      </>
      
    ) 
  }
  
};
