import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  bgImg: {
    width: '100%'
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
    backgroundColor: COLOR.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 50
  },
  /** -- Content --**/
  introContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20
  },
  imgBg: {
    alignItems: 'center',
    marginBottom: 50
  },
  introImg: {
    width: 200,
    height: 200
  },
  btnInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  loginBtn: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    marginRight: 20,
    paddingVertical: 20
  },
  createBtn: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(80, 175, 228, 1)',
    borderRadius: 5,
    paddingVertical: 20
  },
  loginBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  }
}
