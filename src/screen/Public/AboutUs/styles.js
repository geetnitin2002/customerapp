import { COLOR, FAMILY, SIZE } from '@theme/typography'

const React = require('react-native')
const { Platform } = React

export default {
  bgMainLayout: {
    backgroundColor: COLOR.violet,
    paddingTop: 30
  },
  bgCover: {
    flex: 1,
    backgroundColor: COLOR.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  aboutTitle: {
    fontFamily: FAMILY.bold,
    fontSize: SIZE.huge,
    color: COLOR.darkViolet,
    marginBottom: 30
  },
  aboutText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.medium,
    color: COLOR.darkLight,
    lineHeight: 24,
    marginBottom: 15
  }
}
