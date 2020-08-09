import React from 'react';
import {Text, View, SafeAreaView, TextInput, StyleSheet} from 'react-native';
import Row from './Row';

const DetailsScreen = ({route}) => {
  const {selectedContact} = route.params;

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Details</Text>
        <Row title={selectedContact.first} subTitle={'First Name'} />
        <Row title={selectedContact.last} subTitle={'Last Name'} />
        <Row title={selectedContact.email} subTitle={'Email'} />
        <Row title={selectedContact.address} subTitle={'Address'} />
        <Row title={selectedContact.balance} subTitle={'Balance'} />
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});
