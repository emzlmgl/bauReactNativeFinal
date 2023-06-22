import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { NavigationRoute } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';
import axios from 'axios';

interface Category {
  id: number;
  description: string,
  name: string;
}

interface CategoryListScreenProps {
  navigation: NavigationStackProp<NavigationRoute>;
}

const CategoryListScreen: React.FC<CategoryListScreenProps> = ({ navigation }) => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://northwind.vercel.app/api/categories');
      setCategory(response.data);
      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const renderProductItem = ({ item }: { item: Category }) => (
    <TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'center', marginTop: 10, paddingLeft: 20, height: 80, borderBottomWidth: 1, borderBottomColor: "gray" }}>
          <Text style={{ textAlign: 'left',}}>{item.name}</Text>
          <View style={{alignItems: 'flex-end', alignSelf: 'flex-end'}}>
            <Button  title='Delete' onPress={() => deleteItem(item)}></Button>
            <Button  title='Update' onPress={() => updateItem(item)}></Button>
          </View>
      </View>
    </TouchableOpacity>
  );

  const deleteItem = (item: Category) => {
    setCategory(category.filter(p => p.id !== item.id));
  }

  const updateItem = (item: Category) => {
    navigation.navigate('CategoryDetail', { category: item });
  }

  return (
    <View>
      <FlatList
        style={{padding: 10 }}
        data={category}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CategoryListScreen;
