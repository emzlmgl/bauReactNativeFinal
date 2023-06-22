import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { NavigationRoute } from 'react-navigation';

interface CategoryListScreenProps {
  navigation: NavigationStackProp<NavigationRoute>;
}

const CategoryDetailScreen: React.FC<CategoryListScreenProps> = ({ navigation }) => {
  const product = navigation.getParam('category');

  return (
    <View style={{ padding: 16 }}>
      <Text>Name: 
        <TextInput editable={true} style={{marginTop: 10}} value={product.name} >{product.name}</TextInput>
      </Text>
      <Text>Description: 
        <TextInput editable={true} value={product.description}>{product.description}</TextInput>
      </Text>
    </View>
  );
};

export default CategoryDetailScreen;
