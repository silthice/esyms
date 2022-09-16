import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ExploreIcon = props => {
  const iconHeight = props.height;
  const iconWidth = props.width;
  const iconColor = props.fill;

  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22C17.2173 22 21.5009 17.7173 21.5009 12.5C21.5009 7.28269 17.2164 3 11.9991 3C6.77112 3 2.5 7.28269 2.5 12.5C2.5 17.7173 6.77199 22 12 22ZM12 21.427C7.07094 21.427 3.06314 17.4299 3.06314 12.5C3.06314 7.57005 7.07007 3.57297 11.9991 3.57297C16.9291 3.57297 20.927 7.57005 20.927 12.5C20.927 17.4299 16.9299 21.427 12 21.427Z"
        fill={iconColor}
        stroke={iconColor}
      />
      <Path
        d="M10.8605 15.201C13.0001 15.201 14.7401 13.4726 14.7401 11.333C14.7401 9.19251 13.0001 7.43025 10.8605 7.43025C8.72093 7.43025 6.96936 9.19338 6.96936 11.333C6.96936 13.4717 8.72093 15.201 10.8605 15.201ZM10.8721 14.655C9.03435 14.655 7.51443 13.1592 7.51443 11.3214C7.51443 9.4729 9.03435 7.96458 10.8721 7.96458C12.7215 7.96458 14.2058 9.47204 14.2058 11.3214C14.2058 13.1592 12.7215 14.655 10.8721 14.655ZM16.6514 17.5744C16.8851 17.5744 17.0271 17.4082 17.0271 17.2076C17.0271 17.0627 16.9605 16.9998 16.868 16.8948L13.618 13.6092L13.0567 14.1385L16.3076 17.401C16.4044 17.521 16.5022 17.5744 16.6514 17.5744Z"
        fill={iconColor}
        stroke={iconColor}
      />
    </Svg>
  );
};

const styles = StyleSheet.create({});

export default ExploreIcon;
