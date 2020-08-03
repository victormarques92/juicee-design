import Repository from './Repository';

const resource = 'design-contacts';

export default {
  get() {
    return Repository.get(resource);
  },

  store(contact) {
    return Repository.post(resource, {
      name: contact.name,
      email: contact.email,
      message: contact.message,
      origin: contact.origin,
      plan: contact.plan,
    });
  }
};