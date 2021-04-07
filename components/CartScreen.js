import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ShopContext from './context/shop-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const context = React.useContext(ShopContext);
  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <View>
      {context.cart.map(cartItem => (
        <View key={cartItem.id}>
          <Text>{cartItem.title}</Text>
          <Button
            title="remove"
            onPress={context.removeProductFromCart.bind(this, cartItem.id)}
          />
        </View>
      ))}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
