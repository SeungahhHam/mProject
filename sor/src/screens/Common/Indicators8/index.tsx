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
const RankContainer = Styled.View`
  flex-direction:row;
  margin-top:50px;
  padding: 0 20px;
`;
const Rankdesc = Styled.View`
  flex:1;
`;
const Keyword = Styled.View`
  flex-direction:column;
  padding:0 0 20px 0;
`;
const KeywordTitle = Styled.View`
  width:100%;
`;
const KeywordCont = Styled.View`
`;
const KeywordBox = Styled.View`
  padding:15px;
  border-radius:10px;
  background-color:#F8F8FA;
`;
const Sector = Styled.View`
  flex-direction:column;
  padding:20px 0;
`;
const SectorTitle = Styled.View`
  width:100%;
`;
const SectorCont = Styled.View`
`;
const SectorBox = Styled.View`
padding:15px;
border-radius:10px;
background-color:#F8F8FA;
`;
const Favorite = Styled.View`
  margin:20px 0 50px 0;
  padding:0 20px;
`;
const FavoriteBox = Styled.View`
  padding:15px;
  border-radius:10px;
  background-color:#F8F8FA;
  flex-direction:column;
  align-items:center;
`;
const FavoriteCaut = Styled.View`
  margin-top:10px;
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

const Indicators8 = ({ navigation }: Props) => {

  return (
    <IndicatorsContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TopContainer>
          <TopText style={{alignItems:'center',justifyContent:'center'}}>
            <TopTit style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:30,fontWeight:'bold',color:'#191919',}}>핀플루언서 지수</Text>
            </TopTit>
            <TopSub style={{alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:15,color:'#191919',}}>검색 트렌드 지수</Text>
            </TopSub>
            <TopTxt style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
              <Text style={{textAlign:'center',fontSize:16,color:'#191919',}}>핀플루언서(Finfluencer)란 증권/주식 관련 인플루언서로, 다양한 플랫폼에서 활동하는 핀플루언서의 데이터를 분석해 지표화합니다.</Text>
            </TopTxt>
          </TopText>
        </TopContainer>
        <IndiContainer>
          <Keyword>
            <KeywordTitle style={{flexDirection:'row',alignItems:'center',marginBottom:15}}>
              <Text style={{lineHeight:40,fontSize:20,fontWeight:'bold',color:'#191919'}}>Today’s Keyword</Text>
              <Image resizeMode='contain' style={{width:18,marginLeft:10}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
            </KeywordTitle>
            <KeywordCont>
              <KeywordBox>
                <Text style={{marginBottom:10,fontSize:18,color:'#191919'}}>1위. 반도체</Text>
                <Text style={{fontSize:15,color:'#191919'}}>2위. 테이퍼링</Text>
                <Text style={{fontSize:15,color:'#191919'}}>3위. 데이터</Text>
                <Text style={{fontSize:15,color:'#191919'}}>4위. 전기차</Text>
                <View style={{marginTop:5,flexDirection:'column',alignItems:'flex-end'}}>
                  <TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingVertical:5,paddingHorizontal:10,backgroundColor:'#fff',borderRadius:6,borderWidth:1,borderColor:'#dbdbdb'}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:'#191919'}}>더보기</Text>
                    <Image resizeMode='contain' style={{width:6,marginLeft:10}}  source={require('~/Assets/Images/Tab1/asend_link3.png')} />
                  </TouchableOpacity>
                </View>
              </KeywordBox>
            </KeywordCont>
          </Keyword>
        </IndiContainer>
        <RankContainer style={{marginHorizontal:-6,paddingBottom:60,borderBottomWidth:8,borderColor:'#dbdbdb'}}>
          <Rankdesc style={{marginHorizontal:6,borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',overflow:'hidden'}}>
            <Text style={{flexDirection:'row',padding:10,}}>전주 대비 ‘금주’{'\n'}TOP 언급 키워드</Text>
            <Text style={{flexDirection:'row',padding:10,textAlign:'center',alignItems:'center',fontSize:15,fontWeight:'bold',color:'#fff',backgroundColor:'#472C86'}}>테이퍼링</Text>
          </Rankdesc>
          <Rankdesc style={{marginHorizontal:6,borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',overflow:'hidden'}}>
            <Text style={{flexDirection:'row',padding:10,}}>전달 대비 ‘이 달’{'\n'}TOP 언급 섹터</Text>
            <Text style={{flexDirection:'row',padding:10,textAlign:'center',alignItems:'center',fontSize:15,fontWeight:'bold',color:'#fff',backgroundColor:'#472C86'}}>에너지 (127%)</Text>
          </Rankdesc>
        </RankContainer>
        <IndiContainer>
          <Sector>
            <SectorTitle style={{flexDirection:'row',alignItems:'center',marginBottom:15,}}>
              <Text style={{lineHeight:40,fontSize:20,fontWeight:'bold',color:'#191919'}}>Today’s Sector</Text>
              <Image resizeMode='contain' style={{width:18,marginLeft:10}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
            </SectorTitle>
            <SectorCont>
              <SectorBox>
                <Text style={{marginBottom:10,fontSize:18,color:'#191919'}}>1위. 금융</Text>
                <Text style={{fontSize:15,color:'#191919'}}>2위. 에너지</Text>
                <Text style={{fontSize:15,color:'#191919'}}>3위. 반도체</Text>
                <Text style={{fontSize:15,color:'#191919'}}>4위. 전자 (섹터 : 자동차)</Text>
                <View style={{marginTop:5,flexDirection:'column',alignItems:'flex-end'}}>
                  <TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingVertical:5,paddingHorizontal:10,backgroundColor:'#fff',borderRadius:6,borderWidth:1,borderColor:'#dbdbdb'}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:'#191919'}}>더보기</Text>
                    <Image resizeMode='contain' style={{width:6,marginLeft:10}}  source={require('~/Assets/Images/Tab1/asend_link3.png')} />
                  </TouchableOpacity>
                </View>
              </SectorBox>
            </SectorCont>
          </Sector>
        </IndiContainer>
        <Favorite>
          <FavoriteBox>
            <Text style={{fontSize:16,fontWeight:'bold',color:"#191919"}}>내가 가장 즐겨 찾는 ‘핀플루언서는’?</Text>
            <View style={{marginTop:20,}}>
              <Input
              style={{ paddingHorizontal:6, minWidth:200,height: 40, lineHeight:30,borderRadius:25, borderWidth:2, borderColor:'#6524FF',backgroundColor:'#ffffff' }}
              placeholder=""
              secureTextEntry={true}
              onChangeText={(text) => {}}
            />
            </View>
            <View style={{marginTop:30,flexDirection:'column',alignItems:'center'}}>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingVertical:5,paddingHorizontal:20,backgroundColor:'#6524FF',borderRadius:6,shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}} onPress={() => navigation.navigate('Indicators6')}>
                <Text style={{fontWeight:'bold',color:'#fff'}}>SEND</Text>
                <Image resizeMode='contain' style={{width:18,marginLeft:10}}  source={require('~/Assets/Images/Tab1/asend_link2.png')} />
              </TouchableOpacity>
            </View>
          </FavoriteBox>
          <FavoriteCaut>
            <Text style={{fontSize:12,color:'#767676'}}>* 소중한 의견은 핀플루언서 지수 개발에 반영됩니다.</Text>
          </FavoriteCaut>
        </Favorite>
      </ScrollView>
    </IndicatorsContainer>
  );
};

export default Indicators8;
