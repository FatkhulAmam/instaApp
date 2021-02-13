import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Header, Body, Right, Title, Text, Input, Button} from 'native-base';
import * as ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../redux/actions/posts';

import profile from '../assets/images/avatar.png';

const options = {
  title: 'Select Picture',
};

const showToastImg = () => {
  ToastAndroid.showWithGravity(
    'Not an image (jpg/jpeg/png)',
    ToastAndroid.LONG,
    ToastAndroid.CENTER,
  );
};

const EditPost = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [PostImage, setPostImage] = useState(profile);
  const [dataImage, setDataImage] = React.useState('');
  const [caption, setCaption] = useState();

  useEffect(() => {});

  const takePicture = () => {
    ImagePicker.launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        if (`${response.type}` === 'image/jpg' || 'image/jpeg' || 'image/png') {
          setPostImage({uri: response.uri});
          await setDataImage({
            uri: response.uri,
            name: response.fileName,
            type: response.type,
          });
        } else {
          showToastImg();
        }
      }
    });
  };

  const doLogin = async () => {
    const form = new FormData();
    form.append('caption', caption);
    form.append('pictures', dataImage);
    await dispatch(addPost(token, form));
  };

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
            <TouchableOpacity onPress={doLogin}>
              <Text>Posting</Text>
            </TouchableOpacity>
          </Right>
        </Header>
      </View>
      <View style={styles.wraperPost}>
        <Image source={PostImage} style={styles.imgPost} />
        <Input
          style={styles.txtInput}
          placeholder="tambahkan pemikiranmu"
          onChangeText={() => {
            setCaption;
          }}
        />
      </View>
      <View style={styles.btnPost}>
        <Button style={styles.btnInWraper} onPress={takePicture}>
          <Text>Post Picture</Text>
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
