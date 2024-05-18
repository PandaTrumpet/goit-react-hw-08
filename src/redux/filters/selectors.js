export const selectSearchContact = (state) => state.filter.name;

// import { createSelector } from "@reduxjs/toolkit";
// export const selectFilteredContacts = createSelector(
//   [(state) => state.contact.items, (state) => state.filter.name],
//   (contacts, contactFilter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(contactFilter.toLowerCase())
//     );
//   }
// );
