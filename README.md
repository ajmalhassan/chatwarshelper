# Chat Wars Helper

> Telegram-based MMORPG Game helper

Chat Wars Helper is a app that was built with the players in mind. It was created as a one stop solution. FAQs, Recipes, Crafting, Battle reports you name it! This is the big picture that we are working towards.

This repository contains:

1. The full Ionic project for building the app
2. The graphic resources like the app icon and splashscreen

## Table of Contents

- [Install](#install)
- [Running](#running)
- [Generator](#generator)
- [Building](#building)
- [Thanks](#thanks)
- [Contribute](#contribute)
- [License](#license)

## Install

This project uses [node](http://nodejs.org) and [ionic](https://ionicframework.com). Go check them out if you don't have them locally installed.

```sh
# clone the repo
$ https://github.com/ajmalhassan/chatwarshelper.git my-project

# go into app's directory
$ cd my-project

# install dependencies
$ npm i
```

## Running

After installing the dependencies you can serve the project in development mode in the browser

```sh
# opens the app in the browser
$ ionic serve

# opens the app in the browser but in a specialized ionic view
$ ionic serve --lab
```

### Generator

This app was generated using the [ionic cli](https://ionicframework.com/docs/cli/) and many commands were used to generate the desired components, pages, providers and pipes. You can find the full command list [here](https://ionicframework.com/docs/cli/commands.html).

## Building

To build and run the app on your phone, to test drive it, so as to say, you need android sdk, cordova and jdk configured in your system.
Connect the phone to your computer / start an emulator, ensure that you have turned on USB debugging from developer options in the settings of your phone. Try the following commands:

```sh
# builds a debug version of the android app
$ ionic cordova build android

# builds a debug version of the app and runs it on your android phone
$ ionic cordova run android

# builds a debug version of the ios app
$ ionic cordova build ios

# builds a debug version of the app and runs it on your iphone
$ ionic cordova run ios



# builds a production ready release version of your android app
$ ionic cordova build android --prod --release

# builds a production ready release version of your app and runs it on your android phone
$ ionic cordova run android --prod --release

# builds a production ready release version of your ios app
$ ionic cordova build ios --prod --release

# builds a production ready release version of your app and runs it on your iphone
$ ionic cordova run ios --prod --release
```

## Thanks

[@Aragantinis](https://github.com/Aragantinis).

## Contribute

Feel free to dive in! [Open an issue](https://github.com/ajmalhassan/chatwarshelper/issues/new) or submit PRs.

Standard Readme follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

## License

[MIT](LICENSE) © Ajmal Hassan K N
