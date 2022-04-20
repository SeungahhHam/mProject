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
const IndicatorsContainer = Styled.View`
  flex-direction: column;
  width: 100%; 
  min-height: 100%;
  background: #fff;
  padding:25px 0 0 0;
`;
const TopContainer = Styled.View`
  marginBottom:50px;
  padding:20px;
`;
const TopText = Styled.View`
  flex-direction: row;
  flex-wrap:wrap;
`;
const Contents = Styled.View`
  flex-direction: column;
  marginBottom:25px;
  padding:0 20px;
`;
const ContentTitle = Styled.View`
  flex-direction: row;
`;
const ContentCont = Styled.View`
  flex-direction: row;
`;
const IntroContainer = Styled.View`
  padding: 0 20px;
`;
const IntroCont = Styled.View`
`;

const GreetCont = Styled.View`
  padding:10px;
`;
const PremiumCont = Styled.View`
  padding:10px;
`;
const Backtesting = Styled.View`

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

const Mypages = ({ navigation }: Props) => {

  return (
    <IndicatorsContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TopContainer style={{paddingTop:60,}}>
          <TopText style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'#191919',}}>My Page</Text>
          </TopText>
        </TopContainer>

        {/* <IntroContainer style={{marginBottom:25}}>
          <IntroCont style={{padding:10,borderRadius:6,backgroundColor:'#F8F8FA'}}>
            <GreetCont style={{marginBottom:10}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#191919',}}>Test1님, 안녕하세요 !</Text>
            </GreetCont>
            <PremiumCont>
              <Text style={{fontSize:18,color:'#191919'}}><Text style={{fontWeight:'bold'}}>구독 "3" 개월</Text> 째 {"\n"}현재 <Text style={{fontWeight:'bold',color:"#6524FF"}}>프리미엄</Text> 유저입니다.</Text>
              <Text style={{position:'absolute',bottom:10,right:0,paddingHorizontal:6,alignItems:'center',fontSize:12,}}>구독 취소하기 <Image resizeMode='contain' style={{width:15}}  source={require('~/Assets/Images/Tab1/asend_link.png')} /></Text>
            </PremiumCont>
          </IntroCont>
        </IntroContainer> */}

        <IntroContainer style={{marginBottom:25}}>
          <IntroCont style={{padding:10,borderRadius:6,backgroundColor:'#F8F8FA'}}>
            <GreetCont style={{marginBottom:10}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'#191919',}}>Test1님, 안녕하세요 !</Text>
            </GreetCont>
            <PremiumCont>
              <Text style={{fontSize:18,color:'#191919'}}><Text style={{fontWeight:'bold'}}>현재</Text> {"\n"}<Text style={{fontWeight:'bold',color:"#6524FF"}}>일반</Text> 유저입니다.</Text>
              <Text style={{position:'absolute',bottom:10,right:0,paddingHorizontal:6,alignItems:'center',fontSize:12,color:'#fff',borderRadius:5,backgroundColor:'#6524FF'}}>어센드 프리미엄 시작하기 <Image resizeMode='contain' style={{width:15}}  source={require('~/Assets/Images/Tab1/asend_link2.png')} /></Text>
            </PremiumCont>
          </IntroCont>
        </IntroContainer>
        <Contents>
          <ContentTitle style={{marginBottom:20,width:'100%'}}>
            <Text style={{fontSize:19,fontWeight:'bold',color:'#191919'}}>MY Backtesting</Text>
            <Image style={{position:'absolute',top:6,right:0,width:15,}} resizeMode='contain'  source={require('~/Assets/Images/Tab3/asend_close.png')} />
          </ContentTitle>
          <ContentCont style={{flexDirection:"column"}}>
            <Backtesting>
              <View style={{marginBottom:10,paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between',borderRadius:6,backgroundColor:'#F8F8FA'}}>
                <Text style={{lineHeight:40,fontSize:14,color:'#191919'}}>08. 24. 2021</Text>
                <Text style={{lineHeight:40,fontSize:14,color:'#191919'}}>전체 백테스팅 수익률 : <Text style={{fontWeight:'bold',color:'#FF2470'}}>0.00%</Text></Text>
              </View>
              
              {/* <View style={{marginBottom:10,paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between',borderRadius:6,backgroundColor:'#F8F8FA'}}>
                <Text style={{lineHeight:40,fontSize:14,color:'#191919'}}>08. 24. 2021</Text>
                <Text style={{lineHeight:40,fontSize:14,color:'#191919'}}>전체 백테스팅 수익률 : <Text style={{fontWeight:'bold',color:'#FF2470'}}>38.0%</Text></Text>
              </View>
              <View style={{marginBottom:10,paddingHorizontal:10,flexDirection:'row',justifyContent:'space-between',borderRadius:6,backgroundColor:'#F8F8FA'}}>
                <Text style={{lineHeight:40,fontSize:14,color:'#191919'}}>08. 24. 2021</Text>
                <Text style={{lineHeight:40,fontSize:14,color:'#191919'}}>전체 백테스팅 수익률 : <Text style={{fontWeight:'bold',color:'#FF2470'}}>7.48%</Text></Text>
              </View> */}

            </Backtesting>
          </ContentCont>
        </Contents>

        <TouchableOpacity style={{borderRadius:5,height:50, backgroundColor: '#6524FF', shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={{fontSize:16,color:'#FFF',textAlign:'center',fontWeight:'bold',lineHeight:50,}}>검색 바로가기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius:5,height:50, backgroundColor: '#6524FF', shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}}
          onPress={() => navigation.navigate('Tutorial')}
        >
          <Text style={{fontSize:16,color:'#FFF',textAlign:'center',fontWeight:'bold',lineHeight:50,}}>튜토리얼 바로가기</Text>
        </TouchableOpacity>

      </ScrollView>
    </IndicatorsContainer>
  );
};

export default Mypages;
