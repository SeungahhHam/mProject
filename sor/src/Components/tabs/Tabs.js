import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import colors from '../../libs/colors';
import fonts from '../../libs/fonts';
import TextWrap from '../text-wrap/TextWrap';

export default function Tabs({titles, style, index, onIndexChange}) {
  return (
    <View style={[styles.root, style]}>
      {titles.map((x, i) => {
        return (
          <TouchableOpacity
            onPress={() => {
              onIndexChange(i);
            }}
            style={[styles.tab, i === index && styles.tabs]}
            key={i.toString()}>
            <TextWrap
              style={index === i && styles.labelS}
              font={
                i === index ? fonts.notoSansMediumKR : fonts.notoSansRegularKR
              }>
              {x}
            </TextWrap>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    backgroundColor: '#fff',
  },
  labelS: {
    color: colors.primary,
  },
  tab: {
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabs: {
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
  },
});
