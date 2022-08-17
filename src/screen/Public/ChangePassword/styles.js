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
    zIndex: 2
  },
  bgCover: {
    backgroundColor: COLOR.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20
  },
  bgLayout: {
    backgroundColor: COLOR.violet
  },
  actBarBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 10
  },

  /** -- Content --**/
  passwordHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30
  },
  changePasswordHeader: {
    marginLeft: 15
  },
  passwordContainer: {
    paddingHorizontal: 20
  },
  passwordHeaderTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.dark,
    paddingTop: 20
  },
  passwordHeaderText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.grey,
    marginBottom: 40
  },
  formText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.grey
  },
  formRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: SIZE.smokeLight,
    marginBottom: 20
  },
  formInput: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark
  },
  saveBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 20
  },
  saveBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  }
}
