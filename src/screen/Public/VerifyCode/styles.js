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
  actBarIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 10
  },
  /** -- Content --**/
  formLayout: {
    marginHorizontal: 20
  },
  verifyTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.big,
    color: COLOR.darkViolet,
    paddingVertical: 30,
    marginTop: 20
  },
  verifyText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: 'rgba(181, 181, 191, 1)',
    lineHeight: 24,
    marginBottom: 50
  },
  formVerify: {
    marginHorizontal: 20
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
    textAlign: 'center',
    color: COLOR.grey,
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
    justifyContent: 'center',
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
