<h1 align="center">Zip Code Consult API</h1>

_______
#### This application so far does not make connections with the database, therefore, the returned values are saved in memory or searched in ViaCep API. If this same zip code is searched within a period of up to 5 minutes, the data will be searched in cache and no longer in ViaCep.
_______

## Development
1. Install project dependencies: 

```
yarn install
```

2. Start the server:
```
yarn dev
```

## API Documentation
  ### CURLs
  * You can make requests directly in Postman, importing the <strong>postman.json</strong> file. You find it in the directory: <strong>"src/docs"</strong>.
      - To make a zip code consult, you need to have your access token. To own an access token, follow the steps below:

        1 - Registrate ur user.

        2 - Do login and copy your accessToken.

        3 - Paste your access token on Authorization Header - Bearer to do the request.

  ### Swagger
  If your server is already up and you want a more practical and free way to test, access the swagger documentation: http://localhost:4000/docs.

  <strong>Authentication is required to access</strong>

  Credentials:
  - user: 
    dev
  - password: 
  @ZipCode2023#
