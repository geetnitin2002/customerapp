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
    position: 'absolute',
    zIndex: 3,
    width: '100%',
    height: '100%',
    marginTop: 70,
    backgroundColor: COLOR.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  actBarIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 10
  },

  /** -- Content --**/

  formVerify: {
    marginTop: 30,
    marginHorizontal: 20
  },
  verifyTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.big,
    color: COLOR.darkViolet,
    paddingVertical: 30
  },
  verifyText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.darkViolet,
    lineHeight: 20,
    marginBottom: 50
  },
  formRow: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30
  },
  formInput: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.huge,
    color: COLOR.grey,
    textAlign: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: COLOR.smokeLight
  },
  verifyBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 30
  },
  verifyBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  resendInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30
  },
  resendText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: 'rgba(182, 182, 192, 1)',
    marginHorizontal: 10
  },
  resendBtn: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.darkViolet
  }
}
