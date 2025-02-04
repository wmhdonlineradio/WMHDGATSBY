## WMHD Website!

# Editing website
git clone https://github.com/wmhdonlineradio/WMHDGATSBY
cd wmhd-radio-website
yard install
gatsby develop

# Updating website
gatsby build
git init
git add .
git commit -m "commit message"
git push -u origin master --force