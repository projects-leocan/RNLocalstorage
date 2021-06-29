import React from 'react';
import { SafeAreaView, View, TextInput, Text, Button } from 'react-native';
import styles from './styles';
import LocalStorage from './LocalStorage';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            storageValue: ''
        }
    }

    // set value on localStorage
    onSaveValue = async () => {
        const { inputValue } = this.state;
        const value = await LocalStorage.setStorage('INPUT_VALUE', JSON.stringify(inputValue));
        if(value) {
            alert('Data successfully saved')
        }
    }

    // set value from localStorage
    onGetValue = async () => {
        const value = await LocalStorage.getStorage('INPUT_VALUE');
        if (value !== undefined) {
            const parseValue = JSON.parse(value);
            this.setState({ storageValue: parseValue })
        }
    }

    // clear value from localStorage
    onClearStorage = async () => {
        const value = await LocalStorage.clearStorage();
        if(value) {
            alert('Data cleared successfully')
        }
    }

    render() {
        const { inputValue, storageValue } = this.state;
        return (
            <SafeAreaView style={styles.safeAreaConainer}>
                <View style={styles.rootContainer}>
                    <TextInput
                        placeholder="Enter value"
                        value={inputValue}
                        underlineColorAndroid={'black'}
                        // style={styles.inputTextStyle}
                        onChangeText={(input) => this.setState({ inputValue: input })}
                    />

                    <Text>{storageValue}</Text>
                    <Button
                        title="Save to Local Storage"
                        onPress={this.onSaveValue}
                    />

                    <Button
                        title="get value from Local Storage"
                        onPress={this.onGetValue}
                    />

                    <Button
                        title="Clear Local Storage"
                        onPress={this.onClearStorage}
                    />

                </View>
            </SafeAreaView>
        )
    }
}