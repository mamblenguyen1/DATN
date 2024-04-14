# Backend

### Working directory: `./backend`

### Run backend dev
```bash
npm run dev
```



# MongoDB
### Start mongodb server
```bash
mongod --noauth --logpath ./db/logs/eduman.log --dbpath ./db/data
```

### Install mongodb:
[For Window](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/#std-label-install-mdb-community-windows)

### Connect DB
```bash
mongosh "mongodb://localhost:27017"
```

### Restore DB
```bash
mongorestore --gzip --archive=edumandb.gz 
```

### Mongo Dump DB
```bash
mongodump --host=localhost --port=27017 --db=edumandb --archive=edumandb.gz --gzip
```