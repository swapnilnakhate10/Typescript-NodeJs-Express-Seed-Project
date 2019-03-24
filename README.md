# Typescript-NodeJs-Express-Seed-Project
Basic Started Project for NodeJS includes Express, Typescript, MongoDB as a database

## Installation

```bash
npm install
```
To start project run
```bash
npm start
```

To build project
```bash
npm run build
```

## Project APIs

#### Create a User

```bash
POST : http://localhost:8080/api/users/
```
Request Body

```python
{
    "email" : "swapnil@yopmail.com",
    "firstName" :"Swapnil",
    "lastName" : "Nakhate"
}
```

#### Get all users


```bash
GET : http://localhost:8080/api/users/
```


#### Update an existing User

```bash
PUT : http://localhost:8080/api/users/
```
Request Body

```python
{
    "email" : "swapnil@gmail.com",
    "firstName" :"Swapnil",
    "lastName" : "Nakhate"
}
```


#### Delete an existing user


```bash
DELETE : http://localhost:8080/api/users/{userId}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
