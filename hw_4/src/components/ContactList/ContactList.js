import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.TaskList}>
    {contacts.map((contact) => (
      <li className = {styles.TaskList_item}key={contact.id}>
        {contact.name + " " + contact.surname +":" + contact.number}
        {
          <button
            className={styles.TaskList_button}
            type="button"
            name="delte"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

export default ContactList;
