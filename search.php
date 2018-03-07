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


$parts = $client->initIndex('parts');

$parts->setSettings(array(
  "searchableAttributes" => [
    "ref",
    "label_fr"
  ],
  "customRanking" => [
    "asc(ref)",
    "desc(label_fr)",
    "desc(price_eur)",
    "desc(weight)"
  ]
));
?>