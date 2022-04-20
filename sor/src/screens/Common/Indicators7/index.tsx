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
const TopTxt = Styled.View`
`;
const IndiContainer= Styled.View`
  padding:20px;
`;
const IndiTable = Styled.View`
  border:1px solid #C6C6E0;
  border-radius:10px;
  overflow:hidden;
`;
const TableHead = Styled.View`
  flex-direction:row;
  background-color:#ffffff;
  
`;
const TableBody = Styled.View`
  flex-direction:column;
  background-color:#fbfbfc;
  border-top-width:1px;
  border-color:#C6C6E0;
`;
const TableTr = Styled.View`
  flex-direction:row;
`;
const TableTd = Styled.View`
  flex:1;
  padding:5px;
  text-align:center;
  justify-content:center;
  align-items:center;
`;
const IndiMore = Styled.View`
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

const Indicators7 = ({ navigation }: Props) => {

  return (
    <IndicatorsContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TopContainer>
          <TopText style={{alignItems:'center',justifyContent:'center'}}>
            <TopTit style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:30,fontWeight:'bold',color:'#191919',}}>HYPE 스포트라이트</Text>
            </TopTit>
            <TopTxt style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
              <Text style={{textAlign:'center',fontSize:16,color:'#191919',}}>최근 3일간 관심량이 급상승한 종목을 소개합니다. 얼마나 핫해졌는지에 따라 4가지의 온도 시그널로 나누어 표현됩니다.</Text>
            </TopTxt>
          </TopText>
        </TopContainer>
        <IndiContainer>
          <IndiTable>
            <TableHead>
              <TableTd><Text style={{fontWeight:'bold',color:'#191919'}}>종목</Text></TableTd>
              <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{fontWeight:'bold',color:'#191919'}}>온도</Text></TableTd>
              <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{fontWeight:'bold',color:'#191919'}}>지수</Text></TableTd>
            </TableHead>
            <TableBody>
              <TableTr>
                <TableTd><Text>NAVER</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#FF2470'}}>Burning</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>삼성전자</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#FF2470'}}>Burning</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>CJ제일제당</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#FF2470'}}>Burning</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>kt&amp;G</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#FF2470'}}>Burning</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>카카오</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#191919'}}>Hot</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.2</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>삼성SDI</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#191919'}}>Hot</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.2</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>이마트</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#191919'}}>Hot</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.2</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>호텔신라</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#191919'}}>Hot</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.2</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>넷마블</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#191919'}}>Cold</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>신세계푸드</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#191919'}}>Cold</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>세아베스틸</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#191919'}}>Cold</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>한화솔루션</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#191919'}}>Cold</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>농심</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#0045FF'}}>Freeze</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>롯데푸드</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#0045FF'}}>Freeze</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>에스엠</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#0045FF'}}>Freeze</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
              <TableTr>
                <TableTd><Text>엔씨소프트</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text style={{color:'#0045FF'}}>Freeze</Text></TableTd>
                <TableTd style={{borderLeftWidth:1,borderColor:'#C6C6E0'}}><Text>92.3</Text></TableTd>
              </TableTr>
            </TableBody>
          </IndiTable>
          <IndiMore>
            <View style={{marginTop:30,flexDirection:'column',alignItems:'flex-end'}}>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingVertical:5,paddingHorizontal:20,backgroundColor:'#6524FF',borderRadius:6,shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}} onPress={() => navigation.navigate('Indicators6')}>
                <Text style={{fontWeight:'bold',color:'#fff'}}>모든 종목 보기…</Text>
                <Image resizeMode='contain' style={{width:18,marginLeft:10}}  source={require('~/Assets/Images/Tab1/asend_link2.png')} />
              </TouchableOpacity>
            </View>
          </IndiMore>
        </IndiContainer>
      </ScrollView>
    </IndicatorsContainer>
  );
};

export default Indicators7;
