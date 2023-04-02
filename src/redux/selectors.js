export const getContacts = state => state.contacts;
export const getFilter = state => state.filters;

export const getVisibleContacts = state => {
    const contacts = getContacts(state);
    const filters = getFilter(state);
    const normalizedFilter = filters.toLowerCase();
  return contacts.filter(contact =>
    
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}