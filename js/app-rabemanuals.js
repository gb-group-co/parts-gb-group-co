var rabemanuals_search = instantsearch({
  // Replace with your own values
  appId: 'BG3AX4OCRB',
  apiKey: '0a5e0edb3588b17ea4255c35f077e00d', // search only API key, no ADMIN key
  indexName: 'manuals',
  urlSync: true,

  searchFunction: function(helper) {
    var searchResults = $('#rabemanuals-hits');
    var pagination = $('#rabemanuals-pagination');
    if (helper.state.query === '') {
      searchResults.hide();
      pagination.hide();
      return;
    }
    helper.search();
    searchResults.show();
    pagination.show();
  }
});

rabemanuals_search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#rabemanuals-search-input',
    autofocus: false
  })
);

rabemanuals_search.addWidget(
  instantsearch.widgets.hits({
    container: '#rabemanuals-hits',
    hitsPerPage: 10,
    templates: {
      item: document.getElementById('rabemanuals-hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

rabemanuals_search.addWidget(
  instantsearch.widgets.pagination({
    container: '#rabemanuals-pagination',
    maxPages: 50,
    scollTo: false,
    showFirstLast: true
  })
);

rabemanuals_search.start();