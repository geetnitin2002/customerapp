
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  bg: {
    marginTop: 70,
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    backgroundColor: COLOR.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  bgCover: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
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
  actBarBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 10
  },

  /** -- Content --**/
  accountContainer: {
    marginHorizontal: 20
  },
  accountTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.dark,
    paddingVertical: 30,
    marginTop: 30
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
  conditionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  conditionText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.grey
  },
  createBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 20
  },
  createBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  signInInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30
  },
  signInText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.grey,
    marginRight: 10
  },
  signInBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark
  }
}
