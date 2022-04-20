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
import { JumpingTransition } from 'react-native-reanimated';

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed33'>;

interface Props {
  navigation: NavigationProp;
}

const Page4 = ({ navigation }: Props) => {

  return (
    <Container style={{marginTop:58,}}>
      <ScrollView style={{flexDirection:'column',height:'100%',backgroundColor:'#ffffff'}}>
        <View style={{flex:1,flexDirection:'column',marginVertical:'30%',paddingHorizontal:15,alignItems:'center',height:'100%',justifyContent:'center'}}>
        <View style={{borderRadius:5,borderWidth:1,borderColor:'#ccc',flexDirection:'row',overflow:'hidden'}}>
            <View style={{flexShrink:1,width:50,height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#eee'}}>
              <Text>ID</Text>
            </View>
            <View style={{flex:1,paddingHorizontal:10,}}>
              <TextInput style={{width:'100%',height:50,fontSize:14,backgroundColor:'#fff'}}></TextInput>
            </View>
          </View>
          <View style={{marginTop:10,borderRadius:5,borderWidth:1,borderColor:'#ccc',flexDirection:'row',overflow:'hidden'}}>
            <View style={{flexShrink:1,width:50,height:50,alignItems:'center',justifyContent:'center',backgroundColor:'#eee'}}>
              <Text>PW</Text>
            </View>
            <View style={{flex:1,paddingHorizontal:10,}}>
              <TextInput style={{width:'100%',height:50,fontSize:14,backgroundColor:'#fff'}} secureTextEntry={true}></TextInput>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Page4;
