import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import grid, {
  debug,
  desktopGrid,
  desktopMargins,
  mobileMargins,
  tabletGrid,
  tabletMargins
} from './grid.base'

const { shallowWithTheme } = global

describe('(Base Styles) grid', () => {
  const createGridComponent = (props) => {
    const Component = styled.div`
      ${grid}
    `
    return shallowWithTheme(<Component {...props} />)
  }
  test('matching the snapshot', () => {
    expect(createGridComponent()).toMatchSnapshot()
  })

  test('setting the grid gutter', () => {
    expect(createGridComponent())
    .toHaveStyleRule({
      'grid-gap': theme.grid.gutter
    })
  })

  test('setting the number of columns', () => {
    expect(createGridComponent())
    .toHaveStyleRule({
      'grid-template-columns': `repeat(${theme.grid.columns.mobile}, 1fr)`
    })
  })

  test('setting the column gap', () => {
    expect(createGridComponent())
    .toHaveStyleRule({
      'grid-column-gap': theme.grid.gutter
    })
  })

  describe('the margins', () => {
    test('should be set by default', () => {
      expect(createGridComponent())
      .toHaveStyleRule({
        modifier: css`${mobileMargins}`,
      })
    })
  })

  describe('the desktop grid', () => {
    test('rendering out desktopGrid styles', () => {
      expect(createGridComponent())
      .toHaveStyleRule({
        modifier: css`${desktopGrid}`,
      })
    })
    test('rendering out desktopGrid styles', () => {
      expect(createGridComponent({margins: false}))
      .toHaveStyleRule({
        modifier: css`${desktopGrid}`,
      })
    })
  })

  test('rendering out tabletGrid styles', () => {
    expect(createGridComponent())
    .toHaveStyleRule({
      modifier: css`${tabletGrid}`,
    })
  })

  test('rendering out debugging borders', () => {
    expect(createGridComponent({debug: true}))
    .toHaveStyleRule({
      modifier: css`${debug}`,
    })
  })
})

describe('(Base Styles) desktopGrid', () => {
  const createDesktopGridComponent = (props) => {
    const Component = styled.div`
      ${desktopGrid}
    `
    return shallowWithTheme(<Component {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createDesktopGridComponent()).toMatchSnapshot()
  })

  test('setting the number of columns', () => {
    expect(createDesktopGridComponent())
    .toHaveStyleRule({
      'grid-template-columns': `repeat(${theme.grid.columns.desktop}, 1fr)`
    })
  })

  describe('the margins', () => {
    test('should be set by default', () => {
      expect(createDesktopGridComponent())
      .toHaveStyleRule({
        'margin': `0 ${theme.grid.margins.desktop}`
      })
    })

    test('should not be set if margins are false', () => {
      expect(createDesktopGridComponent({margins: false}))
      .toHaveStyleRule({
        'margin': 0
      })
    })
  })

  describe('the max-width', () => {
    test('should be set by default', () => {
      expect(createDesktopGridComponent())
      .toHaveStyleRule({
        'max-width': grid.defaultProps.maxWidth
      })
    })
  })
})

describe('(Base Styles) tabletGrid', () => {
  const createTabletGridComponent = (props) => {
    const Component = styled.div`
      ${tabletGrid}
    `
    return shallowWithTheme(<Component {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createTabletGridComponent()).toMatchSnapshot()
  })

  test('setting the number of columns', () => {
    expect(createTabletGridComponent())
    .toHaveStyleRule({
      'grid-template-columns': `repeat(${theme.grid.columns.desktop}, 1fr)`
    })
  })

  describe('the margins', () => {
    test('should be set by default', () => {
      expect(createTabletGridComponent())
      .toHaveStyleRule({
        'margin': `0 ${theme.grid.margins.tablet}`
      })
    })

    test('should not be set if margins are false', () => {
      expect(createTabletGridComponent({margins: false}))
      .toHaveStyleRule({
        'margin': 0
      })
    })
  })
})

describe('(Base Styles) mobileMargins', () => {
  const createMobileMarginComponent = (props) => {
    const Component = styled.div`
      ${mobileMargins}
    `
    return shallowWithTheme(<Component {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMobileMarginComponent()).toMatchSnapshot()
  })

  test('margins should be the same as the theme', () => {
    expect(createMobileMarginComponent()).toHaveStyleRule({
      margin: `0 ${theme.grid.margins.mobile}`
    })
  })
})

describe('(Base Styles) desktopMargins', () => {
  const createDesktopMarginComponent = (props) => {
    const Component = styled.div`
      ${desktopMargins}
    `
    return shallowWithTheme(<Component {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createDesktopMarginComponent()).toMatchSnapshot()
  })

  test('margins should be the same as the theme', () => {
    expect(createDesktopMarginComponent()).toHaveStyleRule({
      margin: `0 ${theme.grid.margins.desktop}`
    })
  })
})

describe('(Base Styles) tabletMargins', () => {
  const createTabletMarginComponent = (props) => {
    const Component = styled.div`
      ${tabletMargins}
    `
    return shallowWithTheme(<Component {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createTabletMarginComponent()).toMatchSnapshot()
  })

  test('margins should be the same as the theme', () => {
    expect(createTabletMarginComponent()).toHaveStyleRule({
      margin: `0 ${theme.grid.margins.tablet}`
    })
  })
})
