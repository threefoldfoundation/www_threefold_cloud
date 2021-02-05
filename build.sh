

set -e
cd /Users/despiegk/codesync/github/threefoldfoundation/www_threefold_cloud

#need to ignore errors for getting nvm not sure why
set +e
source /Users/despiegk/.publisher/nvm.sh

set -e
nvm use --lts

export PATH=/Users/despiegk/.publisher/versions/node/v15.8.0/bin:$PATH

gridsome build

