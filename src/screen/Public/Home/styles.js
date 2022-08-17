
import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  bookNowBtnInfo: {
    backgroundColor: COLOR.violet,
    paddingBottom: 15
  },
  bookNowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginBottom: 20
  },
  bookNowBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.light
  },
  homeHeader: {
    backgroundColor: 'rgba(216, 216, 217, 1)',
    paddingVertical: 30
  },
  homeHeader2: {
    backgroundColor: 'rgba(229, 229, 229, 1)',
    paddingVertical: 30
  },
  homeHeaderTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.smokeDark,
    marginHorizontal: 20,
    marginBottom: 5
  },
  homeHeaderText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.smokeDark,
    opacity: 0.5,
    marginHorizontal: 20,
    marginBottom: 20
  },

  // Feature//
  featureContainer: {
    backgroundColor: COLOR.violet,
    paddingVertical: 30
  },
  featureContent: {
    marginLeft: 20
  },
  featureImg: {
    flex: 1,
    width: 380,
    height: 350,
    borderRadius: 10
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10
  },
  featureInfo: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  featureText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.light
  },
  featurePackageText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.default
  },
  featureIcon: {
    marginTop: 15
  },

  // Package//

  packageContainer: {
    marginHorizontal: 20,
    marginBottom: 10
  },
  packageContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.light,
    marginBottom: 5,
    padding: 20,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15
    },
    borderRadius: 10,
    shadowColor: '#333',
    shadowOpacity: 0.9,
    shadowRadius: 0
  },
  packageInfo: {
    flex: 1
  },
  packageText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.small,
    color: COLOR.smokeDark,
    opacity: 0.7,
    marginBottom: 5
  },
  packageWashText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.extraLarge,
    color: COLOR.smokeDark,
    marginBottom: 5
  },
  packageService: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: 'rgba(144, 144, 159, 1)'
  },
  pkgCol: {
    flexDirection: 'row'
  },
  packageCurrency: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.large,
    color: COLOR.darkLight
  },
  packagePrice: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.higantic,
    color: COLOR.darkLight,
    lineHeight: 36
  },

  // Membership//

  membershipContainer: {
    marginLeft: 20,
    marginBottom: 20
  },
  membershipContent: {
    width: 300,
    borderRadius: 10,
    padding: 20
  },
  membershipHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  membershipHeaderText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.primary
  },
  membershipText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.compact,
    color: COLOR.light,
    paddingTop: 10
  },
  servicePriceInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  serviceCurrency: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.large,
    color: COLOR.light
  },
  servicePrice: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.higantic,
    color: COLOR.light,
    paddingVertical: 10
  },
  serviceData: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.compact,
    color: COLOR.light
  },
  unlimitedText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.primary
  },

  // Review//

  reviewContainer: {
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: COLOR.light,
    width: 300,
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15
    },
    borderRadius: 10,
    shadowColor: '#333',
    shadowOpacity: 0.9,
    shadowRadius: 0
  },
  reviewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  reviewImg: {
    height: 60,
    width: 60,
    borderRadius: 5
  },
  reviewRattingInfo: {
    marginHorizontal: 10
  },
  customerName: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.dark,
    marginBottom: 5
  },
  rattingIconInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  customerReview: {
    flex: 1,
    fontFamily: FAMILY.regular,
    fontSize: SIZE.extraTiny,
    color: COLOR.greyDark,
    lineHeight: 18,
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  enquireButton: {
    backgroundColor: "#ea5d64",
    padding: 10,
    borderRadius: 5,
    color:'white'
  }
}
