# react-indecision-app
Second attempt at completing the course. Starting over (:

## Compile / run first lessons
```
# Install, first time only
npm install -g babel-cli@6.24.1
npm install -g live-server
npm install

# Live reloading
live-server public
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```