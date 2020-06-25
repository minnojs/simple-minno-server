# simple-minno-server

This repository serves as a super simple [minnoJS](https://minnojs.github.io/minno-quest/) server.
It will allow you to go have a Minnojs experiment up and running in no time. If you are unfamiliar with minnoJS, spend some time with the [documentation](https://minnojs.github.io/), and then have a look at the example studies that come with the server installation. You will probably want to copy one of the example studies and modify them to create your own study.

Who is likely to be able to use this technology? Any person ready for an intermediate level technological challenge. If you have any programming experience, or if you know how to setup servers, then it is certain that you will be able to use our server. If you do not have any programming experience and no experience with servers whatsoever, then our tools are probably easy enough to serve as your first experience. However, expect some challenges along the way. First, try to get to the point that you successfully run one of the example experiments on your own server. Look at the saved data and make sure you understand the format. Then, duplicate and modify one of the example experiments to create your own experiment. 

Once you have the server running you will be able to run a full MinnoJS study and save all the data as csv files.

## Installing
In order to use this server you need to [setup a php server](#setup-a-server) and copy `index.html` and `csv.php` and `results` into your public directory.
You then need to give your server write access to `results`.
This can usually be done from the web interface or your ftp client (if you don't know what an ftp client is, just use the web interface).
The easiest way to provide write access to `results` is to change the permissions to allow anyone to write to the `results` directory like so: `chmod 777 results`.
However, this solution is **NOT** secure.
Therefore, it is recommended that you set the ownership of `results` to the apache user. 
How? This can usually be done by running the command `sudo chown www-data:www-data results` 
(www-data is apache's most common user group, some installation will use a different group and the command must be updated accordingly).

If you want more than one study on your server, you can copy these files into multiple directories, and each will function as an independent study.

Creating your study is simply a matter of creating a `study` directory and uploading your files into it.
Importantly the manager file MUST be named `mgr.js`. 
You should NOT set the url in the logger settings of any of your tasks (in the study code) to avoid duplicate posting.

When setting up your task, add the following code to `mgr.js`.
It tells MinnoJS to keep the data as CSV.

```javascript
API.addSettings('logger',{type:'csv', url:'csv.php'});
```

At the point in the sequence in which you want to post all of the study data to the server (for recording), add the following task to your manager sequence (in `mgr.js`).

```javascript
{
    type:'postCsv',
}
```

You can see an [example study](study) in this repository.
You can use it as a template for your own studies.

The results of the study will be saved into the `results` directory.
The results for each user will be saved into a csv file named according to their ID (the file names should look something like `7ae528f2a86c448a888fb7e4dfbb6d2c11158d97.csv`).
You can download them using your server's interface or using [ftp](https://en.wikipedia.org/wiki/File_Transfer_Protocol).
Web access to the results folder is denied in order to keep the privacy of the participants.

The results files are encoded as [UTF-8](https://en.wikipedia.org/wiki/UTF-8).
As such, it is capable of saving virtually any language that you choose.
If you are saving any special characters (read - non English), make sure you that you view your data with a tool capable of reading UTF-8.
In particular, MS-Excel reads csv as [ANSI](https://en.wikipedia.org/wiki/Windows-1252) by default.
In order to open a csv file as UTF-8 in excel you may follow [this](https://www.itg.ias.edu/content/how-import-csv-file-uses-utf-8-character-encoding-0) guide.

The file structure you are aiming for is like so:

```
.
├── csv.php
├── index.html
├── results
│   └── .htaccess
└── study
    ├── mgr.js
    ├── time.js
    └── quest.js
```

A more complex example for a study can be found in the [study.race](study.race) folder.
This is a minimal replciation of the [Project Implicit](https://implicit.harvard.edu/) Race IAT.
If you want to run it, you should change the folder name from `study.race` to plain `study`.

## Setup a server
There are many ways to setup a php server.
If you don't know how to set one up yourself, you can ask your IT person to set one up for you.
Alternatively, there are many sites that offer php hosting for a fee or even for [free](https://www.google.co.il/search?q=free+php+hosting).
For example you might want to try [000webhost.com](https://000webhost.com) or [x10hosting.com](https://x10hosting.com).
Hosting services will usually guide you through the process of setting up your server, and give you tools for managing your files.

For local testing you may want to use [WAMP](https://www.wampserver.com) for Windows or [MAMP](https://www.mamp.info) for macs.

Once you have a server set up, managing it consists primarily of copying files around...
