import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Typography } from 'antd';

import getColumnSettings from '../../features/users/components/columnsSettings';
//import getColumnSettings from './features/users/components/columnsSettings';
import {
  actionCreators as usersActions,
  selector as usersSelector,
} from '../../features/users';

const Usuarios = () => {
  const { Title } = Typography;
  const { users } = useSelector((state) => usersSelector(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(usersActions.list())
  }, [dispatch])

  return (
    <>

      <Title>Listado de usuarios matriculados</Title>
      <Table
        columns={getColumnSettings()}
        dataSource={users.dataList}
        loading={users.isLoading}
        rowKey={'id'}
      />
    </>

  );
}

export default Usuarios;