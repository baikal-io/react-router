import history from 'history';
import useRouterHistory from './useRouterHistory';

export default useRouterHistory(history.createHistory)({
  basename: '/negotiations'
});