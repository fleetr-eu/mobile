import Exponent from 'exponent';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import { FontAwesome } from '@exponent/vector-icons';

import FleetrMap from './FleetrMapWithData';
import Login from './Login'
import Loading from './Loading'

function logout() {
  Meteor.logout();
}

const FleetrMobile = (props) => {
  const { status, user, loggingIn } = props;
  if (status.connected === false || loggingIn) {
    return <Loading />;
  } else if (user !== null) {
    return (
      <View style={styles.container}>
        <FleetrMap />
        <FontAwesome name="sign-out" size={30} color="lightgrey"
                     style={styles.icon} onPress={logout} />
      </View>);
  }
  return <Login />;
};

FleetrMobile.propTypes = {
  status: React.PropTypes.object,
  user: React.PropTypes.object,
  loggingIn: React.PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  icon: {
    marginVertical: 30,
    marginHorizontal: 5,
    backgroundColor: 'transparent',
  },
});

export default (meteorUrl) => {
  Meteor.connect(meteorUrl);
  return createContainer(() => {
    return {
      status: Meteor.status(),
      user: Meteor.user(),
      loggingIn: Meteor.loggingIn(),
    };
  }, FleetrMobile);
}
