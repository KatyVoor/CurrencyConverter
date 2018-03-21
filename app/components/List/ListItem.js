import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text, onPress, checkmark = true, visible = true, selected = false, customIcon = null
}) => (
  <TouchableHighlight underlayColor={styles.$underlayColor} onPress={onPress}>
    <View style={styles.row}>
      <Text style={styles.text}> {text} </Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.bool,
};

export default ListItem;