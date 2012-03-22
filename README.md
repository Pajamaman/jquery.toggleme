# jquery.toggleme
## by David Kennedy
## http://daveden.wordpress.com

### Overview

A toggleme is a content area with a title and a body. Clicking on the title toggles the body between hidden and visible states.

The HTML should look something like this:

    <div class="someclass">
	    <p>Toggle Me!</p>
		<div>
		    Blah blah blah...
		</div>
	</div>

A call to:

    $('.someclass').toggleme();

will initialize a toggleme instance. By default, the body is hidden and the title is wrapped in an <a> tag.

### Options

#### icon - Boolean - Default: true
Set whether or not to display an icon next to the title.

Example:

    $('.someclass').toggleme({ icon: false });

#### autoOpen - Boolean - Default: false
Set whether or not the body should be hidden.

Example:

    $('.someclass').toggleme({ autoOpen: true });

#### linkTitle - Boolean - Default: true
Set whether or not the title should be wrapped in an anchor tag.

Example:

    $('.someclass').toggleme({ linkTitle: false });

#### preventDefault - Boolean - Default: false
Set whether or not clicking on the title toggles the body between hidden and visible states.

Example:

    $('.someclass').toggleme({ preventDefault: true });

### Methods

#### open - .toggleme('open', options)
Makes the toggleme visible.

Options:

    animate - Boolean - Default: true
    Set whether or not the body should animate.

Example:

    $('.someclass').toggleme('open', { animate: false });

#### close - .toggleme('close', options)
Makes the toggleme hidden.

Options:

    animate - Boolean - Default: true
    Set whether or not the body should animate.

Example:

    $('.someclass').toggleme('close', { animate: false });