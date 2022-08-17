
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  membershipContainer: {
    backgroundColor: COLOR.violet,
    paddingTop: 20,
    marginBottom: 30
  },
  membershipContent: {
    backgroundColor: COLOR.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  membershipTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraLarge,
    color: COLOR.darkViolet,
    marginBottom: 30
  },
  membershipText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.light,
    paddingBottom: 10
  },
  washText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraLarge,
    color: COLOR.light,
    paddingBottom: 10
  },
  washLabel: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.default,
    paddingBottom: 10
  },
  membershipInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  memberText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.light,
    paddingBottom: 15
  },
  memberLabel: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraBig,
    color: COLOR.light
  },
  memberInfo: {
    backgroundColor: COLOR.smokeGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 30,
    marginBottom: 15
  },
  currencyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  currencyText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.smokeDark,
    marginBottom: 5
  },
  serviceText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.big,
    color: COLOR.smokeDark,
    marginRight: 10
  },
  currencyTextSm: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.smokeDark,
    marginTop: 10
  },
  serviceLabel: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.smokeDark,
    opacity: 0.4
  },
  membershipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20
  },
  bgColor: {
    backgroundColor: 'rgba(100, 208, 223, 1)'
  },
  bgColor2: {
    backgroundColor: 'rgba(255, 176, 56, 1)'
  },
  bgColor3: {
    backgroundColor: 'rgba(231, 92, 97, 1)'
  }
}
