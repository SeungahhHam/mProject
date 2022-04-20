import React, { useContext, useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  FlatList,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import SplashScreen    from 'react-native-splash-screen';
import { UserContext } from '../../../Context/User/index';
import Input  from '~/Components/Input';
import Button from '~/Components/Button';
import Icon   from 'react-native-vector-icons/Ionicons';
import Loader from '~/Components/Loader';

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #FEFFFF;
  padding: 0px 19.7px;
`;

const TopContainer = Styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  margin: 0px 0px 30px 0px;
`;

const BackgroundImageContainer = Styled.View`
  margin-bottom:30px;  
`;
const LogoImageContainer = Styled.View`
  margin-bottom:12px;  
`;
const SubLogoImageContainer = Styled.View`
  margin-bottom:16px;  
`;
const LoginTextContainer = Styled.View`
`;

const FormContainer = Styled.View`
flex: 1;
width: 100%;
align-items: center;
padding: 0px 17px 34px;
`;

const IdContainer = Styled.View`
  width:100%;
`;
const PwContainer = Styled.View`
  width:100%;
  margin-top: 15px;
`;
const ButtonContainer = Styled.View`
  width:100%;
  height:50px;
  margin: 20px 0px 0px 0px;
`;
const AutoLoginContainer = Styled.View`
  width:100%;  
  margin-top: 20px;
  flex:1;
  flex-direction:row;
  justify-content: flex-end;
  align-items:flex-start;
`;
const SnsLoginContainer = Styled.View`
  flex:1;
  flex-direction:row;
`;
const MemberContainer = Styled.View`
  margin-top: 22px;
  flex:1;
  flex-direction:row;
`;


const PasswordReset = Styled.Text`
  width: 100%;
  color: #3796EF;
  text-align: right;
  margin-bottom: 24px;
`;

type NavigationProp = StackNavigationProp<LoginNaviParamList, 'Login'>;
interface Props {
  navigation: NavigationProp;
}
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({ navigation }: Props) => {

    const { login } = useContext<IUserContext>(UserContext); 


//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);

  const handleSubmitPress = () => {

    // setErrortext('');
    // if (!email) {
    //   alert('이메일을 입력해주세요');
    //   return;
    // }
    // if (!password) {
    //   alert('비밀번호를 입력해주세요');
    //   return;
    // }
    // setLoading(true);
    // let dataToSend = { mbid: email, mbpass: password};
    // let formBody = [];
    // for (let key in dataToSend) {
    //   let encodedKey = encodeURIComponent(key);
    //   let encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    // formBody = formBody.join('&');

    // fetch('http://49.247.38.159:3002/login', {
    //   method: 'POST',
    //   body: formBody,
    //   headers: {
    //     //Header Defination
    //     'Content-Type':
    //     'application/x-www-form-urlencoded;charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.log(responseJson);
    //     // If server response message same as Data Matched
    //     if (responseJson.status === 'success') {
    //       //AsyncStorage.setItem('user_id', responseJson.data.mbid);
    //       //AsyncStorage.setItem('user_name', responseJson.data.myName);
    //       login(responseJson.data.mbid,responseJson.data.myName);
    //       //console.log(responseJson.data.mbid);
    //       //navigation.replace('DrawerNavigationRoutes');
    //       //setMovePage("true");
    //       //navigation.replace("Login");

    //     } else {
    //       setErrortext(responseJson.msg);
    //       console.log('Please check your email id or password'); 
    //     }
    //   })
    //   .catch((error) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.error(error);
    //   });
  };

  return (

    <ScrollView>
      <Container>
        <Text>Main</Text>
      </Container>
    </ScrollView>
  );
};

export default Login;
