import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Item = (props: any) => {
  const {title} = props;

  const onPress = () => {
    console.log('onPress');
    // props.navigation.navigate('Details');
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
  },
});
