import React from 'react';
import Card from '../Card';
import PieChartVotes from '../PieChartVotes';
import { Provider } from '../data-context';
import {
  reducer,
  createStore,
  addVoteToFirstMember,
  addVoteToSecondMember
} from '../../Redux';

const initState = [
  { name: 'BMV', votes: 1 },
  { name: 'Mercedes Benz', votes: 1 }
];
const store = createStore(reducer, initState);

export default class App extends React.Component {
  render() {
    return (
      <Provider value={store}>
        <div className="container-fluid">
          <div className="alert alert-primary mt-3">
            <h1 className="text-center">What do you like more</h1>
          </div>
          <div className="row">
            <Card
              classAdd="success"
              head="BMW"
              votes={store.getState()[0].votes}
            >
              <img
                src={`/img/BMW-Logo.png`}
                alt={`BMW`}
                onClick={() => {
                  store.dispatch(addVoteToFirstMember());
                  this.forceUpdate();
                }}
              />
            </Card>
            <Card classAdd="secondary" head="Distribution of votes">
              <PieChartVotes />
            </Card>
            <Card
              classAdd="info"
              head="Mercedes Benz"
              votes={store.getState()[1].votes}
            >
              <img
                src="/img/Mercedes-Logo.png"
                alt="Mercedes Benz"
                onClick={() => {
                  store.dispatch(addVoteToSecondMember());
                  this.forceUpdate();
                }}
              />
            </Card>
          </div>
        </div>
      </Provider>
    );
  }
}
