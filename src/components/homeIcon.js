import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Svg, {Path, G, Mask, Rect} from 'react-native-svg';

const HomeIcon = props => {
  console.log('check props', props);

  const iconHeight = props.height;
  const iconWidth = props.width;
  const iconColor = props.fill;

  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 24 24" fill="none">
      <Mask
        id="mask0_8_106"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={iconWidth}
        height={iconHeight}>
        <Rect width={iconWidth} height={iconHeight} fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_8_106)">
        <Path
          d="M4.875 22C4.22188 22 3.66296 21.7764 3.19825 21.3291C2.73275 20.8811 2.5 20.3429 2.5 19.7143V9.42857C2.5 9.06667 2.58431 8.72381 2.75294 8.4C2.92077 8.07619 3.15313 7.80952 3.45 7.6L10.575 2.45714C10.7927 2.30476 11.0203 2.19048 11.2578 2.11429C11.4953 2.0381 11.7427 2 12 2C12.2573 2 12.5047 2.0381 12.7422 2.11429C12.9797 2.19048 13.2073 2.30476 13.425 2.45714L20.55 7.6C20.8469 7.80952 21.0796 8.07619 21.2483 8.4C21.4161 8.72381 21.5 9.06667 21.5 9.42857V19.7143C21.5 20.3429 21.2676 20.8811 20.8029 21.3291C20.3374 21.7764 19.7781 22 19.125 22H14.375V14H9.625V22H4.875Z"
          fill={iconColor}
        />
      </G>
    </Svg>
  );
};

const styles = StyleSheet.create({});

export default HomeIcon;
