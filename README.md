# Koji-Makiyama.github.io (my Angular resume)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Self-Documented Instructions For Deploying this Angular app to ghpages
(from github.com go to delete branch gh-pages) // delete remote gh-pages branch
git branch -d gh-pages                         // delete local gh-pages branch

git branch gh-pages                            // create local gh-pages branch
git checkout gh-pages                          // move to that new local branch
git push origin gh-pages                       // push or connect your local branch to a new remote one in your repository
// will only display readme at this point, until next line is executed (ng deploy)
// ng add angular-cli-ghpages    (only had to do this the first time)
ng deploy --base-href=https://koji-makiyama.github.io/     // deploy code to Github Pages Cloud

(from github.com go to repo -> settings -> pages, set dropdown to gh-pages -> /root)