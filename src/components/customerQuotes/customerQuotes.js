import React from 'react'
import styled from 'styled-components'

import {
  FadeInOut,
  FlexCol,
  FlexRow,
  InlineImage,
  H1,
  H3
} from 'SRC'

import defaultProps from './defaultProps.js'


class BaseCustomerQuotes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      quote: undefined
    }
  }

  componentDidMount () {
    const { quotes } = this.props
    this.setState({quote: quotes[0]})
    this.quoteTimer()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const { className, header } = this.props
    const { index, quote } = this.state
    return (
      <section className={className}>
        <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
          <H1>{header}</H1>
        </FlexCol>
        <FlexCol mobile={{width: 2}} desktop={{width: 3}}>
          <InlineImage className='confetti' src='https://res.cloudinary.com/roa-canon/image/upload/v1548872934/web/CONFETTI_left.gif' />
        </FlexCol>
        <FlexCol mobile={{width: 4}} desktop={{width: 6}}>
          <FadeInOut duration={4} animate={!!index}>
            <H3 lowercase>{quote}</H3>
          </FadeInOut>
        </FlexCol>
        <FlexCol mobile={{width: 2}} desktop={{width: 3}}>
          <InlineImage className='confetti' src='https://res.cloudinary.com/roa-canon/image/upload/v1548872934/web/CONFETTI_right.gif' />
        </FlexCol>
      </section>
    )
  }

  quoteTimer = () => {
    this.timer = setInterval(() => {
      const { index } = this.state
      const { quotes } = this.props
      if ( index === quotes.length - 1) {
        this.setState({
          index: 0,
          quote: quotes[0]
        })
      } else {
        this.setState({
          index: index + 1,
          quote: quotes[index + 1]
        })
      }
    }, 4000)
  }
}

const CustomerQuotes = styled(BaseCustomerQuotes)`
  ${FlexRow}
  margin-top: 4rem;
  margin-bottom: 2rem;
  align-items: flex-start;
  ${props => props.theme.media.tablet`
    margin-top: 6rem;
  `}
  ${H1}, ${H3} {
    text-align: center;
  }
  ${H3} {
    color: ${props => props.theme.colors.rocketBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 0;
    margin-bottom: 0;
    min-height: 20rem;
    order: 1;
    ${props => props.theme.media.tablet`
      order: 2;
    `}
  }

  .confetti {
    height: auto;
    &:first-of-type {
      order: 2;
      ${props => props.theme.media.tablet`
        order: 1;
      `}
    }
    &:last-of-type {
      order: 3;
    }
  }
`

CustomerQuotes.defaultProps = {
  ...defaultProps,
  padding: true,
  constrained: true
}

/** @component */
export default CustomerQuotes