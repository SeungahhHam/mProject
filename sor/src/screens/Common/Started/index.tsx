import React, { useContext, useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import Styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import Input  from '~/Components/Input';
import Button from '~/Components/Button';
//import Slider from "@react-native-community/slider";
import axios from "axios";

const StartedContainer = Styled.View`
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
const ConsentContainer = Styled.View`
  padding:0 20px;
  margin-bottom:50px;
`;

const Consent = Styled.View`
  padding:10px;
  border-radius:5px;
  border:2px solid #dedede;
  height:50px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  background:#fff;
  z-index:2;
`;
const ConsentList = Styled.View`
  flex-direction:column;
  margin-top:-10px;
  padding:10px;
  padding-top:20px;
  background-color:#F1F1F5;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
`;
const ConsentListMenu = Styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`;

const ButtonContainer = Styled.View`
  margin:0 0 50px 0;
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

const Started = ({ navigation }: Props) => {

  // 20220113
  var [ConsentAll, setConsentAll] = useState<boolean>(false);
  var [ConsentLi1, setConsentLi1] = useState<boolean>(false);
  var [ConsentLi2, setConsentLi2] = useState<boolean>(false);
  var [ConsentLi3, setConsentLi3] = useState<boolean>(false);
  var [ConsentLi4, setConsentLi4] = useState<boolean>(false);
  var [ConsentLi5, setConsentLi5] = useState<boolean>(false);
  var [ConsentLi6, setConsentLi6] = useState<boolean>(false);
  
  return (
    <StartedContainer style={{ flex: 1, paddingTop:48,}}>
      <ScrollView style={{ flex: 1 }} >
        <TitleContainer>
          <Text style={{fontSize:28,fontWeight:'bold',color:'#191919'}}>어센드 시작하기</Text>
        </TitleContainer>
        <ConsentContainer>
          <Formtitle><Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>약관 동의서를 확인해주세요</Text></Formtitle>
          <Consent>
          <TouchableOpacity
              style={{flexDirection:'row',width:'100%',alignItems:'center'}}
              onPress={() => {
                setConsentAll(!ConsentAll);
              }}
            >
              <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={ConsentAll ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
              <Text style={ConsentAll ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>전체동의</Text>
            </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection:'row',alignItems:'center'}}
                onPress={() => {}}
              >
              <Image resizeMode='contain' style={{ transform: [{ rotate: "180deg" }], width: 20,}} source={require("~/Assets/Images/Login/asend_more.png")} />
            </TouchableOpacity>
          </Consent>
          <ConsentList>
           <ConsentListMenu>
              <TouchableOpacity
                style={{flex:1,flexDirection:'row',alignItems:'center'}}
                onPress={() => {
                  setConsentLi1(!ConsentLi1);
                }}
              >
                <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={ConsentLi1 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                <Text style={ConsentLi1 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>금융거래 필수 확인서</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexShrink:0,flexDirection:'row',alignItems:'center'}}
                onPress={() => navigation.navigate('')}
              >
                <Text style={{fontSize:12,color:'#999999'}}>전문보기</Text>
                <Image resizeMode='contain' style={{ width: 16, marginRight: 6,}} source={require("~/Assets/Images/Login/asend_link.png")} />
              </TouchableOpacity>
            </ConsentListMenu>
            <ConsentListMenu>
              <TouchableOpacity
                style={{flexDirection:'row',alignItems:'center'}}
                onPress={() => {
                  setConsentLi2(!ConsentLi2);
                }}
              >
                <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={ConsentLi2 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                <Text style={ConsentLi2 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>계좌 거래 약관</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexShrink:0,flexDirection:'row',alignItems:'center'}}
                onPress={() => navigation.navigate('')}
              >
                <Text style={{fontSize:12,color:'#999999'}}>전문보기</Text>
                <Image resizeMode='contain' style={{ width: 16, marginRight: 6,}} source={require("~/Assets/Images/Login/asend_link.png")} />
              </TouchableOpacity>
            </ConsentListMenu>
            <ConsentListMenu>
              <TouchableOpacity
                style={{flexDirection:'row',alignItems:'center'}}
                onPress={() => {
                  setConsentLi3(!ConsentLi3);
                }}
              >
                <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={ConsentLi3 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                <Text style={ConsentLi3 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>개인(신용)정보 등 처리사항</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexShrink:0,flexDirection:'row',alignItems:'center'}}
                onPress={() => navigation.navigate('')}
              >
                <Text style={{fontSize:12,color:'#999999'}}>전문보기</Text>
                <Image resizeMode='contain' style={{ width: 16, marginRight: 6,}} source={require("~/Assets/Images/Login/asend_link.png")} />
              </TouchableOpacity>
            </ConsentListMenu>
            <ConsentListMenu>
              <TouchableOpacity
                style={{flexDirection:'row',alignItems:'center'}}
                onPress={() => {
                  setConsentLi4(!ConsentLi4);
                }}
              >
                <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={ConsentLi4 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                <Text style={ConsentLi4 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>개인정보 수집/이용 필수 동의서</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexShrink:0,flexDirection:'row',alignItems:'center'}}
                onPress={() => navigation.navigate('')}
              >
                <Text style={{fontSize:12,color:'#999999'}}>전문보기</Text>
                <Image resizeMode='contain' style={{ width: 16, marginRight: 6,}} source={require("~/Assets/Images/Login/asend_link.png")} />
              </TouchableOpacity>
            </ConsentListMenu>
            <ConsentListMenu>
              <TouchableOpacity
                style={{flexDirection:'row',alignItems:'center'}}
                onPress={() => {
                  setConsentLi5(!ConsentLi5);
                }}
              >
                <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={ConsentLi5 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                <Text style={ConsentLi5 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>[필수] 개인(신용)정보처리동의서</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexShrink:0,flexDirection:'row',alignItems:'center'}}
                onPress={() => navigation.navigate('')}
              >
                <Text style={{fontSize:12,color:'#999999'}}>전문보기</Text>
                <Image resizeMode='contain' style={{ width: 16, marginRight: 6,}} source={require("~/Assets/Images/Login/asend_link.png")} />
              </TouchableOpacity>
            </ConsentListMenu>
            <ConsentListMenu>
              <TouchableOpacity
                style={{flexDirection:'row',alignItems:'center'}}
                onPress={() => {
                  setConsentLi6(!ConsentLi6);
                }}
              >
                <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={ConsentLi6 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                <Text style={ConsentLi6 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>[필수] 개인정보 3차 정보제공 동의</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexShrink:0,flexDirection:'row',alignItems:'center'}}
                onPress={() => navigation.navigate('')}
              >
                <Text style={{fontSize:12,color:'#999999'}}>전문보기</Text>
                <Image resizeMode='contain' style={{ width: 16, marginRight: 6,}} source={require("~/Assets/Images/Login/asend_link.png")} />
              </TouchableOpacity>
            </ConsentListMenu>
          </ConsentList>
        </ConsentContainer>
        <ButtonContainer>
          <TouchableOpacity style={{borderRadius:5,height:50, backgroundColor: '#6524FF', shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}}
            onPress={() => {}}
          >
            <Text style={{fontSize:16,color:'#FFF',textAlign:'center',fontWeight:'bold',lineHeight:50,}}>다음</Text>
          </TouchableOpacity>
        </ButtonContainer>
      </ScrollView>
    </StartedContainer>
  );
};

export default Started;
