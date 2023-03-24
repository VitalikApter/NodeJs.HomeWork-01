const contacts = require('./contacts.js');

console.log(process.argv);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case 'get':
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;
    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;
    case 'remove':
      const removeContact = await contacts.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// invokeAction({ action: 'list' });
// invokeAction({action: "get", id:"2"})
// invokeAction({action: "add", name:"Vitaliy", email:"aptvetal20122@gmail.com", phone:"33366772"})
// invokeAction({ action: 'remove', id: '3' });
