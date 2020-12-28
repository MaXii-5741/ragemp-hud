1. move the folder "hud" to "client_packages" folder.
2. add line in index.js in the "client_packages" folder with "require("/hud/script.js");".

If you are using some client packages - don't override your "index.js" file in "client_packages" folder. Just add this line in "index.js":
	JavaScript
require("/speedometer/script.js");