import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import fonts from '../../libs/fonts';
import images from '../../libs/images';
import TextWrap from '../text-wrap/TextWrap';

export default function Topbar({title, onBack, icon}) {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={onBack || navigation.goBack}
        style={styles.backwrap}>
        <Image style={styles.back} source={images.back} />
      </TouchableOpacity>
      <View style={styles.titlebar}>
        <TextWrap style={styles.title} font={fonts.notoSansMediumKR}>
          {title}
        </TextWrap>
      </View>
      <View>{icon && icon}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: '#fff',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    justifyContent: 'space-between',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titlebar: {
    position: 'absolute',
    left: 48,
    right: 48,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    top: 0,
  },
  title: {
    fontSize: 16,
  },
  back: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
