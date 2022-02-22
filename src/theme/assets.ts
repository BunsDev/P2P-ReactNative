import { cacheFonts } from '@utils/AssetsCaching';
import vectorFonts from '@utils/vector-fonts';

const loadAssetsAsync = async () => {
  const fontAssets = cacheFonts([
    ...vectorFonts,
    { georgia: require('@assets/fonts/Georgia.ttf') },
    { regular: require('@assets/fonts/Montserrat-Regular.ttf') },
    { light: require('@assets/fonts/Montserrat-Light.ttf') },
    { bold: require('@assets/fonts/Montserrat-Bold.ttf') },
    { UbuntuLight: require('@assets/fonts/Ubuntu-Light.ttf') },
    { UbuntuBold: require('@assets/fonts/Ubuntu-Bold.ttf') },
    { UbuntuLightItalic: require('@assets/fonts/Ubuntu-Light-Italic.ttf') },
  ]);

  await Promise.all([...fontAssets]);
};

export default loadAssetsAsync;
