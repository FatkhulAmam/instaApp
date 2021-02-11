import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Text, Header, Form, Item, Label, Input, Button} from 'native-base';
import * as yup from 'yup';
import {Formik} from 'formik';
import {signinAction} from '../redux/actions/auth';

import logoFb from '../assets/images/fbLogo.png';

const schemaValidation = yup.object().shape({
  name: yup.string().required('Fullname is required'),
  email: yup
    .string()
    .email('Must have @ and .com')
    .required('Email address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password min ${min} character`)
    .required('Password required'),
});

class SignIn extends React.Component {
  doSignIn = async (data) => {
    await this.props.signinAction(data);
    const {message, isError} = this.props.auth;
    if (isError === true) {
      Alert.alert(message);
    } else {
      Alert.alert(message);
      this.props.navigation.navigate('Login');
    }
  };

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Header style={styles.header} transparent>
              <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
              <Text>bahasa indonesia</Text>
            </Header>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Inspict</Text>
            <TouchableOpacity style={styles.facebooWrap}>
              <Image source={logoFb} style={styles.facebook} />
              <Text style={styles.fbnext}>Masuk dengan Facebook</Text>
            </TouchableOpacity>
            <Text note style={styles.atau}>
              ATAU
            </Text>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
              }}
              validationSchema={schemaValidation}
              onSubmit={(values) => this.doSignIn(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
              }) => (
                <View>
                  <Form style={styles.formWrap}>
                    <Item floatingLabel>
                      <Label>Username</Label>
                      <Input
                        name="name"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                      />
                    </Item>
                    {touched.name && errors.name && (
                      <Text style={styles.textError}>{errors.name}</Text>
                    )}
                    <Item floatingLabel>
                      <Label>Email</Label>
                      <Input
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                      />
                    </Item>
                    {touched.email && errors.email && (
                      <Text style={styles.textError}>{errors.email}</Text>
                    )}
                    <Item floatingLabel>
                      <Label>Password</Label>
                      <Input
                        secureTextEntry
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                      />
                    </Item>
                    {touched.password && errors.password && (
                      <Text style={styles.textError}>{errors.password}</Text>
                    )}
                  </Form>
                  <Button style={styles.btnSign} block onPress={handleSubmit}>
                    <Text style={styles.btntext}>sign in</Text>
                  </Button>
                  <View style={styles.SignUp}>
                    <Text>Sudah Punya Akun? </Text>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Login')}>
                      <Text style={styles.daftarTxt}>Masuk</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {
  signinAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  facebooWrap: {
    backgroundColor: '#0095F6',
    color: '#fff',
    width: 250,
    height: 40,
    borderRadius: 5,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fbnext: {
    color: '#fff',
    marginLeft: 10,
  },
  atau: {
    marginTop: 15,
    fontSize: 18,
  },
  formWrap: {
    width: 320,
    height: 100,
    marginBottom: 50,
    marginRight: 20,
  },
  textError: {
    fontSize: 10,
    color: '#ad000c',
    marginLeft: 15,
    fontStyle: 'italic',
  },
  forgot: {
    marginLeft: 200,
  },
  btnSign: {
    marginTop: 80,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    height: 40,
    borderRadius: 5,
  },
  daftarTxt: {
    color: '#001aff',
  },
  facebook: {
    width: 20,
    height: 20,
  },
  SignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
