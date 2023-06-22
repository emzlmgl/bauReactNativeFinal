import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { NavigationRoute } from 'react-navigation';

interface ProductListScreenProps {
  navigation: NavigationStackProp<NavigationRoute>;
}

const ProductDetailScreen: React.FC<ProductListScreenProps> = ({ navigation }) => {
  const product = navigation.getParam('product');

  return (
    <View style={{ padding: 16 }}>
      <Text>Name: {product.name}</Text>
      <Text>Unit Price: {product.unitPrice}</Text>
      <Text>Quantity Per Unit: {product.quantityPerUnit}</Text>
      <Text>Units In Stock: {product.unitsInStock}</Text>
      <Text>Units On Order: {product.unitsOnOrder}</Text>
    </View>
  );
};

export default ProductDetailScreen;
