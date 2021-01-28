

if [ ! -d "node_modules" ]
then
    sh tools/install.sh
fi

pushd ~/code/github/threefoldfoundation/data_threefold
git pull
popd

rm content/blog content/person content/news content/project

ln -s ~/code/github/threefoldfoundation/data_threefold/content/blog content/blog
ln -s ~/code/github/threefoldfoundation/data_threefold/content/person content/person
ln -s ~/code/github/threefoldfoundation/data_threefold/content/news content/news
ln -s ~/code/github/threefoldfoundation/data_threefold/content/project content/project

export NVM_DIR="$HOME/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm use --lts


gridsome develop