import React, { useContext, useEffect, useState } from 'react';
import Styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  Dimensions,
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
`;
const TopContainer = Styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 80px 0 0 0;
`;
const SubLogoImageContainer = Styled.View`
  text-align:left;
  width:100%;
`;
const FormContainer = Styled.View`
  flex: 1;
  width: 100%;
  padding:275px 20px 30px;
`;
const IdContainer = Styled.View`
  width:100%;
`;
const PwContainer = Styled.View`
  width:100%;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const AgreeContainer = Styled.View`
  flex-direction:row;
  justify-content:flex-start;
  width: 100%;
`;
const AutoLogin = Styled.View`
  flex-direction:row;
  align-items:center;
`;
const SaveLogin = Styled.View`
  flex-direction:row;
  align-items:center;
  margin-left: 10px;
`;
const ButtonContainer = Styled.View`
  width:100%;
  height:50px;
  margin: 20px 0px 0px 0px;
`;
const SnsLoginContainer = Styled.View`
  flex:1;
  flex-direction:row;
  margin: 20px -3px 0;
`;
const SnsButton = Styled.View`
  flex:1;
  margin: 0 3px;
  height: 36px;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  border-radius:5px;
  border:1px solid #DBDBDB;
`;
const FindContainer = Styled.View`
  flex:1;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin: 20px 0 0 0;
  width: 100%;
`;
const SignContainer = Styled.View`
  margin:100px 0 25px 0;
  flex-direction:row;
  justify-content:center;
  align-items:center;
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
  var {height, width} = Dimensions.get('window');
  return (
    
      <Container style={{width:width, height:height, backgroundColor:'#fff'}}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentContainer}>
        <Loader loading={loading} />
        <Image resizeMode='contain' style={{position:'absolute',top:0,left:0,right:0,width:width,height:160}} source={require('~/Assets/Images/Login/asend_logo_bg.png')} />
        <TopContainer style={{position:'absolute',width:width}}>
          <SubLogoImageContainer>
            <Image resizeMode='contain' style={{width:width}} source={require("~/Assets/Images/Login/asend_logo.png")} />
          </SubLogoImageContainer>          
        </TopContainer>
        <FormContainer>
          <IdContainer>
            <Input
              style={{ paddingHorizontal: 12, height: 50, borderRadius: 3, borderWidth: 0.1, backgroundColor:'#F1F1F5' }}
              placeholder="아이디 또는 이메일을 입력해주세요."
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </IdContainer>
          <PwContainer>
            <Input
              style={{ paddingHorizontal: 12, height: 50, borderRadius: 3, borderWidth: 0.1, backgroundColor:'#F1F1F5' }}
              placeholder="비밀번호를 입력해주세요."
              secureTextEntry={true}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          </PwContainer>
          <AgreeContainer>
            <AutoLogin>
              <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={require("~/Assets/Images/Login/asend_checked_on.png")} />
              <Text style={{ color: '#191919' }}>자동로그인</Text>
            </AutoLogin>
            <SaveLogin>
              <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={require("~/Assets/Images/Login/asend_checked.png")} />
              <Text style={{ color: '#191919' }}>아이디 저장</Text>
            </SaveLogin>
          </AgreeContainer>
          <ButtonContainer>
            <Button
              style={{ height:50, backgroundColor: '#6524FF', shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5, }}
              label="로그인"
              onPress={() => navigation.navigate('Indicators')}
            />
          </ButtonContainer>
          <SnsLoginContainer>
            <SnsButton>
              <Image resizeMode='contain' style={{ marginRight: 4, width:15 }} source={require('~/Assets/Images/Login/asend_naver.png')} />  
              <Text style={{ fontSize:12 }}>네이버</Text>
            </SnsButton>
            <SnsButton>
              <Image resizeMode='contain' style={{ marginRight: 4, width:15 }}  source={require('~/Assets/Images/Login/asend_kakao.png')} />  
              <Text style={{ fontSize:12 }}>카카오톡</Text>
            </SnsButton>
            <SnsButton>
              <Image resizeMode='contain' style={{ marginRight: 4, width:15 }} source={require('~/Assets/Images/Login/asend_google.png')} />  
              <Text style={{ fontSize:12 }}>구글</Text>
            </SnsButton>
            <SnsButton>
              <Image resizeMode='contain' style={{ marginRight: 4, width:15 }}  source={require('~/Assets/Images/Login/asend_apple.png')} />  
              <Text style={{ fontSize:12 }}>애플</Text>
            </SnsButton>
          </SnsLoginContainer>
          <FindContainer>
            <Text style={{ marginRight:5, fontSize:12 }}>계정을 잊으셨나요?</Text>
            <Text onPress={() => navigation.navigate('FindId')} style={{ fontSize:12, color:'#009DFF' }}>ID찾기</Text>
            <Text style={{ marginHorizontal:5, fontSize:12 }}>또는</Text>
            <Text onPress={() => navigation.navigate('FindPw')} style={{ fontSize:12, color:'#009DFF'}}>비밀번호 찾기</Text>
          </FindContainer>
          <SignContainer>
            <Text style={{ fontSize:12, color:'#767676' }}>아직 회원이 아닌가요?</Text>
            <Text onPress={() => navigation.navigate('JoinPersonal')} style={{ marginLeft: 5, fontSize:12, color:'#191919' }}>회원가입</Text>
            <Image resizeMode='contain' style={{ marginLeft: 4, width:15 }}  source={require('~/Assets/Images/Login/asend_link.png')} />  
          </SignContainer>
        </FormContainer>
        </ScrollView>
      </Container >
    
  );
};
const styles = StyleSheet.create({

})
export default Login;
