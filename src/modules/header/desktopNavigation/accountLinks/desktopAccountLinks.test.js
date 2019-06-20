import React from 'react'
import 'jest-styled-components'

import { DesktopAccountLinks, Link, HeaderLink, SubMenu } from 'SRC'
import { BaseDesktopAccountLinks } from './desktopAccountLinks'

const { mountWithTheme } = global

describe('(Styled Component) DesktopAccountLinks', () => {
  const createDesktopAccountLinks = (props) => {
    return mountWithTheme(<DesktopAccountLinks {...props} />)
  }
  describe('when logged out', () => {
    const loggedOutProps = {
      isSubscriptionMember: false,
      loggedIn: false,
      name: undefined,
      renderLink: jest.fn(({children, ...props}) => <a {...props}>{children}</a>),
      subMenuOpen: false,
      highlightable: false
    }

    test('matching the snapshot', () => {
      expect(createDesktopAccountLinks(loggedOutProps))
      .toMatchSnapshot()
    })

    test('rendering the Log In link', () => {
      expect(
        createDesktopAccountLinks(loggedOutProps)
        .contains('Log In')
      ).toBeTruthy()
    })

    test('renderLink firing on render', () => {
      createDesktopAccountLinks(loggedOutProps)
      expect(loggedOutProps.renderLink).toBeCalled()
    })
  })


  describe('when logged in', () => {
    const loggedInProps = {
      isSubscriptionMember: false,
      loggedIn: true,
      name: 'Josh',
      subMenuOpen: false
    }

    test('matching the snapshot', () => {
      expect(createDesktopAccountLinks(loggedInProps))
      .toMatchSnapshot()
    })

    test('Rendering user\'s name', () => {
      expect(
        createDesktopAccountLinks(loggedInProps)
        .contains(loggedInProps.name)
      ).toBeTruthy()
    })

    test('opening the subMenu', () => {
      const component = createDesktopAccountLinks(loggedInProps)
      expect(component.find(SubMenu).find(Link).length).toEqual(0)
      component.find(HeaderLink).simulate('click')
      expect(component.find(SubMenu).find(Link).length).toEqual(3)
    })

    test('rendering out subscription links', () => {
      const nonSubscriptionComponent = createDesktopAccountLinks({
        ...loggedInProps,
        open: true
      })
      expect(
        nonSubscriptionComponent
        .find(SubMenu)
        .find(Link)
        .length
      ).toEqual(3)

      const subscriptionComponent = createDesktopAccountLinks({
        ...loggedInProps,
        isSubscriptionMember: true,
        open: true
      })

      expect(
        subscriptionComponent
        .find(SubMenu)
        .find(Link)
        .length
      ).toEqual(6)
    })

  })
})
