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

const Page7 = ({ navigation }: Props) => {

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
        <View style={{marginBottom:20,paddingHorizontal:15}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{width:50,height:50,flexShrink:0,marginRight:10,alignItems:'center',justifyContent:'center'}}>
              <Text>이미지</Text>
            </View>
            <View style={{flex:1,}}>
              <Text style={{fontSize:16,fontWeight:'bold',color:'#111'}}>광교산</Text>
            </View>
            <View style={{flexShrink:0,marginLeft:10,flexDirection:'row'}}>
              <Text style={{paddingHorizontal:10,fontSize:11,color:'#666',textAlign:'center'}}>빈구름{'\n'}이미지</Text>
              <Text style={{paddingHorizontal:10,fontSize:11,color:'#666',textAlign:'center',borderLeftWidth:1,borderColor:'#efefef'}}>꽉찬 구름{'\n'}이미지</Text>
            </View>
          </View>
        </View>
        <View style={{marginBottom:20,paddingHorizontal:15}}>
          <Text style={{fontSize:16,color:"#111"}}>난이도 : ★★★</Text>
        </View>
        <View style={{flexDirection:'row',flexWrap:'wrap',marginBottom:20,paddingHorizontal:15}}>
          <Text style={{marginRight:10,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4'}}>키워드</Text>
          <Text style={{marginRight:10,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4'}}>키워드</Text>
          <Text style={{marginRight:10,fontSize:13,color:"#fff",borderRadius:15,lineHeight:30,paddingHorizontal:10,backgroundColor:'#02dbb4'}}>키워드</Text>
        </View>
        <View style={{flexDirection:'column',marginBottom:20,paddingHorizontal:15}}>
          <Text style={{width:'100%',height:250,backgroundColor:"#eee",alignItems:'center',justifyContent:'center',textAlign:'center'}}></Text>
        </View>
        <View style={{flexDirection:'column',marginBottom:20,paddingHorizontal:15}}>
          <Text style={{paddingHorizontal:15,lineHeight:30,fontSize:15}}>● 교통</Text>
          <Text style={{paddingHorizontal:15,lineHeight:30,fontSize:15}}>● 교통</Text>
          <Text style={{paddingHorizontal:15,lineHeight:30,fontSize:15}}>● 교통</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Page7;
