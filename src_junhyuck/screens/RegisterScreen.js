import React, {useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import {BASE_URL} from '../config';

function RegisterScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const registerButton = () => {
    if (!userName) {
      alert('이름을 입력해주세요');
      return;
    }
    if (!userEmail) {
      alert('이메일을 입력해주세요');
      return;
    }
    if (!userPassword) {
      alert('비밀번호를 입력해주세요');
      return;
    }

    var dataToSend = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    console.log(dataToSend);

    fetch(`${BASE_URL}/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    }).then(async res => {
      try {
        const jsonRes = await res.json();
        console.log(jsonRes);
        console.log('yes');
        Alert.alert('회원가입이 완료되었습니다', '  ', [
          {text: '로그인 하러가기', onPress: () => navigation.replace('Login')},
        ]);
      } catch (err) {
        console.log(err);
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          onChangeText={userName => setUserName(userName)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter email"
          onChangeText={userEmail => setUserEmail(userEmail)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter password"
          onChangeText={userPassword => setUserPassword(userPassword)}
          secureTextEntry
        />

        <Button title="회원가입" onPress={registerButton}></Button>

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
});

export default RegisterScreen;
