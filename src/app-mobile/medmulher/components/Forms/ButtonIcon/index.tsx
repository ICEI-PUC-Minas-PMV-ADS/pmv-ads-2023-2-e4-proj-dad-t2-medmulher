import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

//Icons
import Icon from '@expo/vector-icons/Ionicons';

interface ButtonIconProps extends TouchableOpacityProps {
  title?: string;
}

const ButtonIcon: React.FC <ButtonIconProps> = (props) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Icon name="cart" size={20} color="#fff" />
      <Text style={styles.text}> {props.title || 'Button'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7a4183',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ButtonIcon;
