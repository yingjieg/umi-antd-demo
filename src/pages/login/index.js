import React from 'react';
import { Form, Button, Input, Card } from 'antd';
import styles from './styles.less';

function Login(props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Card style={{ width: 400 }}>
          <Form>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Input />
            </Form.Item>
            <Button type="primary" style={{ width: '100%' }}>
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Login;
