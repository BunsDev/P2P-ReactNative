import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { MyImage } from '@components/atoms/Image';
import BG_IMAGE from '@assets/images/bgimg.png';
import { useStyles } from './styles';
import { Fontisto } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [['En', 'Fr']];

const WelcomeScreen: React.FC = (props: any) => {
  const { navigation } = props;
  const styles = useStyles();
  const [selected, setSelected] = useState<string>('En');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <Fontisto
          name="world-o"
          color="black"
          size={20}
          style={{ marginRight: 5 }}
        />
        <Text>{'Skip'}</Text>
      </View>
      <Text style={styles.text}>
        {'Sell your phone, video Game, computer Complety free'}
      </Text>
      <MyImage source={BG_IMAGE} containerStyle={styles.imageItem} />
      <View style={styles.btngroup}>
        <Button
          title={'Sign Up'}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('register')}
          titleStyle={styles.upText}
          buttonStyle={styles.upButton}
        ></Button>
        <Button
          type="outline"
          title={'I already have an account'}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('login')}
          titleStyle={styles.inText}
          buttonStyle={styles.inButton}
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
