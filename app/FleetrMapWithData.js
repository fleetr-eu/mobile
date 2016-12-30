import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import FleetrMap from './FleetrMap';

export default createContainer(params => {
  const handle = Meteor.subscribe('vehicles');

  return {
    vehiclesSub: handle,
    vehicles: Meteor.collection('vehicles').find(),
  };
}, FleetrMap);
