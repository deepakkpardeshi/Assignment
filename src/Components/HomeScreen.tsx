import React from 'react';
import {View, Text, ScrollView, StyleSheet, SectionList} from 'react-native';
import Item from './Item';

const HomeScreen = () => {
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View>
          <SectionList
            sections={DATA}
            keyExtractor={(item: any, index: any) => item + index}
            renderItem={({item}) => <Item title={item} />}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F9F9F9',
    // flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 40, //Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
