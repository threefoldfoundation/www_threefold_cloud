set -e
set +x

# INSTALL CRYSTAL TOOLS

if [[ "OSTYPE" == "linux-gnu"* ]]; then 
    sudo /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/crystaluniverse/crystaltools/master/tools/install.sh)"
    sudo chmod 777 /usr/local/bin/ct
elif [[ "OSTYPE" == "darwin"* ]]; then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/crystaluniverse/crystaltools/master/tools/install.sh)"
fi


# GET REQUIRED REPOSITORIES
ct git pull -u git@github.com:threefoldfoundation/www_threefold_cloud.git
ct git pull -u git@github.com:threefoldfoundation/data_threefold.git

#ln -s ~/code/github/threefoldfoundation/data_threefold/content/blog ~/code/github/threefoldfoundation/www_threefold_farming/content/blog
#ln -s ~/code/github/threefoldfoundation/data_threefold/content/person ~/code/github/threefoldfoundation/www_threefold_farming/content/person
#ln -s ~/code/github/threefoldfoundation/data_threefold/content/news ~/code/github/threefoldfoundation/www_threefold_farming/content/news
#ln -s ~/code/github/threefoldfoundation/data_threefold/content/project ~/code/github/threefoldfoundation/www_threefold_farming/content/project

# GO INTO CODE DIERCTORY
set -e
cd ~/code/github/threefoldfoundation/www_threefold_farming

# INSTALL GRIDSOME & DEPENDENCIES FOR GRIDSOME
rm -f yarn.lock
rm -rf node_modules
rm -rf .cache

if [[ "OSTYPE" == "linux-gnu"* ]]; then
    sudo npm install --global @gridsome/cli
 elif [[ "OSTYPE" == "darwin"* ]]; then
     npm install --global @gridsome/cli
fi
set +e
npm install

## RUN THE WEBSITE
#gridsome develop

#to call this
#/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/threefoldfoundation/www_threefold_farming/master/tools/install.sh)"