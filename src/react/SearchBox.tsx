import { Component } from 'react'

interface IProps {
  onChangeHandler: any
}

export default class SearchBox extends Component<IProps> {
  render() {
    return (
      <input
        className="w-full py-2 placeholder:p-2"
        type="search"
        placeholder="search monsters"
        onChange={this.props.onChangeHandler}
        name="filter"
        id="filter"
      />
    )
  }
}
