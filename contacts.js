const fs = require('fs/promises');

const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === id);
    return result;
}

module.exports = {
    listContacts,
    getContactById,
};
