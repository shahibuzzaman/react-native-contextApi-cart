import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import ShopContext from './context/shop-context';
import CartButton from './CartButton';

const HomeScreen = ({navigation}) => {
  const products = [
    {id: 'p1', title: 'Gaming Mouse', price: 29.99},
    {id: 'p2', title: 'Harry Potter 3', price: 9.99},
    {id: 'p3', title: 'Used plastic bottle', price: 0.99},
    {id: 'p4', title: 'Half-dried plant', price: 2.99},
  ];

  return (
    <ShopContext.Consumer>
      {context => (
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 0.2,
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginRight: 30,
            }}>
            <CartButton
              cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
              navigation={navigation}
            />
          </View>
          <View style={{flex: 0.8}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
              Product List
            </Text>
            <View>
              {products.map(product => (
                <View
                  key={product.id}
                  style={{
                    height: 40,
                    borderWidth: 1,
                    margin: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 16, margin: 5}}>{product.title}</Text>
                  <Button
                    title="Add to cart"
                    onPress={context.addProductToCart.bind(this, product)}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </ShopContext.Consumer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
