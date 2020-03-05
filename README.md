# vanced-automatic-installer

## Table of Contents

- [About](#about)
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Usage](#usage)
- [Development](#development)
- [License](./LICENSE)

## About <a name = "about"></a>

This is a CLI tool written with NodeJS to automate the download and install of YouTube Vanced to your device using adb. New versions of YouTube Vanced require the Split APKs Installer (SAI, available from the Play Store) to install the application. 

Whilst SAI does work for most devices, on MIUI you are required to disable MIUI optimization which clears all permissions for your installed apps so this tool was created to avoid that.

### Prerequisites <a name = "prerequisites"></a>

```
NodeJS
NPM
ADB
```

### Installing <a name = "installing"></a>

To get started you need to clone this repo and cd into the directory

```
git clone https://github.com/Waaiez/vanced-automatic-installer.git && cd vanced-automatic-installer
```

After cloning you need to install this tool globally

```
npm install -g
```

## Usage <a name = "usage"></a>

After the installation is complete you should be able to run this tool globally with the following commands

```shell
Usage: vanced [command]

List of commands available: 
  install ................ Installs Youtube Vanced to your device
  version ................ Show the package version
  help    ................ Show the help menu for a list of commands
```
![installOptions](https://res.cloudinary.com/ddi06hyjw/image/upload/v1583391989/Screenshot_20200305_084449_tjka76.png)

![installOptions](https://res.cloudinary.com/ddi06hyjw/image/upload/v1583391989/Screenshot_20200305_084457_z192sw.png)

## Development <a name = "development"></a>

Run:

```shell
$ git clone https://github.com/Waaiez/vanced-automatic-installer.git && cd vanced-automatic-installer
$ npm link
```

This will setup a symbolic link to the CLI. Any changes in source files will now be reflected when running the `vanced` command.


## License

This project is licensed under [MIT](./LICENSE)