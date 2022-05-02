import React, { Component } from "react";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    surname: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, surname, value } = e.target;
    this.setState({
      [name]: value,
      [surname]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: "", surname: "", number: "" });
  };
  render() {
    return (
      <form className={styles.TaskEditor} onSubmit={this.handleSubmit}>
        <label className={styles.TaskEditor_label}>
          Name
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.TaskEditor_label}>
          Surname
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.TaskEditor_label}>
          Number
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

