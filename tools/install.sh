set -e
set +x

# INSTALL CRYSTAL TOOLS
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/crystaluniverse/crystaltools/master/tools/install.sh)"

# GET REQUIRED REPOSITORIES
ct git pull -u git@github.com:threefoldfoundation/www_threefold_farming.git
ct git pull -u git@github.com:threefoldfoundation/data_threefold.git

# GO INTO CODE DIERCTORY
set -e
cd ~/code/github/threefoldfoundation/www_threefold_farming

# INSTALL GRIDSOME & DEPENDENCIES FOR GRIDSOME
rm -f yarn.lock
rm -rf node_modules
rm -rf .cache
npm install --global @gridsome/cli

set +e
npm install

# RUN THE WEBSITE
gridsome develop

#to call this
#/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/threefoldfoundation/www_threefold_farming/master/tools/install.sh)"