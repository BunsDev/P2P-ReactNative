import { makeStyles } from 'react-native-elements';
export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 25,
    position: 'relative',
  },
  topbar: {
    flex: 1,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: 'space-between',
    alignItems: `center`,
  },
  text: {
    flex: 1,
    padding: 5,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  imageItem: {
    flex: 19,
  },
  btngroup: {
    flex: 3,
    padding: 10,
    paddingBottom: 100,
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
  },
  upText: {
    color: theme?.colors?.white,
  },
  upButton: {
    backgroundColor: theme?.colors?.secondary,
    borderRadius: 5,
    marginBottom: 15,
  },
  inButton: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme?.colors?.secondary,
  },
  inText: {
    color: theme?.colors?.secondary,
    backgroundColor: 'transparent',
  },
}));
