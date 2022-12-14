// Dom7
var $ = Dom7;

// Theme
var theme = 'md';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
	view: {
		pushState :true,
		stackPages: true,
	},
  // Extended by Dialog component:
   dialog: {
     title: 'Library',
   },
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});







// Create Popup with swipe to close
var swipeToClosePopup = app.popup.create({
  el: '.sample',
  swipeToClose: true,
});

// Create Popup with swipe to close
var swipeToClosePopup = app.popup.create({
  el: '.daftar',
  swipeToClose: true,
});

// Create Popup with swipe to close
var swipeToClosePopup = app.popup.create({
  el: '.lupapwd',
  swipeToClose: true,
});
