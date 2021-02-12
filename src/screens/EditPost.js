import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Header, Body, Right, Title, Text, Input, Button} from 'native-base';

import profile from '../assets/images/avatar.png';

const EditPost = () => {
  return (
    <SafeAreaView>
      <View>
        <Header style={styles.header} transparent>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="rgba(0,0,0,0)"
          />
          <Body>
            <Title style={styles.text}>Inspict</Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Text>Posting</Text>
            </TouchableOpacity>
          </Right>
        </Header>
      </View>
      <View style={styles.wraperPost}>
        <Image source={profile} style={styles.imgPost} />
        <Input style={styles.txtInput} placeholder="tambahkan pemikiranmu" />
      </View>
      <View style={styles.btnPost}>
        <Button style={styles.btnInWraper}>
          <Text>Post Other Picture</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default EditPost;

const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  wraperPost: {
    margin: 15,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#8f8f8f',
  },
  imgPost: {
    width: 100,
    height: 100,
    marginBottom: 25,
  },
  txtInput: {
    marginLeft: 15,
    width: 10,
  },
  btnPost: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 100,
  },
  btnInWraper: {
    borderRadius: 25,
  },
});
