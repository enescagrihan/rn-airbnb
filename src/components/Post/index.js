import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = ({post}) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>
      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.description}
      </Text>
      {/* Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}>${post.newPrice}</Text>/ night
      </Text>
      {/* Total price */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
