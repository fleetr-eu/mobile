import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
const waitUntil = require('wait-until');

import VehicleMarker from './VehicleMarker';

class FleetrMap extends Component {
  propTypes: {
    vehiclesSub: PropTypes.Object,
    vehicles: PropTypes.Object,
  }

  componentDidMount() {
    waitUntil()
    .interval(500)
    .times(20)
    .condition(this.props.vehiclesSub.ready)
    .done(() => {
      const markers = this.props.vehicles.map(v => {return v._id});
      this.map.fitToSuppliedMarkers(markers, true);
    });
  }

  renderVehicle(vehicle) {
    return <VehicleMarker key={vehicle._id} vehicle={vehicle} />;
  }

  render() {
    const { vehicles, handlePress } = this.props;
    return (
      <MapView
        ref={ref => { this.map = ref; }}
        style={styles.map}
      >
        {vehicles.map(this.renderVehicle)}
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default FleetrMap;
