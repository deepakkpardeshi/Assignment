import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

const DetailsScreen = ({route}) => {
  const {selectedContact} = route.params;

  return (
    <SafeAreaView>
      <View>
        <Text>{selectedContact.first}</Text>
        <Text>{selectedContact.last}</Text>
        <Text>{selectedContact.email}</Text>
        <Text>{selectedContact.address}</Text>
        <Text>{selectedContact.balance}</Text>
        <Text>{selectedContact.created}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
