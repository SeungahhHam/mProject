import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import QuestionWriteEditor from './QuestionWriteEditor';
import WriteHeader from '../../components/WriteHeader';
import {v4 as uuidv4} from 'uuid';
import {BASE_URL} from '../../config';

function QuestionWriteScreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigation = useNavigation();

  const onSave = () => {
    if (!title) {
      alert('제목을 입력해주세요');
      return;
    }
    if (!body) {
      alert('내용을 입력해주세요');
      return;
    }

    var dataToSend = {
      title: title,
      text: body,
      time: new Date().toISOString(),
      id: uuidv4(),
    };

    console.log(dataToSend);

    fetch(`${BASE_URL}/api/community/freeInit`, {
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
        navigation.pop();
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader onSave={onSave} />
      <QuestionWriteEditor
        title={title}
        body={body}
        onChangeTitle={setTitle}
        onChangeBody={setBody}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default QuestionWriteScreen;
