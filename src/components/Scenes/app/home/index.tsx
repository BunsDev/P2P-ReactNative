import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
// @components
import { Production } from '@components/Organisms/Card';
// @style
import { useStyles } from './styles';

const data = [
  {
    user_avatar: require('@assets/images/user.jpg'),
    user_name: 'user-1',
    production_image: require('@assets/images/product.jpg'),
    product_name: 'Production-1',
    production_price: '155,00 $',
    production_size: 41,
    recommendation: 14,
    boost: '',
  },
  {
    user_avatar: require('@assets/images/user.jpg'),
    user_name: 'user-2',
    production_image: require('@assets/images/product.jpg'),
    product_name: 'Production-2',
    production_price: '305,00 $',
    production_size: 38,
    recommendation: 9,
    boost: 'boost',
  },
];

const HomeScreen = (props: any) => {
  const { navigation } = props;
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={data}
        style={styles.list}
        numColumns={2}
        keyExtractor={(e: any, index: number) => `product-item-${index}`}
        renderItem={({ item }) => <Production data={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
