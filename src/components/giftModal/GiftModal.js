import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { P, H3, Close, InlineImage } from 'SRC'
import cloudinary from 'SRC/services/cloudinary'

const Container = styled.div`
  border: 3px solid ${props => props.theme.colors.rocketBlue};
  background-color: white;
  padding: 10px 20px;
  width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  text-align: center;
`

const CloseLink = styled.a`
  float: right;
  cursor: pointer;
  margin-top: 10px;
`

const Text = styled(P)`
  margin-bottom: 15px;
`

const Image = styled(InlineImage)`
  max-width: 100%;
  margin-bottom: 15px;
`

const Title = styled(H3)`
  margin-top: 30px;
  margin-bottom: 10px;
`

const GiftModal = ({ onClose }) => (
  <Container>
    <CloseLink onClick={onClose}>
      <Close width='1.5rem' />
    </CloseLink>

    <Title>Sending a Gift?</Title>
    <Image
      src={cloudinary.url('web/shop/gifting_pop_up.jpg')}
      alt='Kid opening a box'
    />
    <Text>
      At checkout, leave a sweet note that'll show
      on the packing slip. Need an exchange? It's
      free and easy via our friendly customer support
      team.
    </Text>
    <Text>
      And don't forget, buy 4+ items to get 2% off your
      order!
    </Text>
  </Container>
)

GiftModal.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default GiftModal