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
const TutorialContainer = Styled.View`
  flex-direction: column;
  width: 100%; 
  min-height: 100%;
  background: #fff;
  padding:25px 20px;
`;
const TopContainer = Styled.View`
  marginBottom:25px;
  padding:20px;
`;
const TopText = Styled.View`
  flex-direction: row;
  flex-wrap:wrap;
`;
const TutorialList = Styled.View`
  flex-direction: column;

`;
const TutorialListView = Styled.View`
  margin-bottom:15;
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

const Tutorial = ({ navigation }: Props) => {
  
  var [Tutorial1, setTutorial1] = useState<boolean>(false);
  var [Tutorial2, setTutorial2] = useState<boolean>(false);

  return (
    <TutorialContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TopContainer>
          <TopText>
            <Text style={{textAlign:'center',fontSize:19,fontWeight:'bold',color:'#191919',}}>어센드를  <Text style={{color:'#6524FF',}}>200% 활용</Text>할 수 있는 방법들을 만나보세요.</Text>
          </TopText>
        </TopContainer>
        <TutorialList>
          <TutorialListView>
          <TouchableOpacity style={{marginBottom:10,flexDirection:'column'}} onPress={() => { setTutorial1(!Tutorial1); }}>                
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50,paddingHorizontal:10,borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',backgroundColor:'#fff',zIndex:5}}>
                <Text style={{fontSize:14,color:'#191919'}}>기본 튜토리얼</Text>
                <Image resizeMode='contain' style={Tutorial1 ? { width:16, transform: [{  rotate: "180deg" }] } : { width:16, transform: [{ rotate: "0deg" }]}} source={require("~/Assets/Images/Common/asend_dropdown.png")} />
              </View>
              <View style={Tutorial1 ? { marginTop:-15,padding:15,paddingTop:25,borderBottomLeftRadius:5,borderBottomRightRadius:5,backgroundColor:'#EFEFF5', } : { marginTop:-10,padding:0,paddingTop:10,height:0,borderBottomLeftRadius:5,borderBottomRightRadius:5,backgroundColor:'#EFEFF5'  }}>
                <Text style={{lineHeight:24,fontSize:14,}}>어센드를 처음 사용하시나요? 화면 하단의 메뉴를 통해 ‘지표’, ‘테스팅’, ‘마이페이지’로 이동하실 수 있습니다. 지표 페이지 에서는 여러 지표들을 비교해 보고, 각각의 지표에 대한 세부정보를 볼 수 있습니다. 테스팅 페이지를 통해, 투자 전략을 직접 백테스팅하여 수익성을 검증해 볼 수 있습니다. 마이페이지에서 우수한 수익률의 벡테스팅 결과와 개인정보를 관리하세요. </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginBottom:10,flexDirection:'column'}} onPress={() => { setTutorial2(!Tutorial2); }}>                
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50,paddingHorizontal:10,borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',backgroundColor:'#fff',zIndex:5}}>
                <Text style={{fontSize:14,color:'#191919'}}>어센드의 지표들이란?</Text>
                <Image resizeMode='contain' style={Tutorial2 ? { width:16, transform: [{  rotate: "180deg" }] } : { width:16, transform: [{ rotate: "0deg" }]}} source={require("~/Assets/Images/Common/asend_dropdown.png")} />
              </View>
              <View style={Tutorial2 ? { marginTop:-15,padding:15,paddingTop:25,borderBottomLeftRadius:5,borderBottomRightRadius:5,backgroundColor:'#EFEFF5', } : { marginTop:-10,padding:0,paddingTop:10,height:0,borderBottomLeftRadius:5,borderBottomRightRadius:5,backgroundColor:'#EFEFF5'  }}>
                <Text style={{lineHeight:24,fontSize:14,}}>어센드를 처음 사용하시나요? 화면 하단의 메뉴를 통해 ‘지표’, ‘테스팅’, ‘마이페이지’로 이동하실 수 있습니다. 지표 페이지 에서는 여러 지표들을 비교해 보고, 각각의 지표에 대한 세부정보를 볼 수 있습니다. 테스팅 페이지를 통해, 투자 전략을 직접 백테스팅하여 수익성을 검증해 볼 수 있습니다. 마이페이지에서 우수한 수익률의 벡테스팅 결과와 개인정보를 관리하세요. </Text>
              </View>
            </TouchableOpacity>
          </TutorialListView>
        </TutorialList>
      </ScrollView>
    </TutorialContainer>
  );
};

export default Tutorial;
