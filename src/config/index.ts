// @ts-ignore
import { PHONE_BASE_URL } from 'react-native-dotenv';

const ENV = Object.freeze({
  phone_base_api: (PHONE_BASE_URL as string) || '',
});

export { ENV };
