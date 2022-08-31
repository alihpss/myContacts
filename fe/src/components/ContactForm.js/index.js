import PropTypes from 'prop-types';

import FormGoup from '../FormGroup';
import { Form, ButtonContainer } from './styles';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContacForm({ buttonLabel }) {
  return (
    <Form>
      <FormGoup>
        <Input placeholder="Nome" />
      </FormGoup>

      <FormGoup>
        <Input placeholder="E-mail" />
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
