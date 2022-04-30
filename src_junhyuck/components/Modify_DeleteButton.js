import React, {useState} from 'react';
import {Pressable, StyleSheet, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Moidfy_DeleteModeModal from './Modify_DeleteModeModal';

function Modify_DeleteButton({name, color, hasMarginRight, onAskDelete}) {
  const [modalVisible, setModalVisible] = useState(false);
  const onAskDelete_ing = {onAskDelete};
  return (
    <>
      <View
        style={[
          styles.iconButtonWrapper,
          hasMarginRight && styles.rightMargin,
        ]}>
        <Pressable
          style={({pressed}) => [
            styles.iconButton,
            Platform.OS === 'ios' &&
              pressed && {
                backgroundColor: '#efefef',
              },
          ]}
          onPress={() => setModalVisible(true)}
          android_ripple={{color: '#ededed'}}>
          <Icon name={name} size={24} color={color} />
        </Pressable>
      </View>
      <Moidfy_DeleteModeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAskDelete_end={onAskDelete_ing}
      />
    </>
  );
}

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  rightMargin: {
    marginRight: 8,
  },
});

export default Modify_DeleteButton;
