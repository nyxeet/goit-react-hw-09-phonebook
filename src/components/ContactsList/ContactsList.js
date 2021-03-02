import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import ContactsFilter from '../ContactsFilter';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const TaskList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const onRemove = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactsFilter />
      <ListGroup as="ul">
        {contacts.map(({ id, name, number }) => (
          <ListGroup.Item as="li" key={id}>
            <Row>
              <Col md={4}>
                <span className="font-weight-bold mr-3">{name}</span>
                <a href={`tel:${number}`} className="mr-3">
                  {number}
                </a>
              </Col>
              <Col md={{ span: 4, offset: 4 }}>
                <Button
                  variant="dark"
                  className="ml-5"
                  onClick={() => onRemove(id)}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskList;
