SignHash Contracts Documentation
---

# Requirements

- docker
- docker-compose
- npm

# Generating documentation

Documentation is generated in `/docs` folder.

```
npm install
npm start
```

After finishing, it is recommended to change ownership of the generated files because
docker mounts the volume as root.

```
sudo chown -R $USER:$USER docs/ pages/ config.toml
```
