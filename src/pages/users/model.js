import { getUsers, getTodos } from '../../services/user';

export default {
  namespace: 'users',
  state: {
    users: [],
  },
  effects: {
    *getUsers(_, { call, put }) {
      const users = yield call(getUsers);
      const todos = yield call(getTodos);
      console.log(todos);
      yield put({ type: 'saveUsers', payload: users });
    },
  },
  reducers: {
    saveUsers(state, { payload: users }) {
      return {
        ...state,
        users,
      };
    },
    removeUser(state, { payload: userKey }) {
      return {
        ...state,
        users: state.users.filter(user => user.key !== userKey),
      };
    },
  },
};
