import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  packageContainer: {
    backgroundColor: COLOR.violet,
    paddingTop: 20,
    marginBottom: 30
  },
  packageContent: {
    backgroundColor: COLOR.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  packageTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraLarge,
    color: COLOR.darkViolet,
    marginBottom: 30
  },
  packageItem: {
    backgroundColor: COLOR.light
  },
  packageLayout: {
    backgroundColor: COLOR.smokeGrey,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  packageDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15
  },
  packageText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.smokeDark,
    paddingLeft: 10
  },

  /** -- Accordion -- **/
  accordionTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 20
  },
  accordionTabText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: '#333'
  },
  accordion: {
    width: '100%',
    marginBottom: 30
  },
  accordionTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.light,
    paddingBottom: 5
  },
  accordionText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.light,
    opacity: 0.8,
    paddingBottom: 5
  }
}
