import { useState } from 'react';
import { Button, Label, Form, InputName } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ContactForm = ({ createUser }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onHandleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    const id = nanoid(5);
    createUser({ id, name, number });

    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={onHandleSubmit}>
        <Label>
          Name
          <InputName
            onChange={onHandleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          Number
          <InputName
            onChange={onHandleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />{' '}
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

ContactForm.propTypes = {
  createUser: PropTypes.func.isRequired,
};
