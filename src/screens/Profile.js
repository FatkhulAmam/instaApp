import React from 'react';
import {StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';
import {Text, Header, Body, Right, Title} from 'native-base';
import LikeActive from '../assets/images/loveClick.svg';

const Profile = () => {
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
            <Title style={styles.text}>InstaApp</Title>
          </Body>
          <Right>
            <LikeActive style={styles.like} />
          </Right>
        </Header>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  like: {
    marginRight: 10,
  },
});
