import { makeStyles } from 'react-native-elements';
export const useStyles = makeStyles((theme) => ({
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme?.colors?.grey3,
    height: 45,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  errorInputStyle: {
    marginTop: 0,
    textAlign: 'center',
    color: theme?.colors?.warning,
  },
}));
