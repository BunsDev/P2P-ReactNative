import { makeStyles } from 'react-native-elements';
export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inButton: {
    backgroundColor: theme?.colors?.secondary,
    borderRadius: 5,
    margin: 10,
  },
  inText: {
    color: theme?.colors?.white,
  },

  loginHereContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alreadyAccountText: {
    fontSize: 14,
  },
  loginHereText: {
    color: theme?.colors?.secondary,
    fontSize: 14,
  },
  socialgp: {
    marginBottom: 10,
  },
  // label
  mdlabel: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 30,
  },
  smlabel: {
    fontSize: 14,
    textAlign: 'center',
    color: theme?.colors?.secondary,
  },
}));
