var map = {
  'app': 'js/app',
  'rxjs': 'js/vendor/rxjs',
  '@angular': 'js/vendor/@angular',
  'ng2-bootstrap': 'js/vendor/ng2-bootstrap',
  'moment': 'js/vendor/moment',
  'primeng': 'js/vendor/primeng',
  '@angular/material': 'js/vendor/@angular/material',
  'ng2-bs3-modal': 'js/vendor/ng2-bs3-modal',
  'ng2-file-upload': 'js/vendor/ng2-file-upload',
  'angular2-notifications': 'js/vendor/angular2-notifications',
  'ng2-pagination': 'js/vendor/ng2-pagination/dist',
  'crypto-js': 'js/vendor/crypto-js'
  //'angular2-fontawesome': 'js/vendor/angular2-fontawesome'
};

var packages = {
  'app': { main: 'main.js', defaultExtension: 'js' },
  'rxjs': { defaultExtension: 'js' },
  'ng2-bootstrap': { defaultExtension: 'js' },
  'primeng': { defaultExtension: 'js' },
  '@angular/material': { main: 'material.umd.js', defaultExtension: 'js' },
  'ng2-bs3-modal': { main: 'ng2-bs3-modal.js', defaultExtension: 'js' },
  'ng2-file-upload': { main: 'ng2-file-upload.js', defaultExtension: 'js' },
  'moment': { main: 'moment.js', defaultExtension: 'js' },
  'angular2-notifications': {main: 'components.js', defaultExtension: 'js'},
  'ng2-pagination': { main: 'ng2-pagination.js', defaultExtension: 'js' },
  'crypto-js': { main: 'crypto-js.js', defaultExtension: 'js' }
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