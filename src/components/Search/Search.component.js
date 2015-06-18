'use strict';
import React from 'react';
import {TokenSearchField, FilterGuide} from 'dbc-react-querystring';
// import {ResultDisplay} from 'dbc-react-resultlistview';
import QueryParser from '../../utils/QueryParser.util.js';

// import reflux actions and stores
import queryAction from '../../actions/QueryUpdate.action.js';
import queryStore from '../../stores/QueryStore.store.js';
import filterStore from '../../stores/FilterStore.store.js';
import resultListStore from '../../stores/ResultList.store.js';

/**
 * Search field wrapper component
 */
const Search = React.createClass({
  propTypes: {
    query: React.PropTypes.object,
    filterElements: React.PropTypes.array,
    resultList: React.PropTypes.object
  },

  getInitialState() {
    const query = QueryParser.stringToObject(this.props.query || []);
    queryAction(query);
    return {
      query,
      filterElements: this.props.filterElements || [],
      resultList: {}
    };
  },
  /**
   * Add a single element to the Query array
   */
  addElementToQuery(element) {
    let query = this.state.query;
    query.push(element);
    queryAction(query);
  },

  /**
   * Update the Query with a new Query
   */
  updateQuery(query) {
    this.setState({query});
    // this is a simple way of handling updates of the url
    // we might need to implement a more advanced version at some point e.g. react-router
    // but we need to figure out our needs first
    history.pushState(null, null, `${window.location.pathname}?${QueryParser.objectToString(query)}`);
  },

  updateFilters(filterElements) {
    this.setState({filterElements});
  },

  updateResultList(resultList) {
    this.setState({resultList});
  },

  componentDidMount: function() {
    queryStore.listen(this.updateQuery);
    filterStore.listen(this.updateFilters);
    resultListStore.listen(this.updateResultList);
  },

  componentWillUnmount: function() {
  },

  render() {
    const {filterElements, query} = this.state;
    let filterGuide;
    if (filterElements.length > 0) {
      filterGuide = (<FilterGuide elements={filterElements} select={this.addElementToQuery}/>);
    }

    return (
      <div className='search'>
        <TokenSearchField query={query} update={queryAction} />
        {filterGuide}
      </div>
    );
  }
});

export default Search;