# my-github-username

Get the Github username of the logged in user from `~/.gitconfig`.

Not tested on Windows.

## Installation

Get it:

	$ npm install my-github-username

Require it:

	var getUsername = require('my-github-username');

## API

#### `getUsername(cb)`

Callback receives `error`, `username`.