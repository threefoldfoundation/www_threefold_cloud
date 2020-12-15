
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

gridsome develop