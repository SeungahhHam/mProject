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

const Page3 = ({ navigation }: Props) => {

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
        <View style={{flexDirection:'row',marginBottom:15,paddingHorizontal:15}}>
          <Text style={{marginRight:10,width:40,height:40,lineHeight:40,justifyContent:'center',alignItems:'center',textAlign:'center',color:'#111',fontSize:12,}}>돋보기</Text>
          <Text style={{flex:1,lineHeight:40,justifyContent:'center',alignItems:'center',textAlign:'center',backgroundColor:'#2586ee',color:'#fff',borderRadius:5,fontSize:15,}}>인증</Text>
          <Text style={{flex:1,lineHeight:40,justifyContent:'center',alignItems:'center',textAlign:'center',backgroundColor:'#f0f0f0',color:'#111',borderRadius:5,fontSize:15,}}>자유</Text>
          <Text style={{flex:1,lineHeight:40,justifyContent:'center',alignItems:'center',textAlign:'center',backgroundColor:'#f0f0f0',color:'#111',borderRadius:5,fontSize:15,}}>모집</Text>
          <Text style={{flex:1,lineHeight:40,justifyContent:'center',alignItems:'center',textAlign:'center',backgroundColor:'#f0f0f0',color:'#111',borderRadius:5,fontSize:15,}}>질문</Text>
        </View>
        <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,paddingHorizontal:15,marginHorizontal:'-1%'}}>
          <View style={{flexDirection:'column',width:'48%',marginHorizontal:'1%',alignItems:'center'}}>
            <View style={{flexShrink:0,paddingTop:'100%',width:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'#f0f0f0',overflow:'hidden'}}>
              <Image 
              resizeMode='cover' 
              style={{position:'absolute',top:0,left:0,bottom:0,width:'100%',zIndex:5}}  
              source={require('~/Assets/Images/Common/asend_report_img.png')}
              />
            </View>
            <View style={{flexDirection:'column',paddingTop:10,paddingBottom:30}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:14,color:'#111'}}>이름</Text>
                <Text style={{marginLeft:10,fontSize:14,color:'#111'}}>산이름</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'column',width:'48%',marginHorizontal:'1%',alignItems:'center'}}>
            <View style={{flexShrink:0,paddingTop:'100%',width:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'#f0f0f0',overflow:'hidden'}}>
              <Image 
              resizeMode='cover' 
              style={{position:'absolute',top:0,left:0,bottom:0,width:'100%',zIndex:5}}  
              source={require('~/Assets/Images/Common/asend_report_img.png')}
              />
            </View>
            <View style={{flexDirection:'column',paddingTop:10,paddingBottom:30}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:14,color:'#111'}}>이름</Text>
                <Text style={{marginLeft:10,fontSize:14,color:'#111'}}>산이름</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'column',width:'48%',marginHorizontal:'1%',alignItems:'center'}}>
            <View style={{flexShrink:0,paddingTop:'100%',width:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'#f0f0f0',overflow:'hidden'}}>
              <Image 
              resizeMode='cover' 
              style={{position:'absolute',top:0,left:0,bottom:0,width:'100%',zIndex:5}}  
              source={require('~/Assets/Images/Common/asend_report_img.png')}
              />
            </View>
            <View style={{flexDirection:'column',paddingTop:10,paddingBottom:30}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:14,color:'#111'}}>이름</Text>
                <Text style={{marginLeft:10,fontSize:14,color:'#111'}}>산이름</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'column',width:'48%',marginHorizontal:'1%',alignItems:'center'}}>
            <View style={{flexShrink:0,paddingTop:'100%',width:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'#f0f0f0',overflow:'hidden'}}>
              <Image 
              resizeMode='cover' 
              style={{position:'absolute',top:0,left:0,bottom:0,width:'100%',zIndex:5}}  
              source={require('~/Assets/Images/Common/asend_report_img.png')}
              />
            </View>
            <View style={{flexDirection:'column',paddingTop:10,paddingBottom:30}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:14,color:'#111'}}>이름</Text>
                <Text style={{marginLeft:10,fontSize:14,color:'#111'}}>산이름</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexShrink:0,marginVertical:15,alignItems:'center',justifyContent:'center'}}>
          <Text style={{borderRadius:5,backgroundColor:'#555',fontSize:15,color:'#fff',paddingHorizontal:16,lineHeight:32}}>인증 글쓰기</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Page3;
