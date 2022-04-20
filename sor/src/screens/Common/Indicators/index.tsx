import React, { useContext, useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput, Alert,Dimensions } from 'react-native';
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
const IssueContainer = Styled.View`
flex-direction: column;
  marginBottom:25px;
  padding:0 20px;
`;
const ButtonContainer = Styled.View`
  margin:50px 0;
  padding:0 20px;
  flex-direction: column;
`;

const HamburgerContainer = Styled.View`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  flex:1;
  background-color:rgba(25,25,25,0.8);
  justify-content:center;
  align-items:center;
  z-index:1000;
`;


import { RandomUserDataContext } from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Feed from '~/Components/Feed';

import StoryList from './StoryList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigator from '../../Navigator';

import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine } from "victory-native";
import { ZoomOutEasyUp } from 'react-native-reanimated';

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed33'>;

interface Props {
  navigation: NavigationProp;
}

const Indicators = ({ navigation }: Props) => {

  
  //api 통신관련 
  //const getEPDInfo = () => {

    var token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ1MDE1NzYzLCJqdGkiOiJiY2QzMGU2MzM1NmE0MTNiOGFhMWY3ZTRkMGU4ZWJmMyIsInVzZXJfaWQiOjEyfQ.rl9qzlemCxVMWOoSkOO-De20n19ezYPpvufWTlssc3Q";

    const paramsC = {      
    };

    console.log("it start");    
    const headers = {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        Authorization: 'Bearer ' + token 
    };

    //const [chart_data, setChart] = useState(true);
    const [items, setItems] = useState([]);

    //세계증시 변수
    const [koval, setkoval] = useState("0");
    const [naval, setnaval] = useState("0");
    const [nyval, setnyval] = useState("0");
    const [haval, sethaval] = useState("0");    

    const [isHam, setisham] = useState(true);        
    
    const chart_data = [];    
    const x = 0;
    const y = 0;

      //epd
    //   async testfunction(){
    //   await axios.get("http://15.165.96.112:8000/v1/indicator/epds?duration=1w", {headers})
    //        .then(response => {
    //            console.log("epd-----------------------")
    //           console.log(response.data.results); //이부분 출력시는 잘나옴..
    //            //return response.data.result //리턴하면 Promise가 todoItems에 Object로 들어감...
              
    //            for (let key = 0; key < 10; key++) {
    //              items.push({
    //                x: Math.round(key+1),
    //                y: Math.round(key+20), 
    //              });
    //              }
    //   });
    // });
    
    //epd 
    fetch("http://15.165.96.112:8000/v1/indicator/epds?duration=1w", 
      {method:'GET',
       headers: {'Authorization': 'Bearer '+token}
      })
      .then(function(res){
        return res.json();
      })
      .then(function(data) {
        console.log(data);

                for (let key = 0; key < 2; key++) {
                  chart_data.push({
                    x: Math.round(key+1),
                    y: Math.round(key+20), 
                  });
                 }

      });
      
      //console.log( Math.max(chart_data.x) );
      //const items2=[{"x": 1, "y": 20}, {"x": 2, "y": 21}];      
      //console.log(chart_data);

      //ewd
      axios.get("http://15.165.96.112:8000/v1/indicator/ewds?duration=1w", {headers})
          .then(response => {
            console.log("ewd-----------------------")
            console.log(response.data.results); //이부분 출력시는 잘나옴..
              //return response.data.result //리턴하면 Promise가 todoItems에 Object로 들어감...
      });

           
      //ari
      axios.get("http://15.165.96.112:8000/v1/indicator/aris?duration=1w", {headers})
          .then(response => {
            console.log("ari-----------------------")
            console.log(response.data.results); //이부분 출력시는 잘나옴..
              //return response.data.result //리턴하면 Promise가 todoItems에 Object로 들어감...
      });

      
      //rai
      axios.get("http://15.165.96.112:8000/v1/indicator/rais?duration=1w", {headers})
          .then(response => {
            console.log("rai-----------------------")
            console.log(response.data.results); //이부분 출력시는 잘나옴..
              //return response.data.result //리턴하면 Promise가 todoItems에 Object로 들어감...
      });
      
      
      //어센트 퀸트 전략 ==API 없음
      axios.get('http://15.165.96.112:8000/v1/indicator/aris?duration=1w', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
       })

       //세계증시
       axios.get("http://15.165.96.112:8000/v1/indicator/worldIndices", {headers})
           .then(response => {
             console.log("세계증시-----------------------")
             console.log(response.data); //이부분 출력시는 잘나옴..
               //return response.data.result //리턴하면 Promise가 todoItems에 Object로 들어감...

              //console.log( response.data[0].name );
              //console.log( response.data[0].increase );
              //console.log( response.data.length )

              for(var i=0;i<response.data.legnth;i++)
              {
                if( response.data[i].name =="KOSPI")
                {
                  setkoval=response.data[i].increase;
                }
                if( response.data[i].name =="NASDAQ")
                {
                  setnaval=response.data[i].increase;
                }
                if( response.data[i].name =="NYSE")
                {
                  setnyval=response.data[i].increase;
                }
                if( response.data[i].name =="HANGSENG")
                {
                  sethaval=response.data[i].increase;
                }
              }
       });


        //HYPE 유료회원전용 
        axios.get("http://15.165.96.112:8000/v1/indicator/hypes?12", {headers})
        .then(response => {
          console.log("HYPE-----------------------")
          console.log(response.data); //이부분 출력시는 잘나옴..
            //return response.data.result //리턴하면 Promise가 todoItems에 Object로 들어감...

           //console.log( response.data.results );           
           //console.log( response.data.length )

           for(var i=0;i<response.data.length;i++)
           {
             
           }

        });

        //핀플루언서
        axios.get("http://15.165.96.112:8000/v1/indicator/finfluSectors", {headers})
        .then(response => {
          console.log("핀플루언서----------------------") 
          console.log(response.data); //이부분 출력시는 잘나옴..
            //return response.data.result //리턴하면 Promise가 todoItems에 Object로 들어감...

           //console.log( response.data.results );           
           //console.log( response.data.length )

           for(var i=0;i<response.data.length;i++)
           {
             
           }

        });
        
        //FEAR & GREED
        axios.get("http://15.165.96.112:8000/v1/indicator/fears", {headers})
        .then(response => {
          console.log("FEER AND GREED----------------------") 
          console.log(response.data); //이부분 출력시는 잘나옴..
            //return response.data.result //리턴하면 Promise가 todoItems에 Object로 들어감...

           //console.log( response.data.results );           
           //console.log( response.data.length )

           for(var i=0;i<response.data.length;i++)
           {
             
           }

        });

        //news
        axios.get("http://15.165.96.112:8000/v1/news", {headers})
        .then(response => {
          console.log("NEWS----------------------") 
          console.log(response.data); //이부분 출력시는 잘나옴..
            //return response.data.result //리턴하면 Promise가 todoItems에 Object로 들어감...

           //console.log( response.data.results );           
           //console.log( response.data.length )

           for(var i=0;i<response.data.length;i++)
           {
             
           }

        });





    // To get the network state once



  //};

  //console.log(getEPDInfo);

  const chartHeight = Dimensions.get('window').height;

  return (
    <IndicatorsContainer style={{ flex: 1, paddingTop:48, }}>
      <ScrollView style={{ flex: 1 }} >
      { isHam == true && 
        <HamburgerContainer height={chartHeight}>
          <View style={{width:'100%',flexDirection:'column',alignItems:'center'}}>
            <Text style={{marginVertical:10,fontSize:22,fontWeight:'bold',color:'#fff',}}>튜토리얼</Text>
            <Text style={{marginVertical:10,fontSize:22,fontWeight:'bold',color:'#fff',}}>로그인</Text>
            <Text style={{marginVertical:10,fontSize:22,fontWeight:'bold',color:'#fff',}}>지표</Text>
            <Text style={{marginVertical:10,fontSize:22,fontWeight:'bold',color:'#fff',}}>백테스팅</Text>
            <Text style={{marginVertical:10,fontSize:22,fontWeight:'bold',color:'#fff',}}>MY PAGE</Text>
            <Text style={{marginVertical:10,fontSize:22,fontWeight:'bold',color:'#fff',}}>QnA</Text>
          </View>

          
          <View style={{position:'absolute',top:10,left:10,width:50,height:50,alignItems:'center',justifyContent:'center',}}>
          <TouchableOpacity onPress={() => setisham(false) }>
            <Image resizeMode='contain' style={{width:15,height:15,}} source={require('~/Assets/Images/Tab1/asend_close.png')}/>
            </TouchableOpacity>
          </View>
          
        </HamburgerContainer>
      }
        <TopContainer>
          <Image resizeMode='contain' style={{marginBottom:20,width:100}}  source={require('~/Assets/Images/Tab1/asend_sub_logo.png')} />  
          <TopText>
            <Text style={{fontSize:19,fontWeight:'bold',color:'#191919',}}>어센드만의 \<Text style={{color:'#6524FF',}}>데이터 분석 기반 비정형 데이터 투자지표</Text>로, 이전과는 달리 ‘세상의 소리’를{"\n"}기반으로 한 투자 인사이트를 얻을 수 있습니다.</Text>
          </TopText>
        </TopContainer>
        <Contents>
          <ContentTitle style={{marginBottom:20,}}>
            <Text style={{fontSize:19,fontWeight:'bold',color:'#191919'}}>비정형 지표</Text>
          </ContentTitle>

          <ContentCont style={{flexDirection:"column"}}>         

            {/* EPD 영역 */}
            <View style={{flexDirection:"row",flexWrap:'wrap',margin:-6}}>
            <View style={{width:'50%',padding:6,}}>
                <View style={{flexDirection:"column",borderRadius:5,borderWidth:1,borderColor:'#DBDBDB'}}>
                  <TouchableOpacity 
                  onPress={() => navigation.navigate('Indicators2',{
                    gType:"EPD",
                    gData:{chart_data}
                  })
                  }>
                    <View style={{paddingHorizontal:6,height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:"#191919"}}>EPD</Text>
                      <View style={{flexShrink:0,flexDirection:'row',alignItems:'center',}}>
                        <Text style={{fontSize:10,marginRight:5}}>최고 수익률 :</Text>
                        <Text style={{fontSize:10,textDecorationLine:'underline',color:'#FF2470',fontWeight:'bold'}}>7.8%</Text>
                        <Image resizeMode='contain' style={{width:5,marginLeft:5}}  source={require('~/Assets/Images/Tab1/asend_link3.png')} />
                      </View>
                    </View>
                    

                    <View style={{minHeight:100,backgroundColor:'#fbfbfc',padding:10,}}>
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
                    </View>
                    
                    <View style={{paddingHorizontal:6,height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fbfbfc'}}>
                      <Text style={{fontSize:10}}>08. 18</Text>
                      <Image resizeMode='contain' style={{width:16,}}  source={require('~/Assets/Images/Tab1/asend_bang.png')} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* EWD 영역 */}
              <View style={{width:'50%',padding:6,}}>
                <View style={{flexDirection:"column",borderRadius:5,borderWidth:1,borderColor:'#DBDBDB'}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Indicators3')}>
                    <View style={{paddingHorizontal:6,height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:"#191919"}}>EWD</Text>
                      <View style={{flexShrink:0,flexDirection:'row',alignItems:'center',}}>
                        <Text style={{fontSize:10,marginRight:5}}>최고 수익률 :</Text>
                        <Text style={{fontSize:10,textDecorationLine:'underline',color:'#FF2470',fontWeight:'bold'}}>7.8%</Text>
                        <Image resizeMode='contain' style={{width:5,marginLeft:5}}  source={require('~/Assets/Images/Tab1/asend_link3.png')} />
                      </View>
                    </View>
                    <View style={{minHeight:100,backgroundColor:'#fbfbfc',padding:10,}}>
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
                    </View>
                    <View style={{paddingHorizontal:6,height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fbfbfc'}}>
                      <Text style={{fontSize:10}}>08. 18</Text>
                      <Image resizeMode='contain' style={{width:16,}}  source={require('~/Assets/Images/Tab1/asend_bang.png')} />
                    </View>
                  </TouchableOpacity>
                </View>                
              </View>

              {/* ARI 영역 */}
              <View style={{width:'50%',padding:6,}}>
                <View style={{flexDirection:"column",borderRadius:5,borderWidth:1,borderColor:'#DBDBDB'}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Indicators4')}>
                    <View style={{paddingHorizontal:6,height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:"#191919"}}>ARI</Text>
                      <View style={{flexShrink:0,flexDirection:'row',alignItems:'center',}}>
                        <Text style={{fontSize:10,marginRight:5}}>최고 수익률 :</Text>
                        <Text style={{fontSize:10,textDecorationLine:'underline',color:'#FF2470',fontWeight:'bold'}}>7.8%</Text>
                        <Image resizeMode='contain' style={{width:5,marginLeft:5}}  source={require('~/Assets/Images/Tab1/asend_link3.png')} />
                      </View>
                    </View>
                    <View style={{minHeight:100,backgroundColor:'#fbfbfc',padding:10,}}>
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
                    </View>
                    <View style={{paddingHorizontal:6,height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fbfbfc'}}>
                      <Text style={{fontSize:10}}>08. 18</Text>
                      <Image resizeMode='contain' style={{width:16,}}  source={require('~/Assets/Images/Tab1/asend_bang.png')} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* RAI 영역 */}
              <View style={{width:'50%',padding:6,}}>
                <View style={{flexDirection:"column",borderRadius:5,borderWidth:1,borderColor:'#DBDBDB'}}>
                  <TouchableOpacity onPress={() => navigation.navigate('Indicators5')}>
                    <View style={{paddingHorizontal:6,height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      <Text style={{fontSize:14,fontWeight:'bold',color:"#191919"}}>RAI</Text>
                      <View style={{flexShrink:0,flexDirection:'row',alignItems:'center',}}>
                        <Text style={{fontSize:10,marginRight:5}}>최고 수익률 :</Text>
                        <Text style={{fontSize:10,textDecorationLine:'underline',color:'#FF2470',fontWeight:'bold'}}>7.8%</Text>
                        <Image resizeMode='contain' style={{width:5,marginLeft:5}}  source={require('~/Assets/Images/Tab1/asend_link3.png')} />
                      </View>
                    </View>
                    <View style={{minHeight:100,backgroundColor:'#fbfbfc',padding:10,}}>
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
                    </View>
                    <View style={{paddingHorizontal:6,height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fbfbfc'}}>
                      <Text style={{fontSize:10}}>08. 18</Text>
                      <Image resizeMode='contain' style={{width:16,}}  source={require('~/Assets/Images/Tab1/asend_bang.png')} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </ContentCont>
        </Contents>


        <Contents>
          <ContentTitle style={{marginBottom:20,}}>
            <Text style={{fontSize:19,fontWeight:'bold',color:'#191919'}}>어센드 퀀트 전략</Text>
          </ContentTitle>
          <ContentCont style={{padding:20,flexDirection:"column",borderRadius:5,backgroundColor:'#F8F8FA'}}>
            <Context>
              <Text style={{lineHeight:24,fontSize:14,color:'#191919'}}>1. 탑트렌드 반도체 퀀트</Text>
              <Text style={{lineHeight:24,fontSize:14,fontWeight:'bold',color:'#FF2470'}}>+ 17%</Text>
            </Context>
            <Context>
              <Text style={{lineHeight:24,fontSize:14,color:'#191919'}}>2. 트렌드 고려 에너지 퀀트</Text>
              <Text style={{lineHeight:24,fontSize:14,fontWeight:'bold',color:'#FF2470'}}>+ 8%</Text>
            </Context>
            <Context>
              <Text style={{lineHeight:24,fontSize:14,color:'#191919'}}>3. 전문가 선호 + 트렌드 엔터주 퀀트</Text>
              <Text style={{lineHeight:24,fontSize:14,fontWeight:'bold',color:'#FF2470'}}>+ 12%</Text>
            </Context>
            <Conbtn style={{marginTop:20,justifyContent:'flex-end',alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Indicators9')}>
              <Text style={{paddingHorizontal:5,alignItems:'center',borderRadius:6,lineHeight:24,fontSize:12,color:'#fff',fontWeight:'bold',backgroundColor:'#6524FF'}}>투자전략 들여다보기 <Image resizeMode='contain' style={{width:16,}}  source={require('~/Assets/Images/Tab1/asend_link2.png')} /></Text>
            </TouchableOpacity>
            </Conbtn>

          </ContentCont>
        </Contents>


        <Contents>
          <ContentTitle style={{marginBottom:20,}}>
            <Text style={{fontSize:19,fontWeight:'bold',color:'#191919'}}>세계증시</Text>
          </ContentTitle>
          <ContentCont style={{padding:20,flexDirection:"column",borderRadius:5,backgroundColor:'#F8F8FA'}}>
            <Context>
              <Text style={{lineHeight:24,fontSize:14,color:'#191919'}}>KOSPI</Text>
              <Text style={{lineHeight:24,fontSize:14,fontWeight:'bold',color:'#FF2470'}}>{koval}%</Text>
            </Context>
            <Context>
              <Text style={{lineHeight:24,fontSize:14,color:'#191919'}}>NASDAQ</Text>
              <Text style={{lineHeight:24,fontSize:14,fontWeight:'bold',color:'#0045FF'}}>{naval}%</Text>
            </Context>
            <Context>
              <Text style={{lineHeight:24,fontSize:14,color:'#191919'}}>NYSE</Text>
              <Text style={{lineHeight:24,fontSize:14,fontWeight:'bold',color:'#0045FF'}}>{nyval}%</Text>
            </Context>
            <Context>
              <Text style={{lineHeight:24,fontSize:14,color:'#191919'}}>HANGSENG</Text>
              <Text style={{lineHeight:24,fontSize:14,fontWeight:'bold',color:'#0045FF'}}>{haval}%</Text>
            </Context>
          </ContentCont>
        </Contents>


        <Contents style={{borderBottomWidth:8,borderColor:'#EFEFF5',paddingBottom:80}}>
          <View style={{flexDirection:"row",flexWrap:'wrap',margin:-6}}>
            <View style={{width:'50%',padding:6,}}>
              <TouchableOpacity onPress={() => navigation.navigate('Indicators7')}>
                <View style={{flexDirection:"column",borderRadius:5,borderWidth:1,borderColor:'#DBDBDB',backgroundColor:'#fbfbfc'}}>
                  <View style={{paddingHorizontal:6,height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
                    <Text style={{fontSize:14,fontWeight:'bold',color:"#191919"}}>HYPE</Text>
                    <View style={{flexShrink:0,flexDirection:'row',alignItems:'center',}}>
                      <Text style={{fontSize:10,marginRight:5}}>HYPE 스포트라이트</Text>
                      <Image resizeMode='contain' style={{width:5,marginLeft:5}}  source={require('~/Assets/Images/Tab1/asend_link3.png')} />
                    </View>
                  </View>
                  <ContentCont style={{padding:10,flexDirection:"column",borderRadius:5,backgroundColor:'#F8F8FA'}}>
                    <Context>
                      <Text style={{lineHeight:24,fontSize:12,color:'#191919'}}>#1. 한진 :</Text>
                      <Text style={{lineHeight:24,fontSize:12,fontWeight:'bold',color:'#FF2470'}}>+7.8%</Text>
                    </Context>
                    <Context>
                      <Text style={{lineHeight:24,fontSize:12,color:'#191919'}}>#2. 이엠텍 :</Text>
                      <Text style={{lineHeight:24,fontSize:12,fontWeight:'bold',color:'#FF2470'}}>+4.7%</Text>
                    </Context>
                    <Context>
                      <Text style={{lineHeight:24,fontSize:12,color:'#191919'}}>#3. 버킷 스튜디오 :</Text>
                      <Text style={{lineHeight:24,fontSize:12,fontWeight:'bold',color:'#FF2470'}}>+2.4%</Text>
                    </Context>
                  </ContentCont>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:'50%',padding:6,}}>
              <TouchableOpacity onPress={() => navigation.navigate('Indicators8')}>
                <View style={{flexDirection:"column",borderRadius:5,borderWidth:1,borderColor:'#DBDBDB',backgroundColor:'#fbfbfc'}}>
                  <View style={{paddingHorizontal:6,height:30,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
                    <Text style={{fontSize:14,fontWeight:'bold',color:"#191919"}}>핀플루언서</Text>
                    <View style={{flexShrink:0,flexDirection:'row',alignItems:'center',}}>
                      <Text style={{fontSize:10,marginRight:5}}>섹터 언급 순위</Text>
                      <Image resizeMode='contain' style={{width:5,marginLeft:5}}  source={require('~/Assets/Images/Tab1/asend_link3.png')} />
                    </View>
                  </View>
                  <ContentCont style={{padding:10,flexDirection:"column",borderRadius:5,backgroundColor:'#F8F8FA'}}>
                    <Context>
                      <Text style={{lineHeight:24,fontSize:12,color:'#191919'}}>#1. 반도체 :</Text>
                      <Text style={{flexShrink:0,lineHeight:24,fontSize:12,fontWeight:'bold',color:'#191919'}}><Image resizeMode='contain' style={{width:12,marginRight:10}}  source={require('~/Assets/Images/Tab1/asend_up.png')} /> 2</Text>
                    </Context>
                    <Context>
                      <Text style={{lineHeight:24,fontSize:12,color:'#191919'}}>#2. 테이퍼링 :</Text>
                      <Text style={{flexShrink:0,lineHeight:24,fontSize:12,fontWeight:'bold',color:'#191919'}}><Image resizeMode='contain' style={{width:12,marginRight:10}}  source={require('~/Assets/Images/Tab1/asend_down.png')} /> 3</Text>
                    </Context>
                    <Context>
                      <Text style={{lineHeight:24,fontSize:12,color:'#191919'}}>#3. 금리인상 :</Text>
                      <Text style={{flexShrink:0,lineHeight:24,fontSize:12,fontWeight:'bold',color:'#191919'}}><Image resizeMode='contain' style={{width:12,marginRight:10}}  source={require('~/Assets/Images/Tab1/asend_down.png')} /> 3</Text>
                    </Context>
                  </ContentCont>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Contents>

        <Contents>
          <ContentTitle style={{marginBottom:20}}>
            <Text style={{fontSize:19,fontWeight:'bold',color:'#191919'}}>FEAR &amp; GREED</Text>
            <Image resizeMode='contain' style={{marginLeft:6,width:16,}}  source={require('~/Assets/Images/Tab1/asend_bang.png')} />
            <Text style={{position:'absolute',top:6,right:10,fontSize:10,color:'#191919'}}>2021. 09 .18</Text>
          </ContentTitle>
          <ContentCont style={{padding:20,flexDirection:"column",borderRadius:5,backgroundColor:'#F8F8FA'}}>
            <Slider>
              <Text style={{color:'#767676'}}>빅데이터 분석을 기반으로한 어센드만의 {"\n"}시장경제 공포지수 (Fear &amp; Greed)</Text>
              <Image resizeMode='contain' style={{position:'absolute',top:0,right:10,width:60}}  source={require('~/Assets/Images/Tab1/asend_sub_logo.png')} />  
              <View style={{marginTop:50,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Image resizeMode='contain' style={{width:'100%'}}  source={require('~/Assets/Images/Tab1/asend_feargreed.png')} />  
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                  <Text style={{fontSize:10,color:'#000'}}>FEAR</Text><Text style={{fontSize:10,color:'#000'}}>-15</Text>
                </View>
                <View style={{flexDirection:'column',alignItems:'center'}}>
                  <Text style={{fontSize:10,color:'#000'}}>FEAR</Text><Text style={{fontSize:10,color:'#000'}}>-15</Text>
                </View>
              </View>
            </Slider>
          </ContentCont>          
        </Contents>

        <IssueContainer>
          <View style={{flexDirection:'row',marginHorizontal:-5}}>
          < View style={{flex:1,flexDirection:'row',marginHorizontal:5,}}>
            <View style={{flex:1,padding:10,borderLeftWidth:2,borderTopWidth:2,borderBottomWidth:2,borderColor:'#dbdbdb',borderTopLeftRadius:5,borderBottomLeftRadius:5,}}>
                <Text style={{marginBottom:5,fontSize:14,fontWeight:'bold',color:'#000'}}>Top <Text style={{color:'#0045FF'}}>FEAR</Text></Text>
                <Text style={{fontSize:12,color:'#000'}}>9월 6일의 이슈는?</Text>
              </View>
              <View style={{flexShrink:0,width:40,justifyContent:'center',alignItems:'center',backgroundColor:'#6524FF',borderTopRightRadius:5,borderBottomRightRadius:5,}}>
                <Image resizeMode='contain' style={{width:22}}  source={require('~/Assets/Images/Tab1/asend_link2.png')} />
              </View>
            </View>
            <View style={{flex:1,flexDirection:'row',marginHorizontal:5,borderRadius:5,}}>
              <View style={{flex:1,padding:10,borderLeftWidth:2,borderTopWidth:2,borderBottomWidth:2,borderColor:'#dbdbdb',borderTopLeftRadius:5,borderBottomLeftRadius:5,}}>
                <Text style={{marginBottom:5,fontSize:14,fontWeight:'bold',color:'#000'}}>Top <Text style={{color:'#FF2470'}}>GREED</Text></Text>
                <Text style={{fontSize:12,color:'#000'}}>9월 6일의 이슈는?</Text>
              </View>
              <View style={{flexShrink:0,width:40,justifyContent:'center',alignItems:'center',backgroundColor:'#6524FF',borderTopRightRadius:5,borderBottomRightRadius:5,}}>
                <Image resizeMode='contain' style={{width:22}}  source={require('~/Assets/Images/Tab1/asend_link2.png')} />
              </View>
            </View>
          </View>
        </IssueContainer>
      </ScrollView>
    </IndicatorsContainer>
  );
};

export default Indicators;
