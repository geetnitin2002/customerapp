import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {

  /* Layout */

  layoutDf: {
    flexGrow: 1,
    backgroundColor: 'rgba(89,73,158,0.1)'
  },

  layoutFx: {
    flex: 1,
    backgroundColor: COLOR.light,
    alignItems: 'center',
    justifyContent: 'center'

  },

  /* Header */

  nav: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: -10,
    backgroundColor: 'rgba(52, 51, 86, 1)',
    borderColor: 'red',
    borrderWidth: 1
  },
  navTransparent: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -15,
    marginRight: -15,
    backgroundColor: 'transparent'

  },
  navLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navMiddle: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navRight: {
    flex: 1.5,
    alignItems: 'flex-end'
  },
  navRightIcon: {
    padding: 15
  },

  /* Avatar Sizes */

  avatarTiny: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2
  },
  avatarSmall: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2
  },
  avatarMedium: {
    width: 128,
    height: 128,
    borderRadius: 125 / 2
  },
  imgResponsive: {
    width: '100%',
    minHeight: 1
  },
  row: {
    flexDirection: 'row'
  },

  /* Label, TextInput, Picker, Placeholder */

  label: {
  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  textInputMulti: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  /* Button */

  btnTransparent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: 'transparent'
  },
  btnEdit: {
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    padding: 15
  },
  btnShare: {
    backgroundColor: 'transparent',
    padding: 15
  },
  btnWarning: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnWarningText: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnDanger: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  btnSuccess: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  headerLight: {
    backgroundColor: COLOR.light
  },
  headerDark: {
    backgroundColor: COLOR.default
  },
  headerTransparent: {
    backgroundColor: 'transparent'
  },
  /* Colors */
  default: {
    color: COLOR.default
  },
  primary: {
    color: COLOR.primary
  },
  dark: {
    color: COLOR.dark
  },
  light: {
    color: COLOR.light
  },
  grey: {
    color: COLOR.grey
  },
  greyDark: {
    color: COLOR.greyDark
  },
  greyLight: {
    color: COLOR.greyLight
  },
  smokeDark: {
    color: COLOR.smokeDark
  },
  darkLight: {
    color: COLOR.darkLight
  },
  smoke: {
    color: COLOR.smoke
  },
  smokeGrey: {
    color: COLOR.smokeGrey
  },
  smokeLight: {
    color: COLOR.smokeLight
  },
  violet: {
    color: COLOR.violet
  },
  darkViolet: {
    color: COLOR.darkViolet
  },
  lightViolet: {
    color: COLOR.lightViolet
  },
  red: {
    color: COLOR.red
  },
  yellow: {
    color: COLOR.yellow
  },
  bgDark: {
    backgroundColor: COLOR.dark
  },
  bgLight: {
    backgroundColor: COLOR.light
  },

  /* Sizes */
  tiny: {
    fontSize: SIZE.tiny
  },
  extraTiny: {
    fontSize: SIZE.extraTiny
  },
  small: {
    fontSize: SIZE.small
  },
  medium: {
    fontSize: SIZE.medium,
    fontFamily: FAMILY.bold
  },
  compact: {
    fontSize: SIZE.compact
  },
  large: {
    fontSize: SIZE.large
  },
  extraLarge: {
    fontSize: SIZE.extraLarge
  },
  extraHuge: {
    fontSize: SIZE.extraHuge
  },
  huge: {
    fontSize: SIZE.huge
  },
  big: {
    fontSize: SIZE.big
  },
  extraBig: {
    fontSize: SIZE.extraBig
  },
  extraHigantic: {
    fontSize: SIZE.extraHigantic
  },
  higantic: {
    fontSize: SIZE.higantic
  },
  regular: {
    fontFamily: FAMILY.regular
  },
  bold: {
    fontFamily: FAMILY.bold
  },

  /** Footer **/

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  fBtnActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  fBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  fBtnIconActive: {
    fontSize: 24,
    color: COLOR.darkViolet
  },
  fBtnIcon: {
    fontSize: 24,
    color: 'rgba(167, 166, 175, 1)'
  },

  botPop: {
    flex: 1
  },
  botPopBtn: {
    position: 'absolute',
    bottom: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.darkViolet,
    marginBottom: -15
  },
  botPopText: {
    fontFamily: FAMILY.bold,
    fontSize: 16,
    color: 'rgba(255,255,255,1)'
  },
  botPopTextSm: {
    fontFamily: FAMILY.bold,
    fontSize: 14,
    color: 'rgba(255,255,255,1)'
  },
  /* Button */
  btnPrimary: {
    backgroundColor: 'rgba(51,51,51,1)',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  btnPrimaryText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  btnDefault: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.green,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  btnDefaultText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  btnDefaultIcon: {
    fontSize: SIZE.large,
    color: COLOR.light
  },

  /* BreadCrumb */
  breadCrumb: {
    alignItems: 'center',
    backgroundColor: COLOR.blue,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50
  },
  breadCrumbDefault: {
    backgroundColor: COLOR.blue,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20
  },
  breadCrumbTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.light,
    marginBottom: 5
  },
  breadCrumbDesc: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.default

  }

}
