import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {SubscriptionSectionProps as defaultProps} from './defaultProps'
import { FlexRow, FlexCol, H1, H3, P } from 'SRC'

const SubscriptionSection = styled((props) => {
  const { className, children } = props
  const { header, details, footer } = children
  return (
    <section className={className}>
      <div>
        <FlexCol mobile={{width: 4}} desktop={{width: 8, span: 2}}>
          <header>
            <H1>{header.title}</H1>
            <P dangerouslySetInnerHTML={{__html: header.content}} />
          </header>
        </FlexCol>
        {details.map((detail, index) => {
          const Icon = detail.icon
          return (
            <FlexCol mobile={{width: 4}} desktop={{width: 4}}>
              <aside className='trio'>
                {detail.icon  && <Icon animated />}
                <H3>{detail.header}</H3>
                <P dangerouslySetInnerHTML={{__html: detail.content}} />
              </aside>
            </FlexCol>
          )
        })}
        <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
          <footer>
            <H3><a href={footer.link.href}>{footer.link.text}</a></H3>
          </footer>
        </FlexCol>
      </div>
    </section>
  )
})`
  background-color: ${props => props.theme.colors.lightBlue[0]};
  display: flex;
  justify-content: center;
  > div {
    ${FlexRow}
    max-width: 144rem;
    margin: 0 auto;
  }
  ${H1} {
    margin-top: 2rem;
    margin-bottom: 2rem;
    ${props => props.theme.media.tablet`
      margin-top: 4rem;
    `}
  }
  ${H3} {
    margin: 1rem 0;
  }
  ${H3} a {
    color: ${props => props.theme.colors.navy};
    text-decoration: none;
    &:hover, &:visited {
      color: ${props => props.theme.colors.navy};
    }
  }
  * {
    text-align: center;
  }
  footer {
    margin-bottom: 2rem;
  }
  .trio {
    margin: 2rem 0;
    svg {
      max-height: 8rem;
    }
  }
`

SubscriptionSection.propTypes = {
  children: PropTypes.object
}

SubscriptionSection.defaultProps = {...defaultProps}

/** @component */
export default SubscriptionSection
