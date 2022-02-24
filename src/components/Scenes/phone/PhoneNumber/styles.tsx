import { makeStyles } from 'react-native-elements';

export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },

  phonecontainer: {
    marginTop: 10,
    borderRadius: 5,
  },

  button: {
    marginTop: 50,
    height: 50,
    width: 300,
    backgroundColor: theme?.colors?.secondary,
    shadowColor: theme?.colors?.black,
  },
  mdlabel: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 30,
  },
}));
