<?php 
require_once('vendor/algolia/algoliasearch.php');

$client = new \AlgoliaSearch\Client('BG3AX4OCRB', '0a5e0edb3588b17ea4255c35f077e00d');

$index = $client->initIndex('catalogues_v2');

$index->setSettings(array(
  "searchableAttributes" => [
    "serie",
    "range"
  ],
  "customRanking" => [
    "asc(serie)",
    "asc(brand)",
    "asc(range)"
  ]
));


$manuals = $client->initIndex('manuals_v2');

$manuals->setSettings(array(
  "searchableAttributes" => [
    "model",
    "range",
    "filename",
    "year",
    "brand",
    "language"
  ],
  "customRanking" => [
    "asc(model)",
    "desc(year)",
    "desc(language)",
    "asc(brand)"
  ]
));


$parts = $client->initIndex('parts_v2');

$parts->setSettings(array(
  "searchableAttributes" => [
    "reference",
    "fr",
    "en",
    "de",
    "it",
    "pl",
    "ru",
    "uk",
    "brand"
  ],
  "customRanking" => [
    "asc(reference)",
    "asc(fr)",
    "asc(en)",
    "asc(de)",
    "asc(price_eur)",
    "asc(weight)",
    "asc(brand)"
  ]
));
?>