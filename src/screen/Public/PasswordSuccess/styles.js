import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  bgCover: {
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.violet
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
  bgImg: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 4
  },
  successContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  successContent: {
    alignItems: 'center'
  },
  successImg: {
    width: 96,
    height: 96,
    marginBottom: 30
  },
  successTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.darkViolet,
    textAlign: 'center',
    marginBottom: 15
  },
  successText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.darkLight,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30
  },
  loginBtnInfo: {
    marginHorizontal: 20,
    marginBottom: 30
  },
  loginBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 20
  },
  loginBtnText: {
    flex: 1,
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  },
  loginBtnIcon: {
    fontSize: SIZE.huge,
    color: COLOR.light
  }
}
