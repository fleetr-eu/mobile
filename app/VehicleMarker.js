import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import VehicleImages from './VehicleImages';
import vehicleImage from '../assets/vehicles/car-black.png';


function vehicleColor(vehicle) {
  var color = 'grey';
  if (vehicle.state === 'stop') {
    color = 'blue';
  } else if (vehicle.state === 'start') {
    color = 'green';
  };
  return color;
}

class VehicleMarker extends Component {
  propTypes: {
    vehicle: PropTypes.Object
  }

  render() {
    const {vehicle} = this.props;
    return (
      <MapView.Marker
        key={vehicle._id}
        identifier={vehicle._id}
        image={vehicleImage}
        coordinate={{
          latitude: vehicle.lat,
          longitude: vehicle.lng,
        }}
      >
        <Text style={styles.text}>{`${vehicle.name} (${vehicle.licensePlate})`}</Text>
      </MapView.Marker>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    top: -10,
    left: 20,
  },
});

export default VehicleMarker;
