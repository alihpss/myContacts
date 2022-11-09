import PropTypes from 'prop-types';
import { Container } from './styles';

import Spinner from '../Spinner';

export default function FormGoup({ children, error, isLoading }) {
  return (
    <Container>
      <div className="form-item">
        {children}
        {isLoading && (
        <div className="loader">
          <Spinner size={16} />
        </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGoup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

FormGoup.defaultProps = {
  error: null,
  isLoading: false,
};
