import React, {useEffect} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const Posting = ({navigation}) => {
  useEffect(() => {
    navigation.navigate('EditPost');
  });
  return (
    <View>
      <TouchableOpacity onPress={navigation.goBack()}>
        <Text>mmmm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Posting;
