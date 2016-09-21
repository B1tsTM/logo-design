# Angular2 Fontawesome (Beta) [![Circle CI](https://circleci.com/gh/travelist/angular2-fontawesome.svg?style=svg&circle-token=b67cb26ecb809e7ba182ac4d2e222707a34ddddd)](https://circleci.com/gh/travelist/angular2-fontawesome)
Angular2 components for Fontawesome


## Installation

In `package.json`, insert a following line in the `dependencies`:

```
"angular2-fontawesome": "^0.5.0"
```

We can import this library with SystemJS (`systemjs.config.js`):
```javascript
// This example is following to Angular2 Quick Start Documentation
// Reference: https://angular.io/docs/ts/latest/quickstart.html

var map = {
  'app':                        'app',
  '@angular':                   'node_modules/@angular',
  'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
  'rxjs':                       'node_modules/rxjs'
  // Add this line (1)
  'angular2-fontawesome':       'node_modules/angular2-fontawesome',
};

var packages = {
  'app':                        { main: 'main.js',  defaultExtension: 'js' },
  'rxjs':                       { defaultExtension: 'js' },
  'angular2-in-memory-web-api': { defaultExtension: 'js' },
  // Add this line (2)
  'angular2-fontawesome':       { defaultExtension: 'js' },
};

```

*TODO* Need to write webpack installation doc.


## Usage

1. Add [Fontawesome]((http://fortawesome.github.io/Font-Awesome/get-started/)) to your application.

2. In the decorators, use `directives`  (Angular2 QuickStart for example):

```javascript
import { FaComponent } from 'angular2-fontawesome/components';

@Component({
  selector: 'my-app',
  template: '<fa [name]="\'rocket\'" [border]=true></fa>',
  directives: [FaComponent],
})
export class AppComponent {}
```

We can also use `FaDirective` if we want.

```javascript
import { FaDirective } from 'angular2-fontawesome/directives';

@Component({
  selector: 'my-app',
  template: '<i [name]="\'rocket\'" [border]=true></i>',
  directives: [FaDirective],
})
export class AppComponent {}
```

*Note* **FaStackDirective** is going to be supported

## Parameters

```html
<!-- Component -->
<fa [name]=string      // name of fontawesome icon
    [size]=number      // [1-5]
    [flip]=string      // [horizontal|vertical]
    [pull]=string      // [right|left]
    [rotate]=number    // [90|180|270]
    [border]=boolean   // [true|false]
    [spin]=boolean     // [true|false]
    [fw]=boolean       // [true|false]
    [inverse]=boolean  // [true|false]
    ></fa>

<!-- Directive -->
<i fa [name]=string      // name of fontawesome icon
      [size]=number      // [1-5]
      [flip]=string      // [horizontal|vertical]
      [pull]=string      // [right|left]
      [rotate]=number    // [90|180|270]
      [border]=boolean   // [true|false]
      [spin]=boolean     // [true|false]
      [fw]=boolean       // [true|false]
      [inverse]=boolean  // [true|false]
      ></fa>
```

### name

```html
<fa [name]="'rocket'"></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket"></i>
</fa>

<i fa [name]="rocket"></fa>
<!-- rendered -->
<i fa class="fa fa-rocket"></i>
```

### size

```html
<fa [name]="'rocket'" [size]=1></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-lg"></i>
</fa>

<i fa [name]="rocket" [size]=1></i>
<!-- rendered -->
<i fa class="fa fa-rocket fa-lg"></i>
```

### flip

```html
<fa [name]="'rocket'" [flip]="'horizontal'"></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-flip-horizontal"></i>
</fa>

<i fa [name]="rocket" [flip]="'horizontal'"></i>
<!-- rendered -->
<i fa class="fa fa-rocket fa-flip-horizontal"></i>
```

### pull

```html
<fa [name]="'rocket'" [pull]="'right'"></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-pull-right"></i>
</fa>

<i fa [name]="rocket" [pull]="'right'"></i>
<!-- rendered -->
<i class="fa fa-rocket fa-pull-right"></i>
```

### rotate

```html
<fa [name]="'rocket'" [rotate]=90></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-rotate-90"></i>
</fa>

<i fa [name]="'rocket'" [rotate]=90></i>
<!-- rendered -->
<i class="fa fa-rocket fa-rotate-90"></i>
```

### border

```html
<fa [name]="'rocket'" [border]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-border"></i>
</fa>

<i fa [name]="'rocket'" [border]=true></i>
<!-- rendered -->
<i fa class="fa fa-rocket fa-border"></i>
```

### spin

```html
<fa [name]="'rocket'" [span]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-span"></i>
</fa>

<i fa [name]="'rocket'" [span]=true></i>
<!-- rendered -->
<i class="fa fa-rocket fa-span"></i>
```

### fw

```html
<fa [name]="'rocket'" [fw]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-fw"></i>
</fa>

<i fa [name]="'rocket'" [fw]=true></i>
<!-- rendered -->
<i class="fa fa-rocket fa-fw"></i>
```

### inverse

```html
<fa [name]="'rocket'" [inverse]=true></fa>
<!-- rendered -->
<fa>
  <i class="fa fa-rocket fa-inverse"></i>
</fa>

<i fa [name]="'rocket'" [inverse]=true></i>
<!-- rendered -->
<i class="fa fa-rocket fa-inverse"></i>
```

## TODO

- [ ] Support for `fa-stack`
- [ ] Support for `fa-li` and `fa-ul`
- [ ] **FaStackDirective**
- [ ] Test codes
  - After the Angular2 guideline for test code is published

## License

(MIT License) - Copyright (c) 2016 Komei Shimamura
