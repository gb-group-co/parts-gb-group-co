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
    "desc(serie)",
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
    "ref",
    "label_fr",
    "label_en",
    "label_de",
    "label_it",
    "label_pl",
    "label_ru",
    "label_uk",
    "brand"
  ],
  "customRanking" => [
    "asc(ref)",
    "asc(label_fr)",
    "asc(label_en)",
    "asc(label_de)",
    "asc(price)",
    "asc(weight)",
    "asc(brand)"
  ]
));
?>