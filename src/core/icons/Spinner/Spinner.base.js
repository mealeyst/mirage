import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

export const animation = keyframes`
0% {
  opacity: 1.0;
}
100% {
  opacity: 0.0;
}
`

export const SpinnerSVG = ({className}) => {
  return (
    <svg className={className} viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' xmlns="http://www.w3.org/2000/svg" version='1.1' >
      <g transform="rotate(0 50 50)">
        <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      </g>
      <g transform="rotate(36 50 50)">
        <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      </g>
      <g transform="rotate(72 50 50)">
        <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      </g>
      <g transform="rotate(108 50 50)">
        <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      </g>
      <g transform="rotate(144 50 50)">
        <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      </g>
      <g transform="rotate(180 50 50)">
        <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      </g>
      <g transform="rotate(216 50 50)">
        <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      </g>
      <g transform="rotate(252 50 50)">
        <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      </g>
      <g transform="rotate(288 50 50)">
        <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      </g>
      <g transform="rotate(324 50 50)">
        <rect x='46.5' y='16' rx='1.86' ry='0.64' width='7' height='18' />
      </g>
    </svg>
  )
}

const Spinner = styled(SpinnerSVG)`
  width: ${props => props.size};
  height: ${props => props.size};
  rect {
    animation-name: ${animation};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
    transform-box: view-box;
  }
  g {
    &:nth-child(1) rect {
      animation-delay: -1.0799999999999998s;
    }
    &:nth-child(2) rect {
      animation-delay: -0.96s;
    }
    &:nth-child(3) rect {
      animation-delay: -0.8400000000000001s;
    }
    &:nth-child(4) rect {
      animation-delay: -0.72s;
    }
    &:nth-child(5) rect {
      animation-delay: -0.6s;
    }
    &:nth-child(6) rect {
      animation-delay: -0.48s;
    }
    &:nth-child(7) rect {
      animation-delay: -0.36s;
    }
    &:nth-child(8) rect {
      animation-delay: -0.24s;
    }
    &:nth-child(9) rect {
      animation-delay: -0.12s;
    }
    &:nth-child(10) rect {
      animation-delay: 0s;
    }
  }
`

Spinner.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.shape({

  })
}

Spinner.defaultProps = {
  size: '80px'
}

/** @component */
export default Spinner
