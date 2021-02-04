import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ getContacts, onDeleteContact }) => {
  return (
    <ul>
      {getContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name}</p>
          <p className={s.number}>{number}</p>
          <button onClick={() => onDeleteContact(id)} className={s.btn}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
