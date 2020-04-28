# Timestamp Microservice

_A REST API for timestamps_

This is the first project under APIs and Microservices Projects: Timestamp Microservice

## Table of contents:

- [Get current timestamp](#get-current-timestamp)
- [Get selected timestamp](#get-selected-timestamp)
- [Contributing](#contributing)
- [User stories](#user-stories)

## API Documentation

### Get current timestamp

Returns the current timestamp in unix and utc formats.

#### Parameter variables

None

#### Request

```http
https://timestamp-microservice-freecc.herokuapp.com/api/timestamp
```

#### Response

```js
{
  unix: number,
  utc: string
}
```

### Get selected timestamp

Get passed in timestamp in both unix and utc formats. It supports two parameter variables.

#### Parameter variables

| Param variable | type     | Description                                         |
| :------------- | :------- | :-------------------------------------------------- |
| unix           | `Number` | Get passed in unix in both unix and utc formats     |
| iso            | `String` | Get passed in iso time in both unix and utc formats |

#### Request

```http
https://timestamp-microservice-freecc.herokuapp.com/api/timestamp/:date_string
```

#### Response

```js
{
  unix: number,
  utc: string
}
```

## Contributing

Feel free to contribute with issues and PR's.

## User Stories

Found in the official FCC project glitch page https://curse-arrow.glitch.me/
