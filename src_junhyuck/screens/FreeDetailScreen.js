import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  Alert,
  View,
  Button,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TransparentCircleButton from '../components/TransparentCircleButton';
import {BASE_URL} from '../config';

/* const ModifyScreen = () => {
  const log1 = route.params?.title;
  const log2 = route.params?.body;
  const log3 = route.params?.date;
  const log4 = route.params?.id;

  const [detailTitle, setDetailTitle] = useState(log1);
  const [detailBody, setDetailBody] = useState(log2);
  const [detailDate, setDetailDate] = useState(log3);
  const [detailId, setDetailId] = useState(log4);

  const navigation = useNavigation();
  var dataToSend = {
    id: detailId,
  };

  const onModify = () => {
    console.log(dataToSend);
    fetch(`${BASE_URL}/api/community/freedelete`, {
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
    <View>
      <Text style={styles.date}>{new Date(detailDate).toLocaleString()}</Text>
      <Text style={styles.title}>{detailTitle}</Text>
      <Text style={styles.body}>{detailBody}</Text>
      <Text style={styles.id}>{detailId}</Text>
      <Button title="수정하기" onPress={onModify} />
      <Button title="목록으로" onPress={() => navigation.pop()} />
    </View>
  );
}; */

function FreeDetailScreen({route}) {
  const log1 = route.params?.title;
  const log2 = route.params?.body;
  const log3 = route.params?.date;
  const log4 = route.params?.id;

  const [detailTitle, setDetailTitle] = useState(log1);
  const [detailBody, setDetailBody] = useState(log2);
  const [detailDate, setDetailDate] = useState(log3);
  const [detailId, setDetailId] = useState(log4);

  const navigation = useNavigation();
  var dataToSend = {
    id: detailId,
  };
  const onAskDelete = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        {text: '취소', style: 'cancle'},
        {
          text: '삭제',
          onPress: () => {
            console.log(dataToSend);
            fetch(`${BASE_URL}/api/community/freedelete`, {
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
          },
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  const onDelete = () => {
    console.log(dataToSend);
    fetch(`${BASE_URL}/api/community/freedelete`, {
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
    <View>
      <Text style={styles.date}>{new Date(detailDate).toLocaleString()}</Text>
      <Text style={styles.title}>{detailTitle}</Text>
      <Text style={styles.body}>{detailBody}</Text>
      <Text style={styles.id}>{detailId}</Text>
      <Button title="수정하기" />
      <TransparentCircleButton
        onPress={onAskDelete}
        name="delete-forever"
        color="#ef5350"
      />
      <Button title="목록으로" onPress={() => navigation.pop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    color: '#546e7a',
    fontSize: 12,
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
  id: {
    height: 0,
    width: 0,
  },
});

export default FreeDetailScreen;
