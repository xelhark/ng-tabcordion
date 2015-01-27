# ng-tabcordion



## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/xelhark/jquery-ng-tabcordion/master/dist/angular-ng-tabcordion.min.js
[max]: https://raw.github.com/xelhark/jquery-ng-tabcordion/master/dist/angular-ng-tabcordion.js

In your web page:

```html
<script src="angular.js"></script>
<script src="dist/ng-tabcordion.min.js"></script>
```

Currently I am only including the .scss version of the stylesheet, which is required to make it work. You will have
to manually import this file into your scss main file, like this:

```scss
@import "ng-tabcordion/dist/style.scss";
```

*note* some scaffolding tools like yeoman will automatically
detect the scss file and import it into your main scss file.

Also, remember to add this module as a dependency to your app

```
'xelhark.ngTabcordion'
```

## Documentation

This package will create an animated tabbed menu that will automatically resize with a nice CSS3 animation when 
changing its content. I honestly just did this for a project of mine, but I might add more stuff and animations
if this gets any views.

The animations are all done in CSS, which makes the app overall very lightweight, 
but not compatible with older browsers.

The current properties are:

```
showCloseButton: true / false
```

If true, will automatically ad a close button at the top of the panel. The close button will have this code:

```
contentAbove: true / false
```

If true, the content will be above the menu, otherwise the content will be below the menu.

## Examples

```
<tab-cordion show-close-button="true">
    <tab-cordion-pane title="Hello">
        <p>Hello, I am some content</p>
    </tab-cordion-pane>
    <tab-cordion-pane title="World">
        <p style="height: 300px">World, I am so tall!</p>
    </tab-cordion-pane>
</tab-cordion>
```

This will just display a simple accordion with a close button.
In case you want to write your own close button, you can disable the default one and just use something like

```
<a ng-click='$parent.close()'>My own close button</a>
```

