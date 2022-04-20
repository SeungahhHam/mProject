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
  TouchableOpacity,
} from 'react-native';

import SplashScreen    from 'react-native-splash-screen';
import { UserContext } from '../../../Context/User/index';
import Input  from '~/Components/Input';
import Button from '~/Components/Button';
//import Icon   from 'react-native-vector-icons/Ionicons';
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
  margin: 180px 0px 30px 0px;
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

  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');


  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const handleSubmitPress = () => {

    setErrortext('');
    if (!email) {
      alert('이메일을 입력해주세요');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    setLoading(true);
    let dataToSend = { mbid: email, mbpass: password};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://49.247.38.159:3002/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          //AsyncStorage.setItem('user_id', responseJson.data.mbid);
          //AsyncStorage.setItem('user_name', responseJson.data.myName);
          login(responseJson.data.mbid,responseJson.data.myName);
          //console.log(responseJson.data.mbid);
          //navigation.replace('DrawerNavigationRoutes');
          //setMovePage("true");
          //navigation.replace("Login");

        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password'); 
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    
      <ImageBackground  style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('~/Assets/Images/Background.png')}>                   
        <Loader loading={loading} />
        <TopContainer>                              
          <SubLogoImageContainer>
            <Image source={require("~/Assets/Images/topbg.png")} />
          </SubLogoImageContainer>          
        </TopContainer>
        <FormContainer>
          <IdContainer>
            <Input
              style={{ height: 50, borderRadius: 3, borderWidth: 0.1 }}
              placeholder="이메일"
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </IdContainer>
          <PwContainer>
            <Input
              style={{ height: 50, borderRadius: 3, borderWidth: 0.1 }}
              placeholder="비밀번호"
              secureTextEntry={true}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          </PwContainer>
          <ButtonContainer>
            <Button
              style={{ height: 50, backgroundColor: '#ff3c51' }}
              label="로그인"
              onPress={() => {
                console.log(email);
                console.log(password);
                //handleSubmitPress();
                login(email, password);
                // login('dev.yakuza@gmail.com', 'password');
                // login('test', 'test1');
              }}
            />
          </ButtonContainer>

          <AutoLoginContainer>
            {/* <Icon style={{ fontSize: 20, color: 'gray' }} name="chevron-down-circle-outline" /> */}
            <Text style={{ color: 'gray' }}>자동로그인</Text>
          </AutoLoginContainer>

          <SnsLoginContainer>
            <Image source={require("~/Assets/Images/Login/i_kakao.png")} />
            <Image style={{ marginLeft: 24 }} source={require("~/Assets/Images/Login/i_naver.png")} />
            <Image style={{ marginLeft: 24 }} source={require("~/Assets/Images/Login/i_apple.png")} />
          </SnsLoginContainer>

          <MemberContainer>
            <Text onPress={() => navigation.navigate('Find')} style={{ paddingRight: 15 }}>ID/PW 찾기</Text>
            <View style={{
              height: 24,
              paddingLeft: 15,
              paddingRight: 15,
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderColor: '#c0c0c2'
            }}
            >
              <Text onPress={() => navigation.navigate('JoinPersonal')}>일반 회원가입</Text>
            </View>
            <Text onPress={() => navigation.navigate('JoinCompany')} style={{ paddingLeft: 15 }}>파트너 회원가입</Text>
          </MemberContainer>

          {/*
        <PasswordReset onPress={() => navigation.navigate('PasswordReset')}>
          비밀번호 재설정
        </PasswordReset>
        */}

        </FormContainer>

      </ImageBackground >
    
  );
};
const styles = StyleSheet.create({

  imgBackground: {
    width: '100%',
    height: '100%',    
    flex: 1,
    backgroundColor: "#FEFFFF"    
  }, 

})
export default Login;
