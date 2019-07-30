import React from 'react';
import PropTypes from 'prop-types';

const VoteContext = React.createContext('');

const Provider = (props) => (
  <VoteContext.Provider value={props.value}>
    {props.children}
  </VoteContext.Provider>
);

Provider.propTypes = {
  value: PropTypes.object,
  children: PropTypes.element
};

const consumer = () => {
  return (WrappedComponent) => {
    class Consumer extends React.Component {
      getData = () => {
        // eslint-disable-next-line react/prop-types
        const data = this.props.store.getState();
        return data.map((item) => item);
      };

      render() {
        return <WrappedComponent {...this.props} data={this.getData()} />;
      }
    }
    return (props) => (
      <VoteContext.Consumer>
        {(store) => <Consumer {...props} store={store} />}
      </VoteContext.Consumer>
    );
  };
};

export { Provider, consumer };
