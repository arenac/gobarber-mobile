import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';
import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('appointments');

      setAppointments(response.data);
    }
    fetchData();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Dashboard</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="dashboard" size={20} color={tintColor} />
  ),
};
