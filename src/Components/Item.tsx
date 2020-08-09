import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {
  item: any;
  navigation: any;
};

/**
 * Item Component - shows name first and last
 * with clickable action and passing data
 */
const Item = (props: Props) => {
  const {item, navigation} = props;

  const onPress = () => {
    navigation.navigate('Details', {selectedContact: item});
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.title}>
          {item.first} {item.last}
        </Text>
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
