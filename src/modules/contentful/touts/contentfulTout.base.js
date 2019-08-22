import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  ContentfulRenderer,
  MirageMarkdown,
  NavyLink
} from 'SRC'

class BaseContentfulTout extends Component {
  renderContent = () => {
    const {
      displayTitle,
      searchTerm,
      productsFound,
      emptySearchSuggestions,
      fields: {
        description,
        heroButtons,
        media
      }
    } = this.props

    // If searchTerm or displayTitle present, do not render hero image
    let defaultShopHeader = null
    let searchSubtitle = null
    let searchSuggestions = null
    if (searchTerm) {
      // Truncate long search term
      let refinedSearchTerm = searchTerm
      if (searchTerm.length > 30) { refinedSearchTerm = `${searchTerm.substring(0, 30)}...` }

      let searchTitle = `You searched ‘${refinedSearchTerm}’`
      let searchClasses = 'default-shop-header-title default-shop-header-title-search'
      if (!productsFound) {
        searchTitle = `Aw, shucks! 0 results for your search ‘${refinedSearchTerm}’`
        searchSubtitle = <h2 className='subtitle-search'>But look at what’s trending!</h2>
        searchSuggestions = emptySearchSuggestions.map((link, id) => {
          return <li className='suggestion-item'><NavyLink className='suggestion-link' href={link.target} underline={false}>{link.text}<span className='empty-search-emoji'>{link.emoji}</span></NavyLink></li>
        })
        searchClasses += ' default-shop-header-title-search-empty'
      }

      defaultShopHeader = <h1 className={searchClasses}>{searchTitle}</h1>
    } else if (displayTitle) {
      defaultShopHeader = <h1 className='default-shop-header-title'>{displayTitle}</h1>
    }

    if (defaultShopHeader) {
      return (
        <div className='default-shop-header'>
          <div className='default-shop-header-title-wrapper'>
            {defaultShopHeader}
            {searchTerm && searchSubtitle}
            {searchTerm && <ul className='suggestion-search'>{searchSuggestions}</ul>}
          </div>
        </div>
      )
    } else {
      return (
        <ContentfulRenderer {...media}>
          <div className='roa-tout-overlay'>
            <MirageMarkdown>{description}</MirageMarkdown>
            <div className='roa-tout-buttons'>
              {heroButtons && heroButtons.map((button) => {
                return (
                  <ContentfulRenderer {...button} key={button.sys.id} />
                )
              })}
            </div>
          </div>
        </ContentfulRenderer>
      )
    }
  }

  render () {
    const {
      className,
      renderToutLink,
      fields: {
        destination
      }
    } = this.props

    const ToutLink = renderToutLink

    if (destination) {
      return (
        <ToutLink className={className} destination={destination}>
          {this.renderContent()}
        </ToutLink>
      )
    }

    return (
      <div className={className}>
        {this.renderContent()}
      </div>
    )
  }
}

BaseContentfulTout.propTypes = {
  className: PropTypes.string,
  defaultColor: PropTypes.string,
  displayTitle: PropTypes.string,
  searchTerm: PropTypes.string,
  productsFound: PropTypes.bool,
  emptySearchSuggestions: PropTypes.array,
  fields: PropTypes.shape({
    backgroundColor: PropTypes.string,
    backgroundTransparency: PropTypes.number,
    description: PropTypes.string,
    media: PropTypes.object,
    position: PropTypes.string,
    textColor: PropTypes.string
  })
}

BaseContentfulTout.defaultProps = {
  emptySearchSuggestions: [],
  renderToutLink: ({
    className,
    children,
    destination
  }) =>
    <a className={className} href={destination}>
      {children}
    </a>
}

export default BaseContentfulTout
