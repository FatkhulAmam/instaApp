import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Body, Header, Title, Card, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import profile from '../assets/images/avatar.png';

const Comment = ({navigation}) => {
  const [messages, setMessages] = useState('');
  return (
    <SafeAreaView>
      <Header style={styles.header} transparent>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <Icon name="arrow-left" size={20} style={styles.arrow} />
        <Body>
          <Title style={styles.title}>Komentar</Title>
        </Body>
      </Header>
      <View style={styles.wrapper}>
        <Image source={profile} style={styles.avatar} />
        <Text>
          pada zaman kemerdikan nawang wulan budhal kaji nang prambanan kota
          seribu candi pada zaman kemerdikan nawang wulan budhal kaji nang
          prambanan kota seribu candi pada zaman kemerdikan nawang wulan budhal
          kaji nang prambanan kota seribu candi
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.wrapper}>
        <Image source={profile} style={styles.avatarCom} />
        <Text>
          pada zaman kemerdikan nawang wulan budhal kaji nang prambanan kota
          seribu candi pada zaman kemerdikan nawang wulan
        </Text>
      </View>
      <Card style={styles.inputChat} transparent>
        <Body style={styles.write}>
          <TextInput
            style={styles.textInput}
            placeholder="Pesan"
            value={messages}
            onChangeText={(messages) => setMessages(messages)}
          />
          <TouchableOpacity transparent>
            <Text>Posting</Text>
          </TouchableOpacity>
        </Body>
      </Card>
    </SafeAreaView>
  );
};

export default Comment;

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    marginLeft: 20,
    fontSize: 25,
  },
  arrow: {
    marginTop: 18,
    marginLeft: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  avatarCom: {
    height: 40,
    width: 40,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  wrapper: {
    flexDirection: 'row',
    marginRight: 80,
    marginTop: 10,
  },
  line: {
    margin: 10,
    marginTop: 25,
    borderBottomWidth: 1,
    borderColor: '#d1d1d1',
  },
  inputChat: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    width: '100%',
    backgroundColor: '#ecccb4',
    borderRadius: 25,
  },
  textInput: {
    width: 230,
    height: 50,
    fontSize: 18,
    marginLeft: 8,
  },
  write: {
    flexDirection: 'row',
  },
});
