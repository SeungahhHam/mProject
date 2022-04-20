import React, { useContext, useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import Styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import Input from '~/Components/Input';
import Button from '~/Components/Button';
//import Slider from "@react-native-community/slider";
import axios from "axios";

const HeaderRightContainer = Styled.View`
  flex-direction: row;
`;
const JoinContainer = Styled.View`
  flex-direction: column;
  width: 100%; 
  min-height: 100%;
  background: #fff;
  padding:25px 0 0 0;
`;
const TitleContainer = Styled.View`
  flex-direction: column;
  justify-Content: center;
  padding:20px 20px 0 20px;
  margin:0 0 50px 0;
`;
const FormContainer = Styled.View`
  padding:0 20px;
`;
const Formtitle = Styled.View`
  margin-bottom:8px;
`;
const IdContainer = Styled.View`
  margin-bottom:20px;
`;
const PwContainer = Styled.View`
  margin-bottom:40px;
`;
const PhoneContainer = Styled.View`
  flex-direction:row;
  margin-bottom:10px;
`;
const VerificationContainer = Styled.View`
  flex-direction:row;
  align-items:flex-end;
  margin-bottom:25px;
`;
const Verification = Styled.View`
`;
const OptionContainer = Styled.View`
  padding:0 20px;
`;
const AgreeContainer = Styled.View`
  padding:10px;
  border-radius:5px;
  border:2px solid #dedede;
  height:50px;
  flex-direction:row;
  align-items:center;
`;
const Agree = Styled.View`
  flex-direction:row;
  align-items:center;
`;
const More = Styled.View`
  position:absolute;
  top:4px;
  right:12px;
  flex-direction:row;
  align-items:center;
`;
const ButtonContainer = Styled.View`
  margin:50px 0;
  padding:0 20px;
  flex-direction: column;
`;

import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigator from '../../Navigator';

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed33'>;

interface Props {
  navigation: NavigationProp;
}

const Join_personal = ({ navigation }: Props) => {

  var [approvalTermOfUse, setApprovalTermOfUse] = useState<boolean>(false);

  return (
    <JoinContainer style={{ flex: 1,paddingTop:48}}>
      <ScrollView style={{ flex: 1 }}>
        <TitleContainer>
          <Text style={{fontSize:28,fontWeight:'bold',color:'#191919'}}>회원가입</Text>
        </TitleContainer>
        <FormContainer>
          <Formtitle><Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>아이디 (이메일)</Text></Formtitle>
          <IdContainer>
            <Input
              style={{ flex:1,paddingHorizontal: 12, height: 50, borderRadius: 3, borderWidth: 0.1, backgroundColor:'#F1F1F5' }}
              placeholder="영문 + 숫자 8자리 이상"
            />
          </IdContainer>
          <Formtitle><Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>비밀번호</Text></Formtitle>
          <PwContainer>
            <Input
              style={{ flex:1,paddingHorizontal: 12, height: 50, borderRadius: 3, borderWidth: 0.1, backgroundColor:'#F1F1F5' }}
              placeholder="영문 + 숫자 10~16자리 이상"
            />
            <Image resizeMode='contain' style={{ position:'absolute',top:12,right:12,marginRight: 4, width:24 }}  source={require('~/Assets/Images/Login/asend_view.png')} />  
          </PwContainer>
          <Formtitle><Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>휴대폰 번호</Text></Formtitle>
          <PhoneContainer>
            <Input
              style={{ flex:1,paddingHorizontal: 12, height: 50, borderRadius: 3, borderWidth: 0.1, backgroundColor:'#F1F1F5' }}
              placeholder="휴대전화 번호 (-제외 입력)"
            />
            <Text style={{alignItems:'center',textAlign:'center',justifyContent:'center',marginLeft:10,height:50,lineHeight:50,width:120,borderRadius: 3,backgroundColor:'#6524FF',fontSize:14,fontWeight:'bold',color:'#fff'}}>인증하기</Text>
          </PhoneContainer>
          <VerificationContainer style={{flex:1}}>
            <Verification style={{flex:1,borderRadius: 3, borderWidth: 1, borderColor:'#6524FF', backgroundColor:'#fff'}}>
              <Input
                style={{ flex:1,paddingRight:40,paddingHorizontal: 12, width:'100%',height:36,borderWidth:0,backgroundColor:'transparent'}}
                placeholder=""
              />
              <Text style={{position:'absolute',top:12,right:12,marginRight: 4, fontSize:12,color:'#FF2470'}}>2:56</Text>
            </Verification>
            <Text style={{flexShrink:0,width:120,marginLeft:10,textDecorationLine:'underline',fontSize:12,color:'#999'}}>인증번호 문자가 안와요</Text>
          </VerificationContainer>
        </FormContainer>
        <OptionContainer>
          <Formtitle><Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>마케팅 수신 동의</Text></Formtitle>
          <AgreeContainer>
            <Agree>
              <TouchableOpacity
                style={{flexDirection:'row',alignItems:'center'}}
                onPress={() => {
                  setApprovalTermOfUse(!approvalTermOfUse);
                }}
              >
                <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={approvalTermOfUse ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                <Text style={approvalTermOfUse ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>동의</Text>
              </TouchableOpacity>
            </Agree>
            <More>
              <Text style={{color:'#999999'}}>내용보기</Text>
              <Image resizeMode='contain' style={{ width: 20, marginLeft: 6,}} source={require("~/Assets/Images/Login/asend_more.png")} />
            </More>
          </AgreeContainer>
        </OptionContainer>
        <ButtonContainer>
          <TouchableOpacity style={{borderRadius:5,height:50, backgroundColor: '#6524FF', shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}}
            onPress={() => navigation.navigate('Started')}
          >
            <Text style={{fontSize:16,color:'#FFF',textAlign:'center',fontWeight:'bold',lineHeight:50,}}>다음</Text>
          </TouchableOpacity>
        </ButtonContainer>
      </ScrollView>
    </JoinContainer>
  );
};

export default Join_personal;
