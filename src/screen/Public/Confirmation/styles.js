import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  bgImg: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 4
  },
  bgMain: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLOR.violet
  },
  navLeftBtn: {
    padding: 15,
    marginBottom: 20
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: COLOR.light,
    paddingVertical: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20
  },
  confirmationHeader: {
    alignItems: 'center',
    marginVertical: 30
  },
  confirmationImg: {
    width: 80,
    height: 80,
    marginBottom: 30
  },
  confirmationTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.darkViolet,
    marginBottom: 15
  },
  confirmationText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: 'rgba(45, 45, 71, 1)',
    lineHeight: 24,
    marginBottom: 30
  },
  bookingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30
  },
  bookingText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: 'rgba(123, 123, 141, 1)',
    marginRight: 15
  },
  bookingNumText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: 'rgba(42, 42, 69, 1)'
  },
  loginBtnInfo: {
    marginHorizontal: 20,
    marginBottom: 30
  },
  loginBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  loginBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light,
    paddingLeft: 10
  }
}
