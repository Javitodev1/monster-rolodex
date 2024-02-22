import { type ReactNode, Component } from 'react';
import { type User } from '@/types/user';

interface IProps {}

interface IState {
  monsters: User[]
}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      monsters: [],
    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {return {monsters: users}},
          () => {console.log(this.state)}
        )
      })
  }

  render(): ReactNode {
    return (
      <ul>
        {this.state.monsters.map(({id, name}) => {
          return <li key={id}>{name}</li>
        })}
      </ul>
    );
  }
}
