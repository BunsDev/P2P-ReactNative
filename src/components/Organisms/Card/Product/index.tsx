import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Avatar, Image, Text, useTheme } from 'react-native-elements';
// @styles
import { useStyles } from './styles';
// @utils
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Product = (props: any) => {
  const styles = useStyles();
  const { theme } = useTheme();
  console.log(props);
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar
          containerStyle={{ marginRight: 10 }}
          source={data.user_avatar}
          rounded
        />
        <Text style={styles.smlabel}>{data.user_name}</Text>
      </View>
      <View>
        <Image
          style={styles.production}
          source={data.production_image}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.pricesection}>
          <View style={styles.price}>
            <Text style={styles.mdlabel}>{data.production_price}</Text>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              style={{ marginLeft: 5, color: theme?.colors?.grey3 }}
              size={17}
            />
          </View>
          <View style={styles.price}>
            <MaterialCommunityIcons
              name="heart-outline"
              style={{
                marginRight: 5,
                color: theme?.colors?.grey3,
              }}
              size={17}
            />
            <Text style={styles.smlabel}>{data.recommendation}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.smlabel}>{data.product_name}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.smlabel}>{data.production_size}</Text>
          <Text style={styles.smlabel}>{data.boost}</Text>
        </View>
      </View>
    </View>
  );
};

export default Product;
