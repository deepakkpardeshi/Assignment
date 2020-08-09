import React from 'react';
import {Text, View, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import Row from './Row';

const DetailsScreen = ({route}) => {
  const {selectedContact} = route.params;

  return (
    <SafeAreaView>
      <View>
        <Row title={selectedContact.first} subTitle={'First Name'} />
        <Row title={selectedContact.last} subTitle={'Last Name'} />

        <Row title={selectedContact.email} subTitle={'email'} />

        <Row title={selectedContact.address} subTitle={'address'} />

        <Row title={selectedContact.balance} subTitle={'balance'} />
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  }
});
