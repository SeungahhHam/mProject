import React, { useContext, useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import Styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import Input  from '~/Components/Input';
import Button from '~/Components/Button';
//import Slider from "@react-native-community/slider";
import axios from "axios";

const HeaderRightContainer = Styled.View`
  flex-direction: column;
  width: 100%; 
  min-height: 100%;
  background: #fff;
  padding:25px 0 0 0;
`;
const QnaContainer = Styled.View`
  flex-direction: column;
  width: 100%; 
  min-height: 100%;
  background: #fff;
  padding:25px 20px;
`;

const TopContainer = Styled.View`
  marginBottom:50px;
  padding:20px;
`;
const TopText = Styled.View`
  padding:20px 20px;
`;
const TopTit = Styled.View`
`;
const TopSub = Styled.View`
`;
const TopTxt = Styled.View`
`;
const FormContainer = Styled.View`
`;
const MailContainer = Styled.View`
  flex-direction:column;
  margin-bottom:10px;
`;
const EnquiryContainer = Styled.View`
  flex-direction:column;
`;
const ButtonContainer = Styled.View`
  margin-top:30px;
  flex-direction:column;
`;

import { RandomUserDataContext } from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Feed from '~/Components/Feed';

import StoryList from './StoryList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigator from '../../Navigator';

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed33'>;

interface Props {
  navigation: NavigationProp;
}

const Qna = ({ navigation }: Props) => {

  return (
    <QnaContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TopContainer>
          <TopText style={{alignItems:'center',justifyContent:'center'}}>
            <TopTit style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:30,fontWeight:'bold',color:'#191919',}}>QnA</Text>
            </TopTit>
            <TopTxt style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
              <Text style={{textAlign:'center',fontSize:16,color:'#191919',}}>궁금하신 점이나, 문의 사항이 있으시다면 {'\n'} 저희에게 바로 알려주세요 :)</Text>
            </TopTxt>
          </TopText>
        </TopContainer>
        <FormContainer>
          <MailContainer>
            <Text style={{marginBottom:10,paddingHorizontal:5,fontSize:14,fontWeight:'bold',color:'#191919'}}> 이메일</Text>
            <Input
              style={{ paddingHorizontal: 12, height: 50, borderRadius: 3, borderWidth: 0.1, backgroundColor:'#F1F1F5' }}
              placeholder=""
              secureTextEntry={true}
              onChangeText={(text) => {}}
            />
          </MailContainer>
          <EnquiryContainer>
            <Text style={{marginBottom:10,paddingHorizontal:5,fontSize:14,fontWeight:'bold',color:'#191919'}}> 문의사항</Text>
            <Input
              style={{ paddingHorizontal: 12, height: 150, borderRadius: 3, borderWidth: 0.1, backgroundColor:'#F1F1F5' }}
              placeholder=""
              secureTextEntry={true}
              onChangeText={(text) => {}}
            />
          </EnquiryContainer>
          <ButtonContainer>
            <TouchableOpacity style={{borderRadius:5,height:50, backgroundColor: '#6524FF', shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}} >
                <Text style={{fontSize:16,color:'#FFF',textAlign:'center',fontWeight:'bold',lineHeight:50,}}>보내기</Text>
            </TouchableOpacity>
          </ButtonContainer>
        </FormContainer>
      </ScrollView>
    </QnaContainer>
  );
};

export default Qna;
