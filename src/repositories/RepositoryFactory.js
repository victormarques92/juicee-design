import ContactsRepository from './ContactsRepository';

const repositories = {
  contacts: ContactsRepository
};

export default {
  get: name => repositories[name]
};