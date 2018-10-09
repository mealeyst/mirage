import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Check from './Check.base'
import Rect from './Rect.base'

import Label from '../../typography/Label'

const CheckboxSVG = ({ className, checked, ...props }) => {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 190 190'>
      <Rect checked={checked}/>
      <Check checked={checked}/>
    </svg>
  )
}

CheckboxSVG.defaultProps = {
  checked: false
}

const StyledCheckboxSVG = styled(CheckboxSVG)`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: .9rem;
`

class CheckboxBase extends React.Component {
  render() {
    const { className, input, label } = this.props
    const checked = input.value
    return (
      <Label lowercase className={className}>
        <input
          type='checkbox'
          {...input}
          checked={checked}
        />
      <StyledCheckboxSVG checked={checked} />
        {label}
      </Label>
    )
  }
}

CheckboxBase.propTypes = {
  className: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.bool
  }).isRequired,
  label: PropTypes.string
}

CheckboxBase.defaultProps = {
  input: {
    value: false
  }
}

const Checkbox = styled(CheckboxBase)`
  display: flex;
  align-items: center;

  input {
    width: 0;
    height: 0;

    opacity: 0;
  }

  input:focused + ${Rect} {
    stroke-width: 40;
  }
`

Checkbox.propTypes = {
  className: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    })
  })
}

/** @component */
export default Checkbox
