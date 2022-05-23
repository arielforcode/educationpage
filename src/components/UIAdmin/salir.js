import { Button, Checkbox, Form, Input, Row, Col, Typography } from 'antd';
import React from 'react';
const Salir = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const { Title } = Typography;
  return (
    <>
      <Row>
        <Col
          span={8}>
        </Col>
        <Col
          span={8}>

          <Title>Iniciar Sesion</Title>
        </Col>
        <Col
          span={8}>
        </Col>

      </Row>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Usuario"
          name="username"
          rules={[
            {
              required: true,
              message: 'introduce tu usuario!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: 'introduce tu password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Recordar</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>

    </>

  );
};

export default Salir;