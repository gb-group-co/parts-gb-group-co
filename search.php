<?php 
require_once('vendor/algolia/algoliasearch.php');

$client = new \AlgoliaSearch\Client('BG3AX4OCRB', '0a5e0edb3588b17ea4255c35f077e00d');

$index = $client->initIndex('catalogues');

$index->setSettings(array(
  "searchableAttributes" => [
    "serie",
    "model"
  ],
  "customRanking" => [
    "asc(serie)",
    "asc(brand)"
  ]
));


$manuals = $client->initIndex('manuals');

$manuals->setSettings(array(
  "searchableAttributes" => [
    "model",
    "filename",
    "year",
    "language"
  ],
  "customRanking" => [
    "asc(model)",
    "desc(year)",
    "desc(language)",
    "asc(brand)"
  ]
));


$parts = $client->initIndex('parts');

$parts->setSettings(array(
  "searchableAttributes" => [
    "ref",
    "label_en",
    "label_fr",
    "label_de"
  ],
  "customRanking" => [
    "asc(ref)",
    "asc(label_en)",
    "asc(label_fr)",
    "asc(label_de)",
    "asc(price_eur)",
    "asc(weight)",
    "asc(brand)"
  ]
));
?>