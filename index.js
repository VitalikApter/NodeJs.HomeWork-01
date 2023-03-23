const contacts = require('./contacts.js');


const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
      case "get":
        const oneContact = await contacts.getContactById(id);
        console.log(oneContact);
        break;
  }
};

// invokeAction({ action: 'list' });
invokeAction({action: "get", id:"2"})

