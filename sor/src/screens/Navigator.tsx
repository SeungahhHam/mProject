import React, { useContext } from "react";
import { Image } from "react-native";
import { NavigationContainer }   from "@react-navigation/native";
import { createStackNavigator }  from "@react-navigation/stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from "~/Context/User";

import SearchBar from "~/Components/SearchBar";
import Loading   from "~/Components/Loading";

//Common
import Login          from "~/screens/Common/Login";
import JoinPersonal   from "~/screens/Common/JoinPersonal";     
import JoinOkPersonal from "~/screens/Common/JoinOkPersonal"; 
import Started        from "~/screens/Common/Started";
import FindId         from "~/screens/Common/FindId";
import FindPw         from "~/screens/Common/FindPw";
import FindPw2        from "~/screens/Common/FindPw2";

// import Alarm    from "~/screens/Common/Alarm";                    //내용 추가 
// import Change   from "~/screens/Common/Change";
// import Change2  from "~/screens/Common/Change2";
// import Change3  from "~/screens/Common/Change3";
// import Change4  from "~/screens/Common/Change4";
// import Change5  from "~/screens/Common/Change5";
// import ChangePw from "~/screens/Common/ChangePw";
// import Charge   from "~/screens/Common/Charge";

// import Find     from "~/screens/Common/Find";
// import FindOk   from "~/screens/Common/FindOk";
// import FindPw   from "~/screens/Common/FindPw";

//import JoinOkCompany  from "~/screens/Common/JoinOkCompany";    //미개발
//import JoinCompany    from "~/screens/Common/JoinCompany";      //미개발


// import MyInfo   from "~/screens/Common/MyInfo";                 //미개발
// import MyInfo2  from "~/screens/Common/MyInfo2";                //미개발

// import Terms    from "~/screens/Common/Terms";                  //미개발
// import UnRegi   from "~/screens/Common/UnRegi";                 //미개발
// import UnRegiOk from "~/screens/Common/UnRegiOk";               //미개발

//Tab1 
import Indicators      from "~/screens/Common/Page6";
import Indicators2     from "~/screens/Common/Indicators2"; // 지표 EPD
import Indicators3     from "~/screens/Common/Indicators3"; // 지표 EWD 
import Indicators4     from "~/screens/Common/Indicators4"; // 지표 ARI 
import Indicators5     from "~/screens/Common/Indicators5"; // 지표 RAI 
import Indicators6     from "~/screens/Common/Indicators6"; // 지표 HYPE
import Indicators7     from "~/screens/Common/Indicators7"; // HYPE 스포트라이트
import Indicators8     from "~/screens/Common/Indicators8"; // 핀플루언서 지수
import Indicators9     from "~/screens/Common/Indicators9"; // asend 퀀트 전략

//Tab2
import Testings       from "~/screens/Common/Page5";
import Testings2      from "~/screens/Common/Testings2";

//Tab3
import Mypages        from "~/screens/Common/Page7";
import Search         from "~/screens/Common/Search";
import SearchDetail   from "~/screens/Common/SearchDetail";
import Tutorial       from "~/screens/Common/Tutorial";
import Qna            from "~/screens/Common/Qna";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="JoinPersonal" component={JoinPersonal} />
      <Stack.Screen name="JoinOkPersonal" component={JoinOkPersonal} />
      <Stack.Screen name="Started" component={Started}  options={{ headerMode: "float", headerTitle: "로그인", headerShown: true, headerStyle: {backgroundColor: "transparent",}, headerTransparent: true, }} />
      <Stack.Screen name="FindId" component={FindId} options={{ headerMode: "float", headerTitle: "아이디 찾기", headerShown: true, headerStyle: {backgroundColor: "transparent",}, headerTransparent: true, }} />
      <Stack.Screen name="FindPw" component={FindPw} options={{ headerMode: "float", headerTitle: "비밀번호 찾기", headerShown: true, headerStyle: {backgroundColor: "transparent",}, headerTransparent: true, }} />
      <Stack.Screen name="FindPw2" component={FindPw2} options={{ headerMode: "float", headerTitle: "비밀번호 찾기", headerShown: true, headerStyle: {backgroundColor: "transparent",}, headerTransparent: true, }} />

      {/* <Stack.Screen name="JoinCompany" component={JoinCompany} />
      <Stack.Screen name="JoinOkCompany" component={JoinOkCompany} /> */}
      {/* <Stack.Screen name="PasswordReset" component={PasswordReset} /> */}
      {/* <Stack.Screen name="Find" component={Find} />
      <Stack.Screen name="FindPw" component={FindPw} /> */}
    </Stack.Navigator>
  );
};

//첫번째 탭 
const OneTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Indicators"
        component={Indicators}
        options={{
          headerMode: "float",
          headerTitle: "Tab1",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />  
      <Stack.Screen
        name="Indicators2"
        component={Indicators2}
        options={{
          headerMode: "float",
          headerTitle: "Tab2",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Indicators3"
        component={Indicators3}
        options={{
          headerMode: "float",
          headerTitle: "Tab3",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Indicators4"
        component={Indicators4}
        options={{
          headerMode: "float",
          headerTitle: "지표",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Indicators5"
        component={Indicators5}
        options={{
          headerMode: "float",
          headerTitle: "지표",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Indicators6"
        component={Indicators6}
        options={{
          headerMode: "float",
          headerTitle: "지표",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Indicators7"
        component={Indicators7}
        options={{
          headerMode: "float",
          headerTitle: "지표",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Indicators8"
        component={Indicators8}
        options={{
          headerMode: "float",
          headerTitle: "지표",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Indicators9"
        component={Indicators9}
        options={{
          headerMode: "float",
          headerTitle: "지표",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};
//두번째 탭
const TwoTab = (props) => {
  console.log("props", props.route);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Testings"
        component={Testings}
        options={{
          headerMode: "float",
          headerTitle: "Tab2",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Testings2"
        component={Testings2}
        options={{
          headerMode: "float",
          headerTitle: "백테스팅",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};
//세번째 탭
const ThreeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab3"
        component={Mypages}
        options={{
          headerMode: "float",
          headerTitle: "MY",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerMode: "float",
          headerTitle: "검색",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="SearchDetail"
        component={SearchDetail}
        options={{
          headerMode: "float",
          headerTitle: "뉴스 검색",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="Tutorial"
        component={Tutorial}
        options={{
          headerMode: "float",
          headerTitle: "튜토리얼",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="Qna"
        component={Qna}
        options={{
          headerMode: "float",
          headerTitle: "QnA",
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
      }}
    >
      <BottomTab.Screen
        name="Tab1"
        component={OneTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("~/Assets/Images/Tabs/app_jipyo_on.png")
                  : require("~/Assets/Images/Tabs/app_jipyo_off.png")
              }
              resizeMode='contain'
              style={{width:18}}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Tab2"
        component={TwoTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("~/Assets/Images/Tabs/app_testing_on.png")
                  : require("~/Assets/Images/Tabs/app_testing_off.png")
              }
              resizeMode='contain'
              style={{width:20}}
            />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Tab3"
        component={ThreeTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require("~/Assets/Images/Tabs/app_mypage_on.png")
                  : require("~/Assets/Images/Tabs/app_mypage_off.png")
              }
              resizeMode='contain'
              style={{width:20}}
            />
          ),
          headerShown: false,
        }}
      />      
    </BottomTab.Navigator>
  );
};

// const MainNavigator = () => {
//   return (
//     <Drawer.Navigator
//       drawerPosition="right"
//       drawerType="slide"
//       drawerContent={(props) => <CustomDrawer props={props} />}
//     >
//       <Drawer.Screen name="MainTabs" component={MainTabs} />
//     </Drawer.Navigator>
//   );
// };

export default () => {

  const { isLoading, userInfo } = useContext<IUserContext>(UserContext);

  if (isLoading === false) {  
     return <Loading />; 
  }
  
  if(userInfo){
    console.log( "userInfo=id==" + userInfo.email );
    console.log( "userInfo=name==" + userInfo.name );
  }else{
    console.log( "userInfo=== null");   
  }

  return (
    <NavigationContainer>
      {/*{ userInfo ? <MainTabs /> : <LoginNavigator />}*/}
      { <MainTabs />}
    </NavigationContainer>
  );
};