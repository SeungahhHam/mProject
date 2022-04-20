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
const SearchDetailContainer = Styled.View`
  flex-direction: column;
  width: 100%; 
  min-height: 100%;
  background: #fff;
  padding:48px 0 25px 0;
`;
const DetailTitle = Styled.View`
  flex-direction: column;
  width: 100%; 
  background: #fff;
  border-bottom-width:6px;
  border-style:solid;
  border-color: #EFEFF5;
  padding:30px 20px;
`;
const DetailCont = Styled.View`
  flex-direction: column;
  width: 100%; 
  background: #fff;
  padding:30px 20px;
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

const SearchDetail = ({ navigation }: Props) => {

  return (
    <SearchDetailContainer style={{ flex: 1}}>
      <ScrollView style={{ flex: 1 }} >
        <DetailTitle>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#191919'}}>현대 제철, 판재류 EPD 인증 획득</Text>
          <Text style={{marginTop:6,fontSize:12,color:'#5A5A5A'}}>2020-10-26 14:09 ㅣ 헤럴드경제</Text>
        </DetailTitle>
        <DetailCont>
          <Text style={{lineHeight:20,fontSize:14,color:"#191919"}}>지난해 전기로 제품 이어 고로 제품 인증 {"\n"}{"\n"}美 , EU 환경규제 대응 경쟁력 확보 {"\n"}{"\n"}LCA 통합 시스템, 생산 전과정 환경영향 모니터링</Text>
          <Image style={{marginTop:40,width:'100%',}} resizeMode='cover'  source={require('~/Assets/Images/Tab3/asend_newdetail.png')} />
          <Text style={{marginTop:10,fontSize:12,color:'#767676'}}>현대제철이 고로에서 생산하는 판재류에 대해 EPD 인증을 받았다고 밝혔다. 현대제철 당진공장 고로 전경. [현대제철제공]</Text>
          <Text style={{marginTop:40,lineHeight:20,fontSize:14,color:"#191919"}}>[헤럴드경제 원호연 기자]현대제철이 판재류 제품에 대한 환경성적표지(EPD) 인증을 획득했다고 밝혔다. {"\n"}현대제철은 26일 열연강판·냉연강판·도금강판·후판 등 판재류 제품에 대해 EPD인증을 획득했다고 밝혔다. 이번에 획득한 인증은 세계적으로 권위 있는 스웨덴의 인터내셔널EPD(International EPD)에서 발급된 것으로, 환경 규제에 엄격한 유럽시장 수출에 효과적으로 대응할 수 있는 기반을 마련했다. {"\n"} {"\n"}EPD인증은 제품 및 서비스의 원료 채취부터 생산·수송 및 유통·사용·폐기에 이르기까지전 과정에 대한 환경 영향을 계량적으로 표시하는 제도다. 소비자들이 환경 친화적인제품을 비교하여 선택할 수 있는 지표로 사용되고 있다. {"\n"} {"\n"}지난해 미국 UL(Underwriters Laboratories)로부터 철근·형강 등 전기로 제품군에 대한 EPD 인증을획득한 바 있다. 이번에 고로제품에 대해서도 인증을 받으면서 친환경 생산 역량을 입증한 것이다</Text>
          <Text style={{marginTop:40,paddingVertical:10,paddingHorizontal:15,borderRadius:6,backgroundColor:'#EFEFF5',lineHeight:18,fontSize:13,color:"#191919"}}>* 언론사 제공 뉴스는 당사의 투자의견과 무관합니다.</Text>
        </DetailCont>
      </ScrollView>
    </SearchDetailContainer>
  );
};

export default SearchDetail;
