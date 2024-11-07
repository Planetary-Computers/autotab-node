# Autotab Node API Library

This library provides convenient access to the Autotab REST API from TypeScript and Javascript.

It is generated from our OpenAPI specification with [openapi-generator](https://github.com/openapitools/openapi-generator).

To learn how to use the Autotab API, check out our [API Reference](https://autotab.com/docs/api) and [Documentation](https://autotab.com/docs). 

## Installation

```sh
npm install autotab --save
```

## Usage

<!-- prettier-ignore -->
```js
import { Configuration, RunApi } from 'autotab';

const runClient = new RunApi(new Configuration({
    apiKey: process.env['AUTOTAB_API_KEY'],
}));

async function main() {
  const run = await runClient.start({
    runSkillRequest: {
        skillId: "skill_fe517503-384a-45c5-87a3-94f98126e626"
    }
  });
  
  console.log("result:", await runClient.retrieve({
    id: run.id
  }))
}

main();
```
