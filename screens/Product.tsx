import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { NavigationRoute } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';
import axios from 'axios';

interface Product {
  categoryId: number
  discontinued: boolean
  id: number
  name: string
  quantityPerUnit: string
  reorderLevel: number
  supplierId: number
  unitPrice: number
  unitsInStock: number
  unitsOnOrder: number
}

interface ProductListScreenProps {
  navigation: NavigationStackProp<NavigationRoute>;
}

const ProductListScreen: React.FC<ProductListScreenProps> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://northwind.vercel.app/api/products');
      setProducts(response.data);
      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const navigateToDetail = (product: Product) => {
    navigation.navigate('ProductDetail', { product: product });
  };

  const deleteItem = (item: Product) => {
    setProducts(products.filter(p => p.id !== item.id));
  }

  const renderProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity onPress={() => navigateToDetail(item)}>
      <View style={{ flex: 1, justifyContent: 'center', marginTop: 10, paddingLeft: 20, height: 40, borderBottomWidth: 1, borderBottomColor: "gray" }}>
          <Text style={{ textAlign: 'left',}}>{item.name}</Text>
          <View style={{alignItems: 'flex-end', width: 100, height: 35, alignSelf: 'flex-end'}}>
            <Button  title='Delete' onPress={() => deleteItem(item)}></Button>
          </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        style={{padding: 10}}
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductListScreen;
