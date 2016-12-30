import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating
        size={props.size}
        {...props}
      />
    </View>
  );
};

Loading.propTypes = {
  size: React.PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F2F9',
  },
});

export default Loading;
