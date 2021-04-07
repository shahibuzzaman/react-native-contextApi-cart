import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const CartButton = ({navigation, cartItemNumber}) => {
  return (
    <View>
      <Button
        title={`Cart(${cartItemNumber})`}
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({});
