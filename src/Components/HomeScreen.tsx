import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TextInput, Text} from 'react-native';
import Item from './Item';
import {getContactsApi} from '../Services/service';
import _ from 'lodash';
import I18n from '../translations/i18n';

const HomeScreen = (props: any) => {
  // init();
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
          placeholder={I18n.t('search')}
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
        <Text style={styles.heading}>{I18n.t('welcome')}</Text>
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
  heading: {
    height: 40,
    fontSize: 20,
  },
});
