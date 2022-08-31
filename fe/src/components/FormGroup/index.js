import PropTypes from 'prop-types';
import { Container } from './styles';

export default function FormGoup({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

FormGoup.propTypes = {
  children: PropTypes.node.isRequired,
};
