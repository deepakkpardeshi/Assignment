import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/**
 * APIs calls here
 *
 */
export const getContactsApi = async () => {
  const response = await axios.get(
    'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole',
  );
  response && response.data && storeContacts(response.data);
  return response.data;
};

// Offline support can be added in future
export const storeContacts = async (contacts: any) => {
  try {
    const jsonContacts = JSON.stringify(contacts);
    await AsyncStorage.setItem('contacts', jsonContacts);
  } catch (e) {
    // error
  }
};

export const getContacts = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@contacts');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error
  }
};
