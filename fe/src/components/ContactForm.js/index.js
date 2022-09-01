import PropTypes from 'prop-types';

import { useState, useRef } from 'react';
import FormGoup from '../FormGroup';
import { Form, ButtonContainer } from './styles';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContacForm({ buttonLabel }) {
  const [name, setName] = useState('');

  const email = useRef(null);

  return (
    <Form>
      <FormGoup>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGoup>

      <FormGoup
        error="O formato do e-mail é inválido"
      >
        <Input placeholder="E-mail" ref={email} />
      </FormGoup>

      <FormGoup>
        <Input placeholder="Telefone" />
      </FormGoup>

      <FormGoup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGoup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
}

ContacForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
