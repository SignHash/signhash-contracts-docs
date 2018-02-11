FROM ethereum/solc:0.4.18 AS solc

FROM node:8.9
COPY --from=solc /usr/bin/solc /usr/bin/solc
RUN npm install -g truffle@4.0.4
