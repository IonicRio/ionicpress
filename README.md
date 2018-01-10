# Ionic + Wordpress = 💕

[Ionic](https://ionicframework.com/) is the open-source mobile app development framework that makes it easy to
build top quality native and progressive web apps with web technologies.

Ionic is based on [Angular](https://angular.io/) and comes with many significant performance, usability, and
feature improvements over the past versions.

See the [Building Apps with Ionic](https://adamdbradley.github.io/building-with-ionic2) slides for a quick
overview or watch our [Crash Course](https://youtu.be/O2WiI9QrS5s) video for a quick walkthrough on how to get
started using Ionic.

### Getting Started

To start this project just clone this repo with ```git clone https://github.com/IonicRio/ionicpress.git``` command 
and then ```cd ionicpress``` to enter in the app folder. Once in the folder, install dependencies with ```npm install```.


### Running The App

In the app folder, run the command ```ionic serve --lab```

### Running [Wordpress](https://hub.docker.com/_/wordpress) in [Docker](https://docker.com)

Just run the command ```docker run --rm -ti -p PORT:80 wordpress ``` replacing the string __PORT__ 
to your public port that you'll serve the wordpress site. Also remember that you need to change your "base" pararam 
in ```src/providers/wp/wp.ts```

### Examples

The [Ionic Conference App](https://github.com/ionic-team/ionic-conference-app) is a full featured Ionic app.
It is the perfect starting point for learning and building your own app.
