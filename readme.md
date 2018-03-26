# simple-minno-server

This repository serves as a super simple [minnoJS](https://minnojs.github.io/minno-quest/) server.
It will allow you to go have a Minnojs experiment up and running in no time.

## Installing
In order to use this server you need to [setup a php server](#setup-a-server) and copy `index.html`, `csv.php` and `results` into your root directory (usually public_html).
If you want more than one study on your server, you can copy these files into multiple directories, and each will function as an independent study.

Creating your study is simply a matter of creating a `study` directory and uploading your files into it.
Importantly the manager file MUST be named `mgr.js`. 
You should NOT set the url in the logger settings of any of your tasks to avoid duplicate posting.
At the point that you want to post all of your data, add the following task to your manager sequence (in `mgr.js`).

```javascript
{
    type:'postCsv',
    url:'csv.php'
}
```

You can see an [example study](study) in this repository.

The results of the study will be saved into the `results` directory.
The results for each user will be saved into a csv file named according to their ID (the file names should look something like `7ae528f2a86c448a888fb7e4dfbb6d2c11158d97.csv`).
You can download them using your server's interface or using [ftp](https://en.wikipedia.org/wiki/File_Transfer_Protocol).
Web access to the results folder is denied in order to keep the privacy of the participants.

The file structure you are aiming for is like so:

```
.
├── csv.php
├── index.html
├── results
│   └── .htaccess
└── study
    ├── mgr.js
    ├── pip.js
    └── quest.js
```

## Setup a server
There are many ways to setup a php server.
If you don't know how to set one up yourself, you can ask your IT guy to set one up for you.
Alternatively, there are many sites that offer php hosting for a fee or even for [free](https://www.google.co.il/search?q=free+php+hosting).
For example you might want to try [000webhost.com](https://000webhost.com) or [x10hosting.com](https://x10hosting.com).
Hosting services will usually guide you through the process of setting up your server, and give you tools for managing your files.

For local testing you may want to use [WAMP](https://www.wampserver.com) for Windows or [MAMP](https://www.mamp.info) for macs.

Once you have a server set up, managing it consists primarily of copying files around...
