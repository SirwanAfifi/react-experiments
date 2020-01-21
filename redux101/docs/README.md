### Middlewares

It simply listens for actions much like a tunnel that actions go through and depending on what the middleware is, it can modify the action or trigger another action. So they are like triggers that actions go through and something happens within this tunnel **before it hits the reducer**.

### Why middleware might be useful for us?

- Logging

```js
yarn add redux-logger
```

#### How to use the logger?

```js
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger();
const store = createStore(searchCharacter, applyMiddleware(logger));
```

Now when an action is dispatched we can see the logs in the console:

<img src="./imgs/redux-logger.png" />
