import React from 'react';
import { Row, Col,  Typography,  Table } from 'antd'
import Formulario from './Formularios/FormularioMateria'
const Materias = () => {
  
  const { Title } = Typography;

  const columns = [
    {
      title: 'Materias',
      dataIndex: 'name',
      filters: [
        {
          text: 'Matematica',
          value: 'Matematica',
        },
        {
          text: 'Quimica',
          value: 'Quimica',
        },
        /*{
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },*/
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Alumnos',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Escuela',
      dataIndex: 'address',
      filters: [
        {
          text: 'alfredo',
          value: 'alfredo',
        },
        {
          text: 'adolfo',
          value: 'adolfo',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Matematica Aplicada',
      age: 32,
      address: 'Alfredo vargas',
    },
    {
      key: '2',
      name: 'Matematica inicial',
      age: 42,
      address: 'juan manuel barea',
    },
    {
      key: '3',
      name: 'Quimica industrial',
      age: 32,
      address: 'isac maldonado reque',
    },
    {
      key: '4',
      name: 'Quimica general',
      age: 32,
      address: 'alfredo vargas',
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return <>
  <Title>Listado de usuarios matriculados</Title>
    <Row>
    <Col span={1}>
      </Col>
      <Col span={10}>
        <Table columns={columns} dataSource={data} onChange={onChange}
          margin={12} />
      </Col>
      <Col span={2}>
      </Col>
      <Col span={10}>
       <Formulario/>
      </Col>
      <Col span={1}>
      </Col>
    </Row>
  </>;
};

export default Materias;