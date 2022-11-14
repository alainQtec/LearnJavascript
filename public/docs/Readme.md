# **docs**

> This project uses JS algorithms from [the-algorithms.com](https://the-algorithms.com/language/javascript).

## Issues (and common fixes)

When you start the app after it has previously crashed, you may receive [Error `EADDRINUSE`](https://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server)
or when `npm start` failed. ie:

> EADDRINUSE, Address already in use

To fix this (On Windows):

```PowerShell
. \public\otherScripts\Resolve-EADDRINUSE.ps1
```

## How was the project stated/Was Build:

Followed this [frameworkless-web-app](https://www.sitepoint.com/build-frameworkless-web-app-modern-javascript-web-components/) tutorial; Then It grows from there.
