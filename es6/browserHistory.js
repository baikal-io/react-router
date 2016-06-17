import { createHistory } from 'history';
import useRouterHistory from './useRouterHistory';

var browserHistory = useRouterHistory(createHistory)({
  basename: '/negotiations'
});

export default browserHistory;