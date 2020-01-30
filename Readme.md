# Coronavirus Tracke API
The following repo contains the API for the Coronavirus Tracker https://coronavirus.visualdatahq.com

## Requirements
```
    Node v10.15.0
```

## Development
Create .env variable with MONGO_URI=<db_connection_uri>
```
    MONGODB_URI=mongodb+srv://<user>:<password>@my-cluster-uf345.mongodb.net/<database-name>?retryWrites=true
```

```
    $ now dev
```


## Deployment
Add environment variable to production:
```
now secrets add my-mongodb-uri mongodb+srv://<user>:<password>@my-cluster-uf345.mongodb.net/<database-name>?retryWrites=true

```

Run now:
```
    now
```