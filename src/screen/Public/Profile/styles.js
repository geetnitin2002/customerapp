
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  profileContainer: {
    backgroundColor: COLOR.violet,
    paddingTop: 20,
    marginBottom: 30
  },
  profileDetail: {
    backgroundColor: COLOR.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20
  },
  profileHeaderInfo: {
    marginLeft: 20
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20
  },
  profileHeaderTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.darkViolet,
    marginBottom: 10
  },
  profileHeaderText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.lightViolet
  },
  sectionWhite: {
    backgroundColor: COLOR.light,
    paddingBottom: 30
  },
  editImg: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  bgImg: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: COLOR.light,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.9,
    elevation: 10,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    shadowColor: '#CCC',
    marginTop: 30
  },
  avatarImg: {
    width: 190,
    height: 190,
    borderRadius: 95
  },
  editBtn: {
    position: 'absolute',
    bottom: 12,
    right: 18,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: COLOR.light,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.9,
    elevation: 10,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    shadowColor: '#CCC'
  },
  editName: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.greyDark
  },
  profileForm: {
    paddingVertical: 25,
    marginTop: 30
  },
  formRow: {
    paddingTop: 20
  },
  formInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.smokeLight
  },
  formText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: 'rgba(148, 148, 163, 1)',
    letterSpacing: 1
  },
  formInput: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: 'rgba(76, 76, 99, 1)',
    letterSpacing: 0.5,
    flex: 1
  },
  saveBtn: {
    backgroundColor: COLOR.red,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    marginTop: 30
  },
  saveBtnText: {
    flex: 9,
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light,
    alignSelf: 'center',
    letterSpacing: 1
  }
}
