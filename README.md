Tuesday
=======

#### What is it? 
It's a custom CSS animation library for Shakr.

#### Why 'Tuesday'?
Because it's Tuesday. You may want to ask @hellodeibu for that.

#### How do I use it?
Include a compiled version of the source LESS file inside the `<head>` tag of your html file, or import the css/less file inside your working stylesheet file.

When you're compiling, be sure to post-process it with [autoprefixer](https://github.com/postcss/autoprefixer) to include vendor-prefixes for CSS3 draft properties.

(Note: Compiled CSS file/CDN link will be provided at a later time.)

#### How is this different from / or relate to Animate.css?
Daniel Eden's [Animate.css](http://daneden.github.io/animate.css/) already provides a plentiful collection of animation presets for easy use, but many of them have motion paths that are too big that stand out too much when used inside certain environments. Also a problem is that some of the effects designed are just a bit too long in duration for UI element transitions. (0.2s and 0.3s is a big difference, if you know what I mean.)

Tuesday aims to fill out the gap inbetween, providing a more subtle set of effects, and that looks good even when the animation duration is squashed down to 0.2s or even 0.1s.

You can use Tuesday as an addon to the Animate.css library, but it doesn't have to be if you're only using presets from the Tuesday library. Alone or together, it will work fine in either ways.


## Animation List

All animation names start with `td` prefix. Naming conventions follow that of the [Animate.css](http://daneden.github.io/animate.css/): `td`+`Name`+`In/Out`+`Direction`

More animations are to be added.

#### DropIn
- tdFadeInDown
- tdFadeInLeft
- tdFadeInUp
- tdFadeInRight

#### FadeIn
- tdFadeInDown
- tdFadeInLeft
- tdFadeInUp
- tdFadeInRight

#### FadeOut
- tdFadeOutDown
- tdFadeOutLeft
- tdFadeOutUp
- tdFadeOutRight

#### HingeFlip
- tdHingeFlipIn
- tdHingeFlipOut
