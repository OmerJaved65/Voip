import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

const ButtonComponent = (props) => {
    return (
        <Button title={props.title} color="#3a76f0" />
    )
}
export default ButtonComponent;