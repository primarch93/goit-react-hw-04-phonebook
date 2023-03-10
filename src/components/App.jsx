import { useState, useEffect } from 'react';
import { Layout } from 'components/Layout/Layout';
import { Section } from 'components/Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';

export const App = () => {
const [contacts, setContacts] = useState([
{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]);

const [filter, setFilter] = useState('');

const addContact = contact => {
if (
contacts.some(item => {
return item.name === contact.name;
})
) {
alert('Contact with this name already exist!');
return;
}
if (
contacts.some(item => {
return item.number === contact.number;
})
) {
alert('This number is already in base!');
return;
}
setContacts(prevState => ([...prevState, contact]));
};

const deleteContact = contactId => {
setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
};

const handleSetFilterValue = ({ target: { name, value } }) => {
setFilter(value);
};

const handleFilterContact = () => {
return contacts
.filter(contact => {
return (
contact.name
.toLowerCase()
.includes(filter.toLowerCase().trim()) ||
contact.number.includes(filter.trim())
);
})
.sort((firstContact, secondContact) =>
firstContact.name.localeCompare(secondContact.name)
);
};

useEffect(() => {
const savedContacts = localStorage.getItem('contacts');
if (savedContacts) {
setContacts(JSON.parse(savedContacts));
}
}, []);

useEffect(() => {
localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

return (
<Layout>
<Section title="Phonebook">
<ContactForm onSubmit={addContact} />
</Section>
{contacts.length > 0 && (
<Section title="Contacts">
<ContactFilter value={filter} onFilter={handleSetFilterValue} />
<ContactList contacts={handleFilterContact()} onDelete={deleteContact} />
</Section>
)}
</Layout>
);
};
// 