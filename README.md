Tuesday
=======

#### What is it?
It's a quirky CSS Animation Library developed at Shakr.

#### Why 'Tuesday'?
Because at Shakr, Tuesdays are like Mondays.

#### Why did you make Tuesday?
There are many other CSS animation libraries out there, but many of them have motion paths that are too big that stand out too much when used inside certain environments. Also a problem is that some of the effects designed are just a bit too long in duration for UI element transitions. (0.2s and 0.3s is a big difference, if you know what I mean.)

So while we were working on our project, we decided to make our own animation library that fits our needs. Tuesday aims to fill out the gap inbetween, providing a more subtle set of effects that can seamlessly integrate into a wider variety of websites or web-app UI designs.

Tuesday is a stand-alone library you can use without any dependencies, but you can use Tuesday alongside other animation libraries as well. All Tuesday animation names start with `td` prefix so there is a low chance two libraries will collide unless there is another one that uses the same prefix and animation name.

If you're interested, check out the ["Making of" article](http://making.shakr.com/making-tuesday/) in our Making Shakr blog for a more thorough introduction and explanation on how this project came to life.


## How to use
#### The Basic Way
1. Download the release ZIP file or clone the repository.

2. Include the compiled CSS file in the `<head>` of your HTML file.
    ```html
    <head>
      <link rel="stylesheet" type="text/css" href="css/tuesday.min.css" />
    </head>
    ```

    Or alternatively, use a CDN link instead if you don't want to host the file.
    ```html
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/shakrmedia/tuesday@v1.1.0/build/tuesday.min.css" />
    ```


3. Add the class `.animated` and the class name of the animation to the element you want to animate.
    ```html
    <h1 id="header-text" class="animated tdDropInLeft">It's Tuesday.</h1>
    ```

4. Your element will now animate!


#### The Advanced Way (Using LESS source file)
1. Download the release ZIP file or clone the repository.

2. Import the source `tuesday.less` file to your site LESS stylesheet.
    ```less
    @import 'tuesday.less';
    ```

3. Apply the animation classes as mixins on the element rule.
    ```less
    h1#header-text {
        .animated;
        .tdDropInLeft;
    }
    ```

4. Your element will now animate!


#### Controlling & Customizing animations
Since the animations will start the moment after the element is loaded in DOM (or made visible with `display: block`), you'll need to dynamically apply classes through JavaScript if you want to controll when the animations will start.

However, if you just want simple delays as to when the animations will start, you can do it by adding `animation-delay: (n)s` property on the element rule.

Similarly if you need to adjust the duration of the animation, add `animation-duration: (n)s` on the element.


## Custom building
Tuesday uses [Grunt](http://gruntjs.com/) to automate the building process. In case you want to custom-build the CSS file, you can do so by setting up Grunt, heading to the cloned repository path and running `grunt`.

The default grunt task includes [autoprefixer](https://github.com/postcss/autoprefixer) that automatically includes vendor-prefixes for CSS3 draft properties.

In case you want to remove any specific group of animations from the output file to reduce file size, just comment out lines in the main `tuesday.less` before running Grunt, and the compiler will skip through the excluded ones.


## Animation List

All animation names start with the `td` prefix. Naming conventions are based on that of the [Animate.css](http://daneden.github.io/animate.css/): `td`+`Name`+`In/Out`+`Direction/Option`

More animations are to be added. Check out the [demo page](http://shakrmedia.github.io/tuesday/) to test out the animations in action.

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

#### Expand
- tdExpandIn
- tdExpandInBounce
- tdExpandOut
- tdExpandOutBounce

#### Stamp
- tdStampIn
- tdStampInSwing

#### Shrink
- tdShrinkIn
- tdShrinkInBounce
- tdShrinkOut
- tdShrinkOutBounce

#### Swing
- tdSwingIn
- tdSwingOut

#### DropIn
- tdDropInLeft
- tdDropInRight

#### Plop
- tdPlopIn
- tdPlopInDown
- tdFadeInUp

#### HingeFlip
- tdHingeFlipIn
- tdHingeFlipOut


## Browser Compatibility
Tuesday animations are implemented entirely using CSS animations. To see which specific browser versions support CSS animations, please refer to the [Can I Use page](http://caniuse.com/#feat=css-animation).

## Author
- **Hansol Kim** (zvuc) : https://github.com/zvuc/
- with help from the Shakr Dev team


## License
Released under the MIT License.
See [LICENSE](https://github.com/ShakrMedia/tuesday/blob/master/LICENSE) for details.

