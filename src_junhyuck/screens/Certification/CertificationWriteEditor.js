import React, {useRef, useState} from 'react';
import {View, StyleSheet, TextInput, Pressable, Text} from 'react-native';

import UploadModeModal from '../../components/UploadModeModal';

function CertificationWriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const bodyRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.block}>
        <TextInput
          placeholder="산을 입력하세요"
          style={styles.titleInput}
          returnKeyType="next"
          onChangeText={onChangeTitle}
          value={title}
          onSubmitEditing={() => {
            bodyRef.current.focus();
          }}
        />
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={styles.imageInput}>이미지 업로드</Text>
        </Pressable>
        <TextInput
          placeholder="당신의 인증을 기록해보세요"
          style={styles.bodyInput}
          multiline
          textAlignVertical="top"
          onChangeText={onChangeBody}
          value={body}
          ref={bodyRef}
        />
      </View>
      <UploadModeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  imageInput: {
    fontSize: 16,
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export default CertificationWriteEditor;
