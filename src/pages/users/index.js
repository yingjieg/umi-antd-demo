import React from 'react';
import { Button, Table, Icon, Popconfirm } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';

function Users({ dispatch, users, loading }) {
  const handleClick = e => {
    e.preventDefault();
    router.push('/users/98888');
  };

  const loadUsers = e => {
    e.preventDefault();
    dispatch({ type: 'users/getUsers' });
  };

  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Action',
      render: row => (
        <Popconfirm
          title="Are you sure delete this task?"
          onConfirm={e => deleteUser(e, row.key)}
          okText="Yes"
          cancelText="No"
        >
          <Icon type="delete" />
        </Popconfirm>
      ),
    },
  ];

  const deleteUser = (event, userKey) => {
    event.preventDefault();
    console.log(userKey);
    dispatch({ type: 'users/removeUser', payload: userKey });
  };

  return (
    <div>
      <div>I am users page</div>
      <Button onClick={handleClick}>User 98888</Button>

      <Button onClick={loadUsers}>Load users</Button>

      <Table dataSource={users.users} columns={columns} loading={loading} />
    </div>
  );
}

function mapStateToProps({ users, loading }) {
  return { users, loading: loading.effects['users/getUsers'] };
}

export default connect(mapStateToProps)(Users);
