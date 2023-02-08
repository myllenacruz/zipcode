<h1 align="center">Zip Code Consult API</h1>

#### This application so far does not make connections with the database, therefore, the returned values are saved in memory or searched in ViaCep API. If this same zip code is searched within a period of up to 5 minutes, the data will be searched in cache and no longer in ViaCep.
_______

### Main frameworks, librarys and packages used:
  ##### Express - Provides a simple routing for requests made by clients.
  ##### Yarn - A fast, effective and secure package manager. But it's just my preference, you can use Pnpm or Npm as well.
  ##### Tsyringe - For dependency injection.
  ##### Axios - To communicate with ViaCep API.
  ##### JsonWebToken - For authentication.
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
  * You can make requests directly in Postman, importing the <strong>postman.json</strong> file. You find it in the directory: ```src/docs```.
      - To make a zip code consult, you need to have your access token. To own an access token, follow the steps below:

        1 - Registrate ur user.

        2 - Do login and copy your <strong>accessToken</strong>.

        3 - Go to <strong>Zip Code Consult</strong> and paste your <strong>accessToken</strong> on Authorization > Type > Bearer Token. After this you ready to make    your zip code consult.

  ### Swagger
  If your server is already up and you want a more practical and free way to test, access the swagger documentation: http://localhost:4000/docs.

  <strong>Authentication is required to access</strong>

  Credentials:
  - user: 
    dev
  - password: 
  @ZipCode2023#
