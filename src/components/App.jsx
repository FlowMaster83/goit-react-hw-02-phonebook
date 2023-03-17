import { Component } from 'react';
import 'modern-normalize';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (values, { resetForm }) => {
    let newContact = values;

    const check = this.state.contacts.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (check.length) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      newContact.id = nanoid();

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));

      resetForm({
        name: '',
        number: '',
      });
    }
  };

  handleFilter = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleDelete = evtId => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== evtId),
    });
  };

  makeFiltredContacts = () => {
    if (!this.state.filter) {
      return;
    }

    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <h2>Contacts</h2>
      </div>
    );
  }
}