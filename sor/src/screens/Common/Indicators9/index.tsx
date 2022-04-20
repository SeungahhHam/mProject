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
  padding:20px 20px;
`;
const TopTit = Styled.View`
`;
const TopSub = Styled.View`
`;
const TopTxt = Styled.View`
`;
const IndiContainer = Styled.View`
  padding: 0 20px;
`;
const Quant = Styled.View`
  flex-direction:column;
  margin:0 -20px;
  padding:20px 40px 40px;
  
`;
const QuantBackground = Styled.View`
  z-index:0;
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:75%;
  background-color:#F8F8FA;
  border-radius:10px;
`;
const QuantTitle = Styled.View`
  width:100%;
`;
const QuantCont = Styled.View`
`;
const QuantBox = Styled.View`
  border-radius:10px;
  border-width:1px;
  border-color:#6524FF;
  overflow:hidden;
`;
const QuantTit = Styled.View`
  padding:0 10px;
  background-color:#fff;
`;
const QuantTxt = Styled.View`
  padding:10px;
  background-color:#fbfbfc;
`;
const QuantCaut = Styled.View`
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

const Indicators9 = ({ navigation }: Props) => {

  return (
    <IndicatorsContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TopContainer>
          <TopText style={{alignItems:'center',justifyContent:'center'}}>
            <TopTit style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Image resizeMode='contain' style={{width:110,height:30}}  source={require('~/Assets/Images/Tab1/asned_top_logo.png')} />
              <Text style={{fontSize:30,fontWeight:'bold',color:'#191919',}}>퀀트 전략</Text>
            </TopTit>
            <TopSub style={{alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:15,color:'#191919',}}>어렵고 복잡한 정보 대신, 세상의 소리와 트렌드로 구성한 어센드의 퀀트 전략에서 인사이트를 얻으세요.</Text>
            </TopSub>
          </TopText>
        </TopContainer>
        <IndiContainer>
          <Quant>
            <QuantBackground></QuantBackground>
            <QuantTitle style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:25}}>
              <View>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#191919'}}>1. 탑트렌디 + {'\n'}언론감성 경기 민감주 퀀트</Text>
              </View>
              <View>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#191919',textAlign:'right'}}>평균 수익률</Text>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#FF2470',textAlign:'right'}}>+ 18.73%</Text>
              </View>
            </QuantTitle>
            <QuantCont>
              <QuantBox>
                <QuantTit><Text style={{lineHeight:30,fontSize:16,color:'#191919'}}>엔터 + 메타버스 + 수소</Text></QuantTit>
                <QuantTxt>
                  <View style={{flexDirection:'row',height:30,alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:14,fontWeight:'500',color:'#191919'}}>HYP</Text>
                    <Text style={{fontSize:14,color:'#191919'}}>TOP 20</Text>
                  </View>
                  <View style={{flexDirection:'row',height:30,alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:14,fontWeight:'500',color:'#191919'}}>EWD</Text>
                    <Text style={{fontSize:14,color:'#191919'}}>3m TOP 500</Text>
                  </View>
                </QuantTxt>
              </QuantBox>
              <View style={{marginTop:15,flexDirection:'column',alignItems:'flex-end'}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingVertical:5,paddingHorizontal:10,backgroundColor:'#6524FF',borderRadius:6,borderWidth:1,borderColor:'#dbdbdb'}}>
                  <Text style={{fontSize:13,fontWeight:'bold',color:'#fff'}}>퀀트 예시 보기</Text>
                  <Image resizeMode='contain' style={{width:15,marginLeft:6}}  source={require('~/Assets/Images/Tab1/asend_link2.png')} />
                </TouchableOpacity>
              </View>
            </QuantCont>
          </Quant>
          <Quant>
            <QuantBackground></QuantBackground>
            <QuantTitle style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:25}}>
              <View>
                <Text style={{fontSize:18,fontWeight:'bold',color:'#191919'}}>2. 트렌디 + {'\n'}전문가 선호 퀀트</Text>
              </View>
              <View>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#191919',textAlign:'right'}}>평균 수익률</Text>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#0045FF',textAlign:'right'}}>- 1.68%</Text>
              </View>
            </QuantTitle>
            <QuantCont>
              <QuantBox>
                <QuantTit><Text style={{lineHeight:30,fontSize:16,color:'#191919'}}>엔터 + 메타버스 + 수소</Text></QuantTit>
                <QuantTxt>
                  <View style={{flexDirection:'row',height:30,alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:14,fontWeight:'500',color:'#191919'}}>HYP</Text>
                    <Text style={{fontSize:14,color:'#191919'}}>TOP 20</Text>
                  </View>
                  <View style={{flexDirection:'row',height:30,alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:14,fontWeight:'500',color:'#191919'}}>EWD</Text>
                    <Text style={{fontSize:14,color:'#191919'}}>3m TOP 500</Text>
                  </View>
                </QuantTxt>
              </QuantBox>
              <View style={{marginTop:15,flexDirection:'column',alignItems:'flex-end'}}>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingVertical:5,paddingHorizontal:10,backgroundColor:'#6524FF',borderRadius:6,borderWidth:1,borderColor:'#dbdbdb'}}>
                  <Text style={{fontSize:13,fontWeight:'bold',color:'#fff'}}>퀀트 예시 보기</Text>
                  <Image resizeMode='contain' style={{width:15,marginLeft:6}}  source={require('~/Assets/Images/Tab1/asend_link2.png')} />
                </TouchableOpacity>
              </View>
            </QuantCont>
          </Quant>
          <QuantCaut style={{paddingHorizontal:20,}}>
          <Text style={{fontSize:12,marginBottom:10}}>*‘퀀트 예시’는 현재 어센드가 수익률을 실제 검증 중인 퀀트 종목들이며, 참고용으로만 활용하시기 바랍니다.</Text>
          <Text style={{fontSize:12,marginBottom:10}}>* 어센드 추천 퀀트전략은 상시 수익률 검증에 따라 월 단위로 업데이트 됩니다.</Text>
          </QuantCaut>
        </IndiContainer>
      </ScrollView>
    </IndicatorsContainer>
  );
};

export default Indicators9;
