<a name="GitApi"></a>

## GitApi
**Kind**: global class

- [GitApi](#gitapi)
  - [gitApi.appiumUpdate(path)](#gitapiappiumupdatepath)
  - [gitApi.seleniumUpdate(path)](#gitapiseleniumupdatepath)
  - [gitApi.webdriverIO(path)](#gitapiwebdriveriopath)
- [Functions](#functions)
- [logo()](#logo)
- [version()](#version)
- [success()](#success)
- [help()](#help)
- [gitVersion()](#gitversion)
- [Helper](#helper)
  - [helper.checkFolder(path)](#helpercheckfolderpath)
  - [helper.exectArch(pathArch, pathToExt)](#helperexectarchpatharch-pathtoext)
  - [helper.makeArch(path, name)](#helpermakearchpath-name)

<a name="GitApi+appiumUpdate"></a>

### gitApi.appiumUpdate(path)
Clone from git appium skeleton and making zip archive

**Kind**: instance method of [<code>GitApi</code>](#GitApi)

| Param | Type |
| --- | --- |
| path | <code>String</code> |

<a name="GitApi+seleniumUpdate"></a>

### gitApi.seleniumUpdate(path)
Clone from git selenium skeleton and making zip archive

**Kind**: instance method of [<code>GitApi</code>](#GitApi)

| Param | Type |
| --- | --- |
| path | <code>String</code> |

<a name="GitApi+webdriverIO"></a>

### gitApi.webdriverIO(path)
Clone from git webdriver.io skeleton and making zip archive

**Kind**: instance method of [<code>GitApi</code>](#GitApi)

| Param | Type |
| --- | --- |
| path | <code>String</code> |

## Functions

<dl>
<dt><a href="#logo">logo()</a></dt>
<dd><p>Show logo</p>
</dd>
<dt><a href="#version">version()</a></dt>
<dd><p>Show version</p>
</dd>
<dt><a href="#success">success()</a></dt>
<dd><p>Show success message</p>
</dd>
<dt><a href="#help">help()</a></dt>
<dd><p>Show help block</p>
</dd>
<dt><a href="#gitVersion">gitVersion()</a></dt>
<dd><p>Show information about commands for generate git version skeleton</p>
</dd>
</dl>

<a name="logo"></a>

## logo()
Show logo

**Kind**: global function
<a name="version"></a>

## version()
Show version

**Kind**: global function
<a name="success"></a>

## success()
Show success message

**Kind**: global function
<a name="help"></a>

## help()
Show help block

**Kind**: global function
<a name="gitVersion"></a>

## gitVersion()
Show information about commands for generate git version skeleton

**Kind**: global function

<a name="Helper"></a>

## Helper
**Kind**: global class

* [Helper](#Helper)
    * [.checkFolder(path)](#Helper+checkFolder)
    * [.exectArch(pathArch, pathToExt)](#Helper+exectArch)
    * [.makeArch(path, name)](#Helper+makeArch)

<a name="Helper+checkFolder"></a>

### helper.checkFolder(path)
Check folder exist

**Kind**: instance method of [<code>Helper</code>](#Helper)

| Param | Type |
| --- | --- |
| path | <code>String</code> |

<a name="Helper+exectArch"></a>

### helper.exectArch(pathArch, pathToExt)
Execute zip archive

**Kind**: instance method of [<code>Helper</code>](#Helper)

| Param | Type |
| --- | --- |
| pathArch | <code>String</code> |
| pathToExt | <code>String</code> |

<a name="Helper+makeArch"></a>

### helper.makeArch(path, name)
Make zip archive

**Kind**: instance method of [<code>Helper</code>](#Helper)

| Param | Type |
| --- | --- |
| path | <code>String</code> |
| name | <code>String</code> |
