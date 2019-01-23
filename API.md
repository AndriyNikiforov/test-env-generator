<a name="GitApi"></a>

## GitApi
**Kind**: global class

- [GitApi](#gitapi)
  - [gitApi.appiumUpdate()](#gitapiappiumupdate)
  - [gitApi.seleniumUpdate()](#gitapiseleniumupdate)
  - [gitApi.webdriverIO()](#gitapiwebdriverio)
- [Cli](#cli)
  - [cli.logo()](#clilogo)
  - [cli.success()](#clisuccess)
  - [cli.help()](#clihelp)
  - [cli.gitVersion()](#cligitversion)
- [Helper](#helper)
  - [helper.exectArch(pathArch, pathToExt)](#helperexectarchpatharch-pathtoext)
  - [helper.makeArch(name)](#helpermakearchname)

<a name="GitApi+appiumUpdate"></a>

### gitApi.appiumUpdate()
Clone from git appium skeleton and making zip archive

**Kind**: instance method of [<code>GitApi</code>](#GitApi)
<a name="GitApi+seleniumUpdate"></a>

### gitApi.seleniumUpdate()
Clone from git selenium skeleton and making zip archive

**Kind**: instance method of [<code>GitApi</code>](#GitApi)
<a name="GitApi+webdriverIO"></a>

### gitApi.webdriverIO()
Clone from git webdriver.io skeleton and making zip archive

**Kind**: instance method of [<code>GitApi</code>](#GitApi)

<a name="Cli"></a>

## Cli
**Kind**: global class

* [Cli](#Cli)
    * [.logo()](#Cli+logo)
    * [.success()](#Cli+success)
    * [.help()](#Cli+help)
    * [.gitVersion()](#Cli+gitVersion)

<a name="Cli+logo"></a>

### cli.logo()
Show logo

**Kind**: instance method of [<code>Cli</code>](#Cli)
<a name="Cli+success"></a>

### cli.success()
Show success message

**Kind**: instance method of [<code>Cli</code>](#Cli)
<a name="Cli+help"></a>

### cli.help()
Show help block

**Kind**: instance method of [<code>Cli</code>](#Cli)
<a name="Cli+gitVersion"></a>

### cli.gitVersion()
Show information about commands for generate git version skeleton

**Kind**: instance method of [<code>Cli</code>](#Cli)

<a name="Helper"></a>

## Helper
**Kind**: global class

* [Helper](#Helper)
    * [.exectArch(pathArch, pathToExt)](#Helper+exectArch)
    * [.makeArch(name)](#Helper+makeArch)

<a name="Helper+exectArch"></a>

### helper.exectArch(pathArch, pathToExt)
Execute zip archive

**Kind**: instance method of [<code>Helper</code>](#Helper)

| Param | Type |
| --- | --- |
| pathArch | <code>String</code> |
| pathToExt | <code>String</code> |

<a name="Helper+makeArch"></a>

### helper.makeArch(name)
Make zip archive

**Kind**: instance method of [<code>Helper</code>](#Helper)

| Param | Type |
| --- | --- |
| name | <code>String</code> |

