import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SectionList,
  FlatList,
} from 'react-native';
import Item from './Item';
import {getContactsApi} from '../Services/service';
import _ from 'lodash';

const HomeScreen = (props: any) => {
  const {navigation} = props;
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getContactsApi().then((data) => {
      const sorted = _.orderBy(data, ['first']);
      setContacts(sorted);
    });
  }, []);

  return (
    <>
      {/* <ScrollView style={styles.scrollView}> */}
      <View>
        <FlatList
          data={contacts && contacts}
          keyExtractor={(item: any, index: any) => item + index}
          renderItem={({item}) => <Item item={item} navigation={navigation} />}
          // renderSectionHeader={({section: {title}}) => (
          //   <Text style={styles.header}>{title}</Text>
          // )}
        />
      </View>
      {/* </ScrollView> */}
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
