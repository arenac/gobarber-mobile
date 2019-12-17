import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import en from 'date-fns/locale/en-US';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import api from '~/services/api';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ navigation }) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');

  const timeFormated = useMemo(() => {
    return formatRelative(parseISO(time), new Date(), { locale: en });
  }, [time]);

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatars/50/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{timeFormated}</Time>

        <SubmitButton onPress={handleAddAppointment}>
          Confirm schedule
        </SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirm',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
