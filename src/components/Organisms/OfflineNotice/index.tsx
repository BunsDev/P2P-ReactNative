import React from 'react';
import Constants from 'expo-constants';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-elements';
import { useNetInfo } from '@react-native-community/netinfo';
import { makeStyles } from 'react-native-elements';

const OfflineNotice: React.FC = () => {
  const netInfo = useNetInfo();
  const { theme } = useTheme();
  const styles = useStyles();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={{ color: theme?.colors?.white }}>
          No Internet Connection
        </Text>
      </View>
    );

  return null;
};

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: Constants.statusBarHeight,
    backgroundColor: theme?.colors?.primary,
    width: '100%',
    zIndex: 1,
  },
}));

export default OfflineNotice;
