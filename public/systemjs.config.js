var map = {
  'app': 'js/app',
  'rxjs': 'js/vendor/rxjs',
  '@angular': 'js/vendor/@angular',
  'ng2-bootstrap': 'js/vendor/ng2-bootstrap',
  'moment': 'js/vendor/moment/moment.js',
  'primeng': 'js/vendor/primeng',
  '@angular/material': 'js/vendor/@angular/material',
  'ng2-bs3-modal': 'js/vendor/ng2-bs3-modal'
  //'angular2-fontawesome': 'js/vendor/angular2-fontawesome'
};

var packages = {
  'app': { main: 'main.js', defaultExtension: 'js' },
  'rxjs': { defaultExtension: 'js' },
  'ng2-bootstrap': { defaultExtension: 'js' },
  'primeng': { defaultExtension: 'js' },
  '@angular/material': { main: 'material.umd.js', defaultExtension: 'js' },
  'ng2-bs3-modal': { main: 'ng-bs3-modal.js', defaultExtension: 'js' }
  //'angular2-fontawesome': { defaultExtension: 'js' }
};

var packageNames = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/forms',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
  '@angular/testing',
  '@angular/upgrade'
];

packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'bundles/' + pkgName.replace('@angular/', '') + '.umd.js', defaultExtension: 'js' };
});

//packageNames.forEach(function(pkgName) {
 // packages[pkgName] = { main: 'index', defaultExtension: 'js' };
//});

var config = {
  map: map,
  packages: packages
};

System.config(config);