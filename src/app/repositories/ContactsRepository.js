const { v4 } = require("uuid");

let contacts = [
  {
    id:v4(),
    name: "João",
    email: "joao@gmail.com",
    phone: "(11) 95280-5373",
    category_id: v4()
  },
  {
    id:v4(),
    name: "Sarah",
    email: "sarah@gmail.com",
    phone: "(11) s2s2s2s2s2",
    category_id: v4()
  },
  {
    id:v4(),
    name: "Usuário teste",
    email: "teste@gmail.com",
    phone: "(11) toptop",
    category_id: v4()
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  };

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  };

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email))
    })
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  };

  create({
    name, email, phone, category_id
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(), name, email, phone, category_id
      }
      contacts.push(newContact)
      resolve(newContact)
    })
  }

  update(id, {
    name, email, phone, category_id
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id, name, email, phone, category_id
      }
      contacts = contacts.map((contact) => (
        contact.id === id ? updatedContact : contact
      ))

      resolve(updatedContact)
    })
  }
};

module.exports = new ContactsRepository();