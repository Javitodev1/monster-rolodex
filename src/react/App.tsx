import React from 'react'

import { type User } from '@/types/user'

import CardList from './CardList'
import SearchBox from './SearchBox'

interface IProps {}

interface IState {
  monsters: User[]
  search: string
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      monsters: [],
      search: '',
    }
    this.onSearchChanged = this.onSearchChanged.bind(this)
    this.filteredMonsters = this.filteredMonsters.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users: User[]) => {
        this.setState((prevState) => ({ ...prevState, monsters: users }))
      })
  }

  onSearchChanged(event: React.ChangeEvent<HTMLInputElement>) {
    const filter = event.target.value.toLocaleLowerCase()
    this.setState((prevState) => ({ ...prevState, search: filter }))
  }

  filteredMonsters() {
    const { monsters, search } = this.state
    return monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(search)
    )
  }

  render() {
    const { onSearchChanged, filteredMonsters } = this
    return (
      <section className="py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-10 text-center text-4xl font-bold text-white">
            Monster Rolodex
          </h1>
          <SearchBox onChangeHandler={onSearchChanged} />
          <CardList monsters={filteredMonsters()} />
        </div>
      </section>
    )
  }
}
