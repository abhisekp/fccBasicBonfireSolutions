#! sh

node_modules/.bin/mocha --es_staging --harmony --recursive -r blanket -R travis-cov -C test
