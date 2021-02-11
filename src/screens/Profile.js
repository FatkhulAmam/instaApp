import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Header, Body, Right, Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';

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
          <Right>
            <TouchableOpacity onPress={() => dispatch({type: 'LOGOUT'})}>
              <Icon name="cog" size={25} style={styles.cogIcon} />
            </TouchableOpacity>
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
  cogIcon: {
    marginRight: 10,
    marginTop: 10,
  },
});
