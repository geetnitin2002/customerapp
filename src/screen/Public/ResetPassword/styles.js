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
    marginTop: 50,
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
  resetForm: {
    marginHorizontal: 20
  },
  resetTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.big,
    color: COLOR.darkViolet,
    paddingVertical: 30,
    marginTop: 20
  },
  resetText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: 'rgba(47, 47, 74, 1)',
    lineHeight: 24,
    marginBottom: 50
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
    marginBottom: 20
  },
  formInput: {
    flex: 1,
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  resetBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 20
  },
  resetBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  }
}
