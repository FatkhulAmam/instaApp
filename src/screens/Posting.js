import React, {useEffect} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Text, Button} from 'native-base';

const Posting = ({navigation}) => {
  useEffect(() => {
    navigation.navigate('EditPost');
  });
  return (
    <View style={styles.parrent}>
      <TouchableOpacity onPress={navigation.goBack()}>
        <Text />
      </TouchableOpacity>
      <Button onPress={() => navigation.navigate('EditPost')}>
        <Text>add post</Text>
      </Button>
    </View>
  );
};

export default Posting;

const styles = StyleSheet.create({
  parrent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
