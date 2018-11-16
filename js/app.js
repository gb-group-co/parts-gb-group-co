const search = instantsearch({
  // Replace with your own values
  appId: 'BG3AX4OCRB',
  apiKey: '0a5e0edb3588b17ea4255c35f077e00d', // search only API key, no ADMIN key
  indexName: 'catalogues_v2',
  urlSync: true,

  searchFunction: function(helper) {
    var searchResults = $('#hits');
    var searchtab = $('#tabs');
    var pagination = $('#pagination');
    if (helper.state.query === '') {
      searchResults.hide();
      searchtab.hide();
      pagination.hide();
      return;
    }
    helper.search();
    searchResults.show();
    searchtab.show();
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

search.addWidget(
  instantsearch.widgets.stats({
    container: '#tabsCatalog',
    templates: [(StatsBodyData) => nbHits]
  })
);

search.start();
