import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import Form from 'react-bootstrap/Form';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const changeFilter = e =>
    dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <Form className="mb-2">
      <Form.Group controlId="formBasicFilter">
        <Form.Control
          type="text"
          name="filter"
          placeholder="Filter..."
          value={value}
          onChange={changeFilter}
          autoComplete="off"
        />
      </Form.Group>
    </Form>
  );
};

export default Filter;
