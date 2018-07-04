import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ConfigActions from '../actions/config';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



const GrayScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => props.configActions.loadAppConfig()} // New Code
      >
        Gray Screen
      </Text>
      {props && props.name && (<Text>{props.name}</Text>)}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {...state.config};
};

const mapDispatchToProps = (dispatch) => {
  return {
    configActions: bindActionCreators(ConfigActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
	mapDispatchToProps
)(GrayScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c1c1c1',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});