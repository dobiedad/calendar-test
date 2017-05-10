var hyperdom = require('hyperdom');
var h = hyperdom.html;
var npmCalendar= require('hyperdom-calendar');
var localCalendar= require('./local-hyperdom-calendar');

var model = {localCalendar:{},localCalendar2:{},npmCalendar:{}};

function render(model) {
  return h('div',
    h('div',
      h('h1','NPM'),
      npmCalendar(model.npmCalendar)
    ),
    h('div',
      h('h1','Local'),
      localCalendar(model.localCalendar)
    ),
    h('div',
      h('h1','Local 2'),
      localCalendar(model.localCalendar2)
    )
  )
}

hyperdom.append(document.body, render, model);
