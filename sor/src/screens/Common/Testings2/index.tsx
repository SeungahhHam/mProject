import React, { useContext, useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import Styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import Input  from '~/Components/Input';
import Button from '~/Components/Button';
//import Slider from "@react-native-community/slider";
import axios from "axios";

const IndicatorsContainer = Styled.View`
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
const TextContainer = Styled.View`
  flex-direction: column;
`;
const RateContainer = Styled.View`
  padding:0 20px;
`;
const RateBox = Styled.View`
`;
const RateChart = Styled.View`
`;
const TendencyContainer = Styled.View`
  flex-direction:row;
  align-items:center;
`;
const ButtonContainer = Styled.View`
  margin:50px -6px;
  padding:0 20px;
  flex-direction: row;
`;
const Buttons = Styled.View`
  flex:1;
  margin:0 6px;
`;

import { RandomUserDataContext } from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Feed from '~/Components/Feed';

import StoryList from './StoryList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigator from '../../Navigator';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine,VictoryStack,VictoryArea } from "victory-native";
import { ZoomOutEasyUp } from 'react-native-reanimated';

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed33'>;

interface Props {
  navigation: NavigationProp;
}

const Testings2 = ({ navigation }: Props) => {

  var [BetaApply, setBetaApply] = useState<boolean>(false);
  var [Tendency1, setTendency1] = useState<boolean>(false);
  var [Tendency2, setTendency2] = useState<boolean>(false);
  var [Tendency3, setTendency3] = useState<boolean>(false);
  var [Tendency4, setTendency4] = useState<boolean>(false);
  var [Method1, setMethod1] = useState<boolean>(false);
  var [Method2, setMethod2] = useState<boolean>(false);

  return (
    <IndicatorsContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
        <TopContainer style={{paddingTop:60,}}>
          <TopText style={{alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'#191919',}}>Back Testing</Text>
            <View style={{alignItems:'center',flexDirection:'row'}}>
              <Text>분석 방법은?</Text>
              <Image resizeMode='contain' style={{width:18,marginLeft:5}}  source={require('~/Assets/Images/Tab2/asend_bang.png')} />
            </View>
          </TopText>
        </TopContainer>
        <RateContainer>
          <RateBox style={{marginBottom:20,flexDirection:'row',justifyContent:'space-between',padding:10,borderRadius:5,borderWidth:1,borderColor:'#dbdbdb',backgroundColor:'#fbfbfc'}}>
            <Text style={{position:'absolute',top:-1,left:-1,minWidth:'100%',padding:10,borderRadius:5,borderWidth:1,borderColor:'#dbdbdb',color:'#222',fontSize:12,fontWeight:'bold',backgroundColor:'#ffffff'}}>LG 전자 [005390]</Text>
            <View style={{paddingTop:50}}>
              <Text style={{marginBottom:6,fontSize:13,color:'#222222'}}>*단순 보유시 수익률 :</Text>
              <Text style={{fontSize:15,fontWeight:'bold',color:'#FF2470'}}>2.82%</Text>
            </View>
            <RateChart style={{flexShrink:0}}>

              {/* <Image resizeMode='contain' style={{}} source={require('~/Assets/Images/Tab2/asend_ratechart.png')} /> */}
              <VictoryChart width={200} height={200}>
                        <VictoryLine                        
                        interpolation="natural"
                        style={{
                        data: { stroke: "#c43a31" },                        
                        parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                          { x: 20, y: 20 },
                          { x: 20, y: 30 },
                          { x: 30, y: 50 },
                          { x: 40, y: 40 },
                          { x: 50, y: 70 }
                        ]}
                        />
                      </VictoryChart>

            </RateChart>
          </RateBox>
          <RateBox style={{marginBottom:20,flexDirection:'row',justifyContent:'space-between',padding:10,borderRadius:5,borderWidth:1,borderColor:'#dbdbdb',backgroundColor:'#fbfbfc'}}>
            <Text style={{position:'absolute',top:-1,left:-1,minWidth:'100%',padding:10,borderRadius:5,borderWidth:1,borderColor:'#dbdbdb',color:'#222',fontSize:12,fontWeight:'bold',backgroundColor:'#ffffff'}}>휴맥스 [066270]</Text>
            <View style={{paddingTop:50}}>
              <Text style={{marginBottom:6,fontSize:13,color:'#222222'}}>*단순 보유시 수익률 :</Text>
              <Text style={{fontSize:15,fontWeight:'bold',color:'#FF2470'}}>12.12%</Text>
            </View>
            <RateChart style={{flexShrink:0}}>

              {/* <Image resizeMode='contain' style={{}} source={require('~/Assets/Images/Tab2/asend_ratechart.png')} /> */}
              <VictoryChart width={200} height={200}>
                        <VictoryLine                        
                        interpolation="natural"
                        style={{
                        data: { stroke: "#c43a31" },                        
                        parent: { border: "1px solid #ccc"}
                        }}
                        data={[
                          { x: 20, y: 20 },
                          { x: 20, y: 30 },
                          { x: 30, y: 50 },
                          { x: 40, y: 40 },
                          { x: 50, y: 70 }
                        ]}
                        />
                      </VictoryChart>
            </RateChart>
          </RateBox>
        </RateContainer>
        <Contents>
          <ContentTitle style={{marginBottom:20,}}>
            <Text style={{fontSize:19,fontWeight:'bold',color:'#191919'}}>전체 백테스팅 결과</Text>
          </ContentTitle>
          <ContentCont style={{flexDirection:"column"}}>
            <TextContainer style={{paddingVertical:10,paddingHorizontal:15,shadowColor: 'black',shadowRadius: 10,shadowOpacity: 1,backgroundColor:'#F8F8FA'}}>
              <View style={{flexDirection:'column'}}>
                <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}><Text style={{lineHeight:30,color:'#191919'}}>* 단순 보유시 수익률 :</Text><Text style={{fontWeight:'bold',color:'#FF2470'}}>7.66%</Text></View>
                <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}><Text style={{lineHeight:30,color:'#191919'}}>* 동일 기간 KODEX 코스피 수익률 :</Text><Text style={{fontWeight:'bold',color:'#FF2470'}}>5.43%</Text></View>
                <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}><Text style={{lineHeight:30,color:'#191919'}}>* 동일 기간 KODEX 코스닥 150 수익률 :</Text><Text style={{fontWeight:'bold',color:'#FF2470'}}>3.17%</Text></View>
              </View>
              <View style={{flexDirection:'column'}}>

                {/* <Image resizeMode='contain' style={{width:'100%'}} source={require('~/Assets/Images/Tab2/asend_result.png')} /> */}
                 
                <VictoryStack
  events={[{
    childName: "all",
    target: "data",
    eventHandlers: {
      onClick: () => {
        return [
          {
            childName: "area-2",
            target: "data",
            mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "gold" }) })
          }, {
            childName: "area-3",
            target: "data",
            mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "orange" }) })
          }, {
            childName: "area-4",
            target: "data",
            mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "red" }) })
          }
        ];
      }
    }
  }]}
>
  <VictoryArea name="area-1"  data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}/>
  <VictoryArea name="area-2"  data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}/>  
</VictoryStack>

              </View>
            </TextContainer>
          </ContentCont>
        </Contents>
        <ButtonContainer>
          <Buttons>
            <TouchableOpacity style={{borderRadius:5,height:50, backgroundColor: '#6524FF', shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}}
              onPress={() => navigation.navigate('')}
            >
              <Text style={{fontSize:16,color:'#FFF',textAlign:'center',fontWeight:'bold',lineHeight:50,}}>SAVE</Text>
            </TouchableOpacity>
          </Buttons>
          <Buttons>
            <TouchableOpacity style={{borderRadius:5,height:50, backgroundColor: '#6524FF', shadowColor: "#6524FF",shadowOffset: { width: 10, height: 10, },shadowOpacity: 0.3,shadowRadius: 10,elevation: 5,}}
              onPress={() => navigation.navigate('')}
            >
              <Text style={{fontSize:16,color:'#FFF',textAlign:'center',fontWeight:'bold',lineHeight:50,}}>새로하기</Text>
            </TouchableOpacity>
          </Buttons>
        </ButtonContainer>
      </ScrollView>
    </IndicatorsContainer>
  );
};

export default Testings2;
