import React from 'react'
import PropTypes from 'prop-types'

import BasePressIcon from './PressIcon.base'

const LATimes = ({ className, ...props }) => (
  <BasePressIcon className={className} onClick={() => props.onClick('la_times')} box='0 0 720 110'>
    <path d="M10.8,83.9"/>
    <path d="M636.6,74.1c-2.8,2.3-8.4,7.3-10.9,9.8c-2.4-2.2-7.4-6.1-10.6-8.4v-0.4c0.9-0.3,1.5-1.1,1.5-3.2V48
      c-2.5-1.8-7.2-4.7-9.9-6.4l-2.1,2v29.6l4.2,3.2c0,0-5.9,5.1-8.4,7.6c-2.3-2.2-5.8-4.9-8.9-7.2v-0.3c0.9-0.3,1.5-1.2,1.5-3.3V48
      c-2.5-1.8-7.1-4.7-9.8-6.4l-2.6,2.2v29.4l4.2,3.2c0,0-5.7,4.7-8.4,7.5c-2.6-2.3-5.5-4.5-8.9-7.1v-0.2c1-0.4,1.5-1.6,1.5-3V44.6
      l-3.5-3.1l-2.7,2.3l-1.1-1.2c2.6-2.2,7.2-6.3,10.9-9.9l7.9,7.1v2l10.7-9.1c3.4,2.4,13.3,8.7,13.3,8.7l10.3-8.7
      c3.3,2.6,10.8,7.3,15,9.7v0.4c-1.4,0.4-1.5,2.1-1.5,3.1v26l4.4,3.4l2.6-2.3L636.6,74.1z"/>
    <path d="M562.5,23.4c-2.8,3.9-5,5.7-9.5,5.7c-3,0-5.2-1.4-7.6-4.3l-2.5,2.4l-1.1-1.3l10.8-9.7c3,6.1,6.7,7,9.6,6.9L562.5,23.4z"/>
    <path d="M565.3,74.1c-3,2.6-8.1,7-10.8,9.8c-2.6-2.3-7-5.7-10.5-8.4v-0.3c1-0.4,1.5-1.6,1.5-3V44.6l-3.5-3.1l-2.7,2.3l-1.1-1.2
      c2.6-2.2,7.2-6.3,10.9-9.9l9.4,8.4v0.4c-1.1,0.3-1.5,1.1-1.5,3.6V72l4.5,3.2l2.5-2.2L565.3,74.1z"/>
    <path d="M380.5,74.1c-3,2.6-8.1,7-10.8,9.8c-2.6-2.3-7-5.7-10.5-8.4v-0.3c1-0.4,1.5-1.6,1.5-3V27.4l-3.5-3.1l-2.7,2.3l-1.1-1.2
      c2.6-2.2,6.7-6.2,10.4-9.8l10,8.4v0.4c-1.1,0.3-1.5,1.1-1.5,3.6V72l4.5,3.2l2.6-2.2L380.5,74.1z"/>
    <path d="M277,74.1c-2.8,2.3-8.3,7.3-10.8,9.8c-2.4-2.2-7.4-6.1-10.5-8.4v-0.4c0.9-0.3,1.5-1.1,1.5-3.2V48c-2.5-1.8-7.1-4.7-9.8-6.4
      c-0.5,0.4-2,1.7-2.6,2.2v29.4l4.2,3.2c0,0-5.8,4.7-8.5,7.5c-2.6-2.3-5.4-4.5-8.8-7.1v-0.2c1-0.4,1.5-1.6,1.5-3V44.6l-3.6-3.2
      l-2.6,2.3l-1.2-1.2c2.6-2.2,7.3-6.2,11-9.8l7.9,7.1v2l10.7-9.1c3.3,2.6,10.7,7.3,14.9,9.7v0.4c-1.4,0.4-1.5,2.1-1.5,3.1v26l4.5,3.3
      l2.5-2.3L277,74.1z"/>
    <path d="M708.6,71.4c-6.7,2.9-16.5,8.2-21.2,12.5c-2.4-2.3-5.6-4.5-9.8-4.5c-3.9,0-5.8,1.4-5.8,2.8c0,0.8,1.6,0.7,1.6,1.9
      c0,0.6-0.4,1.2-1.2,1.2c-0.9,0-2.1-1.3-2.1-3c0-3.1,1.6-5.8,6.5-10.9l8.6-9c-3.6-1.8-8.7-4.1-11.6-5.4v-0.4
      c0.8-0.2,1.4-1.1,1.4-2.1V47c0-0.8-0.4-2.1-1.4-2.4v-0.4c7.3-2.6,16.5-7.8,21.8-11.5c1.2,1.3,4.3,4.1,7.6,4.1
      c2.8,0,3.5-1.4,3.5-2.4c0-0.6-1.1-0.9-1.1-1.7c0-0.7,0.4-1.1,1-1.1c0.8,0,1.5,0.8,1.5,2.4c0,4.7-4.4,10.8-11.4,10.8
      c-4.6,0-7.4-2.4-9.6-5.4l-0.2,0.1v11.6l6.3,3.1l2.9-3c3,1.9,9.3,5.2,12.6,6.6v0.3c-0.6,0.3-1.5,1-1.5,2.4v8.2
      c0,1.2,0.9,1.9,1.5,2.2V71.4z M695.6,76.8V62.9c-1.6-0.8-4.1-1.9-5.8-2.7L676.5,74l0.4,0.1c2-1.1,3.8-2.5,8-2.5
      c4.2,0,8.5,3.1,10.6,5.3L695.6,76.8z"/>
    <path d="M670.7,48.5l-20.5,12.8v8.7c2.6,1.1,8.4,3.9,11.1,5.8l4.4-4.5c1.2-1.2,0.8-3.3,3-3.3c0.6,0,1.1,0.4,1.1,1.1
      c0,0.7-0.5,1.1-0.9,1.4l-13.4,13.3c-4.6-2.9-13.9-7.2-18.4-9.1v-0.4c0.7-0.3,1.6-0.8,1.6-2.7V47.4c0-2-0.8-2.6-1.6-2.8v-0.4
      c6.9-2.2,17.5-7.9,22.5-11.4C662.9,38,667.4,44.4,670.7,48.5z M659.9,53.4c-2.4-3.4-6.7-9.5-9.4-13.4l-0.3,0.1v19.5L659.9,53.4z"/>
    <path d="M540.3,18.5c0,7-5.1,10.5-10.6,11.5v43.5c7-3.9,8.4-8.2,8.4-10.2c0-0.4-0.9-1-0.9-1.8c0-0.6,0.7-1.2,1.2-1.2
      c0.8,0,1.2,0.7,1.2,2c0,10.1-9.7,23.7-30.2,23.7c-15.4,0-28.5-12.1-28.5-27.7c0-22.3,18.7-30,31.7-30.8c-4.8-1-12.4-2.7-18.7-2.7
      c-7.3,0-13.3,4.4-13.3,8.3c0,1.5,1.2,1.7,1.2,2.8c0,0.6-0.3,1.2-1.1,1.2c-1.2,0-1.6-1.3-1.6-2.2c0-8.5,5.5-20.5,18.2-20.5
      c12.9,0,22.8,4.7,32.8,4.7c6.7,0,8.7-2.4,8.4-6.2l1.1,0.5C539.8,13.9,540.3,15.9,540.3,18.5z M528.3,74.1V30.2
      c-0.5,0-1.4,0.1-1.9,0.1c-3,0-8.2-1.2-11.5-2.1c-10,1.8-21.7,10.3-21.7,26.2c0,13.6,9.7,22.4,23.5,22.4
      C521.3,76.8,525.4,75.8,528.3,74.1z"/>
    <path d="M453.9,71.4c-6.7,2.9-16.5,8.2-21.2,12.5c-2.4-2.3-5.6-4.5-9.8-4.5c-3.9,0-5.8,1.4-5.8,2.8c0,0.8,1.6,0.7,1.6,1.9
      c0,0.6-0.4,1.2-1.2,1.2c-0.9,0-2.1-1.3-2.1-3c0-3.1,1.6-5.8,6.5-10.9l8.6-9c-3.6-1.8-8.7-4.1-11.6-5.4v-0.4
      c0.8-0.2,1.4-1.1,1.4-2.1V47c0-0.8-0.4-2.1-1.4-2.4v-0.4c7.3-2.6,16.5-7.8,21.8-11.5c1.2,1.3,4.3,4.1,7.6,4.1
      c2.8,0,3.5-1.4,3.5-2.4c0-0.6-1.1-0.9-1.1-1.7c0-0.7,0.4-1.1,1-1.1c0.8,0,1.5,0.8,1.5,2.4c0,4.7-4.4,10.8-11.4,10.8
      c-4.6,0-7.4-2.4-9.6-5.4l-0.2,0.1v11.6l6.3,3.1l2.9-3c3,1.9,9.3,5.2,12.6,6.6v0.3c-0.6,0.3-1.5,1-1.5,2.4v8.2
      c0,1.2,0.9,1.9,1.5,2.2V71.4z M440.8,76.8V62.9c-1.6-0.8-4.1-1.9-5.8-2.7L421.7,74l0.4,0.1c2-1.1,3.8-2.5,8-2.5
      c4.2,0,8.5,3.1,10.6,5.3L440.8,76.8z"/>
    <path d="M416.1,48.5l-20.4,12.8v8.7c2.6,1.1,8.4,3.9,11.1,5.8l4.4-4.5c1.2-1.2,0.8-3.3,3-3.3c0.6,0,1,0.4,1,1.1
      c0,0.7-0.5,1.1-0.9,1.4L401,83.9c-4.6-2.9-13.9-7.2-18.4-9.1v-0.4c0.7-0.3,1.5-0.8,1.5-2.7V47.4c0-2-0.7-2.6-1.5-2.8v-0.4
      c6.9-2.2,17.5-7.9,22.5-11.4C408.4,38,412.8,44.4,416.1,48.5z M405.4,53.4C403,50.1,398.6,44,396,40l-0.3,0.1v19.5L405.4,53.4z"/>
    <path d="M357.7,48.5l-20.4,12.8v8.7c2.6,1.1,8.4,3.9,11.1,5.8l4.4-4.5c1.2-1.2,0.7-3.3,2.9-3.3c0.6,0,1.1,0.4,1.1,1.1
      c0,0.7-0.5,1.1-0.9,1.4l-13.3,13.3c-4.6-2.9-13.9-7.2-18.4-9.1v-0.4c0.7-0.3,1.5-0.8,1.5-2.7V47.4c0-2-0.7-2.6-1.5-2.8v-0.4
      c6.9-2.2,17.5-7.9,22.5-11.4C350,38,354.4,44.4,357.7,48.5z M346.8,53.4c-2.4-3.4-6.7-9.5-9.4-13.4l-0.2,0.1v19.5L346.8,53.4z"/>
    <path d="M320.9,80c-0.3,11-5.7,18.5-15.9,18.5c-8,0-13.9-4.1-21.2-4.1c-4.2,0-6.6,1.3-7.8,2.8l-0.5-0.3c0.4-8,6.1-12.4,13.2-12.4
      c7.9,0,13.7,5.1,22.1,5.1c5.4,0,8.1-2.8,8.6-5.7l-0.1-0.2c-1.1,0.7-2.5,1.5-4.7,1.5c-4.3,0-9-3-9.8-8.3c-2.1,1.4-6.7,5-8.7,6.8
      c-5.1-3.3-13.2-7.4-17.2-9.1v-0.4c0.8-0.3,1.3-1.3,1.3-2.3V47.3c0-1.5-0.5-2.5-1.5-2.7v-0.4c7.3-2.7,16.8-7.6,21.9-11.6
      c4.4,3.5,12.5,8.4,17.2,11.1v0.5c-1,0.4-1.5,1.1-1.5,3.5v26.7c0,3.4,0.3,5.8,2.8,5.8c0.4,0,0.9-0.3,1.2-0.8L320.9,80z M304.7,75.5
      V48.4c-3.4-1.9-8.9-5.7-12.6-8.9l-0.2,0.1v30.3c3.4,1.6,8.9,4.8,11.4,6.7L304.7,75.5z"/>
    <path d="M230.6,73.4l-11.3,10.5c-3.3-2.3-6.1-4.2-10.3-6.8v-0.5c0.9-0.3,1.4-1.3,1.4-2.4c0-0.5,0-1-0.2-1.5l-3.4-10.6h-23.3
      l-3.1,8.8c4.8,0,7.6,0.7,10,1.7l2-3.7l1.4,0.8L186.2,84c-3.1-1.8-6.6-3.2-10.7-3.2c-4.7,0-8.3,1.2-10.1,2.9
      c-0.3,0.3-0.9,0.2-0.7-0.5c1.9-6.7,6.7-11.7,14-12.2L195,26.1c-1.8-5.3-3.8-6.3-7.9-6.3c-3.8,0-7.5,1.8-7.5,6.4
      c0,2.2,2.1,2,2.1,3.6c0,0.6-0.5,1.2-1.2,1.2c-1.4,0-2.3-1.8-2.3-5.5c0-8.2,6.2-13.1,13.1-13.1c6.2,0,8.7,2.4,10.6,5
      c0.6-2.4,3.1-3.5,4.9-3.8l0.2,0.3c-1.2,1.4-1.8,2.7-1.8,4.5c0,0.9,0.7,3.1,1,3.8l17.5,50.5l3.2,2l2.7-2.5L230.6,73.4z M204.6,55.5
      l-8.9-27.3L186,55.5H204.6z"/>
    <path d="M145.8,71.4c-6.7,2.9-16.4,8.2-21.1,12.5c-2.4-2.3-5.7-4.5-9.9-4.5c-3.9,0-5.7,1.4-5.7,2.8c0,0.8,1.6,0.7,1.6,1.9
      c0,0.6-0.5,1.2-1.2,1.2c-0.9,0-2.1-1.3-2.1-3c0-3.1,1.7-5.8,6.6-10.9l8.6-9c-3.6-1.8-8.8-4.1-11.7-5.4v-0.4
      c0.8-0.2,1.5-1.1,1.5-2.1V47c0-0.8-0.5-2.1-1.5-2.4v-0.4c7.3-2.6,16.5-7.8,21.8-11.5c1.2,1.3,4.3,4.1,7.6,4.1
      c2.8,0,3.5-1.4,3.5-2.4c0-0.6-1-0.9-1-1.7c0-0.7,0.3-1.1,0.9-1.1c0.8,0,1.6,0.8,1.6,2.4c0,4.7-4.5,10.8-11.5,10.8
      c-4.6,0-7.4-2.4-9.6-5.4l-0.2,0.1v11.6l6.4,3.1l2.9-3c3,1.9,9.2,5.2,12.5,6.6v0.3c-0.6,0.3-1.4,1-1.4,2.4v8.2
      c0,1.2,0.8,1.9,1.4,2.2V71.4z M132.7,76.8V62.9c-1.6-0.8-4-1.9-5.7-2.7L113.6,74l0.5,0.1c2-1.1,3.8-2.5,8-2.5
      c4.2,0,8.4,3.1,10.5,5.3L132.7,76.8z"/>
    <path d="M106.1,71.4c-5.8,2.4-17,8.2-21.8,12.5c-5.1-3.7-12.5-8.6-17.3-11.3v-0.3c1.2-0.4,1.5-1.3,1.5-2.8V47.7
      c0-2-0.5-2.7-1.5-3.1v-0.4C75,41.3,82.6,37.1,89,32.7c4.4,3.3,12.1,8.1,17.2,11.1v0.4c-0.9,0.4-1.5,1.3-1.5,2.8v21.6
      c0,1.6,0.6,2.1,1.5,2.4V71.4z M93,76.9V48.4c-4-2.2-9.8-6.5-12.6-8.9l-0.2,0.1v29.1c3.8,2.1,9.5,5.7,12.6,8.4L93,76.9z"/>
    <path d="M66.5,69.1l-8.2,15.1c-4.4-3.1-11.5-5-17.6-5c-11.9,0-20.2,2.1-24.4,4.8l-0.5-0.6C19.7,80.1,26,74.8,26,62.7
      c0-5.1-2.1-10.9-3.6-14.7c-1.7-4.4-3.1-6.7-3.1-12.9c0-10.7,5.7-16.7,14.8-21.3l0.8,0.9c-3.1,2.6-4.6,5.9-5.1,9.3l14.5-12.1
      c3.7,5.2,7.2,7.2,11.7,7.2c3.7,0,4.8-1.7,4.8-3c0-1-1.2-1.1-1.2-2c0-0.9,0.6-1.2,1.2-1.2c1.1,0,1.7,1.5,1.7,2.6
      c0,7.3-6.1,12.7-12.6,12.7c-1.1,0-2,0.1-2.7,0v40.2c5.6,0,11.4,1.7,15.6,3.8l2.2-3.8L66.5,69.1z M45.8,68.4V28
      c-5.7-0.6-8.6-4.8-10.5-7l-5.5,4.4c0,6.1,1.8,11.5,3.9,16.4c1.9,4.5,4,10.3,4,14.3c0,6.6-3.7,10.8-12.4,19l0.3,0.3
      C30.9,71.5,38.8,68.5,45.8,68.4z"/>
    <path d="M524.5,34.1c0,0.6-0.7,1.1-1.2,1.1c-0.7,0-1.4-1.4-3.5-1.4c-3.1,0-5.6,2.6-5.6,5.7c0,8,7.9,11.3,7.9,20.4
      c0,7.7-7.5,12.1-15.3,13.2l-1.4-1.1c4.3-0.6,6.2-2,6.2-7.2c0-7-7.2-12.7-7.2-20.9c0-6.7,6.2-11.8,14.8-11.8c1.7,0,3.3,0.5,4.2,1
      C524.1,33.2,524.5,33.5,524.5,34.1z"/>
  </BasePressIcon>
)

LATimes.propTypes = {
  className: PropTypes.string
}

export default LATimes
