import React from 'react';
import { Form, Input, Button, Select, DatePicker, Space } from 'antd'

const FormularioMaterias = () => {
    const onFinish = (values) => {
        console.log('Datos registrados:', values);
    };
    const { Option } = Select;
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    return <>
        <Form
            onFinish={onFinish}
            title="Registro de materias"
            >
            <Form.Item
                label="Materia"
                name="materia"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Select style={{ width: 120 }} allowClear>
                    <Option value="Matematica">Matematica</Option>
                    <Option value="Quimica">Quimica</Option>
                    <Option value="Biologia">Biologia</Option>
                    <Option value="Musica">Musica</Option>
                    <Option value="Religion">Religion</Option>
                    <Option value="CienciasSociales">Ciencias Sociales</Option>
                </Select>
            </Form.Item>

            <Form.Item
                label="Profesor"
                name="profesor"
                rules={[
                    {
                        required: true,
                        message: 'porfavor introdusca un profesor',
                    },
                ]}
            >
                <Input style={{ width: 200 }} />
            </Form.Item>
            <Form.Item
                label="Fechas del curso"
                name="fechas"
            >
                <Space direction="vertical" size={10}>
                    <RangePicker picker="month" />
                </Space>
            </Form.Item>

            <Form.Item
                label="Descripcion del curso"
                name="descripcion"
            >
                <TextArea rows={4} placeholder="descripcion" maxLength={200} />
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    </>;
};

export default FormularioMaterias;