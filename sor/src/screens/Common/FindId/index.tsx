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
const PhoneContainer = Styled.View`
  flex-direction:row;
  margin-bottom:10px;
`;
const ButtonContainer = Styled.View`
  margin:50px 0;
  padding:0 20px;
  flex-direction: column;
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

const FindId = ({ navigation }: Props) => {

  return (
    <StartedContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TitleContainer>
          <Text style={{paddingTop:60,fontSize:16,fontWeight:'500',color:'#191919',textAlign:'center'}}>회원가입 시 등록한 정보로 {"\n"} 아이디 일부를 확인 할 수 있습니다.</Text>
        </TitleContainer>
        <FormContainer>
          <PhoneContainer>
            <Input
              style={{ paddingHorizontal: 12, height: 50, borderRadius: 3, borderWidth: 0.1, backgroundColor:'#F1F1F5' }}
              placeholder="휴대폰번호를 입력해주세요 (‘-‘제외)"
              secureTextEntry={true}
              onChangeText={(text) => {}}
            />
          </PhoneContainer>
        </FormContainer>
        <ButtonContainer>
          <TouchableOpacity style={{borderRadius:5,height:50, backgroundColor: '#6524FF', shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}}
            onPress={() => {}}
          >
            <Text style={{fontSize:16,color:'#FFF',textAlign:'center',fontWeight:'bold',lineHeight:50,}}>확인</Text>
          </TouchableOpacity>
        </ButtonContainer>
      </ScrollView>
    </StartedContainer>
  );
};

export default FindId;
