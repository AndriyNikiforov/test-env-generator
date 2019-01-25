<a name="Zip"></a>

## Zip
**Kind**: global class

- [Zip](#zip)
  - [zip.exectArch(pathArch, pathToExt)](#zipexectarchpatharch-pathtoext)
  - [zip.makeArch(name)](#zipmakearchname)
- [GitApi](#gitapi)
  - [gitApi.cloneSkeleton(address)](#gitapicloneskeletonaddress)
- [Cli](#cli)
  - [cli.showLogo()](#clishowlogo)
  - [cli.help()](#clihelp)
  - [cli.gitVersion()](#cligitversion)

<a name="Zip+exectArch"></a>

### zip.exectArch(pathArch, pathToExt)
Execute zip archive

**Kind**: instance method of [<code>Zip</code>](#Zip)

| Param | Type |
| --- | --- |
| pathArch | <code>String</code> |
| pathToExt | <code>String</code> |

<a name="Zip+makeArch"></a>

### zip.makeArch(name)
Make zip archive

**Kind**: instance method of [<code>Zip</code>](#Zip)

| Param | Type |
| --- | --- |
| name | <code>String</code> |


<a name="GitApi"></a>

## GitApi
**Kind**: global class
<a name="GitApi+cloneSkeleton"></a>

### gitApi.cloneSkeleton(address)
Clone repository and make zip archive

**Kind**: instance method of [<code>GitApi</code>](#GitApi)

| Param | Type |
| --- | --- |
| address | <code>String</code> |

<a name="Cli"></a>

## Cli
**Kind**: global class

* [Cli](#Cli)
    * [.showLogo()](#Cli+showLogo)
    * [.help()](#Cli+help)
    * [.gitVersion()](#Cli+gitVersion)

<a name="Cli+showLogo"></a>

### cli.showLogo()
Show logo

**Kind**: instance method of [<code>Cli</code>](#Cli)
<a name="Cli+help"></a>

### cli.help()
Show help block

**Kind**: instance method of [<code>Cli</code>](#Cli)
<a name="Cli+gitVersion"></a>

### cli.gitVersion()
Show information about commands for generate git version skeleton

**Kind**: instance method of [<code>Cli</code>](#Cli)
