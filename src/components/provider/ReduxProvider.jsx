import { Provider } from 'react-redux';
import store from '../../store';

const ReduxProvider = () => {
  return <Provider store={store} />
};

export default ReduxProvider;
