var Grommet =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var Grommet = {
	  // Components
	  App: __webpack_require__(1),
	  CheckBox: __webpack_require__(2),
	  Document: __webpack_require__(3),
	  Donut: __webpack_require__(4),
	  Footer: __webpack_require__(5),
	  Form: __webpack_require__(6),
	  FormField: __webpack_require__(7),
	  Header: __webpack_require__(8),
	  Label: __webpack_require__(9),
	  Login: __webpack_require__(10),
	  LoginForm: __webpack_require__(11),
	  Menu: __webpack_require__(12),
	  Meter: __webpack_require__(13),
	  Panel: __webpack_require__(14),
	  RadioButton: __webpack_require__(15),
	  Search: __webpack_require__(16),
	  SearchInput: __webpack_require__(17),
	  Section: __webpack_require__(18),
	  Table: __webpack_require__(19),
	  Tiles: __webpack_require__(20),
	  Tile: __webpack_require__(21),
	  Title: __webpack_require__(22),
	  Object: __webpack_require__(23),
	  TBD: __webpack_require__(24),
	  Icons: {
	    Clear: __webpack_require__(25),
	    DragHandle: __webpack_require__(26),
	    Edit: __webpack_require__(27),
	    Filter: __webpack_require__(28),
	    Help: __webpack_require__(29),
	    More: __webpack_require__(30),
	    Next: __webpack_require__(31),
	    Previous: __webpack_require__(32),
	    Search: __webpack_require__(33),
	    SearchPlus: __webpack_require__(34),
	    Spinning: __webpack_require__(35),
	    Status: __webpack_require__(36)
	  },
	  // Mixins
	  Mixins: {
	    KeyboardAccelerators: __webpack_require__(37),
	    ReactLayeredComponent: __webpack_require__(38)
	  },
	  // Actions
	  Actions: __webpack_require__(39),
	  // Stores
	  SessionStore: __webpack_require__(40),
	  // Utils
	  Rest: __webpack_require__(41)
	};

	module.exports = Grommet;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var App = React.createClass({displayName: "App",

	  propTypes: {
	    centered: React.PropTypes.bool
	  },

	  getDefaultProps: function () {
	    return {centered: true};
	  },

	  render: function() {
	    var classes = ["app"];
	    if (this.props.centered) {
	      classes.push("app--centered");
	    }
	    if (this.props.inline) {
	      classes.push("app--inline");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }
	    return (
	      React.createElement("div", {className: classes.join(' ')}, 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = App;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var CheckBox = React.createClass({displayName: "CheckBox",

	  propTypes: {
	    checked: React.PropTypes.bool,
	    defaultChecked: React.PropTypes.bool,
	    id: React.PropTypes.string.isRequired,
	    label: React.PropTypes.string.isRequired,
	    name: React.PropTypes.string,
	    onChange: React.PropTypes.func
	  },

	  render: function () {
	    var classes = ["check-box"];
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }
	    return (
	      React.createElement("span", {className: classes.join(' ')}, 
	        React.createElement("input", {className: "check-box__input", 
	          id: this.props.id, name: this.props.name, type: "checkbox", 
	          checked: this.props.checked, 
	          defaultChecked: this.props.defaultChecked, 
	          onChange: this.props.onChange}), 
	        React.createElement("label", {className: "check-box__label checkbox", htmlFor: this.props.id}, 
	          this.props.label
	        )
	      )
	    );
	  }

	});

	module.exports = CheckBox;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.
	var React = __webpack_require__(42);

	var GrommetDocument = React.createClass({displayName: "GrommetDocument",

	  propTypes: {
	    colorIndex: React.PropTypes.string
	  },

	  render: function() {
	    var classes = ["document"];
	    if (this.props.colorIndex) {
	      classes.push("header-color-index-" + this.props.colorIndex);
	    }

	    return (
	      React.createElement("div", {ref: "document", className: classes.join(' ')}, 
	        React.createElement("div", {className: "document__content"}, 
	          this.props.children
	        )
	      )
	    );
	  }
	});

	module.exports = GrommetDocument;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var BASE_SIZE = 192;

	function polarToCartesian (centerX, centerY, radius, angleInDegrees) {
	  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
	  return {
	    x: centerX + (radius * Math.cos(angleInRadians)),
	    y: centerY + (radius * Math.sin(angleInRadians))
	  };
	}

	function describeArc (x, y, radius, startAngle, endAngle) {
	  var start = polarToCartesian(x, y, radius, endAngle);
	  var end = polarToCartesian(x, y, radius, startAngle);
	  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
	  var d = [
	      "M", start.x, start.y,
	      "A", radius, radius, 0, arcSweep, 0, end.x, end.y
	  ].join(" ");
	  return d;
	}

	var Donut = React.createClass({displayName: "Donut",

	  propTypes: {
	    legend: React.PropTypes.bool,
	    series: React.PropTypes.arrayOf(React.PropTypes.shape({
	      label: React.PropTypes.string,
	      value: React.PropTypes.number,
	      colorIndex: React.PropTypes.oneOfType([
	        React.PropTypes.number, // 1-6
	        React.PropTypes.string // status
	      ]),
	      onClick: React.PropTypes.func
	    })).isRequired,
	    units: React.PropTypes.string
	  },

	  _initialTimeout: function () {
	    this.setState({initial: false, activeIndex: 0});
	    clearTimeout(this._timeout);
	  },

	  _onMouseOver: function (index) {
	    this.setState({initial: false, activeIndex: index});
	  },

	  _onMouseOut: function () {
	    this.setState({initial: false, activeIndex: 0});
	  },

	  _onResize: function() {
	    // orientation based on available window orientation
	    var ratio = window.innerWidth / window.innerHeight;
	    if (ratio < 0.8) {
	      this.setState({orientation: 'portrait'});
	    } else if (ratio > 1.2) {
	      this.setState({orientation: 'landscape'});
	    }
	    // content based on avialable real estate
	    var parentElement = this.refs.donut.getDOMNode().parentNode;
	    var width = parentElement.offsetWidth;
	    var height = parentElement.offsetHeight;
	    if (height < BASE_SIZE || width < BASE_SIZE ||
	      (width < (BASE_SIZE * 2) && height < (BASE_SIZE * 2))) {
	      this.setState({size: 'small'});
	    } else {
	      this.setState({size: null});
	    }
	  },

	  getInitialState: function() {
	    return {
	      initial: true,
	      activeIndex: 0,
	      legend: false,
	      orientation: 'portrait'
	    };
	  },

	  componentDidMount: function() {
	    this._timeout = setTimeout(this._initialTimeout, 10);
	    this.setState({initial: true, activeIndex: 0});
	    window.addEventListener('resize', this._onResize);
	    setTimeout(this._onResize, 10);
	  },

	  componentWillUnmount: function() {
	    clearTimeout(this._timeout);
	    this._timeout = null;
	    window.removeEventListener('resize', this._onResize);
	  },

	  _itemColorIndex: function (item, index) {
	    return item.colorIndex || ('graph-' + (index + 1));
	  },

	  _renderLegend: function () {
	    var total = 0;

	    var legends = this.props.series.map(function (item, index) {
	      var legendClasses = ["donut__legend-item"];
	      if (this.state.activeIndex === index) {
	        legendClasses.push("donut__legend-item--active");
	      }
	      var colorIndex = this._itemColorIndex(item, index);
	      total += item.value;

	      return(
	        React.createElement("li", {key: item.label, className: legendClasses.join(' '), 
	          onMouseOver: this._onMouseOver.bind(this, index), 
	          onMouseOut: this._onMouseOut.bind(this, index)}, 
	          React.createElement("svg", {className: "donut__legend-item-swatch color-index-" + colorIndex, 
	            viewBox: "0 0 12 12"}, 
	            React.createElement("path", {className: item.className, d: "M 5 0 l 0 12"})
	          ), 
	          React.createElement("span", {className: "donut__legend-item-label"}, item.label), 
	          React.createElement("span", {className: "donut__legend-item-value"}, item.value), 
	          React.createElement("span", {className: "donut__legend-item-units"}, this.props.units)
	        )
	      );
	    }, this);

	    return (
	      React.createElement("ol", {className: "donut__legend"}, 
	        legends, 
	        React.createElement("li", {className: "donut__legend-total"}, 
	          React.createElement("span", {className: "donut__legend-total-label"}, "Total"), 
	          React.createElement("span", {className: "donut__legend-total-value"}, total), 
	          React.createElement("span", {className: "donut__legend-total-units"}, this.props.units)
	        )
	      )
	    );
	  },

	  render: function() {
	    var classes = ["donut", "donut--" + this.state.orientation];
	    if (this.state.size) {
	      classes.push("donut--" + this.state.size);
	    }

	    var total = 0;
	    this.props.series.some(function (item) {
	      total += item.value;
	    });

	    var startAngle = 0;
	    var anglePer = 360.0 / total;
	    var value = null;
	    var units = null;
	    var label = null;

	    var paths = this.props.series.map(function (item, index) {

	      var endAngle = Math.min(360, Math.max(10, startAngle + (anglePer * item.value)));
	      var radius = 84;
	      var commands = describeArc(BASE_SIZE/2, BASE_SIZE/2, radius, startAngle, endAngle);
	      startAngle = endAngle;
	      var colorIndex = this._itemColorIndex(item, index);

	      var sliceClasses = ["donut__slice"];
	      sliceClasses.push("color-index-" + colorIndex);
	      if (this.state.activeIndex === index) {
	        sliceClasses.push("donut__slice--active");
	        value = item.value;
	        units = item.units;
	        label = item.label;
	      }

	      return(
	        React.createElement("path", {key: item.label, fill: "none", className: sliceClasses.join(' '), d: commands, 
	          onMouseOver: this._onMouseOver.bind(null, index), 
	          onMouseOut: this._onMouseOut.bind(null, index), 
	          onClick: item.onClick})
	      );
	    }, this);

	    var legend = null;
	    if (this.props.legend) {
	      legend = this._renderLegend();
	    }

	    return (
	      React.createElement("div", {ref: "donut", className: classes.join(' ')}, 
	        React.createElement("div", {className: "donut__graphic-container"}, 
	          React.createElement("svg", {className: "donut__graphic", 
	            viewBox: "0 0 " + BASE_SIZE + " " + BASE_SIZE, 
	            preserveAspectRatio: "xMidYMid meet"}, 
	            React.createElement("g", null, paths)
	          ), 
	          React.createElement("div", {className: "donut__active"}, 
	            React.createElement("div", {className: "donut__active-value large-number-font"}, 
	              value, 
	              React.createElement("span", {className: "donut__active-units large-number-font"}, units)
	            ), 
	            React.createElement("div", {className: "donut__active-label"}, label)
	          )
	        ), 
	        legend
	      )
	    );
	  }

	});

	module.exports = Donut;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);
	var Top = __webpack_require__(43);

	var Footer = React.createClass({displayName: "Footer",

	  propTypes: {
	    centered: React.PropTypes.bool,
	    colorIndex: React.PropTypes.string,
	    primary: React.PropTypes.bool,
	    scrollTop: React.PropTypes.bool
	  },

	  _updateState: function () {
	    this.setState({scrolled: this._scrollable.scrollTop > 0});
	  },

	  _onClickTop: function() {
	    this._scrollable.scrollTop = 0;
	  },

	  _onScroll: function() {
	    // debounce
	    clearTimeout(this._scrollTimer);
	    this._scrollTimer = setTimeout(this._updateState, 10);
	  },

	  getInitialState: function () {
	    return {scrolled: false};
	  },

	  componentDidMount: function () {
	    this._scrollable = this.refs.footer.getDOMNode().parentNode.parentNode;
	    this._scrollable.addEventListener("scroll", this._onScroll);
	  },

	  componentWillUnmount: function () {
	    this._scrollable.removeEventListener("scroll", this._onScroll);
	  },

	  componentWillReceiveProps: function() {
	    this.setState({scrolled: false});
	  },

	  componentDidUpdate: function() {
	    if (!this.state.scrolled) {
	      this._scrollable.scrollTop = 0;
	    }
	  },

	  render: function() {
	    var classes = ["footer"];
	    if (this.props.primary) {
	      classes.push("footer--primary");
	    }
	    if (this.props.centered) {
	      classes.push("footer--centered");
	    }
	    if (this.props.colorIndex) {
	      classes.push("background-color-index-" + this.props.colorIndex);
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    var top = null;
	    if (this.props.scrollTop && this.state.scrolled) {
	      top = (
	        React.createElement("div", {className: "footer__top control-icon", 
	          onClick: this._onClickTop}, 
	          React.createElement(Top, null)
	        )
	      );
	    }

	    return (
	      React.createElement("div", {ref: "footer", className: classes.join(' ')}, 
	        React.createElement("div", {className: "footer__content"}, 
	          this.props.children, 
	          top
	        )
	      )
	    );
	  }

	});

	module.exports = Footer;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Form = React.createClass({displayName: "Form",

	  propTypes: {
	    compact: React.PropTypes.bool,
	    onSubmit: React.PropTypes.func,
	    className: React.PropTypes.string
	  },

	  render: function () {
	    var classes = ["form"];
	    if (this.props.compact) {
	      classes.push("form--compact");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }
	    return (
	      React.createElement("form", {className: classes.join(' '), onSubmit: this.props.onSubmit}, 
	        this.props.children
	      )
	    );
	  }

	});

	module.exports = Form;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var CLASS_ROOT = "form-field";

	var FormField = React.createClass({displayName: "FormField",

	  propTypes: {
	    error: React.PropTypes.string,
	    help: React.PropTypes.node,
	    htmlFor: React.PropTypes.string,
	    label: React.PropTypes.string,
	    required: React.PropTypes.bool
	  },

	  render: function () {
	    var classes = [CLASS_ROOT];
	    if (this.props.required) {
	      classes.push(CLASS_ROOT + "--required");
	    }
	    if (this.props.htmlFor) {
	      classes.push(CLASS_ROOT + "--text");
	    }

	    var error = null;
	    if (this.props.error) {
	      classes.push(CLASS_ROOT + "--error");
	      error = React.createElement("span", {className: CLASS_ROOT + "__error"}, this.props.error);
	    }
	    var help = null;
	    if (this.props.help) {
	      help = React.createElement("span", {className: CLASS_ROOT + "__help"}, this.props.help);
	    }

	    return (
	      React.createElement("div", {className: classes.join(' ')}, 
	        React.createElement("label", {className: CLASS_ROOT + "__label", htmlFor: this.props.htmlFor}, 
	          this.props.label
	        ), 
	        React.createElement("span", {className: CLASS_ROOT + "__container"}, 
	          React.createElement("span", {className: CLASS_ROOT + "__contents"}, 
	            this.props.children
	          ), 
	          help, 
	          error
	        )
	      )
	    );
	  }

	});

	module.exports = FormField;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var CLASS_ROOT = "header";

	var Header = React.createClass({displayName: "Header",

	  propTypes: {
	    colorIndex: React.PropTypes.string,
	    fixed: React.PropTypes.bool,
	    flush: React.PropTypes.bool,
	    large: React.PropTypes.bool,
	    primary: React.PropTypes.bool,
	    small: React.PropTypes.bool
	  },

	  getDefaultProps: function () {
	    return {
	      flush: true,
	      large: false,
	      primary: false,
	      small: false};
	  },

	  _onResize: function () {
	    this._alignMirror();
	  },

	  _alignMirror: function () {
	    var contentElement = this.refs.content.getDOMNode();
	    var mirrorElement = this.refs.mirror.getDOMNode();

	    // constrain fixed content to the width of the mirror
	    var mirrorRect = mirrorElement.getBoundingClientRect();
	    contentElement.style.width = '' + Math.floor(mirrorRect.width) + 'px';

	    // align the mirror height with the content's height
	    var contentRect = contentElement.getBoundingClientRect();
	    mirrorElement.style.height = '' + Math.floor(contentRect.height) + 'px';
	  },

	  componentDidMount: function () {
	    if (this.props.fixed) {
	      this._alignMirror();
	      window.addEventListener('resize', this._onResize);
	    }
	  },

	  componentDidUpdate: function () {
	    if (this.props.fixed) {
	      this._alignMirror();
	    }
	  },

	  componentWillUnmount: function () {
	    if (this.props.fixed) {
	      window.removeEventListener('resize', this._onResize);
	    }
	  },

	  render: function() {
	    var classes = [CLASS_ROOT];
	    if (this.props.primary) {
	      classes.push(CLASS_ROOT + "--primary");
	    }
	    if (this.props.fixed) {
	      classes.push(CLASS_ROOT + "--fixed");
	    }
	    if (this.props.flush) {
	      classes.push(CLASS_ROOT + "--flush");
	    }
	    if (this.props.large) {
	      classes.push(CLASS_ROOT + "--large");
	    }
	    if (this.props.small) {
	      classes.push(CLASS_ROOT + "--small");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    var mirror = null;
	    if (this.props.fixed) {
	      mirror = React.createElement("div", {ref: "mirror", className: CLASS_ROOT + "__mirror"});
	    }

	    var content = (
	      React.createElement("div", {ref: "content", className: CLASS_ROOT + "__content"}, 
	        this.props.children
	      )
	    );
	    if (this.props.colorIndex || this.props.fixed) {
	      var wrapperClasses = [CLASS_ROOT + "__wrapper"];
	      if (this.props.colorIndex) {
	        wrapperClasses.push("background-color-index-" +
	          this.props.colorIndex);
	      }

	      content = (
	        React.createElement("div", {className: wrapperClasses.join(' ')}, 
	          content
	        )
	      );
	    }

	    return (
	      React.createElement("div", {className: classes.join(' ')}, 
	        mirror, 
	        content
	      )
	    );
	  }

	});

	module.exports = Header;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Label = React.createClass({displayName: "Label",

	  propTypes: {
	    icon: React.PropTypes.node,
	    text: React.PropTypes.string
	  },

	  render: function() {
	    var icon = null;
	    var text = null;
	    if (this.props.icon) {
	      icon = (React.createElement("span", {className: "label__icon control-icon"}, this.props.icon));
	    }
	    if (this.props.text) {
	      text = (React.createElement("span", {className: "label__text"}, this.props.text));
	    }
	    return (
	      React.createElement("div", {className: "label"}, 
	        icon, 
	        text
	      )
	    );
	  }

	});

	module.exports = Label;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Login = React.createClass({displayName: "Login",

	  propTypes: {
	    background: React.PropTypes.string
	  },

	  _onResize: function() {
	    this.adjustBackground();
	  },

	  adjustBackground: function() {
	    // make sure the background always fills the screen, preserve aspect ratio
	    var windowRatio = window.innerWidth / window.innerHeight;
	    var image = this.refs.background.getDOMNode();
	    var imageRatio = image.scrollWidth / image.scrollHeight;
	    this.setState({orientation: (windowRatio < imageRatio) ? 'portrait' : 'landscape'});
	  },

	  getInitialState: function() {
	    return {
	      orientation: null
	    };
	  },

	  componentDidMount: function() {
	    window.addEventListener('resize', this._onResize);
	    setTimeout(this.adjustBackground, 300);
	  },

	  componentWillUnmount: function() {
	    window.removeEventListener('resize', this._onResize);
	  },

	  render: function() {
	    var background = null;
	    if (this.props.background) {
	      var classes = ['login__background'];
	      if (this.state.orientation) {
	        classes.push('login__background--' + this.state.orientation);
	      }
	      background = (
	        React.createElement("img", {ref: "background", className: classes.join(' '), 
	          src: this.props.background})
	      );
	    }

	    return (
	      React.createElement("div", {className: "login"}, 
	        background, 
	        React.createElement("div", {className: "login__container"}, 
	          this.props.children
	        )
	      )
	    );
	  }

	});

	module.exports = Login;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);
	var Form = __webpack_require__(6);
	var FormField = __webpack_require__(7);
	var CheckBox = __webpack_require__(2);

	var CLASS_ROOT = "login-form";

	var LoginForm = React.createClass({displayName: "LoginForm",

	  propTypes: {
	    logo: React.PropTypes.node,
	    title: React.PropTypes.string,
	    rememberMe: React.PropTypes.bool,
	    forgotPassword: React.PropTypes.node,
	    errors: React.PropTypes.arrayOf(React.PropTypes.string),
	    onSubmit: React.PropTypes.func
	  },

	  _onSubmit: function (event) {
	    event.preventDefault();
	    var username = this.refs.username.getDOMNode().value.trim();
	    var password = this.refs.password.getDOMNode().value.trim();
	    if (this.props.onSubmit) {
	      this.props.onSubmit({username: username, password: password});
	    }
	  },

	  getDefaultProps: function () {
	    return ({
	      errors: []
	    });
	  },

	  componentDidMount: function() {
	    this.refs.username.getDOMNode().focus();
	  },

	  render: function() {
	    var classes = [CLASS_ROOT];

	    var errors = this.props.errors.map(function (error, index) {
	      return (React.createElement("div", {key: index, className: CLASS_ROOT + "__error"}, error));
	    });

	    var logo = null;
	    if (this.props.logo) {
	      logo = (
	        React.createElement("div", {className: CLASS_ROOT + "__logo"}, 
	          this.props.logo
	        )
	      );
	    }

	    var title = null;
	    if (this.props.title) {
	      title = (
	        React.createElement("h1", {className: CLASS_ROOT + "__title"}, 
	          this.props.title
	        )
	      );
	    }

	    var footer = null;
	    if (this.props.rememberMe || this.props.forgotPassword) {
	      var rememberMe = null;
	      if (this.props.rememberMe) {
	        rememberMe = (
	          React.createElement(CheckBox, {className: CLASS_ROOT + "__remember-me", 
	            id: "remember-me", label: "Remember me"})
	        );
	      }
	      footer = (
	        React.createElement("div", {className: CLASS_ROOT + "__footer"}, 
	          rememberMe, 
	          this.props.forgotPassword
	        )
	      );
	    }

	    return (
	      React.createElement(Form, {className: classes.join(' '), onSubmit: this._onSubmit}, 
	        logo, 
	        title, 
	        React.createElement("fieldset", null, 
	          React.createElement(FormField, {htmlFor: "username", label: "Username"}, 
	            React.createElement("input", {id: "username", ref: "username", type: "text"})
	          ), 
	          React.createElement(FormField, {htmlFor: "password", label: "Password"}, 
	            React.createElement("input", {id: "password", ref: "password", type: "password"})
	          )
	        ), 
	        errors, 
	        React.createElement("input", {type: "submit", className: CLASS_ROOT + "__submit primary call-to-action", value: 'Log in'}), 
	        footer
	      )
	    );
	  }

	});

	module.exports = LoginForm;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);
	var ReactLayeredComponent = __webpack_require__(38);
	var KeyboardAccelerators = __webpack_require__(37);
	var Overlay = __webpack_require__(44);
	var MoreIcon = __webpack_require__(30);
	var DropCaretIcon = __webpack_require__(45);

	var ROOT_CLASS = "menu";

	var MenuLayer = React.createClass({displayName: "MenuLayer",

	  propTypes: {
	    align: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	    direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
	    onClick: React.PropTypes.func.isRequired,
	    router: React.PropTypes.func
	  },

	  childContextTypes: {
	    router: React.PropTypes.func
	  },

	  getChildContext: function () {
	    return { router: this.props.router };
	  },

	  render: function () {
	    var classes = [ROOT_CLASS + "__layer"];
	    if (this.props.direction) {
	      classes.push(ROOT_CLASS + "__layer--" + this.props.direction);
	    }
	    if (this.props.align) {
	      classes.push(ROOT_CLASS + "__layer--align-" + this.props.align);
	    }

	    return (
	      React.createElement("div", {id: "menu-layer", className: classes.join(' '), 
	        onClick: this.props.onClick}, 
	        this.props.children
	      )
	    );
	  }
	});

	var Menu = React.createClass({displayName: "Menu",

	  propTypes: {
	    align: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	    collapse: React.PropTypes.bool,
	    direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
	    icon: React.PropTypes.node,
	    label: React.PropTypes.string,
	    primary: React.PropTypes.bool,
	    small: React.PropTypes.bool
	  },

	  contextTypes: {
	    router: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return {
	      align: 'left',
	      direction: 'down',
	      small: false
	    };
	  },

	  mixins: [ReactLayeredComponent, KeyboardAccelerators, Overlay],

	  _onOpen: function (event) {
	    event.preventDefault();
	    this.setState({active: true});
	  },

	  _onClose: function () {
	    this.setState({active: false});
	  },

	  _onFocusControl: function () {
	    this.setState({controlFocused: true});
	  },

	  _onBlurControl: function () {
	    this.setState({controlFocused: false});
	  },

	  getInitialState: function () {
	    return {
	      controlFocused: false,
	      active: false,
	      inline: (! this.props.label && ! this.props.icon && ! this.props.collapse)
	    };
	  },

	  componentDidUpdate: function (prevProps, prevState) {
	    // Set up keyboard listeners appropriate to the current state.

	    var activeKeyboardHandlers = {
	      esc: this._onClose,
	      space: this._onClose,
	      tab: this._onClose
	    };
	    var focusedKeyboardHandlers = {
	      space: this._onOpen,
	      down: this._onOpen
	    };

	    // the order here is important, need to turn off keys before turning on

	    if (! this.state.controlFocused && prevState.controlFocused) {
	      this.stopListeningToKeyboard(focusedKeyboardHandlers);
	    }

	    if (! this.state.active && prevState.active) {
	      document.removeEventListener('click', this._onClose);
	      this.stopListeningToKeyboard(activeKeyboardHandlers);
	      this.stopOverlay();
	    }

	    // re-arm the space key in case we used it when active
	    if (this.state.controlFocused && (! prevState.controlFocused ||
	      (! this.state.active && prevState.active))) {
	      this.startListeningToKeyboard(focusedKeyboardHandlers);
	    }

	    if (this.state.active && ! prevState.active) {
	      document.addEventListener('click', this._onClose);
	      this.startListeningToKeyboard(activeKeyboardHandlers);

	      var controlElement = this.refs.control.getDOMNode();
	      var layerElement = document.getElementById('menu-layer');
	      var layerControlElement = layerElement.querySelectorAll("." + ROOT_CLASS + "__control")[0];
	      var layerControlIconElement = layerElement.querySelectorAll('svg, img')[0];

	      // give layer control element the same line height and font size as the control
	      var fontSize = window.getComputedStyle(controlElement).fontSize;
	      layerControlElement.style.fontSize = fontSize;
	      var height = controlElement.clientHeight;
	      if (layerControlIconElement &&
	        height <= (layerControlIconElement.clientHeight + 1)) {
	        // adjust to align with underlying control when control uses all height
	        if ('down' === this.props.direction) {
	          layerControlElement.style.marginTop = '-1px';
	        } else if ('up' === this.props.direction) {
	          layerControlElement.style.marginBottom = '1px';
	        }
	      }
	      layerControlElement.style.height = height + 'px';
	      layerControlElement.style.lineHeight = height + 'px';

	      this.startOverlay(controlElement, layerElement, this.props.align);
	    }
	  },

	  componentWillUnmount: function () {
	    document.removeEventListener('click', this._onClose);
	  },

	  _renderControl: function () {
	    var result = null;
	    var icon = null;
	    var controlClassName = ROOT_CLASS + "__control";

	    var classes = [controlClassName];

	    if (this.props.icon) {
	      classes.push(controlClassName + "--labelled");
	      icon = this.props.icon;
	    } else {
	      classes.push(controlClassName +"--fixed-label");
	      icon = React.createElement(MoreIcon, null);
	    }

	    if (this.props.label) {
	      result = (
	        React.createElement("div", {className: classes.join(' ')}, 
	          React.createElement("div", {className: controlClassName + "-icon"}, 
	            icon
	          ), 
	          React.createElement("span", {className: controlClassName + "-label"}, this.props.label), 
	          React.createElement(DropCaretIcon, {className: controlClassName + "-drop-icon"})
	        )
	      );
	    } else {
	      result = (
	        React.createElement("div", {className: controlClassName}, 
	          icon
	        )
	      );
	    }
	    return result;
	  },

	  _classes: function (prefix) {
	    var classes = [prefix];

	    if (this.props.direction) {
	      classes.push(prefix + "--" + this.props.direction);
	    }
	    if (this.props.align) {
	      classes.push(prefix + "--align-" + this.props.align);
	    }
	    if (this.props.small) {
	      classes.push(prefix + "--small");
	    }
	    if (this.props.primary) {
	      classes.push(prefix + "--primary");
	    }

	    return classes;
	  },

	  render: function () {
	    var classes = this._classes(ROOT_CLASS);
	    if (this.state.inline) {
	      classes.push(ROOT_CLASS + "--inline");
	    } else {
	      classes.push(ROOT_CLASS + "--controlled");
	      if (this.props.label) {
	        classes.push(ROOT_CLASS + "--labelled");
	      }
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    if (this.state.inline) {

	      return (
	        React.createElement("div", {className: classes.join(' '), onClick: this._onClose}, 
	          this.props.children
	        )
	      );

	    } else {

	      var controlContents = this._renderControl();

	      return (
	        React.createElement("div", {ref: "control", className: classes.join(' '), 
	          tabIndex: "0", 
	          onClick: this._onOpen, 
	          onFocus: this._onFocusControl, 
	          onBlur: this._onBlurControl}, 
	          controlContents
	        )
	      );

	    }
	  },

	  renderLayer: function() {
	    if (this.state.active) {

	      var controlContents = this._renderControl();

	      var first = null;
	      var second = null;
	      if ('up' === this.props.direction) {
	        first = this.props.children;
	        second = controlContents;
	      } else {
	        first = controlContents;
	        second = this.props.children;
	      }

	      return (
	        React.createElement(MenuLayer, {router: this.context.router, 
	          align: this.props.align, 
	          direction: this.props.direction, 
	          onClick: this._onClose}, 
	          first, 
	          second
	        )
	      );

	    } else {
	      return (React.createElement("span", null));
	    }
	  }

	});

	module.exports = Menu;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var BASE_WIDTH = 192;
	var BASE_HEIGHT = 24;
	var MID_HEIGHT = BASE_HEIGHT / 2;

	// TODO: multi-value meter

	var Meter = React.createClass({displayName: "Meter",

	  propTypes: {
	    max: React.PropTypes.number,
	    min: React.PropTypes.number,
	    threshold: React.PropTypes.number,
	    units: React.PropTypes.string,
	    value: React.PropTypes.number
	  },

	  getDefaultProps: function () {
	    return {
	      max: 100,
	      min: 0
	    };
	  },

	  render: function() {
	    var classes = ["meter"];
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }
	    var scale = BASE_WIDTH / (this.props.max - this.props.min);
	    var distance = scale * (this.props.value - this.props.min);
	    var commands = "M0," + MID_HEIGHT + " L" + distance + "," + MID_HEIGHT;

	    var threshold = null;
	    if (this.props.threshold) {
	      distance = scale * (this.props.threshold - this.props.min);
	      threshold = (
	        React.createElement("path", {className: "meter__threshold", 
	          d: "M" + distance + ",0 L" + distance + "," + BASE_HEIGHT})
	      );
	    }
	    return (
	      React.createElement("div", {className: classes.join(' ')}, 
	        React.createElement("svg", {className: "meter__graphic", 
	          viewBox: "0 0 " + BASE_WIDTH + " " + BASE_HEIGHT, 
	          preserveAspectRatio: "xMidYMid meet"}, 
	          React.createElement("g", null, 
	            React.createElement("path", {className: "meter__value", d: commands}), 
	            threshold
	          )
	        ), 
	        React.createElement("span", {className: "meter__label"}, 
	          React.createElement("span", {className: "meter__label-value"}, this.props.value), 
	          React.createElement("span", {className: "meter__label-units"}, this.props.units)
	        )
	      )
	    );
	  }

	});

	module.exports = Meter;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.
	var React = __webpack_require__(42);

	var Panel = React.createClass({displayName: "Panel",

	  propTypes: {
	    direction: React.PropTypes.string,
	    index: React.PropTypes.oneOf([1, 2])
	  },

	  render: function() {
	    var classes = ["panel"];
	    if (this.props.direction === 'horizontal') {
	      classes.push("panel--horizontal");
	    }
	    if (this.props.index) {
	      classes.push("panel--index-" + this.props.index);
	    }

	    var title = null;
	    if (this.props.title) {
	      title = (React.createElement("h2", {className: "panel__title"}, this.props.title));
	    }

	    return (
	      React.createElement("div", {className: classes.join(' ')}, 
	        title, 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Panel;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var RadioButton = React.createClass({displayName: "RadioButton",

	  propTypes: {
	    checked: React.PropTypes.bool,
	    defaultChecked: React.PropTypes.bool,
	    id: React.PropTypes.string.isRequired,
	    label: React.PropTypes.string.isRequired,
	    name: React.PropTypes.string,
	    onChange: React.PropTypes.func
	  },

	  render: function () {
	    var classes = ["radio-button"];
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }
	    return (
	      React.createElement("span", {className: classes.join(' ')}, 
	        React.createElement("input", {className: "radio-button__input", 
	          id: this.props.id, name: this.props.name, type: "radio", 
	          checked: this.props.checked, 
	          defaultChecked: this.props.defaultChecked, 
	          onChange: this.props.onChange}), 
	        React.createElement("label", {className: "radio-button__label radio", htmlFor: this.props.id}, 
	          this.props.label
	        )
	      )
	    );
	  }

	});

	module.exports = RadioButton;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);
	var ReactLayeredComponent = __webpack_require__(38);
	var KeyboardAccelerators = __webpack_require__(37);
	var Overlay = __webpack_require__(44);
	var SearchIcon = __webpack_require__(33);

	var CLASS_ROOT = "search";

	var Search = React.createClass({displayName: "Search",

	  propTypes: {
	    align: React.PropTypes.oneOf(['left', 'right']),
	    defaultValue: React.PropTypes.string,
	    inline: React.PropTypes.bool,
	    onChange: React.PropTypes.func,
	    placeHolder: React.PropTypes.string,
	    suggestions: React.PropTypes.arrayOf(React.PropTypes.string)
	  },

	  getDefaultProps: function () {
	    return {
	      align: 'left',
	      inline: false,
	      placeHolder: 'Search'
	    };
	  },

	  mixins: [ReactLayeredComponent, KeyboardAccelerators, Overlay],

	  _onAddLayer: function (event) {
	    event.preventDefault();
	    this.setState({layer: true, activeSuggestionIndex: -1});
	  },

	  _onRemoveLayer: function () {
	    this.setState({layer: false});
	  },

	  _onFocusControl: function () {
	    this.setState({
	      controlFocused: true,
	      layer: true,
	      activeSuggestionIndex: -1
	    });
	  },

	  _onBlurControl: function () {
	    this.setState({controlFocused: false});
	  },

	  _onFocusInput: function () {
	    this.refs.input.getDOMNode().select();
	    this.setState({
	      layer: (! this.props.inline || this.props.suggestions),
	      activeSuggestionIndex: -1
	    });
	  },

	  _onBlurInput: function () {
	    //this.setState({layer: false});
	  },

	  _onChangeInput: function (event) {
	    this.setState({activeSuggestionIndex: -1});
	    if (this.props.onChange) {
	      this.props.onChange(event.target.value);
	    }
	  },

	  _onNextSuggestion: function () {
	    var index = this.state.activeSuggestionIndex;
	    index = Math.min(index + 1, this.props.suggestions.length - 1);
	    this.setState({activeSuggestionIndex: index});
	  },

	  _onPreviousSuggestion: function () {
	    var index = this.state.activeSuggestionIndex;
	    index = Math.max(index - 1, 0);
	    this.setState({activeSuggestionIndex: index});
	  },

	  _onEnter: function () {
	    if (this.state.activeSuggestionIndex >= 0) {
	      var text = this.props.suggestions[this.state.activeSuggestionIndex];
	      if (this.props.onChange) {
	        this.props.onChange(text);
	      }
	    }
	    this._onRemoveLayer();
	  },

	  _onClickSuggestion: function (item) {
	    if (this.props.onChange) {
	      this.props.onChange(item);
	    }
	    this._onRemoveLayer();
	  },

	  _onSink: function (event) {
	    event.stopPropagation();
	    event.nativeEvent.stopImmediatePropagation();
	  },

	  getInitialState: function () {
	    return {
	      align: 'left',
	      controlFocused: false,
	      layer: false,
	      activeSuggestionIndex: -1
	    };
	  },

	  componentDidUpdate: function (prevProps, prevState) {

	    // Set up keyboard listeners appropriate to the current state.

	    var activeKeyboardHandlers = {
	      esc: this._onRemoveLayer,
	      tab: this._onRemoveLayer,
	      up: this._onPreviousSuggestion,
	      down: this._onNextSuggestion,
	      enter: this._onEnter
	    };
	    var focusedKeyboardHandlers = {
	      space: this._onAddLayer
	    };

	    // the order here is important, need to turn off keys before turning on

	    if (! this.state.controlFocused && prevState.controlFocused) {
	      this.stopListeningToKeyboard(focusedKeyboardHandlers);
	    }

	    if (! this.state.layer && prevState.layer) {
	      document.removeEventListener('click', this._onRemoveLayer);
	      this.stopListeningToKeyboard(activeKeyboardHandlers);
	      this.stopOverlay();
	    }

	    if (this.state.controlFocused && ! prevState.controlFocused) {
	      this.startListeningToKeyboard(focusedKeyboardHandlers);
	    }

	    if (this.state.layer && ! prevState.layer) {
	      document.addEventListener('click', this._onRemoveLayer);
	      this.startListeningToKeyboard(activeKeyboardHandlers);

	      var baseElement =
	        (this.refs.control ? this.refs.control : this.refs.input).getDOMNode();
	      var layerElement = document.getElementById('search-layer');
	      var layerControlElement = layerElement.querySelectorAll('.search__control')[0];
	      var layerControlIconElement = layerElement.querySelectorAll('svg')[0];
	      var inputElement = layerElement.querySelectorAll('.search__input')[0];

	      // give input element the same line height and font size as the control
	      var fontSize = window.getComputedStyle(baseElement).fontSize;
	      inputElement.style.fontSize = fontSize;
	      var height = baseElement.clientHeight;
	      if (layerControlIconElement && height <= layerControlIconElement.clientHeight) {
	        // adjust to align with underlying control when control uses all height
	        layerControlElement.style.marginTop = '-2px';
	      }
	      inputElement.style.height = height + 'px';
	      if (layerControlElement) {
	        layerControlElement.style.height = height + 'px';
	        layerControlElement.style.lineHeight = height + 'px';
	      }

	      this.startOverlay(baseElement,layerElement, this.props.align);
	      inputElement.focus();
	    }
	  },

	  componentWillUnmount: function () {
	    document.removeEventListener('click', this._onRemoveLayer);
	  },

	  focus: function () {
	    var ref = this.refs.input || this.refs.control;
	    if (ref) {
	      ref.getDOMNode().focus();
	    }
	  },

	  _createControl: function () {
	    var controlClassName = CLASS_ROOT + "__control";
	    return (
	      React.createElement("div", {className: controlClassName}, 
	        React.createElement(SearchIcon, null)
	      )
	    );
	  },

	  _classes: function (prefix) {
	    var classes = [prefix];

	    if (this.props.inline) {
	      classes.push(prefix + "--inline");
	    } else {
	      classes.push(prefix + "--controlled");
	    }
	    if (this.props.align) {
	      classes.push(prefix + "--align-" + this.props.align);
	    }

	    return classes;
	  },

	  render: function () {
	    var classes = this._classes(CLASS_ROOT);
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    if (this.props.inline) {

	      var readOnly = this.props.suggestions ? true : false;

	      return (
	        React.createElement("div", {className: classes.join(' ')}, 
	          React.createElement("input", {ref: "input", type: "search", 
	            placeholder: this.props.placeHolder, 
	            value: this.props.defaultValue, 
	            className: CLASS_ROOT + "__input", 
	            readOnly: readOnly, 
	            onFocus: this._onFocusInput, 
	            onBlur: this._onBlurInput, 
	            onChange: this._onChangeInput})
	        )
	      );

	    } else {

	      var controlContents = this._createControl();

	      return (
	        React.createElement("div", {ref: "control", className: classes.join(' '), 
	          tabIndex: "0", 
	          onClick: this._onAddLayer, 
	          onFocus: this._onFocusControl, 
	          onBlur: this._onBlurControl}, 
	          controlContents
	        )
	      );
	    }
	  },

	  renderLayer: function() {
	    if (this.state.layer) {

	      var classes = this._classes(CLASS_ROOT + "__layer");

	      var suggestions = null;
	      if (this.props.suggestions) {
	        suggestions = this.props.suggestions.map(function (item, index) {
	          var classes = [CLASS_ROOT + "__suggestion"];
	          if (index === this.state.activeSuggestionIndex) {
	            classes.push(CLASS_ROOT + "__suggestion--active");
	          }
	          return (
	            React.createElement("div", {key: item, 
	              className: classes.join(' '), 
	              onClick: this._onClickSuggestion.bind(this, item)}, 
	              item
	            )
	          );
	        }, this);
	      }

	      var contents = (
	        React.createElement("div", {className: CLASS_ROOT + "__layer-contents", onClick: this._onSink}, 
	          React.createElement("input", {type: "search", 
	            defaultValue: this.props.defaultValue, 
	            className: CLASS_ROOT + "__input", 
	            onChange: this._onChangeInput}), 
	          React.createElement("div", {className: CLASS_ROOT + "__suggestions"}, 
	            suggestions
	          )
	        )
	      );

	      if (! this.props.inline) {
	        var control = this._createControl();
	        var rightAlign = ('right' === this.props.align);
	        var first = rightAlign ? contents : control;
	        var second = rightAlign ? control : contents;

	        contents = (
	          React.createElement("div", {className: CLASS_ROOT + "__layer-header"}, 
	            first, 
	            second
	          )
	        );
	      }

	      return (
	        React.createElement("div", {id: "search-layer", className: classes.join(' ')}, 
	          contents
	        )
	      );

	    } else { // no layer
	      return (React.createElement("span", null));
	    }
	  }

	});

	module.exports = Search;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);
	var ReactLayeredComponent = __webpack_require__(38);
	var KeyboardAccelerators = __webpack_require__(37);
	var Overlay = __webpack_require__(44);
	var SearchIcon = __webpack_require__(33);

	var CLASS_ROOT = "search-input";

	var SearchInput = React.createClass({displayName: "SearchInput",

	  propTypes: {
	    defaultValue: React.PropTypes.string,
	    id: React.PropTypes.string,
	    name: React.PropTypes.string,
	    onChange: React.PropTypes.func,
	    onSearch: React.PropTypes.func,
	    suggestions: React.PropTypes.arrayOf(React.PropTypes.string),
	    value: React.PropTypes.string
	  },

	  mixins: [ReactLayeredComponent, KeyboardAccelerators, Overlay],

	  _onInputChange: function (event) {
	    this.props.onChange(event.target.value);
	  },

	  _onOpen: function (event) {
	    event.preventDefault();
	    this.setState({active: true, activeSuggestionIndex: -1});
	  },

	  _onClose: function () {
	    this.setState({active: false});
	  },

	  _onSearchChange: function (event) {
	    this.setState({activeSuggestionIndex: -1});
	    this.props.onSearch(event.target.value);
	  },

	  _onNextSuggestion: function () {
	    var index = this.state.activeSuggestionIndex;
	    index = Math.min(index + 1, this.props.suggestions.length - 1);
	    this.setState({activeSuggestionIndex: index});
	  },

	  _onPreviousSuggestion: function () {
	    var index = this.state.activeSuggestionIndex;
	    index = Math.max(index - 1, 0);
	    this.setState({activeSuggestionIndex: index});
	  },

	  _onEnter: function () {
	    this.setState({active: false});
	    this._activation(false);
	    if (this.state.activeSuggestionIndex >= 0) {
	      var text = this.props.suggestions[this.state.activeSuggestionIndex];
	      this.setState({value: text});
	      this.props.onChange(text);
	    }
	  },

	  _onClickSuggestion: function (text) {
	    this.setState({value: text});
	    this._activation(false);
	    this.props.onChange(text);
	  },

	  _activation: function (active) {

	    var listeners = {
	      esc: this._onClose,
	      tab: this._onClose,
	      up: this._onPreviousSuggestion,
	      down: this._onNextSuggestion,
	      enter: this._onEnter
	    };

	    if (active) {

	      document.addEventListener('click', this._onClose);
	      this.startListeningToKeyboard(listeners);

	      var element = this.refs.component.getDOMNode();
	      var layerElement = document.getElementById(CLASS_ROOT + '-layer');
	      this.startOverlay(element, layerElement, 'below');

	      // focus on search
	      var searchInputElement = layerElement.querySelectorAll('input')[0];
	      searchInputElement.focus();

	    } else {

	      document.removeEventListener('click', this._onClose);
	      this.stopListeningToKeyboard(listeners);
	      this.stopOverlay();

	    }
	  },

	  getInitialState: function () {
	    return {
	      active: false,
	      defaultValue: this.props.defaultValue,
	      value: this.props.value,
	      activeSuggestionIndex: -1
	    };
	  },

	  componentDidMount: function () {
	    if (this.state.active) {
	      this._activation(this.state.active);
	    }
	  },

	  componentDidUpdate: function (prevProps, prevState) {
	    // Set up keyboard listeners appropriate to the current state.
	    if (! this.state.active && prevState.active) {
	      this._activation(this.state.active);
	    }
	    if (this.state.active && ! prevState.active) {
	      this._activation(this.state.active);
	    }
	  },

	  componentWillUnmount: function () {
	    this._activation(false);
	  },

	  render: function() {
	    var classes = [CLASS_ROOT];
	    if (this.state.active) {
	      classes.push(CLASS_ROOT + "--active");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    return (
	      React.createElement("div", {ref: "component", className: classes.join(' ')}, 
	        React.createElement("input", {className: CLASS_ROOT + "__input", 
	          id: this.props.id, name: this.props.name, 
	          value: this.props.value, defaultValue: this.props.defaultValue, 
	          onChange: this._onInputChange}), 
	        React.createElement("div", {className: CLASS_ROOT + "__control", onClick: this._onOpen}, 
	          React.createElement(SearchIcon, null)
	        )
	      )
	    );
	  },

	  renderLayer: function() {
	    if (this.state.active) {

	      var suggestions = null;
	      if (this.props.suggestions) {
	        suggestions = this.props.suggestions.map(function (text, index) {
	          var classes = [CLASS_ROOT + "__layer-suggestion"];
	          if (index === this.state.activeSuggestionIndex) {
	            classes.push(CLASS_ROOT + "__layer-suggestion--active");
	          }
	          return (
	            React.createElement("div", {key: text, 
	              className: classes.join(' '), 
	              onClick: this._onClickSuggestion.bind(this, text)}, 
	              text
	            )
	          );
	        }, this);
	      }

	      return (
	        React.createElement("div", {id: CLASS_ROOT + "-layer", className: CLASS_ROOT + "__layer", 
	          onClick: this._onClose}, 
	          React.createElement("input", {type: "search", 
	            defaultValue: "", 
	            placeholder: "Search", 
	            className: CLASS_ROOT + "__layer-input", 
	            onChange: this._onSearchChange}), 
	          React.createElement("div", {className: CLASS_ROOT + "__layer-suggestions"}, 
	            suggestions
	          )
	        )
	      );
	    } else {
	      return (React.createElement("span", null));
	    }
	  }

	});

	module.exports = SearchInput;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Section = React.createClass({displayName: "Section",

	  propTypes: {
	    compact: React.PropTypes.bool,
	    colorIndex: React.PropTypes.string,
	    direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
	    centered: React.PropTypes.bool,
	    texture: React.PropTypes.string
	  },

	  getDefaultProps: function () {
	    return {
	      colored: false,
	      direction: 'down',
	      small: false
	    };
	  },

	  render: function() {
	    var classes = ["section"];
	    var contentClasses = ["section__content"];

	    if (this.props.compact) {
	      classes.push("section--compact");
	    }
	    if (this.props.centered) {
	      classes.push("section--centered");
	    }
	    if (this.props.direction) {
	      classes.push("section--" + this.props.direction);
	    }
	    if (this.props.colorIndex) {
	      classes.push("background-color-index-" + this.props.colorIndex);
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    var style = {};
	    if (this.props.texture) {
	      style.backgroundImage = this.props.texture;
	    }

	    return (
	      React.createElement("div", {className: classes.join(' '), style: style}, 
	        React.createElement("div", {className: contentClasses.join(' ')}, 
	          this.props.children
	        )
	      )
	    );
	  }

	});

	module.exports = Section;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);
	var SpinningIcon = __webpack_require__(35);
	var InfiniteScroll = __webpack_require__(46);

	var CLASS_ROOT = "table";

	var Table = React.createClass({displayName: "Table",

	  propTypes: {
	    selection: React.PropTypes.number,
	    onMore: React.PropTypes.func,
	    scrollable: React.PropTypes.bool,
	    selectable: React.PropTypes.bool
	  },

	  mixins: [InfiniteScroll],

	  getDefaultProps: function () {
	    return {
	      selection: null,
	      scrollable: false,
	      selectable: false
	    };
	  },

	  _clearSelection: function () {
	    var rows = this.refs.table.getDOMNode()
	      .querySelectorAll("." + CLASS_ROOT + "__row--selected");
	    for (var i=0; i<rows.length; i++) {
	      rows[i].classList.remove(CLASS_ROOT + "__row--selected");
	    }
	  },

	  _markSelection: function () {
	    this._clearSelection();
	    if (null !== this.state.selection) {
	      var tbody = this.refs.table.getDOMNode().querySelectorAll('tbody')[0];
	      tbody.childNodes[this.state.selection].classList.
	        add(CLASS_ROOT + "__row--selected");
	    }
	  },

	  _onClick: function (event) {
	    var element = event.target;
	    while (element.nodeName !== 'TR') {
	      element = element.parentNode;
	    }
	    if (element && element.parentNode.nodeName === 'TBODY') {
	      this._clearSelection();
	      element.classList.add(CLASS_ROOT + "__row--selected");
	    }
	  },

	  _onResize: function () {
	    this._alignMirror();
	  },

	  _buildMirror: function () {
	    var tableElement = this.refs.table.getDOMNode();
	    var cells = tableElement.querySelectorAll('thead tr th');
	    var mirrorElement = this.refs.mirror.getDOMNode();
	    var mirrorRow = mirrorElement.querySelectorAll('thead tr')[0];
	    for (var i=0; i<cells.length; i++) {
	      mirrorRow.appendChild(cells[i].cloneNode(true));
	    }
	  },

	  _alignMirror: function () {
	    var tableElement = this.refs.table.getDOMNode();
	    var cells = tableElement.querySelectorAll('thead tr th');
	    var mirrorElement = this.refs.mirror.getDOMNode();
	    var mirrorCells = mirrorElement.querySelectorAll('thead tr th');

	    var rect = tableElement.getBoundingClientRect();
	    mirrorElement.style.width = '' + Math.floor(rect.right - rect.left) + 'px';

	    var height = 0;
	    for (var i=0; i<cells.length; i++) {
	      rect = cells[i].getBoundingClientRect();
	      mirrorCells[i].style.width = '' + Math.floor(rect.right - rect.left) + 'px';
	      mirrorCells[i].style.height = '' + Math.floor(rect.bottom - rect.top) + 'px';
	      height = Math.max(height, Math.floor(rect.bottom - rect.top));
	    }
	    mirrorElement.style.height = '' + height + 'px';
	  },

	  getInitialState: function () {
	    return {selection: this.props.selection};
	  },

	  componentDidMount: function () {
	    this._markSelection();
	    if (this.props.scrollable) {
	      this._buildMirror();
	      this._alignMirror();
	    }
	    if (this.props.onMore) {
	      this.startListeningForScroll(this.refs.more.getDOMNode(), this.props.onMore);
	    }
	    window.addEventListener('resize', this._onResize);
	  },

	  componentWillReceiveProps: function (newProps) {
	    if (newProps.hasOwnProperty('selection')) {
	      this.setState({selection: newProps.selection});
	    }
	  },

	  componentDidUpdate: function (prevProps, prevState) {
	    if (this.state.selection !== prevState.selection) {
	      this._markSelection();
	    }
	    if (this.props.scrollable) {
	      this._alignMirror();
	    }
	    this.stopListeningForScroll();
	    if (this.props.onMore) {
	      this.startListeningForScroll(this.refs.more.getDOMNode(), this.props.onMore);
	    }
	  },

	  componentWillUnmount: function () {
	    if (this.props.onMore) {
	      this.stopListeningForScroll();
	    }
	    window.removeEventListener('resize', this._onResize);
	  },

	  render: function () {
	    var classes = [CLASS_ROOT];
	    if (this.props.selectable) {
	      classes.push(CLASS_ROOT + "--selectable");
	    }
	    if (this.props.scrollable) {
	      classes.push(CLASS_ROOT + "--scrollable");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    var mirror = null;
	    if (this.props.scrollable) {
	      mirror = (
	        React.createElement("table", {ref: "mirror", className: CLASS_ROOT + "__mirror"}, 
	          React.createElement("thead", null, 
	            React.createElement("tr", null)
	          )
	        )
	      );
	    }

	    var more = null;
	    if (this.props.onMore) {
	      more = (
	        React.createElement("div", {ref: "more", className: CLASS_ROOT + "__more"}, 
	          React.createElement(SpinningIcon, null)
	        )
	      );
	    }

	    return (
	      React.createElement("div", {ref: "container", className: classes.join(' ')}, 
	        mirror, 
	        React.createElement("table", {ref: "table", className: CLASS_ROOT + "__table", onClick: this._onClick}, 
	          this.props.children
	        ), 
	        more
	      )
	    );
	  }

	});

	module.exports = Table;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);
	var SpinningIcon = __webpack_require__(35);
	var InfiniteScroll = __webpack_require__(46);

	var CLASS_ROOT = "tiles";

	var Tiles = React.createClass({displayName: "Tiles",

	  propTypes: {
	    fill: React.PropTypes.bool,
	    flush: React.PropTypes.bool,
	    onMore: React.PropTypes.func,
	    small: React.PropTypes.bool
	  },

	  mixins: [InfiniteScroll],

	  getDefaultProps: function () {
	    return {flush: true, fill: false, small: false};
	  },

	  componentDidMount: function () {
	    if (this.props.onMore) {
	      this.startListeningForScroll(this.refs.more.getDOMNode(), this.props.onMore);
	    }
	  },

	  componentDidUpdate: function () {
	    this.stopListeningForScroll();
	    if (this.props.onMore) {
	      this.startListeningForScroll(this.refs.more.getDOMNode(), this.props.onMore);
	    }
	  },

	  componentWillUnmount: function () {
	    if (this.props.onMore) {
	      this.stopListeningForScroll();
	    }
	  },

	  // children should be an array of Tile
	  render: function () {
	    var classes = [CLASS_ROOT];
	    if (this.props.fill) {
	      classes.push(CLASS_ROOT + "--fill");
	    }
	    if (this.props.flush) {
	      classes.push(CLASS_ROOT + "--flush");
	    }
	    if (this.props.small) {
	      classes.push(CLASS_ROOT + "--small");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    var more = null;
	    if (this.props.onMore) {
	      classes.push(CLASS_ROOT + "--moreable");
	      more = (
	        React.createElement("div", {ref: "more", className: CLASS_ROOT + "__more"}, 
	          React.createElement(SpinningIcon, null)
	        )
	      );
	    }

	    return (
	      React.createElement("div", {ref: "tiles", className: classes.join(' ')}, 
	        this.props.children, 
	        more
	      )
	    );
	  }

	});

	module.exports = Tiles;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var CLASS_ROOT = "tile";

	var Tile = React.createClass({displayName: "Tile",

	  propTypes: {
	    onClick: React.PropTypes.func,
	    selected: React.PropTypes.bool,
	    status: React.PropTypes.string,
	    wide: React.PropTypes.bool
	  },

	  render: function() {
	    var classes = [CLASS_ROOT];
	    if (this.props.status) {
	      classes.push(CLASS_ROOT = "--status-" + this.props.status.toLowerCase());
	    }
	    if (this.props.wide) {
	      classes.push(CLASS_ROOT + "--wide");
	    }
	    if (this.props.onClick) {
	      classes.push(CLASS_ROOT + "--selectable");
	    }
	    if (this.props.selected) {
	      classes.push(CLASS_ROOT + "--selected");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    return (
	      React.createElement("div", {className: classes.join(' '), onClick: this.props.onClick}, 
	        this.props.children
	      )
	    );
	  }

	});

	module.exports = Tile;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Title = React.createClass({displayName: "Title",

	  propTypes: {
	    onClick: React.PropTypes.func
	  },

	  render: function() {
	    var classes = ["title"];
	    if (this.props.onClick) {
	      classes.push("title--interactive");
	    }

	    return (
	      React.createElement("div", {className: classes.join(' '), onClick: this.props.onClick}, 
	        this.props.children
	      )
	    );
	  }

	});

	module.exports = Title;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var CLASS_ROOT = "object";





	var GrommetObject = React.createClass({displayName: "GrommetObject",

	  propTypes: {
	    data: React.PropTypes.object
	  },

	  _renderArray: function (array) {
	    return array.map(function (item, index) {
	      var itemContent = item;
	      if ('object' === typeof(item)) {
	        itemContent = this._renderObject(item);
	      }
	      return (
	        React.createElement("li", {key: 'i_' + index, className: "list-item"}, itemContent)
	      );
	    }, this);
	  },

	  _renderObject: function (obj) {
	    var attrs = [];
	    for (var name in obj) {
	      if (obj.hasOwnProperty(name)) {
	        var value = obj[name];
	        var classes = [CLASS_ROOT + "__attribute"];
	        if (null === value) {
	          value = 'null';
	          classes.push(CLASS_ROOT + "__attribute--unset");
	        }
	        else if (Array.isArray(value)) {
	          var items = this._renderArray(value);
	          value = (
	            React.createElement("ol", null, items)
	          );
	          classes.push(CLASS_ROOT + "__attribute--array");
	        }
	        else if ('object' === typeof value) {
	          value = this._renderObject(value);
	          classes.push(CLASS_ROOT + "__attribute--container");
	        } else {
	          value = value.toString();
	        }
	        attrs.push(
	          React.createElement("li", {key: 'n_' + name, className: classes.join(' ')}, 
	            React.createElement("span", {className: CLASS_ROOT + "__attribute-name"}, name), 
	            React.createElement("span", {className: CLASS_ROOT + "__attribute-value"}, value)
	          )
	        );
	      }
	    }

	    return(
	      React.createElement("ul", null, attrs)
	    );
	  },

	  render: function() {
	    return (
	      React.createElement("div", {className: CLASS_ROOT}, 
	        React.createElement("div", {className: CLASS_ROOT + "__container"}, 
	          this._renderObject(this.props.data)
	        )
	      )
	    );
	  }

	});

	module.exports = GrommetObject;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var TBD = React.createClass({displayName: "TBD",

	  render: function() {
	    return (
	      React.createElement("div", {className: "tbd"}, 
	        'TBD'
	      )
	    );
	  }

	});

	module.exports = TBD;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Clear = React.createClass({displayName: "Clear",

	  render: function() {
	    var className = 'control-icon control-icon-clear';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {fill: "none"}, 
	          React.createElement("line", {strokeWidth: "2", x1: "12", y1: "12", x2: "36", y2: "36"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "12", y1: "36", x2: "36", y2: "12"})
	        )
	      )
	    );
	  }

	});

	module.exports = Clear;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var DragHandle = React.createClass({displayName: "DragHandle",

	  render: function() {
	    var className = 'control-icon control-icon-drag-handle';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {stroke: "none", strokeWidth: "1", fill: "#cccccc", fillRule: "evenodd"}, 
	          React.createElement("rect", {x: "12", y: "12", width: "3", height: "3"}), 
	          React.createElement("rect", {x: "18", y: "12", width: "3", height: "3"}), 
	          React.createElement("rect", {x: "12", y: "18", width: "3", height: "3"}), 
	          React.createElement("rect", {x: "18", y: "18", width: "3", height: "3"}), 
	          React.createElement("rect", {x: "12", y: "24", width: "3", height: "3"}), 
	          React.createElement("rect", {x: "18", y: "24", width: "3", height: "3"}), 
	          React.createElement("rect", {x: "12", y: "30", width: "3", height: "3"}), 
	          React.createElement("rect", {x: "18", y: "30", width: "3", height: "3"})
	        )
	      )
	    );
	  }

	});

	module.exports = DragHandle;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Edit = React.createClass({displayName: "Edit",

	  render: function() {
	    var className = 'control-icon control-icon-edit';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {fill: "none"}, 
	          React.createElement("circle", {strokeWidth: "2", cx: "24", cy: "24", r: "9"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "24", y1: "11", x2: "24", y2: "15"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "33.2", y1: "14.8", x2: "30.3", y2: "17.6"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "37", y1: "24", x2: "33", y2: "24"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "33.2", y1: "33.2", x2: "30.3", y2: "30.4"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "24", y1: "37", x2: "24", y2: "33"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "14.8", y1: "33.2", x2: "17.7", y2: "30.4"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "11", y1: "24", x2: "15.2", y2: "24"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "14.8", y1: "14.8", x2: "17.7", y2: "17.6"})
	        )
	      )
	    );
	  }

	});

	module.exports = Edit;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Filter = React.createClass({displayName: "Filter",

	  propTypes: {
	    notifications: React.PropTypes.number
	  },

	  render: function() {
	    var className = 'control-icon control-icon-filter';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }

	    var badge = null;
	    if (this.props.notifications) {
	      badge = (
	        React.createElement("g", {className: "control-icon__badge"}, 
	          React.createElement("circle", {stroke: "none", cx: "37", cy: "11", r: "10"}), 
	          React.createElement("text", {x: "33.5", y: "16", fontSize: 16}, this.props.notifications)
	        )
	      );
	    }

	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {fill: "none"}, 
	          React.createElement("polygon", {strokeWidth: "2", points: "14,15 24,27 34,15  "}), 
	          React.createElement("line", {strokeWidth: "2", x1: "24", y1: "27", x2: "24", y2: "36"})
	        ), 
	        badge
	      )
	    );
	  }

	});

	module.exports = Filter;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Help = React.createClass({displayName: "Help",

	  render: function() {
	    var className = 'control-icon control-icon-help';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {fill: "none"}, 
	          React.createElement("path", {strokeWidth: "2", d: "M17,18c0-4,3.4-7,7-7c3.5,0,7,2.7,7,7s-3.6,7-7,7v6"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "24", y1: "37", x2: "24", y2: "35"})
	        )
	      )
	    );
	  }

	});

	module.exports = Help;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var More = React.createClass({displayName: "More",

	  render: function() {
	    var className = 'control-icon control-icon-more';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {fill: "none"}, 
	          React.createElement("rect", {x: "23", y: "23", strokeWidth: "2", width: "2", height: "2"}), 
	          React.createElement("rect", {x: "15", y: "23", strokeWidth: "2", width: "2", height: "2"}), 
	          React.createElement("rect", {x: "31", y: "23", strokeWidth: "2", width: "2", height: "2"})
	        )
	      )
	    );
	  }

	});

	module.exports = More;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Next = React.createClass({displayName: "Next",

	  render: function() {
	    var className = 'control-icon control-icon-next';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {fill: "none"}, 
	        	React.createElement("polyline", {strokeWidth: "2", points: "27.1,14 35,24 27,34"}), 
	        	React.createElement("path", {strokeWidth: "2", d: "M34.7,24C12,24,12,24,12,24"})
	        )
	      )
	    );
	  }

	});

	module.exports = Next;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Previous = React.createClass({displayName: "Previous",

	  render: function() {
	    var className = 'control-icon control-icon-previous';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {fill: "none"}, 
	          React.createElement("polyline", {strokeWidth: "2", points: "20.9,34 13,24 21,14 "}), 
	          React.createElement("path", {strokeWidth: "2", d: "M13.3,24C36,24,36,24,36,24"})
	        )
	      )
	    );
	  }

	});

	module.exports = Previous;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Search = React.createClass({displayName: "Search",

	  render: function() {
	    var className = 'control-icon control-icon-search';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {fill: "none"}, 
	          React.createElement("circle", {strokeWidth: "2", cx: "21.5", cy: "21.5", r: "9"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "35.5", y1: "35.5", x2: "27.8", y2: "27.8"})
	        )
	      )
	    );
	  }

	});

	module.exports = Search;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var SearchPlus = React.createClass({displayName: "SearchPlus",

	  render: function() {
	    var className = 'control-icon control-icon-search-plus';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {strokeWidth: "4", fill: "none", fillRule: "evenodd"}, 
	          React.createElement("circle", {strokeWidth: "4", cx: "21", cy: "21", r: "7"}), 
	          React.createElement("path", {d: "M27.2,27 L34.2,36", strokeWidth: "4", strokeLinecap: "round"}), 
	          React.createElement("path", {d: "M34,13 L34,19", strokeWidth: "2", strokeLinecap: "round"}), 
	          React.createElement("path", {d: "M37,16 L31,16", strokeWidth: "2", strokeLinecap: "round"})
	        )
	      )
	    );
	  }

	});

	module.exports = SearchPlus;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var CLASS_ROOT = "icon-spinning";

	var Spinning = React.createClass({displayName: "Spinning",

	  render: function() {
	    var classes = [CLASS_ROOT];
	    if (this.props.small) {
	      classes.push(CLASS_ROOT + "--small");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }
	    return (
	      React.createElement("svg", {className: classes.join(' '), viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("circle", {stroke: "#ddd", strokeWidth: "4", strokeDasharray: "24px 8px", fill: "none", cx: "24", cy: "24", r: "20"}), 
	        React.createElement("circle", {stroke: "#333", strokeWidth: "4", strokeDasharray: "24px 104px", fill: "none", cx: "24", cy: "24", r: "20"})
	      )
	    );
	  }

	});

	module.exports = Spinning;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);
	var OK = __webpack_require__(48);
	var ErrorStatus = __webpack_require__(49);
	var Warning = __webpack_require__(50);
	var Disabled = __webpack_require__(51);
	var Unknown = __webpack_require__(52);
	var Label = __webpack_require__(53);

	var CLASS_ROOT = "status-icon";

	var Status = React.createClass({displayName: "Status",

	  propType: {
	    large: React.PropTypes.bool,
	    small: React.PropTypes.bool,
	    value: React.PropTypes.oneOf(['error', 'warning', 'ok', 'unknown', 'disabled'])
	  },

	  getDefaultProps: function () {
	    return {value: 'unknown'};
	  },

	  render: function() {
	    var classes = [CLASS_ROOT];
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }
	    if (this.props.small) {
	      classes.push(CLASS_ROOT + "--small");
	    }
	    if (this.props.large) {
	      classes.push(CLASS_ROOT + "--large");
	    }
	    var className = classes.join(' ');
	    var icon = (React.createElement("span", null, '?'));
	    switch (this.props.value) {
	    case 'ok':
	    case 'normal':
	      icon = (React.createElement(OK, {className: className}));
	      break;
	    case 'warning':
	      icon = (React.createElement(Warning, {className: className}));
	      break;
	    case 'error':
	    case 'critical':
	      icon = (React.createElement(ErrorStatus, {className: className}));
	      break;
	    case 'disabled':
	      icon = (React.createElement(Disabled, {className: className}));
	      break;
	    case 'unknown':
	      icon = (React.createElement(Unknown, {className: className}));
	      break;
	    case 'label':
	      icon = (React.createElement(Label, {className: className}));
	      break;
	    }
	    return icon;
	  }

	});

	module.exports = Status;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014 Hewlett-Packard Development Company, L.P.

	// Allow callers to use key labels instead of key code numbers.
	// This makes their code easier to read.
	var KEYS = {
	  backspace: 8,
	  tab: 9,
	  enter: 13,
	  esc: 27,
	  escape: 27,
	  space: 32,
	  left: 37,
	  up: 38,
	  right: 39,
	  down: 40,
	  comma: 188
	};

	// KeyboardAccelerators is a mixin for handling keyboard events.
	// Add listeners using startListeningToKeyboard().
	// Remove listeners using stopListeningToKeyboard().
	// When the component that includes this is unmounted, the keyboard event
	// listener is removed automatically.
	var KeyboardAccelerators = {

	  _keyboardAcceleratorHandlers: {},
	  _keyboardAcceleratorListening: false,

	  _onKeyboardAcceleratorKeyPress: function (e) {
	    var key = (e.keyCode ? e.keyCode : e.which);
	    if (this._keyboardAcceleratorHandlers.hasOwnProperty(key)) {
	      this._keyboardAcceleratorHandlers[key](e);
	    }
	  },

	  // Add handlers for specific keys.
	  // This function can be called multiple times, existing handlers will
	  // be replaced, new handlers will be added.
	  startListeningToKeyboard: function (handlers) {
	    var keys = 0;
	    for (var key in handlers) {
	      if (handlers.hasOwnProperty(key)) {
	        var keyCode = key;
	        if (KEYS.hasOwnProperty(key)) {
	          keyCode = KEYS[key];
	        }
	        keys += 1;
	        this._keyboardAcceleratorHandlers[keyCode] = handlers[key];
	      }
	    }

	    if (keys > 0 && ! this._keyboardAcceleratorListening) {
	      window.addEventListener("keydown", this._onKeyboardAcceleratorKeyPress);
	      this._keyboardAcceleratorListening = true;
	    }
	  },

	  // Remove handlers for all keys or specific keys.
	  // If no argument is passed in, all handlers are removed.
	  // This function can be called multiple times, only the handlers
	  // specified will be removed.
	  stopListeningToKeyboard: function (handlers) {
	    if (handlers) {
	      for (var key in handlers) {
	        if (handlers.hasOwnProperty(key)) {
	          var keyCode = key;
	          if (KEYS.hasOwnProperty(key)) {
	            keyCode = KEYS[key];
	          }
	          delete this._keyboardAcceleratorHandlers[keyCode];
	        }
	      }
	    }

	    var keyCount = 0;
	    for (var keyHandler in this._keyboardAcceleratorHandlers) {
	      if (this._keyboardAcceleratorHandlers.hasOwnProperty(keyHandler)) {
	        keyCount += 1;
	      }
	    }

	    if (! handlers || 0 === keyCount) {
	      window.removeEventListener("keydown", this._onKeyboardAcceleratorKeyPress);
	      this._keyboardAcceleratorHandlers = {};
	      this._keyboardAcceleratorListening = false;
	    }
	  },

	  componentWillUnmount: function () {
	    this.stopListeningToKeyboard();
	  }
	};

	module.exports = KeyboardAccelerators;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	// http://jsfiddle.net/LBAr8/

	var React = __webpack_require__(42);

	var ReactLayeredComponent = {

	  componentWillUnmount: function() {
	    this._unrenderLayer();
	    document.body.removeChild(this._target);
	  },
	  componentDidUpdate: function() {
	    this._renderLayer();
	  },
	  componentDidMount: function() {
	    // Appending to the body is easier than managing the z-index of everything on the page.
	    // It's also better for accessibility and makes stacking a snap (since components will stack
	    // in mount order).
	    this._target = document.createElement('div');
	    document.body.appendChild(this._target);
	    this._renderLayer();
	  },
	  _renderLayer: function() {
	    // By calling this method in componentDidMount() and componentDidUpdate(), you're effectively
	    // creating a "wormhole" that funnels React's hierarchical updates through to a DOM node on an
	    // entirely different part of the page.
	    React.render(this.renderLayer(), this._target);
	  },
	  _unrenderLayer: function() {
	    React.unmountComponentAtNode(this._target);
	  }
	};

	module.exports = ReactLayeredComponent;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var Reflux = __webpack_require__(54);
	var Rest = __webpack_require__(41);

	var Actions = Reflux.createActions({
	  // Session
	  'login': {asyncResult: true},
	  'logout': {}
	});

	Actions.login.listen(function(userName, password) {
	  if (!userName || !password) {
	    return this.failed(400, { message: 'Please provide userName and password.' });
	  }

	  var thisAction = this;
	  Rest.post('/rest/login-sessions',
	    {authLoginDomain: 'LOCAL', userName: userName, password: password, loginMsgAck: true})
	    .end(function(err, res) {
	      if (err || !res.ok) {
	        return thisAction.failed(err, res.body);
	      }
	      thisAction.completed(userName, res.body.sessionID);
	    });
	});

	module.exports = Actions;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var Reflux = __webpack_require__(54);
	var Actions = __webpack_require__(39);
	var Cookies = __webpack_require__(47);

	var TOKEN = "token";
	var USER = "user";
	var LOGIN_TIME = "loginTime";
	var EMAIL = "email";

	var SessionStore = Reflux.createStore({

	  _data: {
	    id: null,
	    name: null,
	    created: null,
	    email: null,
	    loginError: null // {message: , resolution: }
	  },

	  init: function () {
	    this._data.id = Cookies.get(TOKEN);
	    this._data.name = Cookies.get(USER);
	    this._data.created = Cookies.get(LOGIN_TIME);
	    this._data.email = Cookies.get(EMAIL);

	    this.listenTo(Actions.login.completed, this._onLoginCompleted);
	    this.listenTo(Actions.login.failed, this._onLoginFailed);
	    this.listenTo(Actions.logout, this._onLogout);
	  },

	  _onLoginCompleted: function (username, id) {
	    this._data.id = id;
	    this._data.name = username;
	    this._data.created = new Date();
	    this._data.loginError = null;
	    if (username.indexOf('@') !== -1) {
	      this._data.email = username;
	    }
	    Cookies.set(TOKEN, this._data.id);
	    Cookies.set(USER, this._data.name);
	    Cookies.set(LOGIN_TIME, this._data.created);
	    Cookies.set(EMAIL, this._data.email);
	    this.trigger(this._data);
	  },

	  _onLoginFailed: function (error, response) {
	    this._data.loginError = {
	      message: response.message,
	      resolution: response.resolution
	    };
	    this.trigger(this._data);
	  },

	  _onLogout: function () {
	    this._data.id = null;
	    this._data.name = null;
	    this._data.created = null;
	    this._data.email = null;
	    Cookies.remove(TOKEN);
	    Cookies.remove(USER);
	    Cookies.remove(LOGIN_TIME);
	    Cookies.remove(EMAIL);
	    this.trigger(this._data);
	  },

	  getInitialState: function () {
	    return this._data;
	  }
	});

	module.exports = SessionStore;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var request = __webpack_require__(56);

	var _headers = {};

	var _timeout = 10000; // 10s

	// convert params to string, to deal with array values
	function buildQueryParams(params) {
	  var result = [];
	  for (var property in params) {
	    if (params.hasOwnProperty(property)) {
	      var value = params[property];
	      if (null !== value && undefined !== value) {
	        if (Array.isArray(value)) {
	          for (var i=0; i<value.length; i++) {
	            result.push(property + '=' + value[i]);
	          }
	        } else {
	          result.push(property + '=' + value);
	        }
	      }
	    }
	  }
	  return result.join('&');
	}

	var Rest = {

	  setTimeout: function (timeout) {
	    _timeout = timeout;
	  },

	  setHeaders: function (headers) {
	    _headers = headers;
	  },

	  setHeader: function (name, value) {
	    _headers[name] = value;
	  },

	  head: function (uri, params) {
	    var op = request.head(uri).query(buildQueryParams(params));
	    op.timeout(_timeout);
	    op.set(_headers);
	    return op;
	  },

	  get: function (uri, params) {
	    var op = request.get(uri).query(buildQueryParams(params));
	    op.timeout(_timeout);
	    op.set(_headers);
	    return op;
	  },

	  patch: function (uri, data) {
	    var op = request.patch(uri).send(data);
	    op.timeout(_timeout);
	    op.set(_headers);
	    return op;
	  },

	  post: function (uri, data) {
	    var op = request.post(uri).send(data);
	    op.timeout(_timeout);
	    op.set(_headers);
	    return op;
	  },

	  put: function (uri, data) {
	    var op = request.put(uri).send(data);
	    op.timeout(_timeout);
	    op.set(_headers);
	    return op;
	  },

	  del: function (uri) {
	    var op = request.del(uri);
	    op.timeout(_timeout);
	    op.set(_headers);
	    return op;
	  }
	};

	module.exports = Rest;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Top = React.createClass({displayName: "Top",

	  render: function() {
	    var className = 'control-icon control-icon-top';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {fill: "none"}, 
	          React.createElement("polyline", {strokeWidth: "2", points: "14,20.9 24,13 34,21 "}), 
	          React.createElement("path", {strokeWidth: "2", d: "M24,13.3C24,36,24,36,24,36"}), 
	          React.createElement("line", {strokeWidth: "2", x1: "13", y1: "11", x2: "35", y2: "11"})
	        )
	      )
	    );
	  }

	});

	module.exports = Top;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014 Hewlett-Packard Development Company, L.P.

	var DOM = __webpack_require__(55);

	// Overlay is a mixin for ensuring components layerd on top align with their initiating controls underneath.
	var Overlay = {

	  _overlay: {
	    controlElement: null,
	    layerElement: null,
	    align: null,
	    scrollParents: []
	  },

	  startOverlay: function (controlElement, layerElement, align) {
	    this._overlay.controlElement = controlElement;
	    this._overlay.layerElement = layerElement;
	    this._overlay.align = align;
	    this._overlay.scrollParents = DOM.findScrollParents(this._overlay.controlElement);
	    this._overlay.scrollParents.forEach(function (parent) {
	      parent.addEventListener('scroll', this.positionOverlay);
	    }, this);
	    window.addEventListener('resize', this.positionOverlay);

	    this.positionOverlay();
	  },

	  stopOverlay: function () {
	    if (this._overlay.controlElement) {
	      this._overlay.scrollParents.forEach(function (parent) {
	        parent.removeEventListener('scroll', this.positionOverlay);
	      }, this);
	      window.removeEventListener('resize', this.positionOverlay);
	      this._overlay.controlElement = null;
	      this._overlay.layerElement = null;
	      this._overlay.align = null;
	      this._overlay.scrollParents = [];
	    }
	  },

	  positionOverlay: function () {
	    var controlElement = this._overlay.controlElement;
	    var layerElement = this._overlay.layerElement;

	    var controlRect = controlElement.getBoundingClientRect();
	    var windowWidth = window.innerWidth;

	    // clear prior styling
	    layerElement.style.left = '';
	    layerElement.style.width = '';
	    layerElement.style.top = '';

	    var width = Math.min(
	      Math.max(controlRect.width, layerElement.offsetWidth),
	        windowWidth);
	    // align right edge and make at least as wide as the control
	    var left = (controlRect.left + layerElement.offsetWidth) - width;
	    if ('right' === this._overlay.align) {
	      // align right edge
	      left = (controlRect.left + controlRect.width) -
	        layerElement.offsetWidth;
	    } else {
	      // align left edge
	      left = controlRect.left;
	    }
	    if ((left + width) > windowWidth) {
	      left -= ((left + width) - windowWidth);
	    } else if (left < 0) {
	      left = 0;
	    }

	    var top = controlRect.top;
	    if ('up' === this.props.direction) {
	      // align bottom edge
	      top = (controlRect.top + controlRect.height) -
	        layerElement.offsetHeight;
	    } else if ('below' === this._overlay.align) {
	      // align top of layer to bottom of control
	      top = (controlRect.top + controlRect.height);
	    }

	    // ensure height is within viewport
	    var maxHeight = window.innerHeight - top;

	    layerElement.style.left = '' + left + 'px';
	    layerElement.style.width = '' + width + 'px';
	    layerElement.style.top = '' + top + 'px';
	    layerElement.style.maxHeight = '' + maxHeight + 'px';
	  },

	  componentWillUnmount: function () {
	    this.stopOverlay();
	  }
	};

	module.exports = Overlay;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var DropCaret = React.createClass({displayName: "DropCaret",

	  render: function() {
	    var className = 'control-icon control-icon-drop-caret';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 48 48", version: "1.1"}, 
	        React.createElement("g", {fill: "none"}, 
	          React.createElement("path", {strokeWidth: "2", d: "M12,18l12,9l12-9"})
	        )
	      )
	    );
	  }

	});

	module.exports = DropCaret;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014 Hewlett-Packard Development Company, L.P.

	var DOM = __webpack_require__(55);

	var SCROLL_MORE_DELAY = 2000; // when the user scrolls
	var SCROLL_MORE_INITIAL_DELAY = 200; // when we start out at the bottom already

	var InfiniteScroll = {

	  _infiniteScroll: {
	    indicatorElement: null,
	    scrollParent: null,
	    onEnd: null
	  },

	  _onScroll: function () {
	    // delay a bit to ride out quick users
	    clearTimeout(this._infiniteScroll.scrollTimer);
	    this._infiniteScroll.scrollTimer = setTimeout(function () {
	      // are we at the bottom?
	      var parentRect = this._infiniteScroll.scrollParent.getBoundingClientRect();
	      var indicatorRect = this._infiniteScroll.indicatorElement.getBoundingClientRect();
	      if (indicatorRect.bottom <= parentRect.bottom) {
	        this._infiniteScroll.onEnd();
	      }
	    }.bind(this), SCROLL_MORE_DELAY);
	  },

	  startListeningForScroll: function (indicatorElement, onEnd) {
	    this._infiniteScroll.onEnd = onEnd;
	    this._infiniteScroll.indicatorElement = indicatorElement;
	    this._infiniteScroll.scrollParent = DOM.findScrollParents(indicatorElement)[0];
	    this._infiniteScroll.scrollParent.addEventListener("scroll", this._onScroll);
	    // check in case we're already at the bottom
	    if (this._infiniteScroll.scrollParent === document) {
	      this._infiniteScroll.scrollTimer = setTimeout(onEnd, SCROLL_MORE_INITIAL_DELAY);
	    }
	  },

	  stopListeningForScroll: function () {
	    if (this._infiniteScroll.scrollParent) {
	      clearTimeout(this._infiniteScroll.scrollTimer);
	      this._infiniteScroll.scrollParent.removeEventListener("scroll", this._onScroll);
	      this._infiniteScroll.scrollParent = null;
	    }
	  },

	  componentWillUnmount: function () {
	    this.stopListeningForScroll();
	  }
	};

	module.exports = InfiniteScroll;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2015 Hewlett-Packard Development Company, L.P.

	// Slightly modified version of the Mozilla Developer Network version.
	// renamed the module and the functions.

	/*\
	|*|
	|*|  :: cookies.js ::
	|*|
	|*|  A complete cookies reader/writer framework with full unicode support.
	|*|
	|*|  Revision #1 - September 4, 2014
	|*|
	|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
	|*|  https://developer.mozilla.org/User:fusionchess
	|*|
	|*|  This framework is released under the GNU Public License, version 3 or later.
	|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
	|*|
	|*|  Syntaxes:
	|*|
	|*|  * Cookies.set(name, value[, end[, path[, domain[, secure]]]])
	|*|  * Cookies.get(name)
	|*|  * Cookies.remove(name[, path[, domain]])
	|*|  * Cookies.has(name)
	|*|  * Cookies.keys()
	|*|
	\*/

	var Cookies = {
	  get: function (sKey) {
	    if (!sKey) { return null; }
	    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	  },
	  set: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
	    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
	    var sExpires = "";
	    if (vEnd) {
	      switch (vEnd.constructor) {
	        case Number:
	          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
	          break;
	        case String:
	          sExpires = "; expires=" + vEnd;
	          break;
	        case Date:
	          sExpires = "; expires=" + vEnd.toUTCString();
	          break;
	      }
	    }
	    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
	    return true;
	  },
	  remove: function (sKey, sPath, sDomain) {
	    if (!this.has(sKey)) { return false; }
	    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
	    return true;
	  },
	  has: function (sKey) {
	    if (!sKey) { return false; }
	    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
	  },
	  keys: function () {
	    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
	    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
	    return aKeys;
	  }
	};

	module.exports = Cookies;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var OK = React.createClass({displayName: "OK",

	  render: function() {
	    var className = 'status-icon status-icon-ok';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 24 24", version: "1.1"}, 
	      	React.createElement("g", {className: "status-icon__base", fill: "#43A547"}, 
	          React.createElement("path", {d: "M0,4.4058651 L0,19.657478 C0,21.7548387 2.41428571,23.9929619 4.68571429,23.9929619 L19.4571429,23.9929619 C21.7285714,23.9929619 24,21.8956012 24,19.657478 L24,4.4058651 C24,2.3085044 21.7285714,0.0703812317 19.4571429,0.0703812317 L4.68571429,0.0703812317 C2.27142857,0.0703812317 0,2.16774194 0,4.4058651 L0,4.4058651 Z"})
	        ), 
	        React.createElement("g", {className: "status-icon__detail", fill: "#FFFFFF", transform: "translate(4.214286, 3.519062)"}, 
	          React.createElement("path", {d: "M0.0428571429,6.76363636 L0.0428571429,10.5431085 L6.86428571,15.4416422 L15.6642857,4.80703812 L15.6642857,0.0492668622 L6.15,11.2469208 L0.0428571429,6.76363636 Z"})
	      	)
	      )
	    );
	  }

	});

	module.exports = OK;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var ErrorStatus = React.createClass({displayName: "ErrorStatus",

	  render: function() {
	    var className = 'status-icon status-icon-error';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 24 24", version: "1.1"}, 
	      	React.createElement("g", {className: "status-icon__base", fill: "#DC462F"}, 
	          React.createElement("circle", {cx: "12", cy: "12", r: "12"})
	        ), 
	        React.createElement("g", {className: "status-icon__detail", fill: "#FFFFFF"}, 
	          React.createElement("rect", {x: "4", y: "10", width: "16", height: "4"})
	      	)
	      )
	    );
	  }

	});

	module.exports = ErrorStatus;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Warning = React.createClass({displayName: "Warning",

	  render: function() {
	    var className = 'status-icon status-icon-warning';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 27 24", version: "1.1"}, 
	      	React.createElement("g", {className: "status-icon__base", fill: "#F3B51D"}, 
		        React.createElement("path", {d: "M26.758209,22.8752239 L14.1062687,0.494328358 C13.8268657,-0.071641791 13.2608955,-0.071641791 12.838209,0.494328358 L0.179104478,22.8752239 C-0.100298507,23.441194 0.179104478,24 0.745074627,24 L26.0561194,24 C26.758209,24 27.0376119,23.5773134 26.758209,22.8752239 L26.758209,22.8752239 Z"})
	        ), 
	        React.createElement("g", {className: "status-icon__detail", fill: "#FFFFFF", transform: "translate(12.250746, 7.307463)"}, 
	          React.createElement("path", {d: "M2.69373134,9.01970149 L0.0214925373,9.01970149 L0.0214925373,0.0143283582 L2.69373134,0.0143283582 L2.69373134,9.01970149 L2.69373134,9.01970149 Z M2.69373134,10.9898507 L0.0214925373,10.9898507 L0.0214925373,13.6620896 L2.69373134,13.6620896 L2.69373134,10.9898507 L2.69373134,10.9898507 Z"})
	      	)
	      )
	    );
	  }

	});

	module.exports = Warning;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Disabled = React.createClass({displayName: "Disabled",

	  render: function() {
	    var className = 'status-icon status-icon-disabled';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 24 24", version: "1.1"}, 
	      	React.createElement("g", {className: "status-icon__base", fill: "#848484"}, 
	          React.createElement("path", {d: "M12,0 L0,12 L12,24 L24,12 L12,0 L12,0 Z"})
	        ), 
	        React.createElement("g", {className: "status-icon__detail", fill: "#FFFFFF"}, 
	          React.createElement("circle", {cx: "12", cy: "12", r: "5.5"})
	      	)
	      )
	    );
	  }

	});

	module.exports = Disabled;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Unknown = React.createClass({displayName: "Unknown",

	  render: function() {
	    var className = 'status-icon status-icon-unknown';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 24 24", version: "1.1"}, 
	      	React.createElement("g", {className: "status-icon__base", fill: "#848484"}, 
	          React.createElement("path", {d: "M12,0 L0,12 L12,24 L24,12 L12,0 L12,0 Z"})
	        ), 
	        React.createElement("g", {className: "status-icon__detail", fill: "#FFFFFF", transform: "translate(7.524324, 4.994595)"}, 
	          React.createElement("path", {d: "M8.89945946,3.97621622 C8.89945946,4.48216216 8.64648649,4.98810811 8.39351351,5.49405405 C8.0172973,5.87027027 7.51135135,6.62918919 6.49945946,7.38810811 C5.99351351,7.76432432 5.74054054,8.14702703 5.6172973,8.4 L5.6172973,8.77621622 C5.49405405,9.02918919 5.49405405,9.53513514 5.49405405,10.1643243 L3.47027027,10.1643243 L3.47027027,9.53513514 C3.47027027,8.90594595 3.59351351,8.0172973 3.84648649,7.51135135 C3.96972973,7.13513514 4.47567568,6.62918919 5.23459459,5.99351351 C5.99351351,5.36432432 6.36972973,4.98162162 6.49945946,4.85837838 C6.75243243,4.60540541 6.87567568,4.35243243 6.87567568,3.97621622 C6.87567568,3.6 6.6227027,3.2172973 6.24648649,2.84108108 C5.87027027,2.46486486 5.23459459,2.33513514 4.60540541,2.33513514 C3.97621622,2.33513514 3.47027027,2.45837838 2.96432432,2.71135135 C2.58810811,2.96432432 2.20540541,3.34054054 2.08216216,3.84648649 L0.0583783784,3.84648649 C0.0583783784,2.83459459 0.564324324,1.95243243 1.32324324,1.19351351 C2.20540541,0.434594595 3.2172973,0.0583783784 4.48216216,0.0583783784 C5.87027027,0.0583783784 7.00540541,0.434594595 7.76432432,1.19351351 C8.51675676,1.95891892 8.89945946,2.96432432 8.89945946,3.97621622 L8.89945946,3.97621622 Z M4.47567568,10.9232432 C3.71675676,10.9232432 2.95783784,11.6821622 2.95783784,12.4410811 C2.95783784,13.2 3.71675676,13.9589189 4.47567568,13.9589189 C5.23459459,13.9589189 5.99351351,13.2 5.99351351,12.4410811 C5.99351351,11.6821622 5.23459459,10.9232432 4.47567568,10.9232432 L4.47567568,10.9232432 Z"})
	      	)
	      )
	    );
	  }

	});

	module.exports = Unknown;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Label = React.createClass({displayName: "Label",

	  render: function() {
	    var className = 'status-icon status-icon-label';
	    if (this.props.className) {
	      className += ' ' + this.props.className;
	    }
	    return (
	      React.createElement("svg", {className: className, viewBox: "0 0 24 24", version: "1.1"}, 
	      	React.createElement("g", {className: "status-icon__base", fill: "#CCCCCC"}, 
	          React.createElement("circle", {cx: "12", cy: "12", r: "12"})
	        )
	      )
	    );
	  }

	});

	module.exports = Label;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(57);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	module.exports = {
	  findScrollParents: function (element) {
	    var result = [];
	    var parent = element.parentNode;
	    while (parent) {
	      // account for border the lazy way for now
	      if (parent.scrollHeight > (parent.offsetHeight + 10)) {
	        result.push(parent);
	      }
	      parent = parent.parentNode;
	    }
	    if (result.length === 0) {
	      result.push(document);
	    }
	    return result;
	  }
	};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Emitter = __webpack_require__(72);
	var reduce = __webpack_require__(73);

	/**
	 * Root reference for iframes.
	 */

	var root = 'undefined' == typeof window
	  ? (this || self)
	  : window;

	/**
	 * Noop.
	 */

	function noop(){};

	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isHost(obj) {
	  var str = {}.toString.call(obj);

	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}

	/**
	 * Determine XHR.
	 */

	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};

	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */

	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */

	function isObject(obj) {
	  return obj === Object(obj);
	}

	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */

	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pairs.push(encodeURIComponent(key)
	        + '=' + encodeURIComponent(obj[key]));
	    }
	  }
	  return pairs.join('&');
	}

	/**
	 * Expose serialization method.
	 */

	 request.serializeObject = serialize;

	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */

	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;

	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }

	  return obj;
	}

	/**
	 * Expose parser.
	 */

	request.parseString = parseString;

	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */

	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};

	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */

	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };

	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */

	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};

	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;

	  lines.pop(); // trailing CRLF

	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }

	  return fields;
	}

	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */

	function type(str){
	  return str.split(/ *; */).shift();
	};

	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */

	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();

	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};

	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */

	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}

	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */

	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};

	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */

	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);

	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};

	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */

	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};

	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */

	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }

	  var type = status / 100 | 0;

	  // status / class
	  this.status = status;
	  this.statusType = type;

	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;

	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};

	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */

	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;

	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;

	  return err;
	};

	/**
	 * Expose `Response`.
	 */

	request.Response = Response;

	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */

	function Request(method, url) {
	  var self = this;
	  Emitter.call(this);
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {};
	  this._header = {};
	  this.on('end', function(){
	    var err = null;
	    var res = null;

	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      return self.callback(err);
	    }

	    self.emit('response', res);

	    if (err) {
	      return self.callback(err, res);
	    }

	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }

	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;

	    self.callback(err || new_err, res);
	  });
	}

	/**
	 * Mixin `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Allow for extension
	 */

	Request.prototype.use = function(fn) {
	  fn(this);
	  return this;
	}

	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.timeout = function(ms){
	  this._timeout = ms;
	  return this;
	};

	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.clearTimeout = function(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};

	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */

	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};

	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};

	/**
	 * Remove header `field`.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};

	/**
	 * Get case-insensitive header `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 */

	Request.prototype.getHeader = function(field){
	  return this._header[field.toLowerCase()];
	};

	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};

	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.auth = function(user, pass){
	  var str = btoa(user + ':' + pass);
	  this.set('Authorization', 'Basic ' + str);
	  return this;
	};

	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/

	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};

	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File} val
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.field = function(name, val){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(name, val);
	  return this;
	};

	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.attach = function(field, file, filename){
	  if (!this._formData) this._formData = new root.FormData();
	  this._formData.append(field, file, filename);
	  return this;
	};

	/**
	 * Send `data`, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // querystring
	 *       request.get('/search')
	 *         .end(callback)
	 *
	 *       // multiple data "writes"
	 *       request.get('/search')
	 *         .send({ search: 'query' })
	 *         .send({ range: '1..5' })
	 *         .send({ order: 'desc' })
	 *         .end(callback)
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"})
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this.getHeader('Content-Type');

	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this.getHeader('Content-Type');
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }

	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};

	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */

	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};

	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */

	Request.prototype.crossDomainError = function(){
	  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
	  err.crossDomain = true;
	  this.callback(err);
	};

	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */

	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};

	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */

	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};

	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */

	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;

	  // store callback
	  this._callback = fn || noop;

	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;

	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }

	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };

	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }

	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }

	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }

	  // initiate request
	  xhr.open(this.method, this.url, true);

	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;

	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var serialize = request.serialize[this.getHeader('Content-Type')];
	    if (serialize) data = serialize(data);
	  }

	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }

	  // send stuff
	  this.emit('request', this);
	  xhr.send(data);
	  return this;
	};

	/**
	 * Expose `Request`.
	 */

	request.Request = Request;

	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */

	function request(method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new Request('GET', method).end(url);
	  }

	  // url first
	  if (1 == arguments.length) {
	    return new Request('GET', method);
	  }

	  return new Request(method, url);
	}

	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.del = function(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */

	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

	/**
	 * Expose `request`.
	 */

	module.exports = request;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports.ActionMethods = __webpack_require__(58);

	exports.ListenerMethods = __webpack_require__(59);

	exports.PublisherMethods = __webpack_require__(60);

	exports.StoreMethods = __webpack_require__(61);

	exports.createAction = __webpack_require__(62);

	exports.createStore = __webpack_require__(63);

	exports.connect = __webpack_require__(64);

	exports.connectFilter = __webpack_require__(65);

	exports.ListenerMixin = __webpack_require__(66);

	exports.listenTo = __webpack_require__(67);

	exports.listenToMany = __webpack_require__(68);


	var maker = __webpack_require__(69).staticJoinCreator;

	exports.joinTrailing = exports.all = maker("last"); // Reflux.all alias for backward compatibility

	exports.joinLeading = maker("first");

	exports.joinStrict = maker("strict");

	exports.joinConcat = maker("all");

	var _ = __webpack_require__(70);

	exports.EventEmitter = _.EventEmitter;

	exports.Promise = _.Promise;

	/**
	 * Convenience function for creating a set of actions
	 *
	 * @param definitions the definitions for the actions to be created
	 * @returns an object with actions of corresponding action names
	 */
	exports.createActions = function(definitions) {
	    var actions = {};
	    for (var k in definitions){
	        if (definitions.hasOwnProperty(k)) {
	            var val = definitions[k],
	                actionName = _.isObject(val) ? k : val;

	            actions[actionName] = exports.createAction(val);
	        }
	    }
	    return actions;
	};

	/**
	 * Sets the eventmitter that Reflux uses
	 */
	exports.setEventEmitter = function(ctx) {
	    var _ = __webpack_require__(70);
	    exports.EventEmitter = _.EventEmitter = ctx;
	};


	/**
	 * Sets the Promise library that Reflux uses
	 */
	exports.setPromise = function(ctx) {
	    var _ = __webpack_require__(70);
	    exports.Promise = _.Promise = ctx;
	};


	/**
	 * Sets the Promise factory that creates new promises
	 * @param {Function} factory has the signature `function(resolver) { return [new Promise]; }`
	 */
	exports.setPromiseFactory = function(factory) {
	    var _ = __webpack_require__(70);
	    _.createPromise = factory;
	};


	/**
	 * Sets the method used for deferring actions and stores
	 */
	exports.nextTick = function(nextTick) {
	    var _ = __webpack_require__(70);
	    _.nextTick = nextTick;
	};

	/**
	 * Provides the set of created actions and stores for introspection
	 */
	exports.__keep = __webpack_require__(71);

	/**
	 * Warn if Function.prototype.bind not available
	 */
	if (!Function.prototype.bind) {
	  console.error(
	    'Function.prototype.bind not available. ' +
	    'ES5 shim required. ' +
	    'https://github.com/spoike/refluxjs#es5'
	  );
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A module of methods that you want to include in all actions.
	 * This module is consumed by `createAction`.
	 */
	module.exports = {
	};


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(70),
	    maker = __webpack_require__(69).instanceJoinCreator;

	/**
	 * Extract child listenables from a parent from their
	 * children property and return them in a keyed Object
	 *
	 * @param {Object} listenable The parent listenable
	 */
	var mapChildListenables = function(listenable) {
	    var i = 0, children = {}, childName;
	    for (;i < (listenable.children||[]).length; ++i) {
	        childName = listenable.children[i];
	        if(listenable[childName]){
	            children[childName] = listenable[childName];
	        }
	    }
	    return children;
	};

	/**
	 * Make a flat dictionary of all listenables including their
	 * possible children (recursively), concatenating names in camelCase.
	 *
	 * @param {Object} listenables The top-level listenables
	 */
	var flattenListenables = function(listenables) {
	    var flattened = {};
	    for(var key in listenables){
	        var listenable = listenables[key];
	        var childMap = mapChildListenables(listenable);

	        // recursively flatten children
	        var children = flattenListenables(childMap);

	        // add the primary listenable and chilren
	        flattened[key] = listenable;
	        for(var childKey in children){
	            var childListenable = children[childKey];
	            flattened[key + _.capitalize(childKey)] = childListenable;
	        }
	    }

	    return flattened;
	};

	/**
	 * A module of methods related to listening.
	 */
	module.exports = {

	    /**
	     * An internal utility function used by `validateListening`
	     *
	     * @param {Action|Store} listenable The listenable we want to search for
	     * @returns {Boolean} The result of a recursive search among `this.subscriptions`
	     */
	    hasListener: function(listenable) {
	        var i = 0, j, listener, listenables;
	        for (;i < (this.subscriptions||[]).length; ++i) {
	            listenables = [].concat(this.subscriptions[i].listenable);
	            for (j = 0; j < listenables.length; j++){
	                listener = listenables[j];
	                if (listener === listenable || listener.hasListener && listener.hasListener(listenable)) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    },

	    /**
	     * A convenience method that listens to all listenables in the given object.
	     *
	     * @param {Object} listenables An object of listenables. Keys will be used as callback method names.
	     */
	    listenToMany: function(listenables){
	        var allListenables = flattenListenables(listenables);
	        for(var key in allListenables){
	            var cbname = _.callbackName(key),
	                localname = this[cbname] ? cbname : this[key] ? key : undefined;
	            if (localname){
	                this.listenTo(allListenables[key],localname,this[cbname+"Default"]||this[localname+"Default"]||localname);
	            }
	        }
	    },

	    /**
	     * Checks if the current context can listen to the supplied listenable
	     *
	     * @param {Action|Store} listenable An Action or Store that should be
	     *  listened to.
	     * @returns {String|Undefined} An error message, or undefined if there was no problem.
	     */
	    validateListening: function(listenable){
	        if (listenable === this) {
	            return "Listener is not able to listen to itself";
	        }
	        if (!_.isFunction(listenable.listen)) {
	            return listenable + " is missing a listen method";
	        }
	        if (listenable.hasListener && listenable.hasListener(this)) {
	            return "Listener cannot listen to this listenable because of circular loop";
	        }
	    },

	    /**
	     * Sets up a subscription to the given listenable for the context object
	     *
	     * @param {Action|Store} listenable An Action or Store that should be
	     *  listened to.
	     * @param {Function|String} callback The callback to register as event handler
	     * @param {Function|String} defaultCallback The callback to register as default handler
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is the object being listened to
	     */
	    listenTo: function(listenable, callback, defaultCallback) {
	        var desub, unsubscriber, subscriptionobj, subs = this.subscriptions = this.subscriptions || [];
	        _.throwIf(this.validateListening(listenable));
	        this.fetchInitialState(listenable, defaultCallback);
	        desub = listenable.listen(this[callback]||callback, this);
	        unsubscriber = function() {
	            var index = subs.indexOf(subscriptionobj);
	            _.throwIf(index === -1,'Tried to remove listen already gone from subscriptions list!');
	            subs.splice(index, 1);
	            desub();
	        };
	        subscriptionobj = {
	            stop: unsubscriber,
	            listenable: listenable
	        };
	        subs.push(subscriptionobj);
	        return subscriptionobj;
	    },

	    /**
	     * Stops listening to a single listenable
	     *
	     * @param {Action|Store} listenable The action or store we no longer want to listen to
	     * @returns {Boolean} True if a subscription was found and removed, otherwise false.
	     */
	    stopListeningTo: function(listenable){
	        var sub, i = 0, subs = this.subscriptions || [];
	        for(;i < subs.length; i++){
	            sub = subs[i];
	            if (sub.listenable === listenable){
	                sub.stop();
	                _.throwIf(subs.indexOf(sub)!==-1,'Failed to remove listen from subscriptions list!');
	                return true;
	            }
	        }
	        return false;
	    },

	    /**
	     * Stops all subscriptions and empties subscriptions array
	     */
	    stopListeningToAll: function(){
	        var remaining, subs = this.subscriptions || [];
	        while((remaining=subs.length)){
	            subs[0].stop();
	            _.throwIf(subs.length!==remaining-1,'Failed to remove listen from subscriptions list!');
	        }
	    },

	    /**
	     * Used in `listenTo`. Fetches initial data from a publisher if it has a `getInitialState` method.
	     * @param {Action|Store} listenable The publisher we want to get initial state from
	     * @param {Function|String} defaultCallback The method to receive the data
	     */
	    fetchInitialState: function (listenable, defaultCallback) {
	        defaultCallback = (defaultCallback && this[defaultCallback]) || defaultCallback;
	        var me = this;
	        if (_.isFunction(defaultCallback) && _.isFunction(listenable.getInitialState)) {
	            var data = listenable.getInitialState();
	            if (data && _.isFunction(data.then)) {
	                data.then(function() {
	                    defaultCallback.apply(me, arguments);
	                });
	            } else {
	                defaultCallback.call(this, data);
	            }
	        }
	    },

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with the last emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinTrailing: maker("last"),

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with the first emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinLeading: maker("first"),

	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with all emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinConcat: maker("all"),

	    /**
	     * The callback will be called once all listenables have triggered.
	     * If a callback triggers twice before that happens, an error is thrown.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinStrict: maker("strict")
	};


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(70);

	/**
	 * A module of methods for object that you want to be able to listen to.
	 * This module is consumed by `createStore` and `createAction`
	 */
	module.exports = {

	    /**
	     * Hook used by the publisher that is invoked before emitting
	     * and before `shouldEmit`. The arguments are the ones that the action
	     * is invoked with. If this function returns something other than
	     * undefined, that will be passed on as arguments for shouldEmit and
	     * emission.
	     */
	    preEmit: function() {},

	    /**
	     * Hook used by the publisher after `preEmit` to determine if the
	     * event should be emitted with given arguments. This may be overridden
	     * in your application, default implementation always returns true.
	     *
	     * @returns {Boolean} true if event should be emitted
	     */
	    shouldEmit: function() { return true; },

	    /**
	     * Subscribes the given callback for action triggered
	     *
	     * @param {Function} callback The callback to register as event handler
	     * @param {Mixed} [optional] bindContext The context to bind the callback with
	     * @returns {Function} Callback that unsubscribes the registered event handler
	     */
	    listen: function(callback, bindContext) {
	        bindContext = bindContext || this;
	        var eventHandler = function(args) {
	            if (aborted){
	                return;
	            }
	            callback.apply(bindContext, args);
	        }, me = this, aborted = false;
	        this.emitter.addListener(this.eventLabel, eventHandler);
	        return function() {
	            aborted = true;
	            me.emitter.removeListener(me.eventLabel, eventHandler);
	        };
	    },

	    /**
	     * Attach handlers to promise that trigger the completed and failed
	     * child publishers, if available.
	     *
	     * @param {Object} The promise to attach to
	     */
	    promise: function(promise) {
	        var me = this;

	        var canHandlePromise =
	            this.children.indexOf('completed') >= 0 &&
	            this.children.indexOf('failed') >= 0;

	        if (!canHandlePromise){
	            throw new Error('Publisher must have "completed" and "failed" child publishers');
	        }

	        promise.then(function(response) {
	            return me.completed(response);
	        }, function(error) {
	            return me.failed(error);
	        });
	    },

	    /**
	     * Subscribes the given callback for action triggered, which should
	     * return a promise that in turn is passed to `this.promise`
	     *
	     * @param {Function} callback The callback to register as event handler
	     */
	    listenAndPromise: function(callback, bindContext) {
	        var me = this;
	        bindContext = bindContext || this;
	        this.willCallPromise = (this.willCallPromise || 0) + 1;

	        var removeListen = this.listen(function() {

	            if (!callback) {
	                throw new Error('Expected a function returning a promise but got ' + callback);
	            }

	            var args = arguments,
	                promise = callback.apply(bindContext, args);
	            return me.promise.call(me, promise);
	        }, bindContext);

	        return function () {
	          me.willCallPromise--;
	          removeListen.call(me);
	        };

	    },

	    /**
	     * Publishes an event using `this.emitter` (if `shouldEmit` agrees)
	     */
	    trigger: function() {
	        var args = arguments,
	            pre = this.preEmit.apply(this, args);
	        args = pre === undefined ? args : _.isArguments(pre) ? pre : [].concat(pre);
	        if (this.shouldEmit.apply(this, args)) {
	            this.emitter.emit(this.eventLabel, args);
	        }
	    },

	    /**
	     * Tries to publish the event on the next tick
	     */
	    triggerAsync: function(){
	        var args = arguments,me = this;
	        _.nextTick(function() {
	            me.trigger.apply(me, args);
	        });
	    },

	    /**
	     * Returns a Promise for the triggered action
	     *
	     * @return {Promise}
	     *   Resolved by completed child action.
	     *   Rejected by failed child action.
	     *   If listenAndPromise'd, then promise associated to this trigger.
	     *   Otherwise, the promise is for next child action completion.
	     */
	    triggerPromise: function(){
	        var me = this;
	        var args = arguments;

	        var canHandlePromise =
	            this.children.indexOf('completed') >= 0 &&
	            this.children.indexOf('failed') >= 0;

	        var promise = _.createPromise(function(resolve, reject) {
	            // If `listenAndPromise` is listening
	            // patch `promise` w/ context-loaded resolve/reject
	            if (me.willCallPromise) {
	                _.nextTick(function() {
	                    var old_promise_method = me.promise;
	                    me.promise = function (promise) {
	                        promise.then(resolve, reject);
	                        // Back to your regularly schedule programming.
	                        me.promise = old_promise_method;
	                        return me.promise.apply(me, arguments);
	                    };
	                    me.trigger.apply(me, args);
	                });
	                return;
	            }

	            if (canHandlePromise) {
	                var removeSuccess = me.completed.listen(function(args) {
	                    removeSuccess();
	                    removeFailed();
	                    resolve(args);
	                });

	                var removeFailed = me.failed.listen(function(args) {
	                    removeSuccess();
	                    removeFailed();
	                    reject(args);
	                });
	            }

	            me.triggerAsync.apply(me, args);

	            if (!canHandlePromise) {
	                resolve();
	            }
	        });

	        return promise;
	    }
	};


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A module of methods that you want to include in all stores.
	 * This module is consumed by `createStore`.
	 */
	module.exports = {
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(70),
	    Reflux = __webpack_require__(57),
	    Keep = __webpack_require__(71),
	    allowed = {preEmit:1,shouldEmit:1};

	/**
	 * Creates an action functor object. It is mixed in with functions
	 * from the `PublisherMethods` mixin. `preEmit` and `shouldEmit` may
	 * be overridden in the definition object.
	 *
	 * @param {Object} definition The action object definition
	 */
	var createAction = function(definition) {

	    definition = definition || {};
	    if (!_.isObject(definition)){
	        definition = {actionName: definition};
	    }

	    for(var a in Reflux.ActionMethods){
	        if (!allowed[a] && Reflux.PublisherMethods[a]) {
	            throw new Error("Cannot override API method " + a +
	                " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead."
	            );
	        }
	    }

	    for(var d in definition){
	        if (!allowed[d] && Reflux.PublisherMethods[d]) {
	            throw new Error("Cannot override API method " + d +
	                " in action creation. Use another method name or override it on Reflux.PublisherMethods instead."
	            );
	        }
	    }

	    definition.children = definition.children || [];
	    if (definition.asyncResult){
	        definition.children = definition.children.concat(["completed","failed"]);
	    }

	    var i = 0, childActions = {};
	    for (; i < definition.children.length; i++) {
	        var name = definition.children[i];
	        childActions[name] = createAction(name);
	    }

	    var context = _.extend({
	        eventLabel: "action",
	        emitter: new _.EventEmitter(),
	        _isAction: true
	    }, Reflux.PublisherMethods, Reflux.ActionMethods, definition);

	    var functor = function() {
	        return functor[functor.sync?"trigger":"triggerPromise"].apply(functor, arguments);
	    };

	    _.extend(functor,childActions,context);

	    Keep.createdActions.push(functor);

	    return functor;

	};

	module.exports = createAction;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(70),
	    Reflux = __webpack_require__(57),
	    Keep = __webpack_require__(71),
	    mixer = __webpack_require__(74),
	    allowed = {preEmit:1,shouldEmit:1},
	    bindMethods = __webpack_require__(75);

	/**
	 * Creates an event emitting Data Store. It is mixed in with functions
	 * from the `ListenerMethods` and `PublisherMethods` mixins. `preEmit`
	 * and `shouldEmit` may be overridden in the definition object.
	 *
	 * @param {Object} definition The data store object definition
	 * @returns {Store} A data store instance
	 */
	module.exports = function(definition) {

	    definition = definition || {};

	    for(var a in Reflux.StoreMethods){
	        if (!allowed[a] && (Reflux.PublisherMethods[a] || Reflux.ListenerMethods[a])){
	            throw new Error("Cannot override API method " + a +
	                " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
	            );
	        }
	    }

	    for(var d in definition){
	        if (!allowed[d] && (Reflux.PublisherMethods[d] || Reflux.ListenerMethods[d])){
	            throw new Error("Cannot override API method " + d +
	                " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
	            );
	        }
	    }

	    definition = mixer(definition);

	    function Store() {
	        var i=0, arr;
	        this.subscriptions = [];
	        this.emitter = new _.EventEmitter();
	        this.eventLabel = "change";
	        bindMethods(this, definition);
	        if (this.init && _.isFunction(this.init)) {
	            this.init();
	        }
	        if (this.listenables){
	            arr = [].concat(this.listenables);
	            for(;i < arr.length;i++){
	                this.listenToMany(arr[i]);
	            }
	        }
	    }

	    _.extend(Store.prototype, Reflux.ListenerMethods, Reflux.PublisherMethods, Reflux.StoreMethods, definition);

	    var store = new Store();
	    Keep.createdStores.push(store);

	    return store;
	};


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(57),
	    _ = __webpack_require__(70);

	module.exports = function(listenable,key){
	    return {
	        getInitialState: function(){
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            } else if (key === undefined) {
	                return listenable.getInitialState();
	            } else {
	                return _.object([key],[listenable.getInitialState()]);
	            }
	        },
	        componentDidMount: function(){
	            _.extend(this,Reflux.ListenerMethods);
	            var me = this, cb = (key === undefined ? this.setState : function(v){me.setState(_.object([key],[v]));});
	            this.listenTo(listenable,cb);
	        },
	        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
	    };
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(57),
	  _ = __webpack_require__(70);

	module.exports = function(listenable, key, filterFunc) {
	    filterFunc = _.isFunction(key) ? key : filterFunc;
	    return {
	        getInitialState: function() {
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            } else if (_.isFunction(key)) {
	                return filterFunc.call(this, listenable.getInitialState());
	            } else {
	                // Filter initial payload from store.
	                var result = filterFunc.call(this, listenable.getInitialState());
	                if (result) {
	                  return _.object([key], [result]);
	                } else {
	                  return {};
	                }
	            }
	        },
	        componentDidMount: function() {
	            _.extend(this, Reflux.ListenerMethods);
	            var me = this;
	            var cb = function(value) {
	                if (_.isFunction(key)) {
	                    me.setState(filterFunc.call(me, value));
	                } else {
	                    var result = filterFunc.call(me, value);
	                    me.setState(_.object([key], [result]));
	                }
	            };

	            this.listenTo(listenable, cb);
	        },
	        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
	    };
	};



/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(70),
	    ListenerMethods = __webpack_require__(59);

	/**
	 * A module meant to be consumed as a mixin by a React component. Supplies the methods from
	 * `ListenerMethods` mixin and takes care of teardown of subscriptions.
	 * Note that if you're using the `connect` mixin you don't need this mixin, as connect will
	 * import everything this mixin contains!
	 */
	module.exports = _.extend({

	    /**
	     * Cleans up all listener previously registered.
	     */
	    componentWillUnmount: ListenerMethods.stopListeningToAll

	}, ListenerMethods);


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(57);


	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `ListenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method.
	 *
	 * @param {Action|Store} listenable An Action or Store that should be
	 *  listened to.
	 * @param {Function|String} callback The callback to register as event handler
	 * @param {Function|String} defaultCallback The callback to register as default handler
	 * @returns {Object} An object to be used as a mixin, which sets up the listener for the given listenable.
	 */
	module.exports = function(listenable,callback,initial){
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function() {
	            for(var m in Reflux.ListenerMethods){
	                if (this[m] !== Reflux.ListenerMethods[m]){
	                    if (this[m]){
	                        throw "Can't have other property '"+m+"' when using Reflux.listenTo!";
	                    }
	                    this[m] = Reflux.ListenerMethods[m];
	                }
	            }
	            this.listenTo(listenable,callback,initial);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
	    };
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(57);

	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `listenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method. This version is used
	 * to automatically set up a `listenToMany` call.
	 *
	 * @param {Object} listenables An object of listenables
	 * @returns {Object} An object to be used as a mixin, which sets up the listeners for the given listenables.
	 */
	module.exports = function(listenables){
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function() {
	            for(var m in Reflux.ListenerMethods){
	                if (this[m] !== Reflux.ListenerMethods[m]){
	                    if (this[m]){
	                        throw "Can't have other property '"+m+"' when using Reflux.listenToMany!";
	                    }
	                    this[m] = Reflux.ListenerMethods[m];
	                }
	            }
	            this.listenToMany(listenables);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
	    };
	};


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Internal module used to create static and instance join methods
	 */

	var slice = Array.prototype.slice,
	    _ = __webpack_require__(70),
	    createStore = __webpack_require__(63),
	    strategyMethodNames = {
	        strict: "joinStrict",
	        first: "joinLeading",
	        last: "joinTrailing",
	        all: "joinConcat"
	    };

	/**
	 * Used in `index.js` to create the static join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} A static function which returns a store with a join listen on the given listenables using the given strategy
	 */
	exports.staticJoinCreator = function(strategy){
	    return function(/* listenables... */) {
	        var listenables = slice.call(arguments);
	        return createStore({
	            init: function(){
	                this[strategyMethodNames[strategy]].apply(this,listenables.concat("triggerAsync"));
	            }
	        });
	    };
	};

	/**
	 * Used in `ListenerMethods.js` to create the instance join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} An instance method which sets up a join listen on the given listenables using the given strategy
	 */
	exports.instanceJoinCreator = function(strategy){
	    return function(/* listenables..., callback*/){
	        _.throwIf(arguments.length < 3,'Cannot create a join with less than 2 listenables!');
	        var listenables = slice.call(arguments),
	            callback = listenables.pop(),
	            numberOfListenables = listenables.length,
	            join = {
	                numberOfListenables: numberOfListenables,
	                callback: this[callback]||callback,
	                listener: this,
	                strategy: strategy
	            }, i, cancels = [], subobj;
	        for (i = 0; i < numberOfListenables; i++) {
	            _.throwIf(this.validateListening(listenables[i]));
	        }
	        for (i = 0; i < numberOfListenables; i++) {
	            cancels.push(listenables[i].listen(newListener(i,join),this));
	        }
	        reset(join);
	        subobj = {listenable: listenables};
	        subobj.stop = makeStopper(subobj,cancels,this);
	        this.subscriptions = (this.subscriptions || []).concat(subobj);
	        return subobj;
	    };
	};

	// ---- internal join functions ----

	function makeStopper(subobj,cancels,context){
	    return function() {
	        var i, subs = context.subscriptions,
	            index = (subs ? subs.indexOf(subobj) : -1);
	        _.throwIf(index === -1,'Tried to remove join already gone from subscriptions list!');
	        for(i=0;i < cancels.length; i++){
	            cancels[i]();
	        }
	        subs.splice(index, 1);
	    };
	}

	function reset(join) {
	    join.listenablesEmitted = new Array(join.numberOfListenables);
	    join.args = new Array(join.numberOfListenables);
	}

	function newListener(i,join) {
	    return function() {
	        var callargs = slice.call(arguments);
	        if (join.listenablesEmitted[i]){
	            switch(join.strategy){
	                case "strict": throw new Error("Strict join failed because listener triggered twice.");
	                case "last": join.args[i] = callargs; break;
	                case "all": join.args[i].push(callargs);
	            }
	        } else {
	            join.listenablesEmitted[i] = true;
	            join.args[i] = (join.strategy==="all"?[callargs]:callargs);
	        }
	        emitIfAllListenablesEmitted(join);
	    };
	}

	function emitIfAllListenablesEmitted(join) {
	    for (var i = 0; i < join.numberOfListenables; i++) {
	        if (!join.listenablesEmitted[i]) {
	            return;
	        }
	    }
	    join.callback.apply(join.listener,join.args);
	    reset(join);
	}


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * isObject, extend, isFunction, isArguments are taken from undescore/lodash in
	 * order to remove the dependency
	 */
	var isObject = exports.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	};

	exports.extend = function(obj) {
	    if (!isObject(obj)) {
	        return obj;
	    }
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	        source = arguments[i];
	        for (prop in source) {
	            if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
	                var propertyDescriptor = Object.getOwnPropertyDescriptor(source, prop);
	                Object.defineProperty(obj, prop, propertyDescriptor);
	            } else {
	                obj[prop] = source[prop];
	            }
	        }
	    }
	    return obj;
	};

	exports.isFunction = function(value) {
	    return typeof value === 'function';
	};

	exports.EventEmitter = __webpack_require__(76);

	exports.nextTick = function(callback) {
	    setTimeout(callback, 0);
	};

	exports.capitalize = function(string){
	    return string.charAt(0).toUpperCase()+string.slice(1);
	};

	exports.callbackName = function(string){
	    return "on"+exports.capitalize(string);
	};

	exports.object = function(keys,vals){
	    var o={}, i=0;
	    for(;i<keys.length;i++){
	        o[keys[i]] = vals[i];
	    }
	    return o;
	};

	exports.Promise = __webpack_require__(77);

	exports.createPromise = function(resolver) {
	    return new exports.Promise(resolver);
	};

	exports.isArguments = function(value) {
	    return typeof value === 'object' && ('callee' in value) && typeof value.length === 'number';
	};

	exports.throwIf = function(val,msg){
	    if (val){
	        throw Error(msg||val);
	    }
	};


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports.createdStores = [];

	exports.createdActions = [];

	exports.reset = function() {
	    while(exports.createdStores.length) {
	        exports.createdStores.pop();
	    }
	    while(exports.createdActions.length) {
	        exports.createdActions.pop();
	    }
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */

	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];

	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(70);

	module.exports = function mix(def) {
	    var composed = {
	        init: [],
	        preEmit: [],
	        shouldEmit: []
	    };

	    var updated = (function mixDef(mixin) {
	        var mixed = {};
	        if (mixin.mixins) {
	            mixin.mixins.forEach(function (subMixin) {
	                _.extend(mixed, mixDef(subMixin));
	            });
	        }
	        _.extend(mixed, mixin);
	        Object.keys(composed).forEach(function (composable) {
	            if (mixin.hasOwnProperty(composable)) {
	                composed[composable].push(mixin[composable]);
	            }
	        });
	        return mixed;
	    }(def));

	    if (composed.init.length > 1) {
	        updated.init = function () {
	            var args = arguments;
	            composed.init.forEach(function (init) {
	                init.apply(this, args);
	            }, this);
	        };
	    }
	    if (composed.preEmit.length > 1) {
	        updated.preEmit = function () {
	            return composed.preEmit.reduce(function (args, preEmit) {
	                var newValue = preEmit.apply(this, args);
	                return newValue === undefined ? args : [newValue];
	            }.bind(this), arguments);
	        };
	    }
	    if (composed.shouldEmit.length > 1) {
	        updated.shouldEmit = function () {
	            var args = arguments;
	            return !composed.shouldEmit.some(function (shouldEmit) {
	                return !shouldEmit.apply(this, args);
	            }, this);
	        };
	    }
	    Object.keys(composed).forEach(function (composable) {
	        if (composed[composable].length === 1) {
	            updated[composable] = composed[composable][0];
	        }
	    });

	    return updated;
	};


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(store, definition) {
	  for (var name in definition) {
	    if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
	        var propertyDescriptor = Object.getOwnPropertyDescriptor(definition, name);

	        if (!propertyDescriptor.value || typeof propertyDescriptor.value !== 'function' || !definition.hasOwnProperty(name)) {
	            continue;
	        }

	        store[name] = definition[name].bind(store);
	    } else {
	        var property = definition[name];

	        if (typeof property !== 'function' || !definition.hasOwnProperty(name)) {
	            continue;
	        }

	        store[name] = property.bind(store);
	    }
	  }

	  return store;
	};


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  if (!this._events || !this._events[event]) return [];
	  if (this._events[event].fn) return [this._events[event].fn];

	  for (var i = 0, l = this._events[event].length, ee = new Array(l); i < l; i++) {
	    ee[i] = this._events[event][i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  if (!this._events || !this._events[event]) return false;

	  var listeners = this._events[event]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this);

	  if (!this._events) this._events = {};
	  if (!this._events[event]) this._events[event] = listener;
	  else {
	    if (!this._events[event].fn) this._events[event].push(listener);
	    else this._events[event] = [
	      this._events[event], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true);

	  if (!this._events) this._events = {};
	  if (!this._events[event]) this._events[event] = listener;
	  else {
	    if (!this._events[event].fn) this._events[event].push(listener);
	    else this._events[event] = [
	      this._events[event], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
	  if (!this._events || !this._events[event]) return this;

	  var listeners = this._events[event]
	    , events = [];

	  if (fn) {
	    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
	      events.push(listeners);
	    }
	    if (!listeners.fn) for (var i = 0, length = listeners.length; i < length; i++) {
	      if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
	        events.push(listeners[i]);
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[event] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[event];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[event];
	  else this._events = {};

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the module.
	//
	EventEmitter.EventEmitter = EventEmitter;
	EventEmitter.EventEmitter2 = EventEmitter;
	EventEmitter.EventEmitter3 = EventEmitter;

	//
	// Expose the module.
	//
	module.exports = EventEmitter;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*! Native Promise Only
	    v0.7.6-a (c) Kyle Simpson
	    MIT License: http://getify.mit-license.org
	*/
	!function(t,n,e){n[t]=n[t]||e(),"undefined"!=typeof module&&module.exports?module.exports=n[t]:"function"=="function"&&__webpack_require__(78)&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return n[t]}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}("Promise","undefined"!=typeof global?global:this,function(){"use strict";function t(t,n){l.add(t,n),h||(h=y(l.drain))}function n(t){var n,e=typeof t;return null==t||"object"!=e&&"function"!=e||(n=t.then),"function"==typeof n?n:!1}function e(){for(var t=0;t<this.chain.length;t++)o(this,1===this.state?this.chain[t].success:this.chain[t].failure,this.chain[t]);this.chain.length=0}function o(t,e,o){var r,i;try{e===!1?o.reject(t.msg):(r=e===!0?t.msg:e.call(void 0,t.msg),r===o.promise?o.reject(TypeError("Promise-chain cycle")):(i=n(r))?i.call(r,o.resolve,o.reject):o.resolve(r))}catch(c){o.reject(c)}}function r(o){var c,u,a=this;if(!a.triggered){a.triggered=!0,a.def&&(a=a.def);try{(c=n(o))?(u=new f(a),c.call(o,function(){r.apply(u,arguments)},function(){i.apply(u,arguments)})):(a.msg=o,a.state=1,a.chain.length>0&&t(e,a))}catch(s){i.call(u||new f(a),s)}}}function i(n){var o=this;o.triggered||(o.triggered=!0,o.def&&(o=o.def),o.msg=n,o.state=2,o.chain.length>0&&t(e,o))}function c(t,n,e,o){for(var r=0;r<n.length;r++)!function(r){t.resolve(n[r]).then(function(t){e(r,t)},o)}(r)}function f(t){this.def=t,this.triggered=!1}function u(t){this.promise=t,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function a(n){if("function"!=typeof n)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new u(this);this.then=function(n,r){var i={success:"function"==typeof n?n:!0,failure:"function"==typeof r?r:!1};return i.promise=new this.constructor(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");i.resolve=t,i.reject=n}),o.chain.push(i),0!==o.state&&t(e,o),i.promise},this["catch"]=function(t){return this.then(void 0,t)};try{n.call(void 0,function(t){r.call(o,t)},function(t){i.call(o,t)})}catch(c){i.call(o,c)}}var s,h,l,p=Object.prototype.toString,y="undefined"!=typeof setImmediate?function(t){return setImmediate(t)}:setTimeout;try{Object.defineProperty({},"x",{}),s=function(t,n,e,o){return Object.defineProperty(t,n,{value:e,writable:!0,configurable:o!==!1})}}catch(d){s=function(t,n,e){return t[n]=e,t}}l=function(){function t(t,n){this.fn=t,this.self=n,this.next=void 0}var n,e,o;return{add:function(r,i){o=new t(r,i),e?e.next=o:n=o,e=o,o=void 0},drain:function(){var t=n;for(n=e=h=void 0;t;)t.fn.call(t.self),t=t.next}}}();var g=s({},"constructor",a,!1);return s(a,"prototype",g,!1),s(g,"__NPO__",0,!1),s(a,"resolve",function(t){var n=this;return t&&"object"==typeof t&&1===t.__NPO__?t:new n(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");n(t)})}),s(a,"reject",function(t){return new this(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");e(t)})}),s(a,"all",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):0===t.length?n.resolve([]):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");var r=t.length,i=Array(r),f=0;c(n,t,function(t,n){i[t]=n,++f===r&&e(i)},o)})}),s(a,"race",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");c(n,t,function(t,n){e(n)},o)})}),a});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(79).setImmediate))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(80).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(79).setImmediate, __webpack_require__(79).clearImmediate))

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (!draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }
/******/ ]);