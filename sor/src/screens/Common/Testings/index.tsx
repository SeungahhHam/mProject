import React, { useContext, useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import Styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import Input  from '~/Components/Input';
import Button from '~/Components/Button';
//import Slider from "@react-native-community/slider";
import axios from "axios";

const TestingsContainer = Styled.View`
  flex-direction: column;
  width: 100%; 
  min-height: 100%;
  background: #fff;
  padding:25px 0 0 0;
`;
const TopContainer = Styled.View`
  marginBottom:20px;
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

const Context = Styled.View`
  flex-direction: row;
  justify-Content:space-between;
`;
const Conbtn = Styled.View`
  flex-direction: row;
  justify-Content:space-between;
`;
const Slider = Styled.View`
`;
const TestContainer = Styled.View`
  padding:0 20px;
`;
const TestCont = Styled.View`
`;

const BetaContainer = Styled.View`
  flex-direction:row;
  align-items:center;
`;
const DateContainer = Styled.View`
  padding:0 20px;
`;
const DateCont = Styled.View`
`;
const CodeContainer = Styled.View`
  padding:0 20px;
`;
const CodeCont = Styled.View`
`;
const MoneyContainer = Styled.View`
  padding:0 20px;
`;
const MoneyCont = Styled.View`
`;
const TendencyContainer = Styled.View`
  flex-direction:row;
  align-items:center;
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

const Testings = ({ navigation }: Props) => {

  var [BetaApply, setBetaApply] = useState<boolean>(false);
  var [Tendency1, setTendency1] = useState<boolean>(false);
  var [Tendency2, setTendency2] = useState<boolean>(false);
  var [Tendency3, setTendency3] = useState<boolean>(false);
  var [Tendency4, setTendency4] = useState<boolean>(false);
  var [Method1, setMethod1] = useState<boolean>(false);
  var [Method2, setMethod2] = useState<boolean>(false);

  return (
    <TestingsContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TopContainer style={{paddingTop:60,}}>
          <TopText style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'#191919',}}>Back Testing</Text>
            <Image resizeMode='contain' style={{width:18,marginLeft:5}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
          </TopText>
        </TopContainer>
        <TestContainer style={{marginBottom:20,}}>
          <TestCont style={{shadowColor: "#000",shadowOffset: { width: 3, height: 3, },shadowOpacity: 0.3,shadowRadius: 3,elevation: 3,backgroundColor:'#fff',borderRadius:5,overflow:'hidden'}}>
            <View style={{padding:10}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>‘09.18’  오늘의 닮은 꼴 시장은?</Text>
            </View>
            <View style={{paddingHorizontal:15,paddingVertical:10,backgroundColor:'#F8F8FA'}}>
              <Text style={{lineHeight:24,fontSize:14,color:'#000'}}>1. 2018. 11. 02</Text>
              <Text style={{lineHeight:24,fontSize:14,color:'#000'}}>2. 2005. 03. 24</Text>
              <Text style={{lineHeight:24,fontSize:14,color:'#000'}}>3. 2019. 05. 21</Text>
            </View>
            </TestCont>
        </TestContainer>
        <DateContainer style={{marginBottom:15,}}>
          <DateCont style={{flexDirection:'row',marginHorizontal:-6}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',marginHorizontal:6,shadowColor: "#000",shadowOffset: { width: 3, height: 3, },shadowOpacity: 0.3,shadowRadius: 3,elevation: 3,backgroundColor:'#fff',borderRadius:5,overflow:'hidden'}}>
              <Text style={{flex:1,paddingHorizontal:10,}}>시작일</Text>
              <View style={{flexShrink:0,width:40,alignItems:'center',justifyContent:'center',backgroundColor:'#6524FF'}}><Image resizeMode='contain' style={{width:20,}}  source={require('~/Assets/Images/Tab2/asend_date.png')} /></View>
            </View>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',marginHorizontal:6,shadowColor: "#000",shadowOffset: { width: 3, height: 3, },shadowOpacity: 0.3,shadowRadius: 3,elevation: 3,backgroundColor:'#fff',borderRadius:5,overflow:'hidden'}}>
              <Text style={{flex:1,paddingHorizontal:10,}}>종료일</Text>
              <View style={{flexShrink:0,width:40,alignItems:'center',justifyContent:'center',backgroundColor:'#6524FF'}}><Image resizeMode='contain' style={{width:20,}}  source={require('~/Assets/Images/Tab2/asend_date.png')} /></View>
            </View>
          </DateCont>
        </DateContainer>
        <CodeContainer style={{marginBottom:15,}}>
          <CodeCont style={{flexDirection:'row'}}>
            <View style={{flex:1,paddingRight:30,height:120,flexDirection:'row',alignItems:'flex-start',shadowColor: "#000",shadowOffset: { width: 3, height: 3, },shadowOpacity: 0.3,shadowRadius: 3,elevation: 3,backgroundColor:'#fff',borderRadius:5,overflow:'hidden'}}>
              <Input
                style={{alineHeight:20,borderWidth:0,backgroundColor:'transparent'}}
                placeholder="종목명 (코드)"
                onChangeText={(text) => {}}
              />
              <Image resizeMode='contain' style={{position:'absolute',top:5,right:5,width:30,height:30,}}  source={require('~/Assets/Images/Tab2/asend_search.png')} />
            </View>
            <View style={{borderTopRightRadius:5,borderBottomRightRadius:5,flexShrink:0,width:40,height:40,alignItems:'center',justifyContent:'center',backgroundColor:'#6524FF'}}><Image resizeMode='contain' style={{width:20,}}  source={require('~/Assets/Images/Tab2/asend_plus.png')} /></View>
          </CodeCont>
        </CodeContainer>
        <MoneyContainer style={{marginBottom:50,}}>
          <MoneyCont style={{flexDirection:'row',alignItems:'center',padding:10,shadowColor: "#000",shadowOffset: { width: 3, height: 3, },shadowOpacity: 0.3,shadowRadius: 3,elevation: 3,backgroundColor:'#fff',borderRadius:5,overflow:'hidden'}}>
            <Text style={{flexShrink:0,marginRight:5,fontSize:14,fontWeight:'bold',color:'#6524FF'}}> 투자금액</Text>
            <Input
              style={{ flex:1,paddingHorizontal:5, height:40,borderWidth:0,borderBottomWidth:2,borderColor:'#6524FF', backgroundColor:'#fff' }}
              placeholder="금액 입력"
              onChangeText={(text) => {}}
            />
            <Text style={{flexShrink:0,marginLeft:5,fontSize:15,fontWeight:'bold',color:'#6524FF'}}>원</Text>
          </MoneyCont>
        </MoneyContainer>
        <Contents>
          <ContentTitle style={{marginBottom:20,}}>
            <Text style={{fontSize:19,fontWeight:'bold',color:'#191919'}}>리스크 분석</Text>
          </ContentTitle>
          <ContentCont style={{flexDirection:"column"}}>
            <BetaContainer style={{paddingVertical:5,paddingHorizontal:10,shadowColor: 'black',shadowRadius: 10,shadowOpacity: 1,backgroundColor:'#F8F8FA'}}>
              <View style={{width:'33.33%',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity
                  style={{flexDirection:'row',alignItems:'center'}}
                  onPress={() => {
                    setBetaApply(!BetaApply);
                  }}
                >
                  <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={BetaApply ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                  <Text style={BetaApply ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>베타 β</Text>
                </TouchableOpacity>
                <Image resizeMode='contain' style={{width:12,marginLeft:5}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
              </View>
            </BetaContainer>
          </ContentCont>
        </Contents>
        <Contents>
          <ContentTitle style={{marginBottom:20,}}>
            <Text style={{fontSize:19,fontWeight:'bold',color:'#191919'}}>투자 성향</Text>
          </ContentTitle>
          <ContentCont style={{flexDirection:"column"}}>
            <TendencyContainer style={{flexWrap:'wrap',paddingVertical:5,paddingHorizontal:10,shadowColor: 'black',shadowRadius: 10,shadowOpacity: 1,backgroundColor:'#F8F8FA'}}>
              <View style={{width:'33.33%',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity
                  style={{flexDirection:'row',alignItems:'center'}}
                  onPress={() => {
                    setTendency1(!Tendency1);
                  }}
                >
                  <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={Tendency1 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                  <Text style={Tendency1 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>안전형</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'33.33%',flexDirection:'row',alignItems:'center'}}>
              <TouchableOpacity
                style={{flexDirection:'row',alignItems:'center'}}
                onPress={() => {
                  setTendency2(!Tendency2);
                }}
              >
                <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={Tendency2 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                <Text style={Tendency2 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>소신형</Text>
              </TouchableOpacity>
              </View>
              <View style={{width:'33.33%',flexDirection:'row',alignItems:'center'}}>
              <TouchableOpacity
                style={{flexDirection:'row',alignItems:'center'}}
                onPress={() => {
                  setTendency3(!Tendency3);
                }}
              >
                <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={Tendency3 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                <Text style={Tendency3 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>도전형</Text>
              </TouchableOpacity>
              </View>
              <View style={{width:'33.33%',flexDirection:'row',alignItems:'center'}}>
              <TouchableOpacity
                style={{flexDirection:'row',alignItems:'center'}}
                onPress={() => {
                  setTendency4(!Tendency4);
                }}
              >
                <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={Tendency4 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                <Text style={Tendency4 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>동일비중</Text>
              </TouchableOpacity>
              </View>
            </TendencyContainer>
          </ContentCont>
        </Contents>
        <Contents>
          <ContentTitle style={{marginBottom:20,}}>
            <Text style={{fontSize:19,fontWeight:'bold',color:'#191919'}}>투자 방식</Text>
          </ContentTitle>
          <ContentCont style={{flexDirection:"column"}}>
            <TendencyContainer style={{flexWrap:'wrap',paddingVertical:5,paddingHorizontal:10,shadowColor: 'black',shadowRadius: 10,shadowOpacity: 1,backgroundColor:'#F8F8FA'}}>
              <View style={{width:'50%',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity
                  style={{flexDirection:'row',alignItems:'center'}}
                  onPress={() => {
                    setMethod1(!Method1);
                  }}
                >
                  <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={Method1 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                  <Text style={Method1 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>단순보유</Text>
                </TouchableOpacity>
                <Image resizeMode='contain' style={{width:12,marginLeft:5}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
              </View>
              <View style={{width:'50%',flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity
                  style={{flexDirection:'row',alignItems:'center'}}
                  onPress={() => {
                    setMethod2(!Method2);
                  }}
                >
                  <Image resizeMode='contain' style={{ width: 20, marginRight: 6,}} source={Method2 ? require("~/Assets/Images/Login/asend_checked2_on.png") : require("~/Assets/Images/Login/asend_checked2.png")} />
                  <Text style={Method2 ? {fontWeight:'bold',color:'#191919'} : {color:'#191919'}}>골든크로스 투자</Text>
                </TouchableOpacity>
                <Image resizeMode='contain' style={{width:12,marginLeft:5}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
              </View>
            </TendencyContainer>
          </ContentCont>
        </Contents>
        <ButtonContainer>
          <TouchableOpacity style={{borderRadius:5,height:50, backgroundColor: '#6524FF', shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}}
            onPress={() => navigation.navigate('Testings2')}
          >
            <Text style={{fontSize:16,color:'#FFF',textAlign:'center',fontWeight:'bold',lineHeight:50,}}>백테스팅 시작</Text>
          </TouchableOpacity>
        </ButtonContainer>
      </ScrollView>
    </TestingsContainer>
  );
};

export default Testings;
