- Node Bootstrap -

A Meteor-like framework for bootstrapping full stack JS applications.

-- Getting Started --

Clone this repository to a folder on your computer using Git, then navigate to your folder on
the command line and issue:

<code>npm install --global .</code>

If you are a Linux or Mac user, you may need to:

<code>sudo npm install --global .</code>

-- Usage --

After installing the Node Bootstrap framework, you should be able to copy the starter files to a new
folder whenever you want to create a new app. Then, you can use the command-line tool to perform
various, Meteor-like operations on your project:

* add
<code>nobs add [package1 package2 package3 etc...]</code>

This command will install the specified npm packages in your project. You can then import said packages
into any Javascript file using require.

* remove
<code>nobs remove [package1 package2 package3 etc...]</code>

This command removes the specified packages from your project.

Ex.

<code>nobs remove jquery lodash</code>

Removes jquery and lodash as project dependencies. They will no longer be available for use by your
Javascript files.

* build
<code>nobs build</code>

Transpiles your ES6 code to ES5 using Babel, runs it through ESLint to ensure that you are following
the AirBnB Javascript style-guide (this is the default coding style for Meteor), minifies your
Javascript, concatenates and minifies your front-end JS (including dependent libraries), and runs all the
jasmine tests in the test folder.

* test
<code>nobs test</code>

Currently same as above. Compiles your Javascript and then runs your unit tests. Tests in the tests/client
folder will be executed using PhantomJS, a headless web browser designed to support front-end testing from
the command line. Tests in the tests/server folder can be executed against an instance of a running Node
server; see tests/node/raw-chat.spec.js for an example.

* run
<code>nobs run</code>

This command will spin up a node server and launch the app in your OS' default browser. Any time you
make changes, they will be picked up automatically and sent to the browser, tests will re-run, and the
Javascript will be re-linted.

* debug
<code>nobs debug</code>

Similar to the "run" command, but makes the Node Inspector available on port 5858.
