import { createHistory } from 'history'
import useRouterHistory from './useRouterHistory'

const browserHistory = useRouterHistory(createHistory)({
  basename: '/negotiations'
})

export default browserHistory
