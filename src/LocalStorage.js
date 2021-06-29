
import { Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

export default {

    // function for set data on AsyncStorage
    async setStorage(STORAGE_KEY, value) {
        try {
            console.log(STORAGE_KEY)
            console.log(value)
            await AsyncStorage.setItem(STORAGE_KEY, value);
            // Promise.resolve(true);
            return true
        } catch (error) {
            Promise.reject(error);
        }
    },

    // function for get data from AsyncStorage
    async getStorage(STORAGE_KEY) {
        try {
            const value = await AsyncStorage.getItem(STORAGE_KEY);
            // console.log(value)
            // Promise.resolve(value);
            return value
        } catch (error) {
            Promise.reject(error);
        }
    },

    // function for clear AsyncStorage
    async clearStorage() {
        try {
            await AsyncStorage.clear();
            // Promise.resolve(true);
            return true
        } catch (error) {
            Promise.reject(error);
        }
    },
};

