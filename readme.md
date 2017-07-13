# simple-minno-server

This repository serves as a super simple [minnoJS](minnojs.github.io/minno-quest/) server.

## Installing
In order to use this server you need to [setup a php server](#setup-a-server) and copy `study`,`index.html` and `csv.php` into your public_html directory.
You then need to create your study within the study directory.
Importantly the manager file MUST be named `mgr.js`, and 
the `postCsv` [setting](https://minnojs.github.io/minno-quest/0.1/manager/API.html#logger) MUST be set to `csv.php` within the manager file.

The results of the study will be saved into `res`.

## Setup a server
You can create and manage a server in any way that you like, this section will show you one easy way to do that.

There are many services that offer free hosting of php servers, we will follow the creation of a single study on such a server.
We will be using [000webhost.com](https://www.000webhost.com/), but you can use any server that you like.

In your internet browser, go to [000webhost.com](https://www.000webhost.com/), and click **Sign up for free**.
You will then fill a form asking for your email, password and name of the website.
Make sure that you remember your password, you will need it again.

You will now be prompted to set up your server, the instructions are really very good, follow them.
When the time to **Build your website** comes, click **Upload Own Website**.
You should then download `index.html` and `csv.php` from this repository and upload them to your server.
You should then create a `study` folder and copy your files there.

We recomend using [filezilla](https://filezilla-project.org/) as an ftp client.
