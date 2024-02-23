import React from 'react'

import { type User } from '@/types/user'

interface IProps {
  monsters: User[]
}

export default class CardList extends React.Component<IProps> {
  render() {
    const { monsters } = this.props
    return (
      <div className="grid grid-cols-3 ">
        {monsters.map(({ id, name, email }) => (
          <div
            key={id}
            className="flex flex-col items-center"
          >
            <img
              src={`https://robohash.org/${id}/?set=set2&size=180x180`}
              alt={`monster-${name}`}
            />
            <h2 className="mb-1 text-xl text-white">{name}</h2>
            <p className="text-lg text-white">{email}</p>
          </div>
        ))}
      </div>
    )
  }
}
