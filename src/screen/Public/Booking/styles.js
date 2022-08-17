
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  bookingContainer: {
    backgroundColor: COLOR.violet,
    paddingTop: 20,
    marginBottom: 30
  },
  bookingContent: {
    backgroundColor: COLOR.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 30
  },
  bookingHeader: {
    backgroundColor: COLOR.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  bookingHeaderlTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraLarge,
    color: COLOR.darkViolet,
    marginBottom: 10
  },
  bookingHeaderlText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: 'rgba(126, 126, 144, 1)',
    opacity: 0.4,
    marginBottom: 15
  },
  bookingBg: {
    backgroundColor: COLOR.light,
    marginBottom: 15
  },

  /* --Tab-- */
  tabInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.smokeGrey,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginHorizontal: 3
  },
  tabText: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(127, 127, 144, 1)'
  },
  tabActive: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.darkViolet,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginHorizontal: 3
  },
  tabTextActive: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  /* --Appointment-- */
  bookingLabel: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.smokeDark,
    marginHorizontal: 15,
    marginVertical: 15
  },
  calendar: {
    paddingHorizontal: 10
  },
  bookingTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.smokeDark,
    paddingVertical: 15,
    marginHorizontal: 15
  },
  sessionLayout: {
    paddingHorizontal: 10
  },
  sessionItem: {
    flex: 1
  },
  timeBtn: {
    alignItems: 'center',
    backgroundColor: COLOR.smokeGrey,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 10
  },
  timeBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.smokeDark
  },
  bookBtn: {
    width: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 20,
    marginVertical: 15
  },
  bookBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light
  },
  bookBtnInfo: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dateLabel: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(127, 127, 144, 1)',
    paddingLeft: 20,
    paddingBottom: 5
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
    marginHorizontal: 20,
    marginVertical: 15
  },
  timeIcon: {
    opacity: 0.4
  },
  /* --Package-- */
  packageTitle1: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.smokeDark,
    marginLeft: -35,
    marginVertical: 15
  },
  packageTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.smokeDark,
    marginLeft: 20,
    marginVertical: 15
  },
  packageText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.smokeDark,
    opacity: 0.8,
    paddingBottom: 10
  },
  selectPackage: {
    backgroundColor: COLOR.light,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: COLOR.darkViolet
  },
  packageInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: 10,
    marginTop: 15
  },
  packageDetail: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  serviceText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraLarge,
    color: COLOR.smokeDark,
    paddingBottom: 5
  },
  washText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: 'rgba(141, 141, 156, 1)'
  },
  dollatText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraLarge,
    color: COLOR.smokeDark,
    paddingRight: 5,
    marginBottom: 10
  },
  priceText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraBig,
    color: COLOR.smokeDark
  },

  /* --Vehicle-- */
  formText2: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(127, 127, 144, 1)',
    paddingBottom: 5
  },
  formRow3: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
    marginVertical: 15
  },
  formInput2: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    padding: 0
  },
  rememberText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(152, 152, 166, 1)',
    marginHorizontal: 20
  },
  vehicleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 50,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  vehicleBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light,
    paddingRight: 40
  },
  /* --PaymentTab-- */

  tabImgActive: {
    height: 40,
    width: 40
  },
  tabImg: {
    height: 40,
    width: 40,
    color: 'rgba(0,0,0,0.5)'
  },
  paymentCardTypeInfo: {
    marginVertical: 30
  },

  /** -- Card -- **/
  payPalInfo: {
    marginHorizontal: 20,
    marginVertical: 15
  },
  cardImg: {
    width: 64,
    height: 50
  },
  bookingItem: {
    marginHorizontal: 20
  },
  cardExpiryInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15
  },
  expiryInfo: {
    flex: 5,
    marginRight: 30
  },
  formRow2: {
    flex: 2
  },
  formRow: {
    marginVertical: 15
  },
  formInput: {
    flex: 1,
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.smokeDark,
    borderColor: 'rgba(0,0,0,0.03)',
    borderBottomWidth: 1,
    padding: 0
  },
  formText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(168, 168, 180, 1)',
    marginBottom: 10
  },
  confirmOrderBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginHorizontal: 20
  },
  confirmBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.light
  },

  /* --Modal-- */
  mConfirmBox: {
    width: '90%',
    height: '60%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.03)',
    borderRadius: 5
  },
  closeIcon: {
    alignSelf: 'flex-end',
    paddingVertical: 15,
    marginRight: 20
  },
  modalItem: {
    marginHorizontal: 20
  },
  modalTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraLarge,
    color: COLOR.greyDark,
    textAlign: 'center',
    marginVertical: 15
  },
  modalText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.greyDark,
    textAlign: 'center',
    lineHeight: 20,
    marginHorizontal: 20,
    marginBottom: 30
  },
  confirmImg: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginVertical: 30
  }
}
