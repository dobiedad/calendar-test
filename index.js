var hyperdom = require('hyperdom');
var h = hyperdom.html;
var npmCalendar= require('hyperdom-calendar');
var localCalendar= require('./local-hyperdom-calendar');

var model = {localCalendar:{},npmCalendar:{}};

function render(model) {
  return h('div',
    h('div',
      h('h1','NPM'),
      renderNpmCalendar(model)
    ),
    h('div',
      h('h1','Local'),
      renderLocalCalendar(model)
    )
  )
}

function renderNpmCalendar() {
  return npmCalendar(model.npmCalendar)
}

function renderLocalCalendar() {
  return localCalendar(model.localCalendar)
}

hyperdom.append(document.body, render, model);
