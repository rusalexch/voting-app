import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ classAdd, head, votes, children }) {
  let renderVotes;
  if (votes) {
    renderVotes = (
      <span className={`badge badge-${classAdd}`}> votes : {votes}</span>
    );
  } else {
    renderVotes = <span />;
  }
  return (
    <div className="col-4">
      <div className={`alert alert-${classAdd} h-100`}>
        <h3 className="alert-heading text-center">{head}</h3>
        <hr />
        {renderVotes}
        <div className="w-100 text-center">{children}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  classAdd: PropTypes.string,
  head: PropTypes.string,
  votes: PropTypes.number,
  children: PropTypes.element
};
