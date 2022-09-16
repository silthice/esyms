import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const OrderIcon = props => {
  const iconHeight = props.height;
  const iconWidth = props.width;
  const iconColor = props.fill;

  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.03268 8.46411C3.03268 9.90727 3.94606 10.8207 5.38918 10.8207H8.51288V4.43603C8.51288 3.42216 7.6817 2.6001 6.66786 2.6001C5.67229 2.60923 4.75893 3.01113 4.1013 3.66877C3.44368 4.33555 3.03268 5.24895 3.03268 6.25369V8.46411Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M21.3 19.9546C21.3 20.7128 20.4414 21.1421 19.8386 20.6854L18.2767 19.5162C17.9114 19.2422 17.3999 19.2787 17.0711 19.6076L15.5549 21.1329C15.1987 21.4892 14.6141 21.4892 14.2579 21.1329L12.7235 19.5984C12.4038 19.2787 11.8923 19.2422 11.5361 19.5162L9.97422 20.6854C9.3714 21.1329 8.51286 20.7036 8.51286 19.9546V4.42689C8.51286 3.42216 7.69083 2.6001 6.68612 2.6001H16.7332H17.6465C20.3866 2.6001 21.3 4.23508 21.3 6.25369V7.16708V19.9546Z"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.6465 8.99348H12.1663"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16.9612 12.6454H12.8511"
        stroke={iconColor}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({});

export default OrderIcon;
