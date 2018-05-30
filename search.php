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
    "desc(serie)"
  ]
));


$rabemanuals = $client->initIndex('manuals');

$rabemanuals->setSettings(array(
  "searchableAttributes" => [
    "model",
    "filename",
    "year",
    "language"
  ],
  "customRanking" => [
    "desc(model)",
    "desc(year)",
    "desc(language)"
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
    "desc(label_en)",
    "desc(label_fr)",
    "desc(label_de)",
    "desc(price_eur)",
    "desc(weight)"
  ]
));
?>