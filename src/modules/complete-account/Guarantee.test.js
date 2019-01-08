import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import Guarantee, { UnstyledGuarantee } from './Guarantee'

const { mountWithTheme } = global

describe('(Styled Component) Guarantee', () => {
  const createGuarantee = (props) => {
    return mountWithTheme(<Guarantee {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createGuarantee())
    .toMatchSnapshot()
  })
})

describe('(Component) UnstyledGuarantee', () => {
  const createUnstyledGuarantee = (props) => {
    return mountWithTheme(<UnstyledGuarantee {...props} />)
  }

  test('mathing the snapsot', () => {
    expect(createUnstyledGuarantee())
    .toMatchSnapshot()
  })

  test('setting the class', () => {
    const className = 'example-class'
    expect(
      createUnstyledGuarantee({className: className}).prop('className')
    ).toEqual(className)
  })

  test('settting the chirldren', () => {
    const child = 'Example Text'
    expect(
      createUnstyledGuarantee({children: child}).text()
    ).toContain(child)
  })
})
