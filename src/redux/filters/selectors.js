import { createSelector } from "@reduxjs/toolkit";

export const selectSearchContact = (state) => state.filter.name;

// export const selectFilteredContacts = createSelector(
//   [(state) => state.contacts.items, (state) => state.filter.name],
//   (contacts, contactFilter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(contactFilter.toLowerCase())
//     );
//   }
// );

export const selectFilteredContacts = createSelector(
  [(state) => state.contacts.items, (state) => state.filter.name],
  (contacts, contactFilter) => {
    return contacts.filter((contact) => {
      if (typeof contactFilter === "string" && contactFilter.trim() !== "") {
        const filter = contactFilter.toLowerCase();
        return (
          contact.name.toLowerCase().includes(filter) ||
          contact.number.toLowerCase().includes(filter)
        );
      } else {
        return true;
      }
    });
  }
);
