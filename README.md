abci-cli kvstore
tendermint unsafe_reset_all

Install:
1.
brew update
brew install golang
brew install glide
brew install dep

2. 
export GOPATH=$HOME/go
export GOROOT=/usr/local/opt/go/libexec
export PATH=$PATH:$GOPATH/bin
export PATH=$PATH:$GOROOT/bin

3. 
mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin

4. 
mkdir -p $GOPATH/src/github.com/tendermint/tendermint
git clone https://github.com/tendermint/tendermint $GOPATH/src/github.com/tendermint/tendermint
cd $GOPATH/src/github.com/tendermint/tendermint
make get_vendor_deps && make install
tendermint init

5. 
cd ~/ambrosus
mkdir -p $GOPATH/src/github.com/ambrosus && cp -r abci-ambrosus $GOPATH/src/github.com/ambrosus/abci-ambrosus
cd $GOPATH/src/github.com/ambrosus/abci-ambrosus
glide install

7. 
cd ~/ambrosus
cp -r tendermint-explorer-server $GOPATH/src/github.com/ambrosus/tendermint-explorer-server
cd $GOPATH/src/github.com/ambrosus/tendermint-explorer-server
glide install


8.
cd ~/ambrosus/tendermint-explorer
npm install

Clean:
rm -r $HOME/.tendermint
tendermint init
rm -r $GOPATH/src/github.com/ambrosus/abci-ambrosus/keyvalue.db

Start:
cd ~/ambrosus/tendermint-explorer
tendermint node --consensus.create_empty_blocks=false
go run $GOPATH/src/github.com/ambrosus/tendermint-explorer-server/main.go
npm run react:start
cd $GOPATH/src/github.com/ambrosus/abci-ambrosus && go run $GOPATH/src/github.com/ambrosus/abci-ambrosus/main.go