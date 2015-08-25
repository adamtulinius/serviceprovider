'use strict';

/**
 * @file
 * Container for the SearchField functionality, which contains a tokenized inputfield and an autocomplete
 */


import React from 'react';
import Reflux from 'reflux';

// Components
import AutoCompleteContainer from '../autocomplete/AutocompleteContainer.component.js';
import {TokenSearchField} from 'dbc-react-components';

// Actions
import AutoCompleteActions from '../../actions/AutoComplete.action.js';
import QueryActions from '../../actions/QueryUpdate.action.js';
import InputFieldActions from '../../actions/InputField.actions.js';

// Stores
import QueryStore from '../../stores/QueryStore.store.js';
import InputFieldStore from '../../stores/InputField.store.js';
import AutoCompleteStore from '../../stores/AutoComplete.store.js';

const SearchFieldContainerComponent = React.createClass({
  displayName: 'SearchFieldContainer.component',

  propTypes: {
    placeholder: React.PropTypes.string
  },

  mixins: [
    Reflux.connect(AutoCompleteStore, 'autocomplete'),
    Reflux.connect(InputFieldStore, 'input'),
    Reflux.connect(QueryStore, 'query')
  ],

  showPlaceholder() {
    return !(this.state.query.query && this.state.query.query.length);
  },

  render() {
    const placeholder = this.showPlaceholder() ? (this.props.placeholder || 'Skriv dine søgeord her') : '';
    const translations = {
      Music: 'Musik',
      Movie: 'Film',
      Literature: 'Bog',
      Game: 'Spil'
    };
    return (
      <div className='searchfield' >
        <TokenSearchField
          change={InputFieldActions.change}
          focus={InputFieldActions.focus}
          pending={this.state.autocomplete.pending}
          placeholder={placeholder}
          query={this.state.query.query}
          translations={translations}
          update={QueryActions.update}
          />
        <AutoCompleteContainer actions={AutoCompleteActions} input={this.state.input} store={this.state.autocomplete} />
      </div>
    );
  }
});

export default SearchFieldContainerComponent;
