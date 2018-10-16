# Secret Santa App

> This app will be used to randomly assign an employee to another employee so they can exchange gifts.

## Build Setup

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# run unit test
$ npm test
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Live Demo url

<https://secret-santa-app-wmxqlztrxq.now.sh>

## Specifications

- An employee can only be assigned once
  - Emp1 is assigned to Emp2. Emp1 and Emp2 can no longer be assigned to other employees
- An employee can only exchange gifts with someone of the same gender
- An employee can only exchange gifts with someone NOT reporting to the same manager
- Should accept a JSON string as input

```bash
// INPUT STRUCTURE
[{
  name: STRING,
  gender: STRING (M|F),
  manager: STRING
}]
```

- Output is a list employees (with their gender and manager) and their assigned secret santa

## Sample Input

```
[ { "name": "Emp1", "gender": "M", "manager": "Alex" }, { "name": "Emp2", "gender": "M", "manager": "Alice" }, { "name": "Emp3", "gender": "F", "manager": "Alex" }, { "name": "Emp4", "gender": "F", "manager": "Alice" }, { "name": "Emp5", "gender": "F", "manager": "Alice" }, { "name": "Emp6", "gender": "F", "manager": "Alice" }, { "name": "Emp7", "gender": "F", "manager": "Alice" }, { "name": "Emp8", "gender": "F", "manager": "Alice" }, { "name": "Emp9", "gender": "F", "manager": "Alice" }, { "name": "Emp10", "gender": "F", "manager": "Alex" }, { "name": "Emp11", "gender": "M", "manager": "Alex" }, { "name": "Emp12", "gender": "M", "manager": "Alex" }, { "name": "Emp13", "gender": "M", "manager": "David" }, { "name": "Emp14", "gender": "M", "manager": "Alex" }, { "name": "Emp15", "gender": "M", "manager": "Alex" } ]
```
