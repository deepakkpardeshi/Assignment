import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TextInput} from 'react-native';
import Item from './Item';
import {getContactsApi} from '../Services/service';
import _ from 'lodash';

const HomeScreen = (props: any) => {
  const {navigation} = props;
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getContactsApi().then((data) => {
      const sorted = _.orderBy(data, ['first']);
      setContacts(sorted);
    });
  }, []);

  const searchFilterFunction = (text: string) => {
    setSearchText(text);
    const newData = contacts.filter((item: any) => {
      const itemData = `${item.first.toUpperCase()}   
          ${item.last.toUpperCase()} ${item.first.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setFilteredContacts(text === '' ? contacts : newData);
  };
  const SearchView = () => {
    return (
      <View style={styles.searchView}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={searchFilterFunction}
          placeholder="Search"
          style={styles.searchInput}
          value={searchText}
          clearButtonMode="always"
        />
      </View>
    );
  };

  return (
    <>
      <View>
        <FlatList
          data={searchText === '' ? contacts && contacts : filteredContacts}
          keyExtractor={(item: any, index: any) => item + index}
          renderItem={({item}) => <Item item={item} navigation={navigation} />}
          ListHeaderComponent={SearchView}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchView: {
    backgroundColor: '#fff',
    padding: 10,
  },
  searchInput: {
    borderRadius: 25,
    borderColor: '#333',
    backgroundColor: '#fff',
  },
});
