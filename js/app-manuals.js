var manuals_search = instantsearch({
  // Replace with your own values
  appId: 'BG3AX4OCRB',
  apiKey: '0a5e0edb3588b17ea4255c35f077e00d', // search only API key, no ADMIN key
  indexName: 'manuals_v2',
  urlSync: true,

  searchFunction: function(helper) {
    var searchResults = $('#manuals-hits');
    var pagination = $('#manuals-pagination');
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

manuals_search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input',
    autofocus: false
  })
);

manuals_search.addWidget(
  instantsearch.widgets.hits({
    container: '#manuals-hits',
    hitsPerPage: 10,
    templates: {
      item: document.getElementById('manuals-hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

manuals_search.addWidget(
  instantsearch.widgets.pagination({
    container: '#manuals-pagination',
    maxPages: 50,
    scollTo: false,
    showFirstLast: true
  })
);

manuals_search.addWidget(
  instantsearch.widgets.stats({
    container: '#tabsManuals',
    templates: [(StatsBodyData) => nbHits]
  })
);


manuals_search.start();

