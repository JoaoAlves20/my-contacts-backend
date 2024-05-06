const { v4 } = require('uuid')

const contacts = [
  {
    id:v4(),
    name: 'João',
    email: 'joao@gmail.com',
    phone: '(11) 95280-5373',
    category_id: v4()
  },
  {
    id:v4(),
    name: 'Sarah',
    email: 'sarah@gmail.com',
    phone: '(11) s2s2s2s2s2',
    category_id: v4()
  },
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    })
  }
}

module.exports = new ContactsRepository()