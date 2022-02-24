import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useStyles } from './styles';

const GateScreen = (props: any) => {
  const { navigation } = props;
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Text>Successfully registered!</Text>
      </View>
      <Button
        title="Start over"
        onPress={() => navigation.replace('PhoneNumber')}
      />
    </SafeAreaView>
  );
};

export default GateScreen;
