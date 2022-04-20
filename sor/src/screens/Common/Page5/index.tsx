import React, { useContext, useState, useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput, Alert } from 'react-native';
import Styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import Input  from '~/Components/Input';
import Button from '~/Components/Button';
//import Slider from "@react-native-community/slider";
import axios from "axios";

const Container = Styled.View`

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

const Page5 = ({ navigation }: Props) => {

  return (
    <Container style={{marginTop:58,}}>
      <ScrollView style={{flexDirection:'column',height:'100%',backgroundColor:'#ffffff'}}>
        <View style={{padding:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{width:30,height:30,borderRadius:24,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12,color:'#FFF'}}>SOS</Text>
          </View>
          <View>
            <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>로고</Text>
          </View>
          <View style={{width:30,height:30,borderRadius:24,backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12,color:'#FFF'}}>My</Text>
          </View>
        </View>
        <View style={{paddingHorizontal:15,}}>
        <View style={{flexDirection:'row',marginBottom:10,borderWidth:1,borderColor:'#ddd',borderRadius:5,backgroundColor:'#fafafa'}}>
            <View style={{flexShrink:0,width:100,alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
              <Image 
              resizeMode='contain' 
              style={{zIndex:5,width:160,height:100 }}  
              source={require('~/Assets/Images/Common/san1.jpg')}
              />
            </View>
            <View style={{flex:1,flexDirection:'column',paddingVertical:10,paddingHorizontal:20}}>
              <Text style={{fontSize:14,color:'#111'}}>광교산</Text>
              <Text style={{marginTop:5,fontSize:14,color:'#666'}}>경기 용인시 수지구 고기동 산58-1</Text>
              <View style={{marginTop:25,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:13,color:'#666'}}>Info</Text>
                <Text style={{marginLeft:30,fontSize:13,color:'#0055e0'}}>리뷰 보기</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row',marginBottom:10,borderWidth:1,borderColor:'#ddd',borderRadius:5,backgroundColor:'#fafafa'}}>
            <View style={{flexShrink:0,width:100,alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
              <Image 
              resizeMode='contain' 
              style={{zIndex:5,width:160,height:100}}  
              source={require('~/Assets/Images/Common/san2.jpg')}
              />
            </View>
            <View style={{flex:1,flexDirection:'column',paddingVertical:10,paddingHorizontal:20}}>
              <Text style={{fontSize:14,color:'#111'}}>설악산</Text>
              <Text style={{marginTop:5,fontSize:14,color:'#666'}}>강원도 인제군 북면 한계리</Text>
              <View style={{marginTop:25,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:13,color:'#666'}}>Info</Text>
                <Text style={{marginLeft:30,fontSize:13,color:'#0055e0'}}>리뷰 보기</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row',marginBottom:10,borderWidth:1,borderColor:'#ddd',borderRadius:5,backgroundColor:'#fafafa'}}>
            <View style={{flexShrink:0,width:100,alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
              <Image 
              resizeMode='contain' 
              style={{zIndex:5,width:160,height:100}}  
              source={require('~/Assets/Images/Common/san3.jpg')}
              />
            </View>
            <View style={{flex:1,flexDirection:'column',paddingVertical:10,paddingHorizontal:20}}>
              <Text style={{fontSize:14,color:'#111'}}>한라산</Text>
              <Text style={{marginTop:5,fontSize:14,color:'#666'}}>제주 서귀포시 토평동 산 15-1</Text>
              <View style={{marginTop:25,flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:13,color:'#666'}}>Info</Text>
                <Text style={{marginLeft:30,fontSize:13,color:'#0055e0'}}>리뷰 보기</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Page5;
