SignHash Contracts Documentation
---

# Requirements

- docker > 1.13.1
- docker-compose
- npm

# Generating documentation

Documentation is generated in `/dist` folder.

``` shell
npm install
npm start
```

After finishing, it is recommended to change ownership of the generated files because
docker mounts the volume as root.

```
sudo chown -R $USER:$USER dist/ pages/ config.toml
```

# Browsing generated docs locally

``` shell
npm run serve
```

Documentation is available at `http://localhost:5000`
