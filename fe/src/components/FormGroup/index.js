import PropTypes from 'prop-types';
import { Container } from './styles';

export default function FormGoup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGoup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

FormGoup.defaultProps = {
  error: null,
};
