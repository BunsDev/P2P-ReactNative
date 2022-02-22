import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Image } from 'react-native-elements';
import AppLoading from 'expo-app-loading';

interface imageProps {
  source: ImageSourcePropType;
  containerStyle: any;
}

export const MyImage: React.FC<imageProps> = ({ source, containerStyle }) => {
  return (
    <Image
      source={source}
      containerStyle={containerStyle}
      PlaceholderContent={<AppLoading />}
    />
  );
};
