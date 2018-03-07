var search = instantsearch({
  // Replace with your own values
  appId: 'BG3AX4OCRB',
  apiKey: '0a5e0edb3588b17ea4255c35f077e00d', // search only API key, no ADMIN key
  indexName: 'catalogues',
  urlSync: true,

  searchFunction: function(helper) {
    var searchResults = $('#hits');
    var pagination = $('#pagination');
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

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input',
    autofocus: false
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 10,
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 50,
    scollTo: false,
    showFirstLast: true
  })
);

search.start();