import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import ProductListScreen from './screens/Product';
import ProductDetailScreen from './screens/ProductDetailPage';
import CategoryListScreen from './screens/Category';
import CategoryDetailScreen from './screens/CategoryDetailScreen';

const ProductStack = createStackNavigator({
  ProductList: {
    screen: ProductListScreen,
    navigationOptions: {
      title: 'Products',
    },
  },
  ProductDetail: {
    screen: ProductDetailScreen,
    navigationOptions: {
      title: 'Product Detail',
    },
  },
});

const CategoryStack = createStackNavigator({
  CategoryList: {
    screen: CategoryListScreen,
    navigationOptions: {
      title: 'Categories',
    },
  },
  CategoryDetail: {
    screen: CategoryDetailScreen,
    navigationOptions: {
      title: 'Category Detail',
    },
  },
});

const OrderScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Order Screen</Text>
  </View>
);

const AppNavigator = createBottomTabNavigator({
  Products: ProductStack,
  Categories: CategoryStack,
  Orders: OrderScreen,
});

export default createAppContainer(AppNavigator);
