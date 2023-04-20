import ContactsList from './Contacts/Contacts';
import { FindNumberByName } from './Find/FindNumberByName';
import { Form } from './Form/Form';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <FindNumberByName />
      <ContactsList />
    </div>
  );
};