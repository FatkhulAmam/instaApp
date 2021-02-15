import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Header, Body, Right, Title} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';

// import action
import {getPost} from '../redux/actions/posts';

import Like from '../assets/images/love.svg';

import CardPost from '../components/CardPost';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(getPost(token));
  }, [dispatch, token]);
  const dataPost = useSelector((state) => state.post.data.result);

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
            <Like style={styles.like} />
          </Right>
        </Header>
      </View>
      <FlatList
        style={styles.flatWrapper}
        data={dataPost}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <CardPost
            userPict={item.userActive.photo}
            photoPost={item.picture}
            userName={item.userActive.name}
            caption={item.description}
            createdAt={moment(item.createdAt, 'YYYYMMDD')
              .startOf('hour')
              .fromNow()}
            commentPage={() => navigation.navigate('Comment', item.id)}
          />
        )}
      />
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
  flatWrapper: {
    marginBottom: 85,
  },
  like: {
    marginRight: 10,
  },
});
