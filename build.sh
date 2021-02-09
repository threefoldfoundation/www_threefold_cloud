

set -e
cd /Users/despiegk/codewww/github/threefoldfoundation/www_threefold_cloud

#need to ignore errors for getting nvm not sure why
set +e
source /Users/despiegk/.publisher/nvm.sh

set -e
nvm use --lts

export PATH=/Users/despiegk/.publisher/versions/node/v15.8.0/bin:$PATH

set +e
gridsome build

set -e

mkdir -p /Users/despiegk/.publisher/publish/www_threefold_cloud
rsync -ra --delete /Users/despiegk/codewww/github/threefoldfoundation/www_threefold_cloud/dist/ /Users/despiegk/.publisher/publish/www_threefold_cloud/

cd /Users/despiegk/codewww/github/threefoldfoundation/www_threefold_cloud/dist

#echo go to http://localhost:9999/
 #python3 -m http.server 9999

