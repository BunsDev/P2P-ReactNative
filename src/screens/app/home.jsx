import React from "react";
import { Layout } from "@components/Layout";
import { FlatList } from "native-base";
import { ProductCard } from "@components/Card";

const data = [
  {
    user_avatar: require("@assets/images/user.jpg"),
    user_name: "user-1",
    production_image: require("@assets/images/product.jpg"),
    product_name: "Production-1",
    production_price: "155,00 $",
    production_size: 41,
    recommendation: 14,
    boost: "",
  },
  {
    user_avatar: require("@assets/images/user.jpg"),
    user_name: "user-2",
    production_image: require("@assets/images/product.jpg"),
    product_name: "Production-2",
    production_price: "305,00 $",
    production_size: 38,
    recommendation: 9,
    boost: "boost",
  },
  {
    user_avatar: require("@assets/images/user.jpg"),
    user_name: "user-1",
    production_image: require("@assets/images/product.jpg"),
    product_name: "Production-1",
    production_price: "155,00 $",
    production_size: 41,
    recommendation: 14,
    boost: "",
  },
  {
    user_avatar: require("@assets/images/user.jpg"),
    user_name: "user-2",
    production_image: require("@assets/images/product.jpg"),
    product_name: "Production-2",
    production_price: "305,00 $",
    production_size: 38,
    recommendation: 9,
    boost: "boost",
  },
  {
    user_avatar: require("@assets/images/user.jpg"),
    user_name: "user-1",
    production_image: require("@assets/images/product.jpg"),
    product_name: "Production-1",
    production_price: "155,00 $",
    production_size: 41,
    recommendation: 14,
    boost: "",
  },
  {
    user_avatar: require("@assets/images/user.jpg"),
    user_name: "user-2",
    production_image: require("@assets/images/product.jpg"),
    product_name: "Production-2",
    production_price: "305,00 $",
    production_size: 38,
    recommendation: 9,
    boost: "boost",
  },
];

const Home = () => {
  return (
    <Layout height={5} fb={60}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(e, index) => `product-item-${index}`}
        renderItem={({ item }) => <ProductCard data={item} />}
      />
    </Layout>
  );
};

export default Home;
