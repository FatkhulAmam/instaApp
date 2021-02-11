import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'native-base';
import {API_URL} from '@env';

import LikeActive from '../assets/images/loveClick.svg';
import Comment from '../assets/images/bubbleChat.svg';
import profile from '../assets/images/avatar.png';
import pict1 from '../assets/images/gb1.jpg';

export class CardPost extends Component {
  render() {
    return (
      <View style={styles.wraper}>
        <View style={styles.avatarContainer}>
          <Image
            source={
              this.props.userPict !== null
                ? {uri: `${API_URL}${this.props.userPict}`}
                : profile
            }
            style={styles.avatar}
          />
          <Text>@{this.props.userName}</Text>
        </View>
        <Image
          source={
            this.props.photoPost !== ''
              ? {uri: `${API_URL}${this.props.photoPost}`}
              : profile
          }
          style={styles.image}
        />
        <View style={styles.icon}>
          <LikeActive />
          <Comment style={styles.comment} />
        </View>
        <View style={styles.desc}>
          <Text>{this.props.caption}</Text>
          <Text note>Lihat semua komentar</Text>
          <Text note style={styles.time}>
            {this.props.createdAt}
          </Text>
        </View>
      </View>
    );
  }
}

export default CardPost;

const styles = StyleSheet.create({
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
  comment: {
    marginLeft: 15,
  },
});
