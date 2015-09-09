#! sh

COVERALLS_REPO_TOKEN=WRITE_YOUR_SECRET_TOKEN_HERE
NODE_ENV=test YOURPACKAGE_COVERAGE=1 mocha --es_staging --harmony --recursive -r blanket -R node_modules/.bin/mocha-lcov-reporter -C test | node_modules/.bin/coveralls
