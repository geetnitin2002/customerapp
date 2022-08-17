
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  bgImg: {
    width: '100%',
    bottom: 0,
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
    paddingHorizontal: 10,
    paddingVertical: 10
  },

  /** -- Content --**/
  forgotPasswordForm: {
    marginHorizontal: 20,
    paddingVertical: 30
  },
  forgotTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.big,
    color: COLOR.darkViolet,
    paddingVertical: 30
  },
  forgotText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.darkViolet,
    lineHeight: 20,
    marginBottom: 50
  },
  resetText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraTiny,
    color: COLOR.darkViolet,
    marginBottom: 30
  },
  forgotInfo: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
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
  sendBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 15
  },
  sendBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  }
}
