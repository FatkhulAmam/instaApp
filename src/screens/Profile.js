import React from 'react';
import {StyleSheet, View, StatusBar, SafeAreaView, Image} from 'react-native';
import {Header, Body, Title, Text, Button} from 'native-base';
import {useDispatch} from 'react-redux';
import profile from '../assets/images/avatar.png';

const Profile = () => {
  const dispatch = useDispatch();
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
        </Header>
      </View>
      <View style={styles.parrent}>
        <View style={styles.bio}>
          <Image source={profile} style={styles.profile} />
          <Text style={styles.postCount}>2 postingan</Text>
        </View>
        <Text style={styles.name}>Nama Pengguna</Text>
        <Text style={styles.bioTxt}>
          Biografi pengguna akan tertulis disini, maka pergunakan dengan baik
        </Text>
        <View style={styles.btnAction}>
          <Button style={styles.btnEdit}>
            <Text>Edit Profile</Text>
          </Button>
          <Button
            style={styles.btnLogout}
            onPress={() => dispatch({type: 'LOGOUT'})}>
            <Text>logout</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000000',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  postCount: {
    fontSize: 25,
    marginLeft: 50,
  },
  cogIcon: {
    marginRight: 10,
    marginTop: 10,
  },
  parrent: {
    padding: 15,
    paddingRight: 25,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#8e8e8e',
  },
  bio: {
    flexDirection: 'row',
    width: 230,
    alignItems: 'center',
  },
  profile: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  btnAction: {
    flexDirection: 'row',
    marginTop: 25,
  },
  btnEdit: {
    marginBottom: 10,
    marginRight: 10,
    width: '50%',
    justifyContent: 'center',
  },
  btnLogout: {
    width: '50%',
    justifyContent: 'center',
  },
});
