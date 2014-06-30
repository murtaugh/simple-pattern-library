A Simple Pattern Library
========

Pattern and snippet libraries are becoming a valuable part of the front-end development process. For larger projects with many participants, it's useful to build large frameworks that require pre-processing and server-side languages, but I often find them to be overkill for my needs.

Hence: A Simple Pattern Library.

I've been using this not just to house already-built components, but as a development tool.

## Some Cool Stuff

1. Fully front end. (Pre-processor and server-side laguage free.)
2. jQuery is used to enhance the page (auto-generating the nav and code snippets, alowing you to author just once), but the page works just fine without JS.
3. Smooth-scrolling anchor links; auto-highlighting nav elements.

## Some Shortcomings

1. It's fluid, but not responsive yet.
2. The nav, when overflowing, does not auto-scroll to the selected item.
3. Item titles aren't links yet, allowing for quick discovery of anchors.
4. My use of `history.pushState` really clogs up the browser history when scrolling; should probably find a better solution.