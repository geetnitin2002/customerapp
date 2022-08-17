import { COLOR, FAMILY, SIZE } from '@theme/typography'

export default {

  /* Content */

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderColor: COLOR.lightViolet,
    borderBottomWidth: 1
  },
  col: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nav: {
    flex: 1,
    width: '100%'
  },

  /* Profile */

  navProfile: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    backgroundColor: COLOR.violet,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  navCol: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  navAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginRight: 20
  },
  navName: {
    fontFamily: FAMILY.bold,
    color: COLOR.light,
    fontSize: 14,
    marginBottom: 5
  },
  navDesc: {
    fontFamily: FAMILY.regular,
    fontSize: 12,
    color: 'rgba(255,255,255,0.5)',
    marginTop: 5
  },
  /* Menu Item */
  navMenu: {
    flex: 1,
    backgroundColor: COLOR.violet,
    paddingBottom: 20,
    paddingHorizontal: 5,
    justifyContent: 'center'
  },
  navBtnIcon: {
    fontSize: SIZE.extraLarge,
    color: COLOR.light
  },
  navBtnText: {
    fontFamily: FAMILY.regular,
    fontSize: SIZE.small,
    color: COLOR.light,
    paddingLeft: 10
  }
}
