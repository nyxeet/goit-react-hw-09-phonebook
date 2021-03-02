import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function ContactsEditor() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const [text, setText] = useState('');
  const [tel, setTel] = useState('');

  const handleChange = useCallback(e => {
    setText(e.target.value);
  }, []);

  const handleTelChange = useCallback(e => {
    setTel(e.target.value);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === text)) {
      return alert(`${text} is already in contacts`);
    }

    dispatch(contactsOperations.addContact(text, tel));
    setText('');
    setTel('');
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Name</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter name"
          value={text}
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>Number</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          className="TaskEditor-input"
          type="tel"
          name="number"
          placeholder="Enter number"
          value={tel}
          onChange={handleTelChange}
        />
      </InputGroup>

      <Button variant="dark" type="submit" block className="TaskEditor-button">
        Добавить контакт
      </Button>
    </Form>
  );
}

export default ContactsEditor;
