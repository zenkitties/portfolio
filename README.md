/* If you have already installed node, ruby, and all of
of the gems and nodes, please skips to step 4 */


/* ==========================================
1. Programs to install
============================================*/

Node.js
Source: https://nodejs.org/

Ruby on Rails
Source: http://rubyonrails.org/ (for MAC)
Source: http://rubyinstaller.org/ (for Windows)



/* ===========================================
2. Installing Gulp and Browserify from node
=============================================*/

/*First we access node command prompt by going to windows search and
typing in 'node' and access the 'node.js command prompt' */

/*bringing that up we will type the command below to make sure we
have an operating version of node on our system by looking up
the version number. */

node --version

/* This will install gulp globally to your system */
npm install -g gulp 

/* This will install browserify globally to your system */
npm install -g browserify


/* ============================================
3. Installing SASS and Compass
==============================================*/

/* Now we'll want to access our ruby command prompt by going into the windows
search and typing in 'ruby' and you should find the 'start command prompt
with ruby */

/*checking to see we have operating version we check version */
ruby --version

/* now we will do a gem update to get all the new ruby gems. */
gem update

/* after ruby updates we will download these two gems */

/*This will install sass */
gem install sass

/*This will install compass */
gem install compass


/* ============================================
4. Installing Dependencies and Getting Your
Project Up and Running.
==============================================*/

/*Now you will open git bash or whatever regular terminal you have (I use commander)
and input the commands in your projects root folder: */

/*These commands are done for every new project*/

/* this initializes node in the project */
npm init

/* this installs all the dependencies */
npm install --save-dev gulp gulp-util gulp-browserify gulp-compass gulp-autoprefixer gulp-connect

/*and finally, you will use the gulp command to get the gulp watcher up and running*/
gulp
