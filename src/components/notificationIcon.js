import React from 'react';
import Svg, {Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

const NotificationIcon = props => {
  const iconHeight = props.height;
  const iconWidth = props.width;
  const iconColor = props.fill;

  return (
    <Svg width={iconWidth} height={iconHeight} viewBox="0 0 24 24" fill="none">
      <G clip-path="url(#clip0_8_113)">
        <Path
          d="M8.03217 19.8816C7.85169 19.7874 7.64097 19.77 7.44738 19.8329L4.01263 20.9779C3.73624 21.07 3.4313 20.9981 3.22529 20.7921C3.01929 20.5861 2.9474 20.2812 3.03946 20.0048L4.18025 16.5829C4.24355 16.3882 4.22532 16.1762 4.12982 15.9951C2.98238 13.7552 2.83389 11.135 3.72102 8.77985C4.60796 6.4247 6.44809 4.55343 8.78796 3.62683C11.1279 2.70045 13.7502 2.80471 16.0093 3.91417C18.2683 5.02381 19.9537 7.03539 20.6507 9.45333C21.3479 11.8716 20.9917 14.4718 19.67 16.6137C18.3481 18.7553 16.1837 20.2394 13.7094 20.7006C11.7781 21.0582 9.78302 20.7704 8.03217 19.8816Z"
          stroke={iconColor}
          stroke-width="1.5"
          stroke-miterlimit="10"
        />
        <Path
          d="M7.39874 10.7384C7.39874 10.3008 7.75346 9.94611 8.19102 9.94611H15.7961C16.2337 9.94611 16.5884 10.3008 16.5884 10.7384C16.5884 11.1759 16.2337 11.5307 15.7961 11.5307H8.19102C7.75346 11.5307 7.39874 11.1759 7.39874 10.7384Z"
          fill={iconColor}
        />
        <Path
          d="M7.39758 13.9073C7.39758 13.4698 7.7523 13.115 8.18986 13.115H12.6276C13.0652 13.115 13.4199 13.4698 13.4199 13.9073C13.4199 14.3449 13.0652 14.6996 12.6276 14.6996H8.18986C7.7523 14.6996 7.39758 14.3449 7.39758 13.9073Z"
          fill={iconColor}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_8_113">
          <Rect width="20" height="20" fill="white" transform="translate(2 2)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default NotificationIcon;
