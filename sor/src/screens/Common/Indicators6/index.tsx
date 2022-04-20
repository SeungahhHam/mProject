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
const IndiBox = Styled.View`
  border-radius:5px;
  border:1px solid #dbdbdb;
`;
const IndiTop = Styled.View`
  padding:0 10px;
  flex-direction:row;
  justify-content:space-between;
  background:#fff;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
`;
const IndiBot = Styled.View`
  padding:10px;
  flex-direction:column;
  justify-content:space-between;
  background:#fbfbfc;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
`;
const IndiBotdesc = Styled.View`
  margin-bottom:10px;
  flex-direction:row;
  justify-content:space-between;
`;
const IndiBtn = Styled.View`
  margin:10px 0;
  flex-direction:row;
`;

const CautBox = Styled.View`
  padding:10px 20px;
`;
const RankContainer = Styled.View`
  flex-direction:row;
  margin-top:50px;
  padding: 0 20px;
`;
const Rankdesc = Styled.View`
  flex:1;
`;
const RecomBox = Styled.View`
  flex-direction:row;
  margin-top:20px;
  padding: 0 20px;
`;
const ReportBox = Styled.View`
  flex-direction:column;
  margin:20px 0;
  padding: 0 20px;
`;
const ReportTitle = Styled.View`
`;
const ReportCont = Styled.View`
  margin:-15px 0;
  padding:20px;
  borderRadius:10px;
  background-color:#F8F8FA
`;
const ReportDesc = Styled.View`
  padding:15px 0;
  border-bottom-width:1px;
  border-color:#dbdbdb;
  flex-direction:row;
`;
const RecentMore = Styled.View`
  margin:20px 0 100px 0;
  padding:0 20px;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;
const Temperature = Styled.View`
  flex-direction:column;
  margin:20px 0;
  padding: 50px 20px;
`;
const TemperatureTitle = Styled.View`
`;
const TemperatureCont = Styled.View`
  margin:0 -20px;
  padding:20px;
  background-color:#F8F8FA;
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

const Indicators6 = ({ navigation }: Props) => {

  return (
    <IndicatorsContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TopContainer>
          <TopText style={{alignItems:'center',justifyContent:'center'}}>
            <TopTit style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:30,fontWeight:'bold',color:'#191919',}}>HYPE</Text>  
              <Image resizeMode='contain' style={{width:18,marginLeft:10}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
            </TopTit>
            <TopSub style={{alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:15,color:'#191919',}}>검색 트렌드 지수</Text>
            </TopSub>
            <TopTxt style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
              <Text style={{textAlign:'center',fontSize:16,color:'#191919',}}>최근 1달간의 대중 검색 트렌드 및 검색량을 {"\n"} 바탕으로 직관적인 투자 인사이트를 제공합니다.</Text>
            </TopTxt>
          </TopText>
        </TopContainer>
        <IndiContainer>
          <IndiBox>
            <IndiTop style={{flexDirection:'row',alignItems:'center',padding:10,}}>
              <Text style={{lineHeight:40,fontSize:16,fontWeight:'bold',color:'#191919'}}>EPD 언론 노출 지수 </Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image resizeMode='contain' style={{width:100,height:20,}}  source={require('~/Assets/Images/Tab1/asend_searchbox.png')} />
                <Image resizeMode='contain' style={{width:20,height:20,}}  source={require('~/Assets/Images/Tab1/asend_search.png')} />
              </View>
            </IndiTop>
            <IndiBot>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>1. 삼성카드</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'87%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'67%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>87</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>2. 이마트</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'80%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'72%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>82</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>3. 기업은행</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'75%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'60%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>79</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>4. 펄어비스</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'70%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'75%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>77</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>5. 다나와</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'62%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'30%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>71</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>6. 롯데렌탈</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'42%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'60%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>58</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>7. 제넥신</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'32%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'18%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>47</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>8. 위메이드</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'20%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'14%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>43</Text>
              </IndiBotdesc>
              <IndiBtn style={{height:30}}>
                <View style={{padding:5,height:30,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#dbdbdb',borderRadius:6,paddingHorizontal:10,backgroundColor:'#fff'}}>
                  <Text style={{lineHeight:18,fontSize:13,fontWeight:'bold',color:'#6524FF'}}>상위 [100]개 종목 추출</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginHorizontal:6,borderWidth:1,borderColor:'#dbdbdb',borderRadius:6,backgroundColor:'#fff'}}>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',textAlign:'center'}}>1일</Text>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',borderLeftWidth:1,borderColor:'#dbdbdb',textAlign:'center'}}>1주</Text>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',borderLeftWidth:1,borderColor:'#dbdbdb',textAlign:'center'}}>1개월</Text>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',borderLeftWidth:1,borderColor:'#dbdbdb',textAlign:'center'}}>3개월</Text>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',borderLeftWidth:1,borderColor:'#dbdbdb',textAlign:'center'}}>1년</Text>
                </View>
              </IndiBtn>
            </IndiBot>            
          </IndiBox>
        </IndiContainer>
        <CautBox>
          <Text style={{fontSize:12}}>* 전일 기준 수치는 하단 <Text style={{fontWeight:'bold',color:'#C6C6E0'}}>회색</Text>으로 표시</Text>
          <Text style={{fontSize:12}}>* 시간 범위 클릭시 EPD의 데이터 수집 기준 기간을 변화시키면서 확인할 수 있음</Text>
          <Text style={{fontSize:12}}>* 특정 종목 검색 시 순위와 수치 확인 가능</Text>
        </CautBox>
        <RankContainer style={{marginHorizontal:-6,paddingBottom:60,borderBottomWidth:8,borderColor:'#EFEFF5'}}>
          <Rankdesc style={{marginHorizontal:6,borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',overflow:'hidden'}}>
            <Text style={{flexDirection:'row',padding:10,}}>지난 달 TOP 노출{'\n'}종목 수익률 #1</Text>
            <Text style={{flexDirection:'row',padding:10,textAlign:'center',alignItems:'center',fontSize:15,fontWeight:'bold',color:'#fff',backgroundColor:'#472C86'}}>카카오(235%)</Text>
          </Rankdesc>
          <Rankdesc style={{marginHorizontal:6,borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',overflow:'hidden'}}>
            <Text style={{flexDirection:'row',padding:10,}}>지난 달 TOP 노출{'\n'}종목 수익률 #2</Text>
            <Text style={{flexDirection:'row',padding:10,textAlign:'center',alignItems:'center',fontSize:15,fontWeight:'bold',color:'#fff',backgroundColor:'#472C86'}}>다나와(127%)</Text>
          </Rankdesc>
        </RankContainer>
        <ReportBox>
          <ReportTitle style={{flexDirection:'row',alignItems:'center',marginBottom:15,}}>
            <Text style={{lineHeight:40,fontSize:20,fontWeight:'bold',color:'#191919'}}>News report</Text>
            <Image resizeMode='contain' style={{width:18,marginLeft:10}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
          </ReportTitle>
          <ReportCont>
            <ReportDesc>
              <Image resizeMode='contain' style={{flexShrink:0,width:'30%',height:70,marginRight:10}}  source={require('~/Assets/Images/Common/asend_report_img.png')} />
              <View style={{flex:1}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>[증시이슈] 코스맥스, 위드 코로나 수혜 기대. 특허권 취득에 주가 ‘상승’</Text>
                <View style={{marginTop:10,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:12,color:'#5A5A5A'}}>이코노미스트</Text>
                  <Text style={{marginLeft:10,fontSize:12,color:'#A0A0A0'}}>오후 5:59</Text>
                </View>
              </View>
            </ReportDesc>
            <ReportDesc>
              <Image resizeMode='contain' style={{flexShrink:0,width:'30%',height:70,marginRight:10}}  source={require('~/Assets/Images/Common/asend_report_img.png')} />
              <View style={{flex:1}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>[증시이슈] 코스맥스, 위드 코로나 수혜 기대. 특허권 취득에 주가 ‘상승’</Text>
                <View style={{marginTop:10,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:12,color:'#5A5A5A'}}>이코노미스트</Text>
                  <Text style={{marginLeft:10,fontSize:12,color:'#A0A0A0'}}>오후 5:59</Text>
                </View>
              </View>
            </ReportDesc>
            <ReportDesc>
              <Image resizeMode='contain' style={{flexShrink:0,width:'30%',height:70,marginRight:10}}  source={require('~/Assets/Images/Common/asend_report_img.png')} />
              <View style={{flex:1}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>[증시이슈] 코스맥스, 위드 코로나 수혜 기대. 특허권 취득에 주가 ‘상승’</Text>
                <View style={{marginTop:10,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:12,color:'#5A5A5A'}}>이코노미스트</Text>
                  <Text style={{marginLeft:10,fontSize:12,color:'#A0A0A0'}}>오후 5:59</Text>
                </View>
              </View>
            </ReportDesc>
          </ReportCont>
        </ReportBox>
        <RecentMore>
          <View style={{width:'100%',height:50,flexDirection:'row',borderRadius:5,borderWidth:1,borderColor:'#dbdbdb',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:15,color:'#191919'}}>더보기</Text>
            <Image style={{marginLeft:8,width:14,}} resizeMode='contain'  source={require('~/Assets/Images/Tab3/asend_more.png')} />
          </View>
        </RecentMore>
        <Temperature style={{marginHorizontal:-6,paddingVertical:60,borderTopWidth:8,borderColor:'#EFEFF5'}}>
          <TemperatureTitle style={{flexDirection:'row',alignItems:'center',marginBottom:15,}}>
            <Text style={{lineHeight:40,fontSize:20,fontWeight:'bold',color:'#191919'}}>HYPE 온도</Text>
            <Image resizeMode='contain' style={{width:18,marginLeft:10}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
          </TemperatureTitle>
          <TemperatureCont>
            <View style={{width:'100%',borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',padding:10,backgroundColor:'#ffffff'}}>
              <Image resizeMode='contain' style={{width:'100%'}}  source={require('~/Assets/Images/Tab1/asend_temperature.png')} />
            </View>
            <View style={{paddingVertical:12,}}>
              <Text style={{}}>최근 3일동안 갑자기 <Text style={{color:'#FF2470'}}>"핫"</Text> 해진 종목?</Text>
              <Text style={{}}><Text style={{fontWeight:'bold',color:'#0045FF'}}>Freeze</Text> ~ <Text style={{fontWeight:'bold',color:'#FF2470'}}>Burn</Text> 5단계 <Text style={{fontWeight:'bold',color:'#191919'}}>HYPE</Text> 온도로 확인하세요.</Text>
            </View>
            <View style={{marginTop:30,flexDirection:'column',alignItems:'center'}}>
              <TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingVertical:5,paddingHorizontal:20,backgroundColor:'#6524FF',borderRadius:6,shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}} onPress={() => navigation.navigate('Indicators6')}>
                <Text style={{fontWeight:'bold',color:'#fff'}}>CHECK !</Text>
                <Image resizeMode='contain' style={{width:18,marginLeft:10}}  source={require('~/Assets/Images/Tab1/asend_link2.png')} />
              </TouchableOpacity>
            </View>
          </TemperatureCont>
        </Temperature>
      </ScrollView>
    </IndicatorsContainer>
  );
};

export default Indicators6;
