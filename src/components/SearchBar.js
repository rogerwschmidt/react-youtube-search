import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this)
  }

  componentDidMount () {
    this.onInputChange('surfboards')
  }

  onInputChange (term) {
    this.setState({ term })
    this.props.onSearchTermChange(term)
  }

  render () {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar
