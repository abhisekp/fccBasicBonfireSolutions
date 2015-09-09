#! sh

multi='html-cov=coverage.html' NODE_ENV=test YOURPACKAGE_COVERAGE=1 node_modules/.bin/mocha --es_staging --harmony --recursive -r blanket -R mocha-multi -C test
