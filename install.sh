set -ex
rm yarn.lock
rm -rf node_modules
rm -rf .cache
ct git pull -u git@github.com:threefoldfoundation/data_threefold.git
yarn install
gridsome develop
