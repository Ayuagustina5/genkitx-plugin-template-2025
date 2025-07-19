# Genkit PostgreSQL Plugin

This is a Genkit plugin that allows you to connect to a PostgreSQL database and execute queries.

## Installation

```bash
npm install
```

## Configuration

1.  Create a `config.json` file in the root of the project.
2.  Add your database connection details to the `config.json` file:

```json
{
  "user": "your_user",
  "host": "your_host",
  "database": "your_database",
  "password": "your_password",
  "port": 5432,
  "query": "SELECT * FROM your_table"
}
```

## Usage

To run the example, use the following command:

```bash
npm start
```

This will execute the query in `config.json` and print the result to the console.
