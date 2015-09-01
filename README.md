# MediaApp
Mediacenter with integrated usenet and torrent client built in nodejs.
MediaApp

## Client
grunt serve (development preview)
grunt --force (build production release)

## Server
SET NODE_ENV=development || SET NODE_ENV=production
npm start (start server)

## MongoDB
mongod --dbpath data/db/ --logpath data/logs/mongodb.log --logappend

## Commands
npm cache clean 
bower cache clean

## References
http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/
http://start.jcolemorrison.com/building-an-angular-and-express-app-part-2/
http://start.jcolemorrison.com/building-an-angular-and-express-app-part-3/
https://github.com/krimple/angular-socketio-chat   /    http://chariotsolutions.com/blog/post/getting-chatty-angular-socket-io-nodeexpress-bootstrap/
https://github.com/JustGoscha/allmighty-autocomplete

## Requirements
- NodeJS
- MongoDB
- Express
- Angular
- Bower
- Nodemon

## Notes
Bson fix: http://stackoverflow.com/questions/28651028/cannot-find-module-build-release-bson-code-module-not-found-js-bson

