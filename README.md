# jquery.toggleme
## by David Kennedy
## http://daveden.wordpress.com

### Overview

A toggleme is a content area with a title and a body. Clicking on the title toggles the body between hidden and visible states.

The HTML should look something like this:

    <div class="toggleme">
	    <p>Toggle Me!</p>
		<div>
		    Blah blah blah...
		</div>
	</div>

A call to:

    $('.toggleme').toggleme();

will initialize a toggleme instance. By default, the body is hidden and the title is styled as a link.

### Options

icon - Boolean - Default: true
Set whether or not to display an icon next to the title.

Example:

    $(.toggleme).toggleme({ icon: false });

autoOpen - Boolean - Default: false
Set whether or not the body should be hidden.

Example:

    $(.toggleme).toggleme({ autoOpen: true });

linkTitle - Boolean - Default: true
Set whether or not the title should be styled as a link.

Example:

    $(.toggleme).toggleme({ linkTitle: false });

### Methods

open - .toggleme('open', options)
Makes the toggleme visible.

Options:

    animate - Boolean - Default: true
    Set whether or not the body should animate.

Example:

    $(.toggleme).toggleme('open', { animate: false });

close - .toggleme('close', options)
Makes the toggleme hidden.

Options:

    animate - Boolean - Default: true
    Set whether or not the body should animate.

Example:

    $(.toggleme).toggleme('close', { animate: false });