import { makeStyles } from 'react-native-elements';

export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // button: {
  //   marginTop: 50,
  //   height: 50,
  //   width: 300,
  //   backgroundColor: theme?.colors?.secondary,
  //   shadowColor: theme?.colors?.black,
  // },
  mdlabel: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },

  headerline: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    fontSize: 25,
    borderColor: theme?.colors?.grey3,
  },

  underlineStyleHighLighted: {
    borderColor: theme?.colors?.secondary,
  },

  error: {
    color: theme?.colors?.error,
  },
}));
