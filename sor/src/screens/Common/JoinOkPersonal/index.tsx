import React, {useContext, useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, Text, View, ScrollView, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
import Styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';

const HeaderRightContainer = Styled.View`
  flex-direction: row;
`;
const JoinContainer = Styled.View`
  flex-direction: column;
  width: 100%; 
  min-height: 100%;
  padding: 0 17px 60px;
  background: #fff;
`;
const Titles = Styled.View`
  flex-direction: column;
  justify-Content: center;
  padding: 35px 0;
`;
const BoxContainer = Styled.View`
  flex-direction: column;
`;
const ButtonContainer = Styled.View`
  flex-direction: column;
`;

import {RandomUserDataContext} from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Feed from '~/Components/Feed';

import StoryList from './StoryList';
import { SafeAreaView } from 'react-native-safe-area-context';

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed33'>;

interface Props {
  navigation: NavigationProp;
}

const JoinOk_personal = ({navigation}: Props) => {

  const {getMyFeed} = useContext(RandomUserDataContext);
  const [feedList, setFeedList] = useState<Array<IFeed>>([]);
  const [storyList, setStoryList] = useState<Array<IFeed>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <IconButton iconName="topLeft" />,
      headerRight: () => (
        <HeaderRightContainer>          
          <IconButton iconName="topRight" />
        </HeaderRightContainer>
      ),
    });
  }, []);

  useEffect(() => {
    //setFeedList(getMyFeed());
    //setStoryList(getMyFeed());
    SplashScreen.hide();
  }, []);

  return (
    <JoinContainer style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={styles.contentContainer}>
        <Titles>
          <Text style={[styles.mainTitle]}>회원가입 완료!</Text>
        </Titles>
        <BoxContainer style={[styles.flexcolumn]}>
          <View style={[styles.joinOk]}>
            <Image style={[styles.joinOkImg]} source={require('~/Assets/Images/join/join_personal_img.png')} />
            <Text style={[styles.joinOkTit]}>고객님의 회원가입이 완료되었습니다..</Text>
            <Text style={[styles.joinOkTxt]}>지금 바로 픽베러 서비스를 이용해보세요!</Text>
          </View>
          <View style={[styles.joinNext]}>
            <TouchableOpacity
                onPress={() => {                  
                  navigation.navigate("Login");
                }}
              >
              <Text style={[styles.joinButton]}>로그인</Text>
            </TouchableOpacity>
          </View>
        </BoxContainer>
      </ScrollView>
    </JoinContainer>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1,alignItems: 'center',justifyContent: 'center',},
  mainTitle: {lineHeight: 26,fontSize: 24,fontWeight: '600',color: '#000',textAlign: 'center',},
  mainText: {marginTop: 20,lineHeight: 24,fontSize: 15,color: '#7d7f82',textAlign: 'center',  },
  
  joinOk:{justifyContent:'center',flexDirection:'column',alignItems:'center'},
  joinOkImg:{margin:'auto',marginBottom:50,justifyContent:'center',textAlign:'center',borderRadius:9999,},
  joinOkTit:{lineHeight:25,fontSize:17,fontWeight:'600',color:'#ff3c51',textAlign:'center'},
  joinOkTxt:{marginTop:5,lineHeight:23,fontSize:15,color:'#7d7f82',textAlign:'center',},
  joinNext:{marginTop:50,flexDirection:'row',justifyContent:'center'},
  joinButton:{flex:0,flexBasis:'80%',paddingHorizontal:30,lineHeight:44,fontSize: 16,color: '#929496',borderRadius:50,borderWidth: 1,borderColor: '#4a4c50',textAlign: 'center',},
 
  flexcolumn: { flexDirection:'column'},
  bgGray: { backgroundColor: "#f6f6f6" },
})

export default JoinOk_personal;
