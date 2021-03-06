## Credit Card Comparison        
[![Build Status](https://travis-ci.org/matt-paul/credit-card-comparison.svg?branch=master)](https://travis-ci.org/matt-paul/credit-card-comparison)

Key technologies used: Angular, SASS, Karma, Jasmine, Protractor, Grunt and Travis CI.

### Getting Started

```
git clone https://github.com/matt-paul/credit-card-comparison
cd credit-card-comparison
npm install
grunt
```

Go to localhost:8080 in browser.


## Considerations

This project was based on a brief that is fairly similar to an area of the CTM website.

After learning more about current 'best practices', I have refactored to be
'mobile first', in order to save bandwidth on mobile devices and speed up the user
experience.

Media query breakpoints were set for ipad and desktop computer device widths.

I have tried to keep the naming of my SASS classes consistent and readable
throughout.


### Other Tools
I have used SVGO to minify my inline SVG's, and increase readability, removing
unnecessary information added by Sketch.

Grunt has been used to compile SASS, run tests and start a simple http server.

I used Sketch to export SVG's, prior to minifying them


### Screenshots

![desktop view](/finished%20screenshots/ctm-desktop.png)

![ipad view](/finished%20screenshots/ctm-ipad.png)

![phone-menu-closed](/finished%20screenshots/ctm-phone-menu-closed.png)

![phone-menu-open](/finished%20screenshots/ctm-phone-menu-open.png)

