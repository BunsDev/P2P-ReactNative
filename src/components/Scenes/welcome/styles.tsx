import { makeStyles } from 'react-native-elements';
export const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    position: `relative`,
    padding: 10,
    paddingTop: 25,
  },
  topbar: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: 'space-between',
    alignItems: `center`,
  },
  dropdown: {},
  text: {
    textAlign: 'center',
    padding: 5,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: '500',
  },
  imageItem: {
    alignItems: 'center',
    aspectRatio: 1,
    height: '100%',
  },
  btngroup: {
    padding: 10,
    paddingBottom: 100,
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
  },
  upText: {
    color: theme?.colors?.secondary,
    backgroundColor: 'transparent',
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
    color: theme?.colors?.white,
  },
  selectedCategoryText: {
    opacity: 1,
  },
}));
