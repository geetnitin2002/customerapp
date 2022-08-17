import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  bgImg: {
    width: '100%',
    bottom: 0,
    height:'65%',
    zIndex: 4
  },
  bgCover: {
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.violet
  },
  bgLayout: {
    flex: 1,
    position: 'absolute',
    zIndex: 3,
    width: '100%',
    height: '100%'
  },
  bgMainLayout: {
    flex: 1,
    zIndex: 3,
    width: '100%',
    marginTop: 70,
    backgroundColor: COLOR.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  actBarBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 10
  },

  /** -- Content --**/
  signInForm: {
    marginHorizontal: 20,
    marginTop: 30
  },
  signInTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.dark,
    paddingVertical: 15,
    paddingBottom: 30
  },
  formText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: 'rgba(166, 166, 178, 1)'
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: COLOR.smokeLight,
    marginBottom: 30
  },
  formInput: {
    flex: 1,
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  forgotText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.grey,
    alignSelf: 'flex-end',
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
   paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 30
  },
  loginBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  createAccountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customerText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.grey,
    marginRight: 10
  },
  createBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark
  }
}
