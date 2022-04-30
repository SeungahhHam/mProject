import React from 'react';
import { 
  View, Text, StyleSheet, Image, 
  Alert, TouchableOpacity,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

class UserInfoScreen extends React.Component{
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View>
                        <Image 
                          source={require("../Image/image3.png")}
                          style={styles.profile}
                        />
                    </View>
                    <View style={styles.profileTxtContainer}>
                        <Text style={styles.profileName}>닉네임</Text>
                        <Text style={styles.profileText}>자기소개</Text>
                    </View>
                </View>
              
                <View style={styles.progress}>
                    <Progress.Bar progress={0.3} width={200} />
                </View>
              
                <View style={styles.Tab}>
                    <TouchableOpacity 
                        activeOpacity={.5}
                        onPress={() => Alert.alert('Clicked!!')}>
                        <Icon name='emoji-events' size={40} color="yellow"/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={.5}
                        onPress={() => Alert.alert('Clicked!!')}>
                        <Icon name='collections' size={40} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={.5}
                        onPress={() => Alert.alert('Clicked!!')}>
                        <Icon name='comment' size={40} color="darkblue"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.btContainer}>
                    <View style={styles.btList}>
                        <View>
                            <View style={styles.btName}>
                                <Text style={styles.btNameText}>Badge1</Text>
                            </View>
                            <TouchableOpacity 
                                activeOpacity={.5}
                                onPress={this.openModal}>
                                <Image 
                                    source={require("../Image/mountain.png")}
                                    style={styles.button}
                                />
                            </TouchableOpacity>
                            <Text style={styles.btProgress}>10%</Text>
                        </View>
                        <View>
                            <View style={styles.btName}>
                                <Text style={styles.btNameText}>Badge2</Text>
                            </View>
                            <TouchableOpacity 
                                activeOpacity={.5}
                                onPress={() => Alert.alert('Clicked!!')}>
                                <Image 
                                    source={require("../Image/mountain.png")}
                                    style={styles.button}
                                />
                            </TouchableOpacity>
                            <Text style={styles.btProgress}>20%</Text>
                        </View>
                        <View>
                            <View style={styles.btName}>
                                <Text style={styles.btNameText}>Badge3</Text>
                            </View>
                            <TouchableOpacity 
                                activeOpacity={.5}
                                onPress={() => Alert.alert('Clicked!!')}>
                                <Image 
                                    source={require("../Image/mountain.png")}
                                    style={styles.button}
                                />
                            </TouchableOpacity>
                            <Text style={styles.btProgress}>30%</Text>
                        </View>
                    </View>
                    <View style={styles.btList}>
                        <View>
                            <View style={styles.btName}>
                                <Text style={styles.btNameText}>Badge4</Text>
                            </View>
                            <TouchableOpacity 
                                activeOpacity={.5}
                                onPress={this.openModal}>
                                <Image 
                                    source={require("../Image/mountain.png")}
                                    style={styles.button}
                                />
                            </TouchableOpacity>
                            <Text style={styles.btProgress}>40%</Text>
                        </View>
                        <View>
                            <View style={styles.btName}>
                                <Text style={styles.btNameText}>Badge5</Text>
                            </View>
                            <TouchableOpacity 
                                activeOpacity={.5}
                                onPress={() => Alert.alert('Clicked!!')}>
                                <Image 
                                    source={require("../Image/mountain.png")}
                                    style={styles.button}
                                />
                            </TouchableOpacity>
                            <Text style={styles.btProgress}>50%</Text>
                        </View>
                    <View>
                          <View style={styles.btName}>
                              <Text style={styles.btNameText}>Badge6</Text>
                          </View>
                          <TouchableOpacity 
                          activeOpacity={.5}
                          onPress={() => Alert.alert('Clicked!!')}>
                          <Image 
                              source={require("../Image/mountain.png")}
                              style={styles.button}
                          />
                          </TouchableOpacity>
                          <Text style={styles.btProgress}>60%</Text>
                      </View>
                  </View>
              </View>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  header: {
      flexDirection: 'row',
      marginTop: 30,
      paddingTop: 10,
      paddingLeft: 10,
  },
  profile: {
      flexDirection: 'row',
      alignItems: 'stretch',
      height: 100,
      width: 100,
      resizeMode: 'contain',
      borderRadius: 100,
  },
  profileTxtContainer: {
      paddingLeft: 10,
  },
  profileName: {
      flex:1,
      paddingTop: 20,
      paddingBottom: 5,
  },
  profileText: {
      flex:1,
      paddingBottom: 10,
  },
  progress: {
      marginTop: 10,
      marginBottom: 30,
      alignItems: 'center',
  },
  Tab:{
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      borderTopWidth: 1,
      borderTopColor: '#eae5e5',
      borderBottomWidth: 1,
      borderBottomColor: '#eae5e5',
      backgroundColor: 'rgba(0, 100, 0, 0.8)',
      borderRadius: 5,
      paddingTop: 5,
      paddingBottom: 5, 
  },
  btContainer: {
      
  },
  btList: {
      flexDirection: 'row',
      margin: 10,
      justifyContent: 'space-around',
  },
  btName: {
      marginLeft: 10,
      alignItems: 'center',
      width: 70,
      backgroundColor: 'rgba(0, 100, 0, 0.7)',
      borderRadius: 10,
  },
  btNameText: {
      textAlign: 'center',
      color: "white",
  },
  btProgress: {
      textAlign: 'center',
  },
  button: {
      alignItems: 'center',
      height: 100,
      width: 100,
      resizeMode: 'contain',
  }
})

export default UserInfoScreen;