import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  orderContainer: {
    backgroundColor: COLOR.violet,
    paddingTop: 20,
    marginBottom: 30
  },
  orderHeader: {
    backgroundColor: COLOR.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20
  },
  orderHeaderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20
  },
  orderHeaderDetail: {
    marginLeft: 20
  },
  orderHeaderTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.darkViolet,
    marginBottom: 10
  },
  orderHeaderText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.lightViolet
  },

  /** * -- Accordion -- ***/
  accordionLayout: {
    backgroundColor: COLOR.light,
    padding: 20
  },
  accordionTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.smokeGrey,
    borderRadius: 10,
    padding: 20,
    marginBottom: 1
  },
  accordionTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.darkLight
  },
  accordionItem: {
    borderColor: COLOR.light,
    borderWidth: 1,
    borderRadius: 5,
    padding: 20
  },
  accordionContent: {
    backgroundColor: COLOR.smokeGrey
  },
  accInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20
  },
  accDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: COLOR.light,
    borderWidth: 1,
    borderColor: 'rgba(226, 226, 226, 1)',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  accTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.dark
  },
  accText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.dark,
    paddingVertical: 10
  },
  invoiceBtn: {
    backgroundColor: COLOR.red,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 15
  },
  invoiceBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    paddingLeft: 10
  }
}
