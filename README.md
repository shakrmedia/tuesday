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

#### How is this different from other CSS animation libraries?
There are many other CSS animation libraries out there, but many of them have motion paths that are too big that stand out too much when used inside certain environments. Also a problem is that some of the effects designed are just a bit too long in duration for UI element transitions. (0.2s and 0.3s is a big difference, if you know what I mean.)

Tuesday aims to fill out the gap inbetween, providing a more subtle set of effects that can seamlessly integrate into a wider variety of website or web-app UI design.

Tuesday is an stand-alone library you can use without any dependencies, but you can use Tuesday alongside other animation libraries as well. All Tuesday animation names start with `td` prefix so there is a low chance two libraries will collide unless there is another one that uses the same prefix and animation name. 


## Animation List

All animation names start with `td` prefix. Naming conventions are based on that of the [Animate.css](http://daneden.github.io/animate.css/): `td`+`Name`+`In/Out`+`Direction/Option`

More animations are to be added.

#### FadeIn
- tdFadeIn
- tdFadeInDown
- tdFadeInLeft
- tdFadeInUp
- tdFadeInRight

#### FadeOut
- tdFadeOut
- tdFadeOutDown
- tdFadeOutLeft
- tdFadeOutUp
- tdFadeOutRight

#### Zoom
- tdZoomIn
- tdZoomInBounce
- tdZoomOut
- tdZoomOutBounce

#### Swing
- tdSwingIn
- tdSwingOut

#### DropIn
- tdFadeInDown
- tdFadeInLeft
- tdFadeInUp
- tdFadeInRight

#### HingeFlip
- tdHingeFlipIn
- tdHingeFlipOut
