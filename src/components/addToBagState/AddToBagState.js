import React from 'react'
import PropTypes from 'prop-types'

class AddToBagState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      sizeSelected: null,
      error: null,
      sku: null
    }

    this.changeSize = this.changeSize.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.addToBag = this.addToBag.bind(this)
  }

  addToBag () {
    if (this.validate()) {
      const { onAddToBag, module } = this.props
      const { sku } = this.state

      onAddToBag(sku, module)
    }
  }

  validate () {
    const { sizeSelected } = this.state

    if (!sizeSelected) {
      this.setState({ error: 'Please select a size' })
      return false
    }

    this.setState({ error: null })
    return true
  }

  changeSize (size) {
    const { selectedColorway } = this.props
    const sku = selectedColorway.skus.find(
      (sku) => sku.size === size
    )

    this.setState({
      sizeSelected: size,
      error: null,
      sku
    })
  }

  changeColor (colorSlug) {
    const { product, changeColorway } = this.props
    const selectedColorway = product.colorways.find(
      (colorway) => colorway.slug === colorSlug
    )

    this.setState({
      sizeSelected: null,
      error: null,
      sku: null
    })
    changeColorway(selectedColorway)
  }

  render () {
    const childProps = {
      changeSize: this.changeSize,
      changeColor: this.changeColor,
      addToBag: this.addToBag,
      ...this.state
    }

    return this.props.children(childProps)
  }
}

AddToBagState.propTypes = {
  product: PropTypes.object.isRequired,
  selectedColorway: PropTypes.object.isRequired,
  changeColorway: PropTypes.func.isRequired,
  module: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  onAddToBag: PropTypes.func.isRequired
}

/** @component */
export default AddToBagState
