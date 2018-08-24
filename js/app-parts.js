var parts_search = instantsearch({
  // Replace with your own values
  appId: 'BG3AX4OCRB',
  apiKey: '0a5e0edb3588b17ea4255c35f077e00d', // search only API key, no ADMIN key
  indexName: 'parts_v2',
  urlSync: true,

  searchFunction: function(helper) {
    var searchResults = $('#partrate-hits');
    var pagination = $('#partrate-pagination');
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

parts_search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#partrate-search-input',
    autofocus: false
  })
);

parts_search.addWidget(
  instantsearch.widgets.hits({
    container: '#partrate-hits',
    hitsPerPage: 10,
    templates: {
      item: document.getElementById('partrate-hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

parts_search.addWidget(
  instantsearch.widgets.pagination({
    container: '#partrate-pagination',
    maxPages: 50,
    scollTo: false,
    showFirstLast: true
  })
);

parts_search.start();