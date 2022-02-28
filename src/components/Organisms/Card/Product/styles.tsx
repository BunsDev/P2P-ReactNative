import { makeStyles } from 'react-native-elements';

export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    borderColor: theme?.colors?.greyOutline,
    borderWidth: 1,
    borderRadius: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  production: {
    width: '100%',
    height: 250,
    borderRadius: 5,
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
  },
  pricesection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // @font
  smlabel: {
    fontSize: 16,
    color: theme?.colors?.grey3,
  },
  mdlabel: {
    fontSize: 18,
    fontWeight: '600',
  },
}));
