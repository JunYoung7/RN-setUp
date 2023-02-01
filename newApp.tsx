import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const NewApp = () => {
  const [buttonTitle, setButtonTitle] = useState<string>('');

  return (
    <View style={styles.wholeContainer}>
      <View style={styles.TextContainer}>
        <Text style={styles.text}>{buttonTitle}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttons}>
          <Button title="1" onPress={e => setButtonTitle('1')} />
        </View>
        <View style={styles.buttons}>
          <Button title="2" onPress={e => setButtonTitle('2')} />
        </View>
        <View style={styles.buttons}>
          <Button title="3" onPress={e => setButtonTitle('3')} />
        </View>
        <View style={styles.buttons}>
          <Button title="4" onPress={e => setButtonTitle('4')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextContainer: {
    flex: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: 80,
  },
  text: {
    fontSize: 30,
  },
});

export default NewApp;
