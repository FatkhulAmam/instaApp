import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Text, Header, Body, Right, Title} from 'native-base';

import Like from '../assets/images/love.svg';
import LikeActive from '../assets/images/loveClick.svg';
import pict1 from '../assets/images/gb1.jpg';
import pict2 from '../assets/images/gb3.jpg';
import profile from '../assets/images/avatar.png';

const Home = () => {
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.avatarContainer}>
          <Image source={profile} style={styles.avatar} />
          <Text>Jhonkey_michael</Text>
        </View>
        <Image source={pict1} style={styles.image} />
        <View style={styles.icon}>
          <LikeActive />
        </View>
        <View style={styles.desc}>
          <Text>
            mudahnya menanam lidah mertua dengan media tanam yang minimum namun
            dapat menghasilkan tanaman dengan hasil yang bermanfaat bagi udara
            di rumah kita
          </Text>
          <Text note>Lihat semua komentar</Text>
          <Text note style={styles.time}>
            38 minutes ago
          </Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image source={profile} style={styles.avatar} />
          <Text>Jhonkey_michael</Text>
        </View>
        <Image source={pict2} style={styles.image} />
        <View style={styles.icon}>
          <Like />
        </View>
        <View style={styles.desc}>
          <Text>
            Tumbuhan dengan nama Lidah mertua, merupakan tumbuhan penangkal
            radiasi yang cocok di tanam didalam rumah
          </Text>
          <Text note>Lihat semua komentar</Text>
          <Text note style={styles.time}>
            1 day ago
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  scrollView: {
    marginBottom: 85,
  },
  like: {
    marginRight: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 25,
    margin: 10,
  },
  image: {
    width: 'auto',
    height: 275,
  },
  icon: {
    flexDirection: 'row',
    margin: 10,
  },
  desc: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  time: {
    fontSize: 10,
    marginTop: 5,
  },
});
