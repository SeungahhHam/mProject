import React from 'react';
import { 
    View, Text, StyleSheet, Image, 
    Alert, TouchableOpacity 
} from 'react-native';
import { 
    Container, Content, 
    Header, Left, Body, Right, 
    Button
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress'

import { BadgeButton } from '../Components/BadgeButton';

export default class ProfileTab extends React.Component{
    state = {open:false};
    openModal = () => this.setState({open:true});
    closeModal = () => this.setState({open:false});
    modalDidOpen = () => console.log("Modal did open.");
    modalDidClose=() => {
        this.setState({open:false});
    };

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
        paddingTop: 30,
        paddingBottom: 10,
    },
    profileText: {
        paddingTop: 10,
        paddingBottom: 30,
    },
    progress: {
        marginTop: 10,
        marginBottom: 30,
        alignItems: 'center',
    },
    btContainer: {
        flexDirection: 'column-reverse',
    },
    btList: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-around',
    },
    btName: {
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