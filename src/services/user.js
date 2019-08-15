import axios from 'axios';

export async function getUsers() {
  return Promise.resolve([
    {
      key: 1,
      name: 'yingjie',
    },
    {
      key: 2,
      name: 'tom',
    },
  ]);
}

// https://jsonplaceholder.typicode.com/todos/1
export async function getTodos() {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1').then(resp => {
    console.log(resp.data);
  });
}
