import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignInLink,
  SignInLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCaptalize="none"
            placeholder="your@email.com"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            placeholder="Your password"
          />
          <SubmitButton onPress={() => {}}>Sign In</SubmitButton>
        </Form>
        <SignInLink
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <SignInLinkText>Create a free account</SignInLinkText>
        </SignInLink>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
