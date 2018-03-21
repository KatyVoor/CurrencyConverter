import React from 'react';
import PropTypes from 'prop-types';
// import color from 'color';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, ButtonText, editable = true } = props;
  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight underlayColor="black" style={styles.buttonContainer} onPress={onPress} >
        <Text style={styles.ButtonText}>{ButtonText}</Text>
      </TouchableHighlight >
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  ButtonText: PropTypes.string,
  editable: PropTypes.bool,
};
export default InputWithButton;
