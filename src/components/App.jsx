import { Component } from 'react';
import { Layout } from 'components/Layout/Layout';
import { Section } from 'components/Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

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

  addContact = contact => {
    if (
      this.state.contacts.some(item => {
        return item.name === contact.name;
      })
    ) {
      alert('Contact with this name already exist!');
      return;
    }
    if (
      this.state.contacts.some(item => {
        return item.number === contact.number;
      })
    ) {
      alert('This number is already in base!');
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));

  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleSetFilterValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleFilterContact = () => {
    return this.state.contacts
      .filter(contact => {
        return (
          contact.name
            .toLowerCase()
            .includes(this.state.filter.toLowerCase().trim()) ||
          contact.number.includes(this.state.filter.trim())
        );
      })
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
  };
componentDidMount() {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    this.setState({ contacts: JSON.parse(savedContacts) });
  }
}

  componentDidUpdate(prevProps, prevState) {
  if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
}


  render() {
    return (
      <Layout>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        {this.state.contacts.length > 0 && (
          <Section title="Contacts">
            <ContactFilter
              value={this.state.filter}
              onFilter={this.handleSetFilterValue}
            />
            <ContactList
              contacts={this.handleFilterContact()}
              onDelete={this.deleteContact}
            />
          </Section>
        )}
      </Layout>
    );
  }
}
