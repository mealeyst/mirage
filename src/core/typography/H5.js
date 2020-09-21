import PropTypes from 'prop-types'
import styled from 'styled-components'

const H5 = styled.h5`
  letter-spacing: 0.5px;

  color: ${props => props.theme.colors.navy};
  text-align: ${props => props.align};

  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  font-weight: 500;
  font-style: italic;
  line-height: 1;
  letter-spacing: .075rem;
  margin: ${props => props.margin};
`

H5.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ]),
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    }),
    colors: PropTypes.shape({
      navy: PropTypes.string
    })
  })
}

H5.defaultProps = {
  fontSize: '1.6rem',
  margin: '2.6rem 0',
  align: 'left'
}

/** @component */
export default H5
