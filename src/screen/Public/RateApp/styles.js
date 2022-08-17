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
    marginTop: 70,
    backgroundColor: COLOR.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  actBarInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 10
  },
  /** -- Content --**/
  rateContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 30
  },
  rateTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.darkViolet,
    paddingVertical: 30
  },
  rateText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.darkViolet,
    lineHeight: 20,
    marginBottom: 30
  },
  rateBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.red,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 30
  },
  rateBtnText: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.medium,
    color: COLOR.light
  }
}
