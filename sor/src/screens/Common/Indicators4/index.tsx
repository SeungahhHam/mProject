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

const Indicators4 = ({ navigation }: Props) => {

  return (
    <IndicatorsContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TopContainer>
          <TopText style={{alignItems:'center',justifyContent:'center'}}>
            <TopTit style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:30,fontWeight:'bold',color:'#191919',}}>ARI</Text>  
              <Image resizeMode='contain' style={{width:18,marginLeft:10}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
            </TopTit>
            <TopSub style={{alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:15,color:'#191919',}}>????????? ?????? ??????</Text>
            </TopSub>
            <TopTxt style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
              <Text style={{textAlign:'center',fontSize:16,color:'#191919',}}>?????? ??????????????? ???????????? ??????????????? {"\n"} ???????????? ???????????????.</Text>
            </TopTxt>
          </TopText>
        </TopContainer>
        <IndiContainer>
          <IndiBox>
            <IndiTop style={{flexDirection:'row',alignItems:'center',padding:10,}}>
              <Text style={{lineHeight:40,fontSize:16,fontWeight:'bold',color:'#191919'}}>EPD ?????? ?????? ?????? </Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image resizeMode='contain' style={{width:100,height:20,}}  source={require('~/Assets/Images/Tab1/asend_searchbox.png')} />
                <Image resizeMode='contain' style={{width:20,height:20,}}  source={require('~/Assets/Images/Tab1/asend_search.png')} />
              </View>
            </IndiTop>
            <IndiBot>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>1. ????????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'87%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'67%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>87</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>2. ?????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'80%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'72%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>82</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>3. ????????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'75%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'60%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>79</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>4. ????????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'70%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'75%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>77</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>5. ?????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'62%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'30%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>71</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>6. ????????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'42%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'60%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>58</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>7. ?????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'32%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'18%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>47</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>8. ????????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'20%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'14%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>43</Text>
              </IndiBotdesc>
              <IndiBtn style={{height:30}}>
                <View style={{padding:5,height:30,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#dbdbdb',borderRadius:6,paddingHorizontal:10,backgroundColor:'#fff'}}>
                  <Text style={{lineHeight:18,fontSize:13,fontWeight:'bold',color:'#6524FF'}}>?????? [100]??? ?????? ??????</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginHorizontal:6,borderWidth:1,borderColor:'#dbdbdb',borderRadius:6,backgroundColor:'#fff'}}>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',textAlign:'center'}}>1???</Text>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',borderLeftWidth:1,borderColor:'#dbdbdb',textAlign:'center'}}>1???</Text>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',borderLeftWidth:1,borderColor:'#dbdbdb',textAlign:'center'}}>1??????</Text>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',borderLeftWidth:1,borderColor:'#dbdbdb',textAlign:'center'}}>3??????</Text>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',borderLeftWidth:1,borderColor:'#dbdbdb',textAlign:'center'}}>1???</Text>
                </View>
              </IndiBtn>
            </IndiBot>            
          </IndiBox>
        </IndiContainer>
        <CautBox>
          <Text style={{fontSize:12}}>* ?????? ?????? ????????? ?????? <Text style={{fontWeight:'bold',color:'#C6C6E0'}}>??????</Text>?????? ??????</Text>
          <Text style={{fontSize:12}}>* ?????? ?????? ????????? EPD??? ????????? ?????? ?????? ????????? ?????????????????? ????????? ??? ??????</Text>
          <Text style={{fontSize:12}}>* ?????? ?????? ?????? ??? ????????? ?????? ?????? ??????</Text>
        </CautBox>
        <RankContainer style={{marginHorizontal:-6}}>
          <Rankdesc style={{marginHorizontal:6,borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',overflow:'hidden'}}>
            <Text style={{flexDirection:'row',padding:10,}}>?????? ??? TOP ??????{'\n'}?????? ????????? #1</Text>
            <Text style={{flexDirection:'row',padding:10,textAlign:'center',alignItems:'center',fontSize:15,fontWeight:'bold',color:'#fff',backgroundColor:'#472C86'}}>?????????(235%)</Text>
          </Rankdesc>
          <Rankdesc style={{marginHorizontal:6,borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',overflow:'hidden'}}>
            <Text style={{flexDirection:'row',padding:10,}}>?????? ??? TOP ??????{'\n'}?????? ????????? #2</Text>
            <Text style={{flexDirection:'row',padding:10,textAlign:'center',alignItems:'center',fontSize:15,fontWeight:'bold',color:'#fff',backgroundColor:'#472C86'}}>?????????(127%)</Text>
          </Rankdesc>
        </RankContainer>
        <RecomBox style={{paddingBottom:60,borderBottomWidth:8,borderColor:'#EFEFF5'}}>
          <Text style={{flex:1}}>1?????? ?????? ?????? ????????? {'\n'}??????????????? 1??? ?????? ??????????</Text>
          <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
            <Text style={{textAlign:'center'}}>?????? ?????? ????????? : {'\n'}<Text style={{fontWeight:'bold',color:'#FF2470'}}>22.52%</Text></Text>
            <Text style={{marginTop:15,textAlign:'center'}}>?????? ?????? ????????? : {'\n'}<Text style={{fontWeight:'bold',color:'#FF2470'}}>31.27%</Text></Text>
          </View>
        </RecomBox>
        <IndiContainer style={{paddingTop:60}}>
          <IndiBox>
            <IndiTop style={{flexDirection:'row',alignItems:'center',padding:10,}}>
              <Text style={{lineHeight:40,fontSize:16,fontWeight:'bold',color:'#191919'}}>?????????????????? </Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image resizeMode='contain' style={{width:100,height:20,}}  source={require('~/Assets/Images/Tab1/asend_searchbox.png')} />
                <Image resizeMode='contain' style={{width:20,height:20,}}  source={require('~/Assets/Images/Tab1/asend_search.png')} />
              </View>
            </IndiTop>
            <IndiBot>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>1. ????????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'87%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'67%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>87</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>2. ?????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'80%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'72%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>82</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>3. ????????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'75%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'60%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>79</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>4. ????????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'70%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'75%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>77</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>5. ?????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'62%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'30%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>71</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>6. ????????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'42%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'60%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>58</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>7. ?????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'32%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'18%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>47</Text>
              </IndiBotdesc>
              <IndiBotdesc>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
                  <Text style={{flexShrink:0,width:80,}}>8. ????????????</Text>
                  <View style={{flex:1,flexDirection:'column',justifyContent:'center',height:16}}>
                    <View style={{flex:1,width:'20%',borderRadius:6,backgroundColor:'#6524FF'}}></View>
                    <View style={{flex:1,width:'14%',borderRadius:6,backgroundColor:'#C6C6E0'}}></View>
                  </View>
                </View>
                <Text style={{width:30,textAlign:'center',flexShrink:0,fontSize:15,color:'#191919'}}>43</Text>
              </IndiBotdesc>
              <IndiBtn style={{height:30}}>
                <View style={{padding:5,height:30,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#dbdbdb',borderRadius:6,paddingHorizontal:10,backgroundColor:'#fff'}}>
                  <Text style={{lineHeight:18,fontSize:13,fontWeight:'bold',color:'#6524FF'}}>?????? [100]??? ?????? ??????</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginHorizontal:6,borderWidth:1,borderColor:'#dbdbdb',borderRadius:6,backgroundColor:'#fff'}}>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',textAlign:'center'}}>1???~1??????</Text>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',borderLeftWidth:1,borderColor:'#dbdbdb',textAlign:'center'}}>1??????~3??????</Text>
                  <Text style={{flex:1,paddingHorizontal:3,lineHeight:28,fontSize:11,color:'#191919',borderLeftWidth:1,borderColor:'#dbdbdb',textAlign:'center'}}>3??????~1???</Text>
                </View>
              </IndiBtn>
            </IndiBot>            
          </IndiBox>
        </IndiContainer>
        <CautBox>
          <Text style={{fontSize:12}}>* ?????????????????? ????????? ??? ????????? ?????? ????????? ??? ????????? ???????????? ???????????? ???????????? ???????????????. ?????? ???????????? ?????? ??????????????? ????????? ??? ????????????.</Text>
        </CautBox>
        <RankContainer style={{marginHorizontal:-6,paddingBottom:60,borderBottomWidth:8,borderColor:'#EFEFF5'}}>
          <Rankdesc style={{marginHorizontal:6,borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',overflow:'hidden'}}>
            <Text style={{flexDirection:'row',padding:10,}}>?????? ??? EWD{'\n'}?????????????????? ????????? #1</Text>
            <Text style={{flexDirection:'row',padding:10,textAlign:'center',alignItems:'center',fontSize:15,fontWeight:'bold',color:'#fff',backgroundColor:'#472C86'}}>????????????(15%)</Text>
          </Rankdesc>
          <Rankdesc style={{marginHorizontal:6,borderRadius:6,borderWidth:1,borderColor:'#dbdbdb',overflow:'hidden'}}>
            <Text style={{flexDirection:'row',padding:10,}}>?????? ??? EWD{'\n'}?????????????????? ????????? #2</Text>
            <Text style={{flexDirection:'row',padding:10,textAlign:'center',alignItems:'center',fontSize:15,fontWeight:'bold',color:'#fff',backgroundColor:'#472C86'}}>THQ(15%)</Text>
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
                <Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>[????????????] ????????????, ?????? ????????? ?????? ??????. ????????? ????????? ?????? ????????????</Text>
                <View style={{marginTop:10,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:12,color:'#5A5A5A'}}>??????????????????</Text>
                  <Text style={{marginLeft:10,fontSize:12,color:'#A0A0A0'}}>?????? 5:59</Text>
                </View>
              </View>
            </ReportDesc>
            <ReportDesc>
              <Image resizeMode='contain' style={{flexShrink:0,width:'30%',height:70,marginRight:10}}  source={require('~/Assets/Images/Common/asend_report_img.png')} />
              <View style={{flex:1}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>[????????????] ????????????, ?????? ????????? ?????? ??????. ????????? ????????? ?????? ????????????</Text>
                <View style={{marginTop:10,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:12,color:'#5A5A5A'}}>??????????????????</Text>
                  <Text style={{marginLeft:10,fontSize:12,color:'#A0A0A0'}}>?????? 5:59</Text>
                </View>
              </View>
            </ReportDesc>
            <ReportDesc>
              <Image resizeMode='contain' style={{flexShrink:0,width:'30%',height:70,marginRight:10}}  source={require('~/Assets/Images/Common/asend_report_img.png')} />
              <View style={{flex:1}}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#191919'}}>[????????????] ????????????, ?????? ????????? ?????? ??????. ????????? ????????? ?????? ????????????</Text>
                <View style={{marginTop:10,flexDirection:'row',alignItems:'center'}}>
                  <Text style={{fontSize:12,color:'#5A5A5A'}}>??????????????????</Text>
                  <Text style={{marginLeft:10,fontSize:12,color:'#A0A0A0'}}>?????? 5:59</Text>
                </View>
              </View>
            </ReportDesc>
          </ReportCont>
        </ReportBox>
        <RecentMore>
          <View style={{width:'100%',height:50,flexDirection:'row',borderRadius:5,borderWidth:1,borderColor:'#dbdbdb',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:15,color:'#191919'}}>?????????</Text>
            <Image style={{marginLeft:8,width:14,}} resizeMode='contain'  source={require('~/Assets/Images/Tab3/asend_more.png')} />
          </View>
        </RecentMore>
      </ScrollView>
    </IndicatorsContainer>
  );
};

export default Indicators4;
