import React, { useState } from 'react';
import { View, LayoutAnimation, UIManager } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { MyImage } from '@components/atoms/Image';
import { Fontisto } from '@expo/vector-icons';
import BG_IMAGE from '@assets/images/bgimg.png';
import { useStyles } from './styles';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const data = [['En', 'Fr']];

const WelcomeScreen: React.FC = () => {
  const styles = useStyles();
  const [selected, setSelected] = useState<string>('En');

  const [isLoading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const selectCategory = (selectedCategoryIndex: number) => {
    LayoutAnimation.easeInEaseOut();
    setLoading(false);
    setSelectedCategory(selectedCategoryIndex);
  };

  const isLoginPage = selectedCategory === 0;
  const isSignUpPage = selectedCategory === 1;
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Fontisto
          name="world-o"
          color="black"
          size={20}
          style={{ marginRight: 5 }}
        />
        <Text>{'Skip'}</Text>
      </View>
      <View>
        <Text style={styles.text}>
          {'Sell your phone, video Game, computer Complety free'}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <MyImage source={BG_IMAGE} containerStyle={styles.imageItem} />
      </View>
      <View style={styles.btngroup}>
        <Button
          title={'Sign Up'}
          activeOpacity={0.7}
          onPress={() => selectCategory(0)}
          titleStyle={[
            styles.inText,
            isLoginPage && styles.selectedCategoryText,
          ]}
          buttonStyle={styles.upButton}
          disabled={isLoading}
        ></Button>
        <Button
          type="outline"
          title={'I already have an account'}
          activeOpacity={0.7}
          onPress={() => selectCategory(0)}
          titleStyle={[
            styles.upText,
            isSignUpPage && styles.selectedCategoryText,
          ]}
          buttonStyle={styles.inButton}
          disabled={isLoading}
        ></Button>
      </View>
    </View>
  );
};

export default WelcomeScreen;
