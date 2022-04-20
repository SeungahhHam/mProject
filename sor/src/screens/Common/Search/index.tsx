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
const SearchContainer = Styled.View`
  flex-direction: column;
  width: 100%; 
  min-height: 100%;
  background: #fff;
  padding:25px 20px;
`;
const SearchBox = Styled.View`
  margin: 0 0 30px 0;
`;

const RecentBox = Styled.View`
`;
const RecentTop = Styled.View`
  margin-bottom:30px
`;
const RecentCon = Styled.View`
`;
const RecentTit = Styled.View`
  margin:0 0 10px 0;
  padding:0 15px;
`;
const RecentList = Styled.View`
`;
const RecentMore = Styled.View`
  margin:50px 0 0 0;
  flex-direction:row;
  justify-content:center;
  align-items:center;
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

const Search = ({ navigation }: Props) => {

  return (
    <SearchContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <SearchBox>
          <Input
            style={{ paddingHorizontal: 6, height: 50, borderRadius: 3, borderWidth:0,borderBottomWidth:2,borderColor:'#6524FF', backgroundColor:'#fff' }}
            placeholder="주식, 금융상품, 투자정보 검색"
            onChangeText={(text) => {}}
          />
          <Image style={{position:'absolute',top:6,right:0,width:15,}} resizeMode='contain'  source={require('~/Assets/Images/Tab2/asend_search.png')} />
        </SearchBox>
        <RecentBox>
          <RecentTop><Text>‘EPD’ (으)로 검색된 관련 종목 입니다.</Text></RecentTop>
          <RecentCon>
            <RecentTit><Text style={{fontSize:18,fontWeight:'bold',color:'#191919'}}>뉴스</Text></RecentTit>
            <RecentList>
              <View style={{marginBottom:10,padding:16,shadowColor: "#000",borderRadius:5,borderWidth:1,borderColor:"#DBDBDB"}}>
                <TouchableOpacity onPress={() => navigation.navigate('SearchDetail')}>
                  <View style={{marginBottom:10,flexDirection:'row',justifyContent:'space-between',}}>  
                    <Text style={{fontSize:12,color:'#5A5A5A'}}>롯데케미칼</Text>
                    <Text style={{fontSize:12,color:'#A0A0A0'}}>2021-04-14 ㅣ 인포스탁</Text>
                  </View>
                  <Text style={{fontWeight:'bold',color:"#191919"}}>롯데케미칼, ‘수치화’된 친환경성으로 승부한다… “세계최초 美 UL ‘<Text style={{color:'#6524FF'}}>EPD</Text> 인증’ 획득 컴파운드”</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginBottom:10,padding:16,shadowColor: "#000",borderRadius:5,borderWidth:1,borderColor:"#DBDBDB"}}>
                <TouchableOpacity onPress={() => navigation.navigate('SearchDetail')}>
                  <View style={{marginBottom:10,flexDirection:'row',justifyContent:'space-between',}}>  
                    <Text style={{fontSize:12,color:'#5A5A5A'}}>롯데케미칼</Text>
                    <Text style={{fontSize:12,color:'#A0A0A0'}}>2021-04-14 ㅣ 인포스탁</Text>
                  </View>
                  <Text style={{fontWeight:'bold',color:"#191919"}}>롯데케미칼, ‘수치화’된 친환경성으로 승부한다… “세계최초 美 UL ‘<Text style={{color:'#6524FF'}}>EPD</Text> 인증’ 획득 컴파운드”</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginBottom:10,padding:16,shadowColor: "#000",borderRadius:5,borderWidth:1,borderColor:"#DBDBDB"}}>
                <TouchableOpacity onPress={() => navigation.navigate('SearchDetail')}>
                  <View style={{marginBottom:10,flexDirection:'row',justifyContent:'space-between',}}>  
                    <Text style={{fontSize:12,color:'#5A5A5A'}}>롯데케미칼</Text>
                    <Text style={{fontSize:12,color:'#A0A0A0'}}>2021-04-14 ㅣ 인포스탁</Text>
                  </View>
                  <Text style={{fontWeight:'bold',color:"#191919"}}>롯데케미칼, ‘수치화’된 친환경성으로 승부한다… “세계최초 美 UL ‘<Text style={{color:'#6524FF'}}>EPD</Text> 인증’ 획득 컴파운드”</Text>
                </TouchableOpacity>
              </View>
            </RecentList>
          </RecentCon>
          <RecentMore>
            <View style={{width:'75%',height:50,flexDirection:'row',borderRadius:5,borderWidth:1,borderColor:'#dbdbdb',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:15,color:'#191919'}}>더보기</Text>
              <Image style={{marginLeft:8,width:14,}} resizeMode='contain'  source={require('~/Assets/Images/Tab3/asend_more.png')} />
            </View>
          </RecentMore>
       
        </RecentBox>
        
      </ScrollView>
    </SearchContainer>
  );
};

export default Search;
