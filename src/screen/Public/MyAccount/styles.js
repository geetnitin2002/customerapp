import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  myAccountContainer: {
    backgroundColor: COLOR.violet,
    paddingTop: 20
  },
  myAccountHeader: {
    backgroundColor: COLOR.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  myAccountHeaderTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.darkViolet,
    marginBottom: 10
  },
  myAccountHeaderText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.lightViolet,
    marginBottom: 50
  },
  myAccountContent: {
    marginBottom: 10
  },
  myAccountInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 30,
    marginBottom: 15
  },
  bgBlue: {
    backgroundColor: 'rgba(95, 207, 221, 1)'
  },
  bgYellow: {
    backgroundColor: 'rgba(255, 179, 68, 1)'
  },
  bgRed: {
    backgroundColor: 'rgba(234, 93, 100, 1)'
  },
  priceDetail: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  numText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.default,
    marginBottom: 5
  },
  priceText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraHuge,
    color: COLOR.light
  },
  dollarText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.huge,
    color: COLOR.light,
    marginRight: 5
  },
  priceNumText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraHigantic,
    color: COLOR.light
  },
  settingInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.smokeLight,
    borderRadius: 10,
    padding: 30,
    marginBottom: 15
  },
  settingTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraLarge,
    color: 'rgba(45, 45, 72, 1)'
  },
  settingText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(119, 120, 138, 1)',
    marginTop:5
  }
}
