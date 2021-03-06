import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseAIcon from './AIcon.base'

const AIcon = styled(BaseAIcon)`
  fill: ${props => props.theme.colors.rocketBlue};
`

AIcon.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  })
}

/** @component */
export default AIcon
