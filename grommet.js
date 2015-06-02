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
	    Left: __webpack_require__(30),
	    More: __webpack_require__(31),
	    Right: __webpack_require__(32),
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

	var IntlMixin = __webpack_require__(43);

	var App = React.createClass({displayName: "App",

	  mixins: [IntlMixin],

	  propTypes: {
	    centered: React.PropTypes.bool
	  },

	  getDefaultProps: function () {
	    return {
	      centered: true
	    };
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

	    //remove this when React 0.14 is released. This is required because context props are not being propagated to children.
	    var children = React.Children.map(this.props.children, function(child) {
	      if (child) {
	        return React.cloneElement(child, this.getChildContext());
	      } else {
	        return null;
	      }
	    }.bind(this));

	    return (
	      React.createElement("div", {className: classes.join(' ')}, 
	        children
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

	var CLASS_ROOT = "check-box";

	var CheckBox = React.createClass({displayName: "CheckBox",

	  propTypes: {
	    checked: React.PropTypes.bool,
	    defaultChecked: React.PropTypes.bool,
	    id: React.PropTypes.string.isRequired,
	    label: React.PropTypes.string.isRequired,
	    name: React.PropTypes.string,
	    onChange: React.PropTypes.func,
	    toggle: React.PropTypes.bool
	  },

	  render: function () {
	    var classes = [CLASS_ROOT];
	    if (this.props.toggle) {
	      classes.push(CLASS_ROOT + "--toggle");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }
	    return (
	      React.createElement("label", {className: classes.join(' ')}, 
	        React.createElement("input", {className: CLASS_ROOT + "__input", 
	          id: this.props.id, name: this.props.name, type: "checkbox", 
	          checked: this.props.checked, 
	          defaultChecked: this.props.defaultChecked, 
	          onChange: this.props.onChange}), 
	        React.createElement("span", {className: CLASS_ROOT + "__control"}), 
	        React.createElement("span", {className: CLASS_ROOT + "__label"}, 
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

	var CLASS_ROOT = "document";

	var GrommetDocument = React.createClass({displayName: "GrommetDocument",

	  propTypes: {
	    colorIndex: React.PropTypes.string,
	    flush: React.PropTypes.bool
	  },

	  getDefaultProps: function () {
	    return {
	      flush: true
	    };
	  },

	  render: function() {
	    var classes = [CLASS_ROOT];
	    if (this.props.flush) {
	      classes.push(CLASS_ROOT + "--flush");
	    }
	    if (this.props.colorIndex) {
	      classes.push("header-color-index-" + this.props.colorIndex);
	    }

	    return (
	      React.createElement("div", {ref: "document", className: classes.join(' ')}, 
	        React.createElement("div", {className: CLASS_ROOT + "__content"}, 
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
	var Legend = __webpack_require__(44);

	var CLASS_ROOT = "donut";
	var BASE_SIZE = 192;
	var PARTIAL_SIZE = 168;

	function polarToCartesian (centerX, centerY, radius, angleInDegrees) {
	  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
	  return {
	    x: centerX + (radius * Math.cos(angleInRadians)),
	    y: centerY + (radius * Math.sin(angleInRadians))
	  };
	}

	function arcCommands (x, y, radius, startAngle, endAngle) {
	  var start = polarToCartesian(x, y, radius, endAngle);
	  var end = polarToCartesian(x, y, radius, startAngle);
	  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
	  var d = [
	    "M", start.x, start.y,
	    "A", radius, radius, 0, arcSweep, 0, end.x, end.y
	  ].join(" ");
	  return d;
	}

	function activeIndicatorCommands (x, y, radius, startAngle, endAngle) {
	  var midAngle = endAngle - ((endAngle - startAngle) / 2);
	  var point = polarToCartesian(x, y, radius - 24, midAngle);
	  var start = polarToCartesian(x, y, radius, midAngle - 10);
	  var end = polarToCartesian(x, y, radius, midAngle + 10);
	  //var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
	  var d = ["M", point.x, point.y,
	    "L", start.x, start.y,
	    "A", radius, radius, 0, 0, 0, end.x, end.y,
	    "Z"
	  ].join(" ");
	  return d;
	}

	var Donut = React.createClass({displayName: "Donut",

	  propTypes: {
	    legend: React.PropTypes.bool,
	    partial: React.PropTypes.bool,
	    max: React.PropTypes.oneOfType([
	      React.PropTypes.shape({
	        value: React.PropTypes.number,
	        label: React.PropTypes.string
	      }),
	      React.PropTypes.number
	    ]),
	    min: React.PropTypes.oneOfType([
	      React.PropTypes.shape({
	        value: React.PropTypes.number,
	        label: React.PropTypes.string
	      }),
	      React.PropTypes.number
	    ]),
	    series: React.PropTypes.arrayOf(React.PropTypes.shape({
	      label: React.PropTypes.string,
	      value: React.PropTypes.number.isRequired,
	      units: React.PropTypes.string,
	      colorIndex: React.PropTypes.string,
	      important: React.PropTypes.bool,
	      onClick: React.PropTypes.func
	    })),
	    small: React.PropTypes.bool,
	    units: React.PropTypes.string,
	    value: React.PropTypes.number
	  },

	  getDefaultProps: function () {
	    return {
	      max: {value: 100},
	      min: {value: 0}
	    };
	  },

	  _initialTimeout: function () {
	    this.setState({
	      initial: false,
	      activeIndex: this.state.importantIndex
	    });
	    clearTimeout(this._timeout);
	  },

	  _onActive: function (index) {
	    this.setState({initial: false, activeIndex: index});
	  },

	  _layout: function () {
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
	    var donutHeight = BASE_SIZE;
	    if (this.props.partial) {
	      donutHeight = PARTIAL_SIZE;
	    }
	    if (height < donutHeight || width < BASE_SIZE ||
	      (width < (BASE_SIZE * 2) && height < (donutHeight * 2))) {
	      this.setState({size: 'small'});
	    } else {
	      this.setState({size: null});
	    }
	  },

	  _onResize: function() {
	    // debounce
	    clearTimeout(this._resizeTimer);
	    this._resizeTimer = setTimeout(this._layout, 50);
	  },

	  _generateSeries: function (props) {
	    var total = props.max.value - props.min.value;
	    var remaining = total - (props.value - props.min.value);
	    return [
	      {value: props.value},
	      {value: remaining, colorIndex: 'unset'}
	    ];
	  },

	  _importantIndex: function (series) {
	    var result = 0;
	    series.some(function (data, index) {
	      if (data.important) {
	        result = index;
	        return true;
	      }
	    });
	    return result;
	  },

	  getInitialState: function() {
	    var series = this.props.series || this._generateSeries(this.props);
	    var importantIndex = this._importantIndex(series);
	    return {
	      initial: true,
	      importantIndex: importantIndex,
	      activeIndex: importantIndex,
	      legend: false,
	      orientation: 'portrait',
	      series: series
	    };
	  },

	  componentDidMount: function() {
	    console.log('Grommet Donut is deprecated. Please use Grommet Meter instead.');
	    this._initialTimer = setTimeout(this._initialTimeout, 10);
	    this.setState({initial: true, activeIndex: 0});
	    window.addEventListener('resize', this._onResize);
	    this._onResize();
	  },

	  componentWillReceiveProps: function (newProps) {
	    var series = newProps.series || this._generateSeries(newProps);
	    var importantIndex = this._importantIndex(series);
	    this.setState({
	      importantIndex: importantIndex,
	      activeIndex: importantIndex,
	      series: series
	    });
	  },

	  componentWillUnmount: function() {
	    clearTimeout(this._initialTimer);
	    clearTimeout(this._resizeTimer);
	    window.removeEventListener('resize', this._onResize);
	  },

	  _itemColorIndex: function (item, index) {
	    return item.colorIndex || ('graph-' + (index + 1));
	  },

	  render: function() {
	    var classes = [CLASS_ROOT, CLASS_ROOT + "--" + this.state.orientation];
	    if (this.state.size) {
	      classes.push(CLASS_ROOT + "--" + this.state.size);
	    }
	    if (this.props.partial) {
	      classes.push(CLASS_ROOT + "--partial");
	    }
	    if (this.props.small) {
	      classes.push(CLASS_ROOT + "--small");
	    }

	    var viewBoxHeight = BASE_SIZE;
	    if (this.props.partial) {
	      viewBoxHeight = PARTIAL_SIZE;
	    }

	    var total = 0;
	    this.state.series.some(function (item) {
	      total += item.value;
	    });

	    var startAngle = 0;
	    var anglePer = 360.0 / total;
	    if (this.props.partial) {
	      startAngle = 60;
	      anglePer = 240.0 / total;
	    }
	    var value = null;
	    var units = null;
	    var label = null;
	    var activeIndicator = null;

	    var paths = this.state.series.map(function (item, index) {

	      var endAngle = Math.min(360, Math.max(10, startAngle + (anglePer * item.value)));
	      if (item.value > 0 && (startAngle + 360) === endAngle) {
	        // full use for this item, make sure we render it.
	        endAngle -= 0.1;
	      }
	      var radius = 84;
	      // start from the bottom
	      var commands = arcCommands(BASE_SIZE / 2, BASE_SIZE / 2, radius,
	        startAngle + 180, endAngle + 180);
	      var colorIndex = this._itemColorIndex(item, index);

	      var sliceClasses = [CLASS_ROOT + "__slice"];
	      sliceClasses.push("color-index-" + colorIndex);
	      if (this.state.activeIndex === index) {
	        sliceClasses.push(CLASS_ROOT + "__slice--active");
	        value = item.value;
	        units = item.units || this.props.units;
	        label = item.label;
	      }

	      if (index === this.state.activeIndex) {
	        var indicatorCommands = activeIndicatorCommands(BASE_SIZE / 2, BASE_SIZE / 2, radius,
	          startAngle + 180, endAngle + 180);
	        activeIndicator = (
	          React.createElement("path", {stroke: "none", 
	            className: CLASS_ROOT + "__slice-indicator color-index-" + colorIndex, 
	            d: indicatorCommands})
	        );
	      }

	      startAngle = endAngle;

	      return (
	        React.createElement("path", {key: item.label, fill: "none", className: sliceClasses.join(' '), d: commands, 
	          onMouseOver: this._onActive.bind(this, index), 
	          onMouseOut: this._onActive.bind(this, this.state.importantIndex), 
	          onClick: item.onClick})
	      );
	    }, this);

	    var minLabel;
	    var maxLabel;
	    if (this.props.partial) {
	      if (this.props.min) {
	        minLabel = (
	          React.createElement("div", {className: CLASS_ROOT + "__min-label"}, 
	            this.props.min.value, " ", this.props.units
	          )
	        );
	      }
	      if (this.props.max) {
	        maxLabel = (
	          React.createElement("div", {className: CLASS_ROOT + "__max-label"}, 
	            this.props.max.value, " ", this.props.units
	          )
	        );
	      }
	    }

	    var legend = null;
	    if (this.props.legend) {
	      legend = (
	        React.createElement(Legend, {className: CLASS_ROOT + "__legend", 
	          series: this.props.series, 
	          units: this.props.units, 
	          value: this.props.value, 
	          activeIndex: this.state.activeIndex, 
	          onActive: this._onActive})
	      );
	    }

	    return (
	      React.createElement("div", {ref: "donut", className: classes.join(' ')}, 
	        React.createElement("div", {className: CLASS_ROOT + "__graphic-container"}, 
	          React.createElement("svg", {className: CLASS_ROOT + "__graphic", 
	            viewBox: "0 0 " + BASE_SIZE + " " + viewBoxHeight, 
	            preserveAspectRatio: "xMidYMid meet"}, 
	            React.createElement("g", null, 
	              activeIndicator, 
	              paths
	            )
	          ), 
	          React.createElement("div", {className: CLASS_ROOT + "__active"}, 
	            React.createElement("div", {className: CLASS_ROOT + "__active-value large-number-font"}, 
	              value, 
	              React.createElement("span", {className: CLASS_ROOT + "__active-units large-number-font"}, units)
	            ), 
	            React.createElement("div", {className: CLASS_ROOT + "__active-label"}, label)
	          ), 
	          minLabel, 
	          maxLabel
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
	var Top = __webpack_require__(45);

	var CLASS_ROOT = "footer";

	var Footer = React.createClass({displayName: "Footer",

	  propTypes: {
	    centered: React.PropTypes.bool,
	    colorIndex: React.PropTypes.string,
	    flush: React.PropTypes.bool,
	    primary: React.PropTypes.bool,
	    scrollTop: React.PropTypes.bool
	  },

	  getDefaultProps: function () {
	    return {
	      flush: true
	    };
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
	    var classes = [CLASS_ROOT];
	    if (this.props.primary) {
	      classes.push(CLASS_ROOT + "--primary");
	    }
	    if (this.props.centered) {
	      classes.push(CLASS_ROOT + "--centered");
	    }
	    if (this.props.flush) {
	      classes.push(CLASS_ROOT + "--flush");
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
	        React.createElement("div", {className: CLASS_ROOT + "__top control-icon", 
	          onClick: this._onClickTop}, 
	          React.createElement(Top, null)
	        )
	      );
	    }

	    return (
	      React.createElement("div", {ref: "footer", className: classes.join(' ')}, 
	        React.createElement("div", {className: CLASS_ROOT + "__content"}, 
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

	var CLASS_ROOT = "form";

	var Form = React.createClass({displayName: "Form",

	  propTypes: {
	    compact: React.PropTypes.bool,
	    fill: React.PropTypes.bool,
	    flush: React.PropTypes.bool,
	    onSubmit: React.PropTypes.func,
	    className: React.PropTypes.string
	  },

	  getDefaultProps: function () {
	    return {
	      compact: false,
	      fill: false,
	      flush: true
	    };
	  },

	  render: function () {
	    var classes = [CLASS_ROOT];
	    if (this.props.compact) {
	      classes.push(CLASS_ROOT + "--compact");
	    }
	    if (this.props.fill) {
	      classes.push(CLASS_ROOT + "--fill");
	    }
	    if (this.props.flush) {
	      classes.push(CLASS_ROOT + "--flush");
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

	  _onFocus: function () {
	    this.setState({focus: true});
	  },

	  _onBlur: function () {
	    this.setState({focus: false});
	  },

	  _onClick: function () {
	    if (this._inputElement) {
	      this._inputElement.focus();
	    }
	  },

	  getInitialState: function () {
	    return {focus: false};
	  },

	  componentDidMount: function () {
	    var contentsElement = this.refs.contents.getDOMNode();
	    var inputElements = contentsElement.querySelectorAll('input, textarea, select');
	    if (inputElements.length === 1) {
	      this._inputElement = inputElements[0];
	      this._inputElement.addEventListener('focus', this._onFocus);
	      this._inputElement.addEventListener('blur', this._onBlur);
	    }
	  },

	  componentWillUnmount: function () {
	    if (this._inputElement) {
	      this._inputElement.removeEventListener('focus', this._onFocus);
	      this._inputElement.removeEventListener('blur', this._onBlur);
	      delete this._inputElement;
	    }
	  },

	  render: function () {
	    var classes = [CLASS_ROOT];
	    if (this.state.focus) {
	      classes.push(CLASS_ROOT + "--focus");
	    }
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
	      React.createElement("div", {className: classes.join(' '), onClick: this._onClick}, 
	        error, 
	        React.createElement("label", {className: CLASS_ROOT + "__label", htmlFor: this.props.htmlFor}, 
	          this.props.label
	        ), 
	        React.createElement("span", {ref: "contents", className: CLASS_ROOT + "__contents"}, 
	          this.props.children
	        ), 
	        help
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
	      small: false
	    };
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
	var IntlMixin = __webpack_require__(43);
	var CLASS_ROOT = "login-form";

	var LoginForm = React.createClass({displayName: "LoginForm",

	  mixins: [IntlMixin],

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
	      return (React.createElement("div", {key: index, className: CLASS_ROOT + "__error"}, this.getGrommetIntlMessage(error)));
	    }.bind(this));

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
	            id: "remember-me", label: this.getGrommetIntlMessage('Remember me')})
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
	          React.createElement(FormField, {htmlFor: "username", label: this.getGrommetIntlMessage('Username')}, 
	            React.createElement("input", {id: "username", ref: "username", type: "email"})
	          ), 
	          React.createElement(FormField, {htmlFor: "password", label: this.getGrommetIntlMessage('Password')}, 
	            React.createElement("input", {id: "password", ref: "password", type: "password"})
	          )
	        ), 
	        errors, 
	        React.createElement("input", {type: "submit", className: CLASS_ROOT + "__submit primary call-to-action", value: this.getGrommetIntlMessage('Log In')}), 
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
	var Overlay = __webpack_require__(46);
	var MoreIcon = __webpack_require__(31);
	var DropCaretIcon = __webpack_require__(47);

	var ROOT_CLASS = "menu";

	var MenuLayer = React.createClass({displayName: "MenuLayer",

	  propTypes: {
	    align: React.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	    direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right', 'center']),
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
	    direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right', 'center']),
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
	      classes.push(controlClassName + "--fixed-label");
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
	var Legend = __webpack_require__(44);

	var CLASS_ROOT = "meter";

	var BAR_LENGTH = 192;
	var BAR_THICKNESS = 24;
	var MID_BAR_THICKNESS = BAR_THICKNESS / 2;

	var CIRCLE_WIDTH = 192;
	var CIRCLE_RADIUS = 84;

	var ARC_HEIGHT = 144;

	function polarToCartesian (centerX, centerY, radius, angleInDegrees) {
	  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
	  return {
	    x: centerX + (radius * Math.cos(angleInRadians)),
	    y: centerY + (radius * Math.sin(angleInRadians))
	  };
	}

	function arcCommands (x, y, radius, startAngle, endAngle) {
	  var start = polarToCartesian(x, y, radius, endAngle);
	  var end = polarToCartesian(x, y, radius, startAngle);
	  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
	  var d = [
	    "M", start.x, start.y,
	    "A", radius, radius, 0, arcSweep, 0, end.x, end.y
	  ].join(" ");
	  return d;
	}

	function activeIndicatorCommands (x, y, radius, startAngle, endAngle) {
	  var midAngle = endAngle - ((endAngle - startAngle) / 2);
	  var point = polarToCartesian(x, y, radius - 24, midAngle);
	  var start = polarToCartesian(x, y, radius, midAngle - 10);
	  var end = polarToCartesian(x, y, radius, midAngle + 10);
	  var d = ["M", point.x, point.y,
	    "L", start.x, start.y,
	    "A", radius, radius, 0, 0, 0, end.x, end.y,
	    "Z"
	  ].join(" ");
	  return d;
	}

	var Meter = React.createClass({displayName: "Meter",

	  propTypes: {
	    important: React.PropTypes.number,
	    large: React.PropTypes.bool,
	    legend: React.PropTypes.bool,
	    legendTotal: React.PropTypes.bool,
	    max: React.PropTypes.oneOfType([
	      React.PropTypes.shape({
	        value: React.PropTypes.number.isRequired,
	        label: React.PropTypes.string
	      }),
	      React.PropTypes.number
	    ]),
	    min: React.PropTypes.oneOfType([
	      React.PropTypes.shape({
	        value: React.PropTypes.number.isRequired,
	        label: React.PropTypes.string
	      }),
	      React.PropTypes.number
	    ]),
	    series: React.PropTypes.arrayOf(React.PropTypes.shape({
	      label: React.PropTypes.string,
	      value: React.PropTypes.number.isRequired,
	      colorIndex: React.PropTypes.string,
	      important: React.PropTypes.bool,
	      onClick: React.PropTypes.func
	    })),
	    small: React.PropTypes.bool,
	    threshold: React.PropTypes.number,
	    type: React.PropTypes.oneOf(['bar', 'arc', 'circle']),
	    units: React.PropTypes.string,
	    value: React.PropTypes.number,
	    vertical: React.PropTypes.bool
	  },

	  getDefaultProps: function () {
	    return {
	      type: 'bar'
	    };
	  },

	  _initialTimeout: function () {
	    this.setState({
	      initial: false,
	      activeIndex: this.state.importantIndex
	    });
	    clearTimeout(this._timeout);
	  },

	  _onActivate: function (index) {
	    this.setState({initial: false, activeIndex: index});
	  },

	  _onResize: function() {
	    // debounce
	    clearTimeout(this._resizeTimer);
	    this._resizeTimer = setTimeout(this._layout, 50);
	  },

	  _layout: function () {
	    // legendPosition based on available window orientation
	    var ratio = window.innerWidth / window.innerHeight;
	    if (ratio < 0.8) {
	      this.setState({legendPosition: 'bottom'});
	    } else if (ratio > 1.2) {
	      this.setState({legendPosition: 'right'});
	    }
	    /*
	    // content based on available real estate
	    var parentElement = this.refs.donut.getDOMNode().parentNode;
	    var width = parentElement.offsetWidth;
	    var height = parentElement.offsetHeight;
	    var donutHeight = BASE_SIZE;
	    if (this.props.partial) {
	      donutHeight = PARTIAL_SIZE;
	    }
	    if (height < donutHeight || width < BASE_SIZE ||
	      (width < (BASE_SIZE * 2) && height < (donutHeight * 2))) {
	      this.setState({size: 'small'});
	    } else {
	      this.setState({size: null});
	    }
	    */
	  },

	  _generateSeries: function (props, min, max) {
	    var remaining = max.value - props.value;
	    return [
	      {value: props.value, important: true},
	      {value: remaining, colorIndex: 'unset'}
	    ];
	  },

	  _importantIndex: function (series) {
	    var result = series.length - 1;
	    if (this.props.hasOwnProperty('important')) {
	      result = this.props.important;
	    }
	    series.some(function (data, index) {
	      if (data.important) {
	        result = index;
	        return true;
	      }
	    });
	    return result;
	  },

	  // Normalize min or max to an object.
	  _terminal: function (terminal) {
	    if (typeof terminal === 'number') {
	      terminal = {value: terminal};
	    }
	    return terminal;
	  },

	  _seriesTotal: function (series) {
	    var total = 0;
	    series.some(function (item) {
	      total += item.value;
	    });
	    return total;
	  },

	  // Generates state based on the provided props.
	  _stateFromProps: function (props) {
	    var total;
	    if (props.series && props.series.length > 1) {
	      total = this._seriesTotal(props.series);
	    } else {
	      total = 100;
	    }
	    // Normalize min and max
	    var min = this._terminal(props.min || 0);
	    // Max could be provided in props or come from the total of
	    // a multi-value series.
	    var max = this._terminal(props.max || total);
	    // Normalize simple value prop to a series, if needed.
	    var series = props.series || this._generateSeries(props, min, max);
	    // Determine important index.
	    var importantIndex = this._importantIndex(series);
	    total = this._seriesTotal(series);

	    var state = {
	      importantIndex: importantIndex,
	      activeIndex: importantIndex,
	      legendPosition: 'bottom',
	      series: series,
	      min: min,
	      max: max,
	      total: total
	    };

	    if ('arc' === this.props.type) {
	      state.startAngle = 60;
	      state.anglePer = 240.0 / total;
	      if (this.props.vertical) {
	        state.angleOffset = 90;
	      } else {
	        state.angleOffset = 180;
	      }
	    } else if ('circle' === this.props.type) {
	      state.startAngle = 1;
	      state.anglePer = 358.0 / total;
	      state.angleOffset = 180;
	    } else if ('bar' === this.props.type) {
	      state.scale = BAR_LENGTH / (max.value - min.value);
	    }

	    return state;
	  },

	  getInitialState: function() {
	    var state = this._stateFromProps(this.props);
	    state.initial = true;
	    return state;
	  },

	  componentDidMount: function() {
	    this._initialTimer = setTimeout(this._initialTimeout, 10);
	    window.addEventListener('resize', this._onResize);
	    this._onResize();
	  },

	  componentWillReceiveProps: function (newProps) {
	    var state = this._stateFromProps(newProps);
	    this.setState(state);
	  },

	  componentWillUnmount: function() {
	    clearTimeout(this._initialTimer);
	    clearTimeout(this._resizeTimer);
	    window.removeEventListener('resize', this._onResize);
	  },

	  _itemColorIndex: function (item, index) {
	    return item.colorIndex || ('graph-' + (index + 1));
	  },

	  _translateBarWidth: function (value) {
	    return Math.round(this.state.scale * value);
	  },

	  _renderBar: function () {
	    var start = 0;
	    var minRemaining = this.state.min.value;
	    var bars = this.state.series.map(function (item, index) {
	      var colorIndex = this._itemColorIndex(item, index);
	      var barClasses = [CLASS_ROOT + "__bar"];
	      if (index === this.state.activeIndex) {
	        barClasses.push(CLASS_ROOT + "__bar--active");
	      }
	      barClasses.push("color-index-" + colorIndex);

	      var value = item.value - minRemaining;
	      minRemaining = Math.max(0, minRemaining - item.value);
	      var distance = this._translateBarWidth(value);
	      var commands;
	      if (this.props.vertical) {
	        commands = "M" + MID_BAR_THICKNESS + "," + (BAR_LENGTH - start) +
	          " L" + MID_BAR_THICKNESS + "," + (BAR_LENGTH - (start + distance));
	      } else {
	        commands = "M" + start + "," + MID_BAR_THICKNESS +
	          " L" + (start + distance) + "," + MID_BAR_THICKNESS;
	      }
	      start += distance;

	      return (
	        React.createElement("path", {key: index, className: barClasses.join(' '), d: commands, 
	          onMouseOver: this._onActivate.bind(this, index), 
	          onMouseOut: this._onActivate.bind(this, this.state.importantIndex), 
	          onClick: item.onClick})
	      );
	    }, this);

	    return bars;
	  },

	  _renderArcOrCircle: function () {
	    var startAngle = this.state.startAngle;
	    var activeIndicator = null;

	    var paths = this.state.series.map(function (item, index) {
	      var sliceClasses = [CLASS_ROOT + "__slice"];
	      if (index === this.state.activeIndex) {
	        sliceClasses.push(CLASS_ROOT + "__slice--active");
	      }
	      var colorIndex = this._itemColorIndex(item, index);
	      sliceClasses.push("color-index-" + colorIndex);

	      var endAngle = Math.min(360, Math.max(0,
	        startAngle + (this.state.anglePer * item.value)));
	      // start from the bottom
	      var commands = arcCommands(CIRCLE_WIDTH / 2, CIRCLE_WIDTH / 2, CIRCLE_RADIUS,
	        startAngle + this.state.angleOffset,
	        endAngle + this.state.angleOffset);

	      if (index === this.state.activeIndex) {
	        var indicatorCommands =
	          activeIndicatorCommands(CIRCLE_WIDTH / 2, CIRCLE_WIDTH / 2, CIRCLE_RADIUS,
	          startAngle + this.state.angleOffset,
	          endAngle + this.state.angleOffset);
	        activeIndicator = (
	          React.createElement("path", {stroke: "none", 
	            className: CLASS_ROOT + "__slice-indicator color-index-" + colorIndex, 
	            d: indicatorCommands})
	        );
	      }

	      startAngle = endAngle;

	      return (
	        React.createElement("path", {key: item.label, fill: "none", 
	          className: sliceClasses.join(' '), d: commands, 
	          onMouseOver: this._onActivate.bind(this, index), 
	          onMouseOut: this._onActivate.bind(this, this.state.importantIndex), 
	          onClick: item.onClick})
	      );
	    }, this);

	    return (
	      React.createElement("g", null, 
	        activeIndicator, 
	        paths
	      )
	    );
	  },

	  _renderCurrent: function () {
	    var current;
	    var active = this.state.series[this.state.activeIndex];
	    if ('arc' === this.props.type || 'circle' === this.props.type) {
	      current = (
	        React.createElement("div", {className: CLASS_ROOT + "__active"}, 
	          React.createElement("div", {className: CLASS_ROOT + "__active-value large-number-font"}, 
	            active.value, 
	            React.createElement("span", {className: CLASS_ROOT + "__active-units large-number-font"}, 
	              this.props.units
	            )
	          ), 
	          React.createElement("div", {className: CLASS_ROOT + "__active-label"}, 
	            active.label
	          )
	        )
	      );
	    } else if ('bar' === this.props.type) {
	      current = (
	        React.createElement("span", {className: CLASS_ROOT + "__active"}, 
	          React.createElement("span", {className: CLASS_ROOT + "__active-value large-number-font"}, 
	            active.value
	          ), 
	          React.createElement("span", {className: CLASS_ROOT + "__active-units large-number-font"}, 
	            this.props.units
	          )
	        )
	      );
	    }
	    return current;
	  },

	  _renderBarThreshold: function () {
	    var distance =
	      this._translateBarWidth(this.props.threshold - this.state.min.value);
	    var commands;
	    if (this.props.vertical) {
	      commands = "M0," + (BAR_LENGTH - distance) +
	        " L" + BAR_THICKNESS + "," + (BAR_LENGTH - distance);
	    } else {
	      commands = "M" + distance + ",0 L" + distance + "," + BAR_THICKNESS;
	    }
	    return React.createElement("path", {className: CLASS_ROOT + "__threshold", d: commands});
	  },

	  _renderCircleOrArcThreshold: function () {
	    var startAngle = this.state.startAngle +
	      (this.state.anglePer * this.props.threshold);
	    var endAngle = Math.min(360, Math.max(0, startAngle + 1));
	    // start from the bottom
	    var commands = arcCommands(CIRCLE_WIDTH / 2, CIRCLE_WIDTH / 2, CIRCLE_RADIUS,
	      startAngle + 180, endAngle + 180);
	    return (
	      React.createElement("path", {className: CLASS_ROOT + "__threshold", d: commands})
	    );
	  },

	  _renderLegend: function () {
	    return (
	      React.createElement(Legend, {className: CLASS_ROOT + "__legend", 
	        series: this.state.series, 
	        units: this.props.units, 
	        activeIndex: this.state.activeIndex, 
	        onActive: this._onActive})
	    );
	  },

	  render: function() {
	    var classes = [CLASS_ROOT];
	    classes.push(CLASS_ROOT + "--" + this.props.type);
	    classes.push(CLASS_ROOT + "--legend-" + this.state.legendPosition);
	    if (this.props.vertical) {
	      classes.push(CLASS_ROOT + "--vertical");
	    }
	    if (this.props.small) {
	      classes.push(CLASS_ROOT + "--small");
	    }
	    if (this.props.large) {
	      classes.push(CLASS_ROOT + "--large");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    var viewBoxHeight;
	    var viewBoxWidth;
	    if ('arc' === this.props.type) {
	      if (this.props.vertical) {
	        viewBoxWidth = ARC_HEIGHT;
	        viewBoxHeight = CIRCLE_WIDTH;
	      } else {
	        viewBoxWidth = CIRCLE_WIDTH;
	        viewBoxHeight = ARC_HEIGHT;
	      }
	    } else if ('circle' === this.props.type) {
	      viewBoxWidth = CIRCLE_WIDTH;
	      viewBoxHeight = CIRCLE_WIDTH;
	    } else if ('bar' === this.props.type) {
	      if (this.props.vertical) {
	        viewBoxWidth = BAR_THICKNESS;
	        viewBoxHeight = BAR_LENGTH;
	      } else {
	        viewBoxWidth = BAR_LENGTH;
	        viewBoxHeight = BAR_THICKNESS;
	      }
	    }

	    var values = null;
	    if ('arc' === this.props.type || 'circle' === this.props.type) {
	      values = this._renderArcOrCircle();
	    } else if ('bar' === this.props.type) {
	      values = this._renderBar();
	    }

	    var threshold = null;
	    if (this.props.threshold) {
	      if ('arc' === this.props.type || 'circle' === this.props.type) {
	        threshold = this._renderCircleOrArcThreshold();
	      } else if ('bar' === this.props.type) {
	        threshold = this._renderBarThreshold();
	      }
	    }

	    var minLabel = null;
	    if (this.state.min.label) {
	      minLabel = (
	        React.createElement("div", {className: CLASS_ROOT + "__label-min"}, 
	          this.state.min.label
	        )
	      );
	    }
	    var maxLabel = null;
	    if (this.state.max.label) {
	      maxLabel = (
	        React.createElement("div", {className: CLASS_ROOT + "__label-max"}, 
	          this.state.max.label
	        )
	      );
	    }

	    var current = null;
	    if (this.state.activeIndex >= 0) {
	      current = this._renderCurrent();
	    }

	    var legend = null;
	    if (this.props.legend) {
	      legend = this._renderLegend();
	    }

	    return (
	      React.createElement("div", {className: classes.join(' ')}, 
	        React.createElement("svg", {className: CLASS_ROOT + "__graphic", 
	          viewBox: "0 0 " + viewBoxWidth + " " + viewBoxHeight, 
	          preserveAspectRatio: "xMidYMid meet"}, 
	          React.createElement("g", null, 
	            values, 
	            threshold
	          )
	        ), 
	        current, 
	        React.createElement("div", {className: CLASS_ROOT + "__labels"}, 
	          minLabel, 
	          maxLabel
	        ), 
	        legend
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

	var CLASS_ROOT = "radio-button";

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
	    var classes = [CLASS_ROOT];
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }
	    return (
	      React.createElement("label", {className: classes.join(' ')}, 
	        React.createElement("input", {className: CLASS_ROOT + "__input", 
	          id: this.props.id, name: this.props.name, type: "radio", 
	          checked: this.props.checked, 
	          defaultChecked: this.props.defaultChecked, 
	          onChange: this.props.onChange}), 
	        React.createElement("span", {className: CLASS_ROOT + "__control"}), 
	        React.createElement("span", {className: CLASS_ROOT + "__label"}, 
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
	var Overlay = __webpack_require__(46);
	var SearchIcon = __webpack_require__(33);
	var IntlMixin = __webpack_require__(43);

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

	  mixins: [ReactLayeredComponent, KeyboardAccelerators, Overlay, IntlMixin],

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
	      layer: (! this.state.inline || this.props.suggestions),
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

	  _layout: function () {
	    if (window.innerWidth < 600) {
	      this.setState({inline: false});
	    } else {
	      this.setState({inline: this.props.inline});
	    }
	  },

	  _onResize: function () {
	    // debounce
	    clearTimeout(this._resizeTimer);
	    this._resizeTimer = setTimeout(this._layout, 50);
	  },

	  getInitialState: function () {
	    return {
	      align: 'left',
	      controlFocused: false,
	      inline: this.props.inline,
	      layer: false,
	      activeSuggestionIndex: -1
	    };
	  },

	  componentDidMount: function () {
	    window.addEventListener('resize', this._onResize);
	    this._layout();
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

	      this.startOverlay(baseElement, layerElement, this.props.align);
	      inputElement.focus();
	    }
	  },

	  componentWillUnmount: function () {
	    document.removeEventListener('click', this._onRemoveLayer);
	    window.removeEventListener('resize', this._onResize);
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

	    if (this.state.inline) {
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

	    if (this.state.inline) {

	      var readOnly = this.props.suggestions ? true : false;

	      return (
	        React.createElement("div", {className: classes.join(' ')}, 
	          React.createElement("input", {ref: "input", type: "search", 
	            placeholder: this.getGrommetIntlMessage(this.props.placeHolder), 
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

	      if (! this.state.inline) {
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
	var Overlay = __webpack_require__(46);
	var SearchIcon = __webpack_require__(33);

	var CLASS_ROOT = "search-input";

	var SearchInput = React.createClass({displayName: "SearchInput",

	  propTypes: {
	    defaultValue: React.PropTypes.oneOfType([
	      React.PropTypes.shape({
	        label: React.PropTypes.string,
	        value: React.PropTypes.string
	      }),
	      React.PropTypes.string
	    ]),
	    id: React.PropTypes.string,
	    name: React.PropTypes.string,
	    onChange: React.PropTypes.func,
	    onSearch: React.PropTypes.func,
	    suggestions: React.PropTypes.arrayOf(
	      React.PropTypes.oneOfType([
	        React.PropTypes.shape({
	          label: React.PropTypes.string,
	          value: React.PropTypes.string
	        }),
	        React.PropTypes.string
	      ])
	    ),
	    value: React.PropTypes.oneOfType([
	      React.PropTypes.shape({
	        label: React.PropTypes.string,
	        value: React.PropTypes.string
	      }),
	      React.PropTypes.string
	    ])
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
	      var suggestion = this.props.suggestions[this.state.activeSuggestionIndex];
	      this.setState({value: suggestion});
	      this.props.onChange(suggestion);
	    }
	  },

	  _onClickSuggestion: function (suggestion) {
	    this.setState({value: suggestion});
	    this._activation(false);
	    this.props.onChange(suggestion);
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

	  _valueText: function (value) {
	    var text = '';
	    if (value) {
	      if ('string' === typeof value) {
	        text = value;
	      } else {
	        text = value.label || value.value;
	      }
	    }
	    return text;
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
	          value: this._valueText(this.props.value), 
	          defaultValue: this._valueText(this.props.defaultValue), 
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
	        suggestions = this.props.suggestions.map(function (suggestion, index) {
	          var classes = [CLASS_ROOT + "__layer-suggestion"];
	          if (index === this.state.activeSuggestionIndex) {
	            classes.push(CLASS_ROOT + "__layer-suggestion--active");
	          }
	          return (
	            React.createElement("div", {key: this._valueText(suggestion), 
	              className: classes.join(' '), 
	              onClick: this._onClickSuggestion.bind(this, suggestion)}, 
	              this._valueText(suggestion)
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

	var CLASS_ROOT = "section";

	var Section = React.createClass({displayName: "Section",

	  propTypes: {
	    centered: React.PropTypes.bool,
	    compact: React.PropTypes.bool,
	    colorIndex: React.PropTypes.string,
	    direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
	    flush: React.PropTypes.bool,
	    texture: React.PropTypes.string
	  },

	  getDefaultProps: function () {
	    return {
	      colored: false,
	      direction: 'down',
	      flush: true,
	      small: false
	    };
	  },

	  render: function() {
	    var classes = [CLASS_ROOT];
	    var contentClasses = [CLASS_ROOT + "__content"];

	    if (this.props.compact) {
	      classes.push(CLASS_ROOT + "--compact");
	    }
	    if (this.props.centered) {
	      classes.push(CLASS_ROOT + "--centered");
	    }
	    if (this.props.flush) {
	      classes.push(CLASS_ROOT + "--flush");
	    }
	    if (this.props.direction) {
	      classes.push(CLASS_ROOT + "--" + this.props.direction);
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
	var InfiniteScroll = __webpack_require__(48);

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
	    for (var i = 0; i < rows.length; i++) {
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
	    for (var i = 0; i < cells.length; i++) {
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
	    for (var i = 0; i < cells.length; i++) {
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
	var InfiniteScroll = __webpack_require__(48);

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
	var IntlMixin = __webpack_require__(43);

	var CLASS_ROOT = "object";

	var GrommetObject = React.createClass({displayName: "GrommetObject",

	  mixins: [IntlMixin],

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
	        } else if (Array.isArray(value)) {
	          var items = this._renderArray(value);
	          value = (
	            React.createElement("ol", null, items)
	          );
	          classes.push(CLASS_ROOT + "__attribute--array");
	        } else if ('object' === typeof value) {
	          value = this._renderObject(value);
	          classes.push(CLASS_ROOT + "__attribute--container");
	        } else {
	          value = value.toString();
	        }
	        attrs.push(
	          React.createElement("li", {key: 'n_' + name, className: classes.join(' ')}, 
	            React.createElement("span", {className: CLASS_ROOT + "__attribute-name"}, this.getGrommetIntlMessage(name)), 
	            React.createElement("span", {className: CLASS_ROOT + "__attribute-value"}, this.getGrommetIntlMessage(value))
	          )
	        );
	      }
	    }

	    return (
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

	var Left = React.createClass({displayName: "Left",

	  render: function() {
	    var className = 'control-icon control-icon-left';
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

	module.exports = Left;


/***/ },
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);

	var Right = React.createClass({displayName: "Right",

	  render: function() {
	    var className = 'control-icon control-icon-right';
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

	module.exports = Right;


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
	var OK = __webpack_require__(50);
	var ErrorStatus = __webpack_require__(51);
	var Warning = __webpack_require__(52);
	var Disabled = __webpack_require__(53);
	var Unknown = __webpack_require__(54);
	var Label = __webpack_require__(55);

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
	    switch (this.props.value.toLowerCase()) {
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

	var Reflux = __webpack_require__(56);
	var Rest = __webpack_require__(41);

	var Actions = Reflux.createActions({
	  // Session
	  'login': {asyncResult: true},
	  'logout': {}
	});

	Actions.login.listen(function(userName, password) {
	  if (!userName || !password) {
	    return this.failed(400, { message: 'loginInvalidPassword'});
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

	var Reflux = __webpack_require__(56);
	var Actions = __webpack_require__(39);
	var Cookies = __webpack_require__(49);

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

	var request = __webpack_require__(62);

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
	          for (var i = 0; i < value.length; i++) {
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

	/* WEBPACK VAR INJECTION */(function(global) {// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	var supportedLocales = ['en-US', 'pt-BR'];

	function localesSupported() {
	  return global.Intl && supportedLocales.every(function (locale) {
	    return Intl.NumberFormat.supportedLocalesOf(locale)[0] === locale &&
	            Intl.DateTimeFormat.supportedLocalesOf(locale)[0] === locale;
	  });
	}

	if (! localesSupported()) {
	  __webpack_require__(63);
	  IntlPolyfill.__addLocaleData(__webpack_require__(65));
	  IntlPolyfill.__addLocaleData(__webpack_require__(66));
	  Intl.NumberFormat = IntlPolyfill.NumberFormat;
	  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
	}

	var React = __webpack_require__(42);
	var ReactIntl = __webpack_require__(60);
	var IntlMixin = ReactIntl.IntlMixin;
	var FormattedDate = ReactIntl.FormattedDate;

	module.exports = {
	  mixins: [IntlMixin],

	  getChildContext: function () {
	    if (!this.props.locales && !this.context.locales) {
	      this.context.locales = 'en-US';
	    }

	    if (!this.props.messages && !this.context.messages) {
	      try {
	        this.context.messages = __webpack_require__(57)("./" + (this.props.locales || this.context.locales || 'en-US'));
	      } catch (e) {
	        this.context.messages = __webpack_require__(58);
	      }
	    }
	  },

	  getGrommetFormattedDate: function (date) {
	    return (
	      React.createElement(FormattedDate, {
	        value: new Date(date), 
	        day: "numeric", 
	        month: "numeric", 
	        year: "numeric", 
	        hour: "numeric", 
	        minute: "numeric", 
	        second: "numeric"})
	    );
	  },

	  getGrommetIntlMessage: function(messageKey) {
	    var message = messageKey;
	    if (messageKey) {
	      try {
	        message = this.getIntlMessage(messageKey);
	      } catch (e) {
	        message = messageKey;
	      }
	    }
	    return message;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014 Hewlett-Packard Development Company, L.P.

	var React = __webpack_require__(42);
	var IntlMixin = __webpack_require__(43);

	var CLASS_ROOT = "legend";

	var Legend = React.createClass({displayName: "Legend",

	  mixins: [IntlMixin],

	  propTypes: {
	    activeIndex: React.PropTypes.number,
	    onActive: React.PropTypes.func,
	    series: React.PropTypes.arrayOf(React.PropTypes.shape({
	      label: React.PropTypes.string,
	      value: React.PropTypes.number,
	      units: React.PropTypes.string,
	      colorIndex: React.PropTypes.oneOfType([
	        React.PropTypes.number, // 1-6
	        React.PropTypes.string // status
	      ]),
	      onClick: React.PropTypes.func
	    })).isRequired,
	    total: React.PropTypes.bool,
	    units: React.PropTypes.string,
	    value: React.PropTypes.number
	  },

	  _onActive: function (index) {
	    this.setState({activeIndex: index});
	    if (this.props.onActive) {
	      this.props.onActive(index);
	    }
	  },

	  getInitialState: function () {
	    return {activeIndex: this.props.activeIndex};
	  },

	  componentWillReceiveProps: function (newProps) {
	    this.setState({activeIndex: newProps.activeIndex});
	  },

	  _itemColorIndex: function (item, index) {
	    return item.colorIndex || ('graph-' + (index + 1));
	  },

	  render: function () {
	    var classes = [CLASS_ROOT];
	    if (this.props.series.length === 1) {
	      classes.push(CLASS_ROOT + "--single");
	    }
	    if (this.props.className) {
	      classes.push(this.props.className);
	    }

	    var totalValue = 0;
	    var items = this.props.series.map(function (item, index) {
	      var legendClasses = [CLASS_ROOT + "__item"];
	      if (index === this.state.activeIndex) {
	        legendClasses.push(CLASS_ROOT + "__item--active");
	      }
	      var colorIndex = this._itemColorIndex(item, index);
	      totalValue += item.value;

	      var valueClasses = [CLASS_ROOT + "__item-value"];
	      if (1 === this.props.series.length) {
	        valueClasses.push("large-number-font");
	      }

	      return (
	        React.createElement("li", {key: item.label, className: legendClasses.join(' '), 
	          onClick: item.onClick, 
	          onMouseOver: this._onActive.bind(this, index), 
	          onMouseOut: this._onActive.bind(this, this.props.activeIndex)}, 
	          React.createElement("svg", {className: CLASS_ROOT + "__item-swatch color-index-" + colorIndex, 
	            viewBox: "0 0 12 12"}, 
	            React.createElement("path", {className: item.className, d: "M 5 0 l 0 12"})
	          ), 
	          React.createElement("span", {className: CLASS_ROOT + "__item-label"}, item.label), 
	          React.createElement("span", {className: valueClasses.join(' ')}, 
	            item.value, 
	            React.createElement("span", {className: CLASS_ROOT + "__item-units"}, this.props.units)
	          )
	        )
	      );
	    }, this);

	    var total = null;
	    if (this.props.total) {
	      total = (
	        React.createElement("li", {className: CLASS_ROOT + "__total"}, 
	          React.createElement("span", {className: CLASS_ROOT + "__total-label"}, 
	            this.getGrommetIntlMessage('Total')
	          ), 
	          React.createElement("span", {className: CLASS_ROOT + "__total-value"}, 
	            totalValue, 
	            React.createElement("span", {className: CLASS_ROOT + "__total-units"}, this.props.units)
	          )
	        )
	      );
	    }

	    return (
	      React.createElement("ol", {className: classes.join(' ')}, 
	        items.reverse(), 
	        total
	      )
	    );
	  }

	});

	module.exports = Legend;


/***/ },
/* 45 */
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014 Hewlett-Packard Development Company, L.P.

	var DOM = __webpack_require__(59);

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
/* 47 */
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
	        React.createElement("g", {stroke: "none"}, 
	          React.createElement("polygon", {points: "33.4,19.7 24.1,30.3 14.8,19.7"})
	        )
	      )
	    );
	  }

	});

	module.exports = DropCaret;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014 Hewlett-Packard Development Company, L.P.

	var DOM = __webpack_require__(59);

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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64);


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./en-US": 58,
		"./en-US.js": 58,
		"./pt-BR": 61,
		"./pt-BR.js": 61
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 57;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	module.exports = {
	  IndexFilters: {
	    filters: '{quantity, plural,\n  =0 {Filters}\n  =1 {one filter}\n  other {# filters}\n}'
	  },
	  Active: 'Active',
	  Alerts: 'Alerts',
	  All: 'All',
	  Category: 'Category',
	  Cleared: 'Cleared',
	  Completed: 'Completed',
	  created: 'Created',
	  Critical: 'Critical',
	  Disabled: 'Disabled',
	  Error: 'Error',
	  loginInvalidPassword: 'Please provide Username and Password.',
	  'Log In': 'Log In',
	  Logout: 'Logout',
	  model: 'Model',
	  modified: 'Modified',
	  Name: 'Name',
	  OK: 'OK',
	  Password: 'Password',
	  'Remember me': 'Remember me',
	  Resource: 'Resource',
	  Running: 'Running',
	  Search: 'Search',
	  State: 'State',
	  Status: 'Status',
	  Tasks: 'Tasks',
	  Time: 'Time',
	  Total: 'Total',
	  Unknown: 'Unknown',
	  Username: 'Username',
	  uri: 'URI',
	  Warning: 'Warning'
	};


/***/ },
/* 59 */
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* jshint node:true */
	'use strict';

	// Expose `React` as a global, because the ReactIntlMixin assumes it's global.
	var oldReact = global.React;
	global.React = __webpack_require__(42);

	// Require the lib and add all locale data to `ReactIntl`. This module will be
	// ignored when bundling for the browser with Browserify/Webpack.
	var ReactIntl = __webpack_require__(68);
	__webpack_require__(67);

	// Export the Mixin as the default export for back-compat with v1.0.0. This will
	// be changed to simply re-exporting `ReactIntl` as the default export in v2.0.
	exports = module.exports = ReactIntl.IntlMixin;

	// Define non-enumerable expandos for each named export on the default export --
	// which is the Mixin for back-compat with v1.0.0.
	Object.keys(ReactIntl).forEach(function (namedExport) {
	    Object.defineProperty(exports, namedExport, {
	        enumerable: true,
	        value     : ReactIntl[namedExport]
	    });
	});

	// Put back `global.React` to how it was.
	if (oldReact) {
	    global.React = oldReact;
	} else {
	    // IE < 9 will throw when trying to delete something off the global object,
	    // `window`, so this does the next best thing as sets it to `undefined`.
	    try {
	        delete global.React;
	    } catch (e) {
	        global.React = undefined;
	    }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

	module.exports = {
	  IndexFilters: {
	    filters: '{quantity, plural,\n  =0 {Filtros}\n  =1 {um filtro}\n  other {# filtros}\n}'
	  },
	  Active: 'Ativos',
	  Alerts: 'Alertas',
	  All: 'Todos',
	  Category: 'Categoria',
	  Cleared: 'Livre',
	  Completed: 'Completado',
	  created: 'Criado',
	  Critical: 'Crítico',
	  Disabled: 'Desabilitado',
	  Error: 'Erro',
	  loginInvalidPassword: 'Por favor, informe Usuário e Senha.',
	  'Log In': 'Logar',
	  Logout: 'Deslogar',
	  model: 'Modelo',
	  modified: 'Modificado',
	  Name: 'Nome',
	  OK: 'OK',
	  Password: 'Senha',
	  'Remember me': 'Lembrar Usuário',
	  Resource: 'Recurso',
	  Running: 'Executando',
	  Search: 'Buscar',
	  State: 'Estado',
	  Status: 'Situaçāo',
	  Tasks: 'Tarefas',
	  Time: 'Data',
	  Total: 'Total',
	  Unknown: 'Desconhecido',
	  Username: 'Usuário',
	  uri: 'URI',
	  Warning: 'Alerta'
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Emitter = __webpack_require__(83);
	var reduce = __webpack_require__(84);

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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Copyright 2013 Andy Earnshaw, MIT License
	 *
	 * Implements the ECMAScript Internationalization API in ES5-compatible environments,
	 * following the ECMA-402 specification as closely as possible
	 *
	 * ECMA-402: http://ecma-international.org/ecma-402/1.0/
	 *
	 * CLDR format locale data should be provided using IntlPolyfill.__addLocaleData().
	 */
	/*jshint proto:true, eqnull:true, boss:true, laxbreak:true, newcap:false, shadow:true, funcscope:true */
	/*globals global, define, exports, module, window*/

	(function (global, factory) {
	    var IntlPolyfill = factory();

	    // register in -all- the module systems (at once)
	    if (true)
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (IntlPolyfill), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	    if (true)
	        module.exports = IntlPolyfill;

	    if (!global.Intl) {
	        global.Intl = IntlPolyfill;
	        IntlPolyfill.__applyLocaleSensitivePrototypes();
	    }

	    global.IntlPolyfill = IntlPolyfill;

	})(typeof global !== 'undefined' ? global : this, function() {
	"use strict";
	var
	    Intl = {},

	    realDefineProp = (function () {
	        try { return !!Object.defineProperty({}, 'a', {}); }
	        catch (e) { return false; }
	    })(),

	    // Need a workaround for getters in ES3
	    es3  = !realDefineProp && !Object.prototype.__defineGetter__,

	    // We use this a lot (and need it for proto-less objects)
	    hop = Object.prototype.hasOwnProperty,

	    // Naive defineProperty for compatibility
	    defineProperty = realDefineProp ? Object.defineProperty : function (obj, name, desc) {
	        if ('get' in desc && obj.__defineGetter__)
	            obj.__defineGetter__(name, desc.get);

	        else if (!hop.call(obj, name) || 'value' in desc)
	            obj[name] = desc.value;
	    },

	    // Array.prototype.indexOf, as good as we need it to be
	    arrIndexOf = Array.prototype.indexOf || function (search) {
	        /*jshint validthis:true */
	        var t = this;
	        if (!t.length)
	            return -1;

	        for (var i = arguments[1] || 0, max = t.length; i < max; i++) {
	            if (t[i] === search)
	                return i;
	        }

	        return -1;
	    },

	    // Create an object with the specified prototype (2nd arg required for Record)
	    objCreate = Object.create || function (proto, props) {
	        var obj;

	        function F() {}
	        F.prototype = proto;
	        obj = new F();

	        for (var k in props) {
	            if (hop.call(props, k))
	                defineProperty(obj, k, props[k]);
	        }

	        return obj;
	    },

	    // Snapshot some (hopefully still) native built-ins
	    arrSlice  = Array.prototype.slice,
	    arrConcat = Array.prototype.concat,
	    arrPush   = Array.prototype.push,
	    arrJoin   = Array.prototype.join,
	    arrShift  = Array.prototype.shift,
	    arrUnshift= Array.prototype.unshift,

	    // Naive Function.prototype.bind for compatibility
	    fnBind = Function.prototype.bind || function (thisObj) {
	        var fn = this,
	            args = arrSlice.call(arguments, 1);

	        // All our (presently) bound functions have either 1 or 0 arguments. By returning
	        // different function signatures, we can pass some tests in ES3 environments
	        if (fn.length === 1) {
	            return function (a) {
	                return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
	            };
	        }
	        else {
	            return function () {
	                return fn.apply(thisObj, arrConcat.call(args, arrSlice.call(arguments)));
	            };
	        }
	    },

	    // Default locale is the first-added locale data for us
	    defaultLocale,

	    // Object housing internal properties for constructors
	    internals = objCreate(null),

	    // Keep internal properties internal
	    secret = Math.random(),

	    // An object map of date component keys, saves using a regex later
	    dateWidths = objCreate(null, { narrow:{}, short:{}, long:{} }),

	    // Each constructor prototype should be an instance of the constructor itself, but we
	    // can't initialise them as such until some locale data has been added, so this is how
	    // we keep track
	    numberFormatProtoInitialised = false,
	    dateTimeFormatProtoInitialised = false,

	    // Some regular expressions we're using
	    expCurrencyCode = /^[A-Z]{3}$/,
	    expUnicodeExSeq = /-u(?:-[0-9a-z]{2,8})+/gi, // See `extension` below

	    expBCP47Syntax,
	    expExtSequences,
	    expVariantDupes,
	    expSingletonDupes,

	    // IANA Subtag Registry redundant tag and subtag maps
	    redundantTags = {
	        tags: {
	            "art-lojban":   "jbo",       "i-ami":        "ami",       "i-bnn":       "bnn",  "i-hak":      "hak",
	            "i-klingon":    "tlh",       "i-lux":        "lb",        "i-navajo":    "nv",   "i-pwn":      "pwn",
	            "i-tao":        "tao",       "i-tay":        "tay",       "i-tsu":       "tsu",  "no-bok":     "nb",
	            "no-nyn":       "nn",        "sgn-BE-FR":    "sfb",       "sgn-BE-NL":   "vgt",  "sgn-CH-DE":  "sgg",
	            "zh-guoyu":     "cmn",       "zh-hakka":     "hak",       "zh-min-nan":  "nan",  "zh-xiang":   "hsn",
	            "sgn-BR":       "bzs",       "sgn-CO":       "csn",       "sgn-DE":      "gsg",  "sgn-DK":     "dsl",
	            "sgn-ES":       "ssp",       "sgn-FR":       "fsl",       "sgn-GB":      "bfi",  "sgn-GR":     "gss",
	            "sgn-IE":       "isg",       "sgn-IT":       "ise",       "sgn-JP":      "jsl",  "sgn-MX":     "mfs",
	            "sgn-NI":       "ncs",       "sgn-NL":       "dse",       "sgn-NO":      "nsl",  "sgn-PT":     "psr",
	            "sgn-SE":       "swl",       "sgn-US":       "ase",       "sgn-ZA":      "sfs",  "zh-cmn":     "cmn",
	            "zh-cmn-Hans":  "cmn-Hans",  "zh-cmn-Hant":  "cmn-Hant",  "zh-gan":      "gan",  "zh-wuu":     "wuu",
	            "zh-yue":       "yue"
	        },
	        subtags: {
	              BU: "MM",   DD: "DE",   FX: "FR",   TP: "TL",   YD: "YE",   ZR: "CD",  heploc: "alalc97",
	            'in': "id",   iw: "he",   ji:  "yi",  jw: "jv",   mo: "ro",  ayx: "nun", bjd: "drl",
	             ccq: "rki", cjr: "mom", cka: "cmr", cmk: "xch", drh: "khk", drw: "prs", gav: "dev",
	             hrr: "jal", ibi: "opa", kgh: "kml", lcq: "ppr", mst: "mry", myt: "mry", sca: "hle",
	             tie: "ras", tkk: "twm", tlw: "weo", tnf: "prs", ybd: "rki", yma: "lrr"
	        },
	        extLang: {
	            aao: [ "aao", "ar"  ], abh: [ "abh", "ar"  ], abv: [ "abv", "ar"  ], acm: [ "acm", "ar"  ],
	            acq: [ "acq", "ar"  ], acw: [ "acw", "ar"  ], acx: [ "acx", "ar"  ], acy: [ "acy", "ar"  ],
	            adf: [ "adf", "ar"  ], ads: [ "ads", "sgn" ], aeb: [ "aeb", "ar"  ], aec: [ "aec", "ar"  ],
	            aed: [ "aed", "sgn" ], aen: [ "aen", "sgn" ], afb: [ "afb", "ar"  ], afg: [ "afg", "sgn" ],
	            ajp: [ "ajp", "ar"  ], apc: [ "apc", "ar"  ], apd: [ "apd", "ar"  ], arb: [ "arb", "ar"  ],
	            arq: [ "arq", "ar"  ], ars: [ "ars", "ar"  ], ary: [ "ary", "ar"  ], arz: [ "arz", "ar"  ],
	            ase: [ "ase", "sgn" ], asf: [ "asf", "sgn" ], asp: [ "asp", "sgn" ], asq: [ "asq", "sgn" ],
	            asw: [ "asw", "sgn" ], auz: [ "auz", "ar"  ], avl: [ "avl", "ar"  ], ayh: [ "ayh", "ar"  ],
	            ayl: [ "ayl", "ar"  ], ayn: [ "ayn", "ar"  ], ayp: [ "ayp", "ar"  ], bbz: [ "bbz", "ar"  ],
	            bfi: [ "bfi", "sgn" ], bfk: [ "bfk", "sgn" ], bjn: [ "bjn", "ms"  ], bog: [ "bog", "sgn" ],
	            bqn: [ "bqn", "sgn" ], bqy: [ "bqy", "sgn" ], btj: [ "btj", "ms"  ], bve: [ "bve", "ms"  ],
	            bvl: [ "bvl", "sgn" ], bvu: [ "bvu", "ms"  ], bzs: [ "bzs", "sgn" ], cdo: [ "cdo", "zh"  ],
	            cds: [ "cds", "sgn" ], cjy: [ "cjy", "zh"  ], cmn: [ "cmn", "zh"  ], coa: [ "coa", "ms"  ],
	            cpx: [ "cpx", "zh"  ], csc: [ "csc", "sgn" ], csd: [ "csd", "sgn" ], cse: [ "cse", "sgn" ],
	            csf: [ "csf", "sgn" ], csg: [ "csg", "sgn" ], csl: [ "csl", "sgn" ], csn: [ "csn", "sgn" ],
	            csq: [ "csq", "sgn" ], csr: [ "csr", "sgn" ], czh: [ "czh", "zh"  ], czo: [ "czo", "zh"  ],
	            doq: [ "doq", "sgn" ], dse: [ "dse", "sgn" ], dsl: [ "dsl", "sgn" ], dup: [ "dup", "ms"  ],
	            ecs: [ "ecs", "sgn" ], esl: [ "esl", "sgn" ], esn: [ "esn", "sgn" ], eso: [ "eso", "sgn" ],
	            eth: [ "eth", "sgn" ], fcs: [ "fcs", "sgn" ], fse: [ "fse", "sgn" ], fsl: [ "fsl", "sgn" ],
	            fss: [ "fss", "sgn" ], gan: [ "gan", "zh"  ], gds: [ "gds", "sgn" ], gom: [ "gom", "kok" ],
	            gse: [ "gse", "sgn" ], gsg: [ "gsg", "sgn" ], gsm: [ "gsm", "sgn" ], gss: [ "gss", "sgn" ],
	            gus: [ "gus", "sgn" ], hab: [ "hab", "sgn" ], haf: [ "haf", "sgn" ], hak: [ "hak", "zh"  ],
	            hds: [ "hds", "sgn" ], hji: [ "hji", "ms"  ], hks: [ "hks", "sgn" ], hos: [ "hos", "sgn" ],
	            hps: [ "hps", "sgn" ], hsh: [ "hsh", "sgn" ], hsl: [ "hsl", "sgn" ], hsn: [ "hsn", "zh"  ],
	            icl: [ "icl", "sgn" ], ils: [ "ils", "sgn" ], inl: [ "inl", "sgn" ], ins: [ "ins", "sgn" ],
	            ise: [ "ise", "sgn" ], isg: [ "isg", "sgn" ], isr: [ "isr", "sgn" ], jak: [ "jak", "ms"  ],
	            jax: [ "jax", "ms"  ], jcs: [ "jcs", "sgn" ], jhs: [ "jhs", "sgn" ], jls: [ "jls", "sgn" ],
	            jos: [ "jos", "sgn" ], jsl: [ "jsl", "sgn" ], jus: [ "jus", "sgn" ], kgi: [ "kgi", "sgn" ],
	            knn: [ "knn", "kok" ], kvb: [ "kvb", "ms"  ], kvk: [ "kvk", "sgn" ], kvr: [ "kvr", "ms"  ],
	            kxd: [ "kxd", "ms"  ], lbs: [ "lbs", "sgn" ], lce: [ "lce", "ms"  ], lcf: [ "lcf", "ms"  ],
	            liw: [ "liw", "ms"  ], lls: [ "lls", "sgn" ], lsg: [ "lsg", "sgn" ], lsl: [ "lsl", "sgn" ],
	            lso: [ "lso", "sgn" ], lsp: [ "lsp", "sgn" ], lst: [ "lst", "sgn" ], lsy: [ "lsy", "sgn" ],
	            ltg: [ "ltg", "lv"  ], lvs: [ "lvs", "lv"  ], lzh: [ "lzh", "zh"  ], max: [ "max", "ms"  ],
	            mdl: [ "mdl", "sgn" ], meo: [ "meo", "ms"  ], mfa: [ "mfa", "ms"  ], mfb: [ "mfb", "ms"  ],
	            mfs: [ "mfs", "sgn" ], min: [ "min", "ms"  ], mnp: [ "mnp", "zh"  ], mqg: [ "mqg", "ms"  ],
	            mre: [ "mre", "sgn" ], msd: [ "msd", "sgn" ], msi: [ "msi", "ms"  ], msr: [ "msr", "sgn" ],
	            mui: [ "mui", "ms"  ], mzc: [ "mzc", "sgn" ], mzg: [ "mzg", "sgn" ], mzy: [ "mzy", "sgn" ],
	            nan: [ "nan", "zh"  ], nbs: [ "nbs", "sgn" ], ncs: [ "ncs", "sgn" ], nsi: [ "nsi", "sgn" ],
	            nsl: [ "nsl", "sgn" ], nsp: [ "nsp", "sgn" ], nsr: [ "nsr", "sgn" ], nzs: [ "nzs", "sgn" ],
	            okl: [ "okl", "sgn" ], orn: [ "orn", "ms"  ], ors: [ "ors", "ms"  ], pel: [ "pel", "ms"  ],
	            pga: [ "pga", "ar"  ], pks: [ "pks", "sgn" ], prl: [ "prl", "sgn" ], prz: [ "prz", "sgn" ],
	            psc: [ "psc", "sgn" ], psd: [ "psd", "sgn" ], pse: [ "pse", "ms"  ], psg: [ "psg", "sgn" ],
	            psl: [ "psl", "sgn" ], pso: [ "pso", "sgn" ], psp: [ "psp", "sgn" ], psr: [ "psr", "sgn" ],
	            pys: [ "pys", "sgn" ], rms: [ "rms", "sgn" ], rsi: [ "rsi", "sgn" ], rsl: [ "rsl", "sgn" ],
	            sdl: [ "sdl", "sgn" ], sfb: [ "sfb", "sgn" ], sfs: [ "sfs", "sgn" ], sgg: [ "sgg", "sgn" ],
	            sgx: [ "sgx", "sgn" ], shu: [ "shu", "ar"  ], slf: [ "slf", "sgn" ], sls: [ "sls", "sgn" ],
	            sqk: [ "sqk", "sgn" ], sqs: [ "sqs", "sgn" ], ssh: [ "ssh", "ar"  ], ssp: [ "ssp", "sgn" ],
	            ssr: [ "ssr", "sgn" ], svk: [ "svk", "sgn" ], swc: [ "swc", "sw"  ], swh: [ "swh", "sw"  ],
	            swl: [ "swl", "sgn" ], syy: [ "syy", "sgn" ], tmw: [ "tmw", "ms"  ], tse: [ "tse", "sgn" ],
	            tsm: [ "tsm", "sgn" ], tsq: [ "tsq", "sgn" ], tss: [ "tss", "sgn" ], tsy: [ "tsy", "sgn" ],
	            tza: [ "tza", "sgn" ], ugn: [ "ugn", "sgn" ], ugy: [ "ugy", "sgn" ], ukl: [ "ukl", "sgn" ],
	            uks: [ "uks", "sgn" ], urk: [ "urk", "ms"  ], uzn: [ "uzn", "uz"  ], uzs: [ "uzs", "uz"  ],
	            vgt: [ "vgt", "sgn" ], vkk: [ "vkk", "ms"  ], vkt: [ "vkt", "ms"  ], vsi: [ "vsi", "sgn" ],
	            vsl: [ "vsl", "sgn" ], vsv: [ "vsv", "sgn" ], wuu: [ "wuu", "zh"  ], xki: [ "xki", "sgn" ],
	            xml: [ "xml", "sgn" ], xmm: [ "xmm", "ms"  ], xms: [ "xms", "sgn" ], yds: [ "yds", "sgn" ],
	            ysl: [ "ysl", "sgn" ], yue: [ "yue", "zh"  ], zib: [ "zib", "sgn" ], zlm: [ "zlm", "ms"  ],
	            zmi: [ "zmi", "ms"  ], zsl: [ "zsl", "sgn" ], zsm: [ "zsm", "ms"  ]
	        }
	    },

	    // Currency minor units output from tools/getISO4217data.js, formatted
	    currencyMinorUnits = {
	        BHD: 3, BYR: 0, XOF: 0, BIF: 0, XAF: 0, CLF: 0, CLP: 0, KMF: 0, DJF: 0,
	        XPF: 0, GNF: 0, ISK: 0, IQD: 3, JPY: 0, JOD: 3, KRW: 0, KWD: 3, LYD: 3,
	        OMR: 3, PYG: 0, RWF: 0, TND: 3, UGX: 0, UYI: 0, VUV: 0, VND: 0
	    };

	/**
	 * Defines regular expressions for various operations related to the BCP 47 syntax,
	 * as defined at http://tools.ietf.org/html/bcp47#section-2.1
	 */
	(function () {
	    var
	        // extlang       = 3ALPHA              ; selected ISO 639 codes
	        //                 *2("-" 3ALPHA)      ; permanently reserved
	        extlang = '[a-z]{3}(?:-[a-z]{3}){0,2}',

	        // language      = 2*3ALPHA            ; shortest ISO 639 code
	        //                 ["-" extlang]       ; sometimes followed by
	        //                                     ; extended language subtags
	        //               / 4ALPHA              ; or reserved for future use
	        //               / 5*8ALPHA            ; or registered language subtag
	        language = '(?:[a-z]{2,3}(?:-' + extlang + ')?|[a-z]{4}|[a-z]{5,8})',

	        // script        = 4ALPHA              ; ISO 15924 code
	        script = '[a-z]{4}',

	        // region        = 2ALPHA              ; ISO 3166-1 code
	        //               / 3DIGIT              ; UN M.49 code
	        region = '(?:[a-z]{2}|\\d{3})',

	        // variant       = 5*8alphanum         ; registered variants
	        //               / (DIGIT 3alphanum)
	        variant = '(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})',

	        //                                     ; Single alphanumerics
	        //                                     ; "x" reserved for private use
	        // singleton     = DIGIT               ; 0 - 9
	        //               / %x41-57             ; A - W
	        //               / %x59-5A             ; Y - Z
	        //               / %x61-77             ; a - w
	        //               / %x79-7A             ; y - z
	        singleton = '[0-9a-wy-z]',

	        // extension     = singleton 1*("-" (2*8alphanum))
	        extension = singleton + '(?:-[a-z0-9]{2,8})+',

	        // privateuse    = "x" 1*("-" (1*8alphanum))
	        privateuse = 'x(?:-[a-z0-9]{1,8})+',

	        // irregular     = "en-GB-oed"         ; irregular tags do not match
	        //               / "i-ami"             ; the 'langtag' production and
	        //               / "i-bnn"             ; would not otherwise be
	        //               / "i-default"         ; considered 'well-formed'
	        //               / "i-enochian"        ; These tags are all valid,
	        //               / "i-hak"             ; but most are deprecated
	        //               / "i-klingon"         ; in favor of more modern
	        //               / "i-lux"             ; subtags or subtag
	        //               / "i-mingo"           ; combination
	        //               / "i-navajo"
	        //               / "i-pwn"
	        //               / "i-tao"
	        //               / "i-tay"
	        //               / "i-tsu"
	        //               / "sgn-BE-FR"
	        //               / "sgn-BE-NL"
	        //               / "sgn-CH-DE"
	        irregular = '(?:en-GB-oed'
	                  + '|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)'
	                  + '|sgn-(?:BE-FR|BE-NL|CH-DE))',

	        // regular       = "art-lojban"        ; these tags match the 'langtag'
	        //               / "cel-gaulish"       ; production, but their subtags
	        //               / "no-bok"            ; are not extended language
	        //               / "no-nyn"            ; or variant subtags: their meaning
	        //               / "zh-guoyu"          ; is defined by their registration
	        //               / "zh-hakka"          ; and all of these are deprecated
	        //               / "zh-min"            ; in favor of a more modern
	        //               / "zh-min-nan"        ; subtag or sequence of subtags
	        //               / "zh-xiang"
	        regular = '(?:art-lojban|cel-gaulish|no-bok|no-nyn'
	                + '|zh-(?:guoyu|hakka|min|min-nan|xiang))',

	        // grandfathered = irregular           ; non-redundant tags registered
	        //               / regular             ; during the RFC 3066 era
	        grandfathered = '(?:' + irregular + '|' + regular + ')',

	        // langtag       = language
	        //                 ["-" script]
	        //                 ["-" region]
	        //                 *("-" variant)
	        //                 *("-" extension)
	        //                 ["-" privateuse]
	        langtag = language + '(?:-' + script + ')?(?:-' + region + ')?(?:-'
	                + variant + ')*(?:-' + extension + ')*(?:-' + privateuse + ')?';

	    // Language-Tag  = langtag             ; normal language tags
	    //               / privateuse          ; private use tag
	    //               / grandfathered       ; grandfathered tags
	    expBCP47Syntax = RegExp('^(?:'+langtag+'|'+privateuse+'|'+grandfathered+')$', 'i');

	    // Match duplicate variants in a language tag
	    expVariantDupes = RegExp('^(?!x).*?-('+variant+')-(?:\\w{4,8}-(?!x-))*\\1\\b', 'i');

	    // Match duplicate singletons in a language tag (except in private use)
	    expSingletonDupes = RegExp('^(?!x).*?-('+singleton+')-(?:\\w+-(?!x-))*\\1\\b', 'i');

	    // Match all extension sequences
	    expExtSequences = RegExp('-'+extension, 'ig');
	})();

	// Sect 6.2 Language Tags
	// ======================

	/**
	 * The IsStructurallyValidLanguageTag abstract operation verifies that the locale
	 * argument (which must be a String value)
	 *
	 * - represents a well-formed BCP 47 language tag as specified in RFC 5646 section
	 *   2.1, or successor,
	 * - does not include duplicate variant subtags, and
	 * - does not include duplicate singleton subtags.
	 *
	 * The abstract operation returns true if locale can be generated from the ABNF
	 * grammar in section 2.1 of the RFC, starting with Language-Tag, and does not
	 * contain duplicate variant or singleton subtags (other than as a private use
	 * subtag). It returns false otherwise. Terminal value characters in the grammar are
	 * interpreted as the Unicode equivalents of the ASCII octet values given.
	 */
	function /* 6.2.2 */IsStructurallyValidLanguageTag(locale) {
	    // represents a well-formed BCP 47 language tag as specified in RFC 5646
	    if (!expBCP47Syntax.test(locale))
	        return false;

	    // does not include duplicate variant subtags, and
	    if (expVariantDupes.test(locale))
	        return false;

	    // does not include duplicate singleton subtags.
	    if (expSingletonDupes.test(locale))
	        return false;

	    return true;
	}

	/**
	 * The CanonicalizeLanguageTag abstract operation returns the canonical and case-
	 * regularized form of the locale argument (which must be a String value that is
	 * a structurally valid BCP 47 language tag as verified by the
	 * IsStructurallyValidLanguageTag abstract operation). It takes the steps
	 * specified in RFC 5646 section 4.5, or successor, to bring the language tag
	 * into canonical form, and to regularize the case of the subtags, but does not
	 * take the steps to bring a language tag into “extlang form” and to reorder
	 * variant subtags.

	 * The specifications for extensions to BCP 47 language tags, such as RFC 6067,
	 * may include canonicalization rules for the extension subtag sequences they
	 * define that go beyond the canonicalization rules of RFC 5646 section 4.5.
	 * Implementations are allowed, but not required, to apply these additional rules.
	 */
	function /* 6.2.3 */CanonicalizeLanguageTag (locale) {
	    var match, parts;

	    // A language tag is in 'canonical form' when the tag is well-formed
	    // according to the rules in Sections 2.1 and 2.2

	    // Section 2.1 says all subtags use lowercase...
	    locale = locale.toLowerCase();

	    // ...with 2 exceptions: 'two-letter and four-letter subtags that neither
	    // appear at the start of the tag nor occur after singletons.  Such two-letter
	    // subtags are all uppercase (as in the tags "en-CA-x-ca" or "sgn-BE-FR") and
	    // four-letter subtags are titlecase (as in the tag "az-Latn-x-latn").
	    parts = locale.split('-');
	    for (var i = 1, max = parts.length; i < max; i++) {
	        // Two-letter subtags are all uppercase
	        if (parts[i].length === 2)
	            parts[i] = parts[i].toUpperCase();

	        // Four-letter subtags are titlecase
	        else if (parts[i].length === 4)
	            parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);

	        // Is it a singleton?
	        else if (parts[i].length === 1 && parts[i] != 'x')
	            break;
	    }
	    locale = arrJoin.call(parts, '-');

	    // The steps laid out in RFC 5646 section 4.5 are as follows:

	    // 1.  Extension sequences are ordered into case-insensitive ASCII order
	    //     by singleton subtag.
	    if ((match = locale.match(expExtSequences)) && match.length > 1) {
	        // The built-in sort() sorts by ASCII order, so use that
	        match.sort();

	        // Replace all extensions with the joined, sorted array
	        locale = locale.replace(
	            RegExp('(?:' + expExtSequences.source + ')+', 'i'),
	            arrJoin.call(match, '')
	        );
	    }

	    // 2.  Redundant or grandfathered tags are replaced by their 'Preferred-
	    //     Value', if there is one.
	    if (hop.call(redundantTags.tags, locale))
	        locale = redundantTags.tags[locale];

	    // 3.  Subtags are replaced by their 'Preferred-Value', if there is one.
	    //     For extlangs, the original primary language subtag is also
	    //     replaced if there is a primary language subtag in the 'Preferred-
	    //     Value'.
	    parts = locale.split('-');

	    for (var i = 1, max = parts.length; i < max; i++) {
	        if (hop.call(redundantTags.subtags, parts[i]))
	            parts[i] = redundantTags.subtags[parts[i]];

	        else if (hop.call(redundantTags.extLang, parts[i])) {
	            parts[i] = redundantTags.extLang[parts[i]][0];

	            // For extlang tags, the prefix needs to be removed if it is redundant
	            if (i === 1 && redundantTags.extLang[parts[1]][1] === parts[0]) {
	                parts = arrSlice.call(parts, i++);
	                max -= 1;
	            }
	        }
	    }

	    return arrJoin.call(parts, '-');
	}

	/**
	 * The DefaultLocale abstract operation returns a String value representing the
	 * structurally valid (6.2.2) and canonicalized (6.2.3) BCP 47 language tag for the
	 * host environment’s current locale.
	 */
	function /* 6.2.4 */DefaultLocale () {
	    return defaultLocale;
	}

	// Sect 6.3 Currency Codes
	// =======================

	/**
	 * The IsWellFormedCurrencyCode abstract operation verifies that the currency argument
	 * (after conversion to a String value) represents a well-formed 3-letter ISO currency
	 * code. The following steps are taken:
	 */
	function /* 6.3.1 */IsWellFormedCurrencyCode(currency) {
	    var
	        // 1. Let `c` be ToString(currency)
	        c = String(currency),

	        // 2. Let `normalized` be the result of mapping c to upper case as described
	        //    in 6.1.
	        normalized = toLatinUpperCase(c);

	    // 3. If the string length of normalized is not 3, return false.
	    // 4. If normalized contains any character that is not in the range "A" to "Z"
	    //    (U+0041 to U+005A), return false.
	    if (expCurrencyCode.test(normalized) === false)
	        return false;

	    // 5. Return true
	    return true;
	}

	// Sect 9.2 Abstract Operations
	// ============================
	function /* 9.2.1 */CanonicalizeLocaleList (locales) {
	// The abstract operation CanonicalizeLocaleList takes the following steps:

	    // 1. If locales is undefined, then a. Return a new empty List
	    if (locales === undefined)
	        return new List();

	    var
	        // 2. Let seen be a new empty List.
	        seen = new List(),

	        // 3. If locales is a String value, then
	        //    a. Let locales be a new array created as if by the expression new
	        //    Array(locales) where Array is the standard built-in constructor with
	        //    that name and locales is the value of locales.
	        locales = typeof locales === 'string' ? [ locales ] : locales,

	        // 4. Let O be ToObject(locales).
	        O = toObject(locales),

	        // 5. Let lenValue be the result of calling the [[Get]] internal method of
	        //    O with the argument "length".
	        // 6. Let len be ToUint32(lenValue).
	        len = O.length,

	        // 7. Let k be 0.
	        k = 0;

	    // 8. Repeat, while k < len
	    while (k < len) {
	        var
	            // a. Let Pk be ToString(k).
	            Pk = String(k),

	            // b. Let kPresent be the result of calling the [[HasProperty]] internal
	            //    method of O with argument Pk.
	            kPresent = Pk in O;

	        // c. If kPresent is true, then
	        if (kPresent) {
	            var
	                // i. Let kValue be the result of calling the [[Get]] internal
	                //     method of O with argument Pk.
	                kValue = O[Pk];

	            // ii. If the type of kValue is not String or Object, then throw a
	            //     TypeError exception.
	            if (kValue == null || (typeof kValue !== 'string' && typeof kValue !== 'object'))
	                throw new TypeError('String or Object type expected');

	            var
	                // iii. Let tag be ToString(kValue).
	                tag = String(kValue);

	            // iv. If the result of calling the abstract operation
	            //     IsStructurallyValidLanguageTag (defined in 6.2.2), passing tag as
	            //     the argument, is false, then throw a RangeError exception.
	            if (!IsStructurallyValidLanguageTag(tag))
	                throw new RangeError("'" + tag + "' is not a structurally valid language tag");

	            // v. Let tag be the result of calling the abstract operation
	            //    CanonicalizeLanguageTag (defined in 6.2.3), passing tag as the
	            //    argument.
	            tag = CanonicalizeLanguageTag(tag);

	            // vi. If tag is not an element of seen, then append tag as the last
	            //     element of seen.
	            if (arrIndexOf.call(seen, tag) === -1)
	                arrPush.call(seen, tag);
	        }

	        // d. Increase k by 1.
	        k++;
	    }

	    // 9. Return seen.
	    return seen;
	}

	/**
	 * The BestAvailableLocale abstract operation compares the provided argument
	 * locale, which must be a String value with a structurally valid and
	 * canonicalized BCP 47 language tag, against the locales in availableLocales and
	 * returns either the longest non-empty prefix of locale that is an element of
	 * availableLocales, or undefined if there is no such element. It uses the
	 * fallback mechanism of RFC 4647, section 3.4. The following steps are taken:
	 */
	function /* 9.2.2 */BestAvailableLocale (availableLocales, locale) {
	    var
	       // 1. Let candidate be locale
	       candidate = locale;

	    // 2. Repeat
	    while (true) {
	        // a. If availableLocales contains an element equal to candidate, then return
	        // candidate.
	        if (arrIndexOf.call(availableLocales, candidate) > -1)
	            return candidate;

	        var
	            // b. Let pos be the character index of the last occurrence of "-"
	            // (U+002D) within candidate. If that character does not occur, return
	            // undefined.
	            pos = candidate.lastIndexOf('-');

	        if (pos < 0)
	            return;

	        // c. If pos ≥ 2 and the character "-" occurs at index pos-2 of candidate,
	        //    then decrease pos by 2.
	        if (pos >= 2 && candidate.charAt(pos - 2) == '-')
	            pos -= 2;

	        // d. Let candidate be the substring of candidate from position 0, inclusive,
	        //    to position pos, exclusive.
	        candidate = candidate.substring(0, pos);
	    }
	}

	/**
	 * The LookupMatcher abstract operation compares requestedLocales, which must be
	 * a List as returned by CanonicalizeLocaleList, against the locales in
	 * availableLocales and determines the best available language to meet the
	 * request. The following steps are taken:
	 */
	function /* 9.2.3 */LookupMatcher (availableLocales, requestedLocales) {
	    var
	        // 1. Let i be 0.
	        i = 0,

	        // 2. Let len be the number of elements in requestedLocales.
	        len = requestedLocales.length,

	        // 3. Let availableLocale be undefined.
	        availableLocale;

	    // 4. Repeat while i < len and availableLocale is undefined:
	    while (i < len && !availableLocale) {
	        var
	            // a. Let locale be the element of requestedLocales at 0-origined list
	            //    position i.
	            locale = requestedLocales[i],

	            // b. Let noExtensionsLocale be the String value that is locale with all
	            //    Unicode locale extension sequences removed.
	            noExtensionsLocale = String(locale).replace(expUnicodeExSeq, ''),

	            // c. Let availableLocale be the result of calling the
	            //    BestAvailableLocale abstract operation (defined in 9.2.2) with
	            //    arguments availableLocales and noExtensionsLocale.
	            availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

	        // d. Increase i by 1.
	        i++;
	    }

	    var
	        // 5. Let result be a new Record.
	        result = new Record();

	    // 6. If availableLocale is not undefined, then
	    if (availableLocale !== undefined) {
	        // a. Set result.[[locale]] to availableLocale.
	        result['[[locale]]'] = availableLocale;

	        // b. If locale and noExtensionsLocale are not the same String value, then
	        if (String(locale) !== String(noExtensionsLocale)) {
	            var
	                // i. Let extension be the String value consisting of the first
	                //    substring of locale that is a Unicode locale extension sequence.
	                extension = locale.match(expUnicodeExSeq)[0],

	                // ii. Let extensionIndex be the character position of the initial
	                //     "-" of the first Unicode locale extension sequence within locale.
	                extensionIndex = locale.indexOf('-u-');

	            // iii. Set result.[[extension]] to extension.
	            result['[[extension]]'] = extension;

	            // iv. Set result.[[extensionIndex]] to extensionIndex.
	            result['[[extensionIndex]]'] = extensionIndex;
	        }
	    }
	    // 7. Else
	    else
	        // a. Set result.[[locale]] to the value returned by the DefaultLocale abstract
	        //    operation (defined in 6.2.4).
	        result['[[locale]]'] = DefaultLocale();

	    // 8. Return result
	    return result;
	}

	/**
	 * The BestFitMatcher abstract operation compares requestedLocales, which must be
	 * a List as returned by CanonicalizeLocaleList, against the locales in
	 * availableLocales and determines the best available language to meet the
	 * request. The algorithm is implementation dependent, but should produce results
	 * that a typical user of the requested locales would perceive as at least as
	 * good as those produced by the LookupMatcher abstract operation. Options
	 * specified through Unicode locale extension sequences must be ignored by the
	 * algorithm. Information about such subsequences is returned separately.
	 * The abstract operation returns a record with a [[locale]] field, whose value
	 * is the language tag of the selected locale, which must be an element of
	 * availableLocales. If the language tag of the request locale that led to the
	 * selected locale contained a Unicode locale extension sequence, then the
	 * returned record also contains an [[extension]] field whose value is the first
	 * Unicode locale extension sequence, and an [[extensionIndex]] field whose value
	 * is the index of the first Unicode locale extension sequence within the request
	 * locale language tag.
	 */
	function /* 9.2.4 */BestFitMatcher (availableLocales, requestedLocales) {
	    return LookupMatcher(availableLocales, requestedLocales);
	}

	/**
	 * The ResolveLocale abstract operation compares a BCP 47 language priority list
	 * requestedLocales against the locales in availableLocales and determines the
	 * best available language to meet the request. availableLocales and
	 * requestedLocales must be provided as List values, options as a Record.
	 */
	function /* 9.2.5 */ResolveLocale (availableLocales, requestedLocales, options, relevantExtensionKeys, localeData) {
	    if (availableLocales.length === 0) {
	        throw new ReferenceError('No locale data has been provided for this object yet.');
	    }

	    // The following steps are taken:
	    var
	        // 1. Let matcher be the value of options.[[localeMatcher]].
	        matcher = options['[[localeMatcher]]'];

	    // 2. If matcher is "lookup", then
	    if (matcher === 'lookup')
	        var
	            // a. Let r be the result of calling the LookupMatcher abstract operation
	            //    (defined in 9.2.3) with arguments availableLocales and
	            //    requestedLocales.
	            r = LookupMatcher(availableLocales, requestedLocales);

	    // 3. Else
	    else
	        var
	            // a. Let r be the result of calling the BestFitMatcher abstract
	            //    operation (defined in 9.2.4) with arguments availableLocales and
	            //    requestedLocales.
	            r = BestFitMatcher(availableLocales, requestedLocales);

	    var
	        // 4. Let foundLocale be the value of r.[[locale]].
	        foundLocale = r['[[locale]]'];

	    // 5. If r has an [[extension]] field, then
	    if (hop.call(r, '[[extension]]'))
	        var
	            // a. Let extension be the value of r.[[extension]].
	            extension = r['[[extension]]'],
	            // b. Let extensionIndex be the value of r.[[extensionIndex]].
	            extensionIndex = r['[[extensionIndex]]'],
	            // c. Let split be the standard built-in function object defined in ES5,
	            //    15.5.4.14.
	            split = String.prototype.split,
	            // d. Let extensionSubtags be the result of calling the [[Call]] internal
	            //    method of split with extension as the this value and an argument
	            //    list containing the single item "-".
	            extensionSubtags = split.call(extension, '-'),
	            // e. Let extensionSubtagsLength be the result of calling the [[Get]]
	            //    internal method of extensionSubtags with argument "length".
	            extensionSubtagsLength = extensionSubtags.length;

	    var
	        // 6. Let result be a new Record.
	        result = new Record();

	    // 7. Set result.[[dataLocale]] to foundLocale.
	    result['[[dataLocale]]'] = foundLocale;

	    var
	        // 8. Let supportedExtension be "-u".
	        supportedExtension = '-u',
	        // 9. Let i be 0.
	        i = 0,
	        // 10. Let len be the result of calling the [[Get]] internal method of
	        //     relevantExtensionKeys with argument "length".
	        len = relevantExtensionKeys.length;

	    // 11 Repeat while i < len:
	    while (i < len) {
	        var
	            // a. Let key be the result of calling the [[Get]] internal method of
	            //    relevantExtensionKeys with argument ToString(i).
	            key = relevantExtensionKeys[i],
	            // b. Let foundLocaleData be the result of calling the [[Get]] internal
	            //    method of localeData with the argument foundLocale.
	            foundLocaleData = localeData[foundLocale],
	            // c. Let keyLocaleData be the result of calling the [[Get]] internal
	            //    method of foundLocaleData with the argument key.
	            keyLocaleData = foundLocaleData[key],
	            // d. Let value be the result of calling the [[Get]] internal method of
	            //    keyLocaleData with argument "0".
	            value = keyLocaleData['0'],
	            // e. Let supportedExtensionAddition be "".
	            supportedExtensionAddition = '',
	            // f. Let indexOf be the standard built-in function object defined in
	            //    ES5, 15.4.4.14.
	            indexOf = arrIndexOf;

	        // g. If extensionSubtags is not undefined, then
	        if (extensionSubtags !== undefined) {
	            var
	                // i. Let keyPos be the result of calling the [[Call]] internal
	                //    method of indexOf with extensionSubtags as the this value and
	                // an argument list containing the single item key.
	                keyPos = indexOf.call(extensionSubtags, key);

	            // ii. If keyPos ≠ -1, then
	            if (keyPos !== -1) {
	                // 1. If keyPos + 1 < extensionSubtagsLength and the length of the
	                //    result of calling the [[Get]] internal method of
	                //    extensionSubtags with argument ToString(keyPos +1) is greater
	                //    than 2, then
	                if (keyPos + 1 < extensionSubtagsLength
	                        && extensionSubtags[keyPos + 1].length > 2) {
	                    var
	                        // a. Let requestedValue be the result of calling the [[Get]]
	                        //    internal method of extensionSubtags with argument
	                        //    ToString(keyPos + 1).
	                        requestedValue = extensionSubtags[keyPos + 1],
	                        // b. Let valuePos be the result of calling the [[Call]]
	                        //    internal method of indexOf with keyLocaleData as the
	                        //    this value and an argument list containing the single
	                        //    item requestedValue.
	                        valuePos = indexOf.call(keyLocaleData, requestedValue);

	                    // c. If valuePos ≠ -1, then
	                    if (valuePos !== -1)
	                        var
	                            // i. Let value be requestedValue.
	                            value = requestedValue,
	                            // ii. Let supportedExtensionAddition be the
	                            //     concatenation of "-", key, "-", and value.
	                            supportedExtensionAddition = '-' + key + '-' + value;
	                }
	                // 2. Else
	                else {
	                    var
	                        // a. Let valuePos be the result of calling the [[Call]]
	                        // internal method of indexOf with keyLocaleData as the this
	                        // value and an argument list containing the single item
	                        // "true".
	                        valuePos = indexOf(keyLocaleData, 'true');

	                    // b. If valuePos ≠ -1, then
	                    if (valuePos !== -1)
	                        var
	                            // i. Let value be "true".
	                            value = 'true';
	                }
	            }
	        }
	        // h. If options has a field [[<key>]], then
	        if (hop.call(options, '[[' + key + ']]')) {
	            var
	                // i. Let optionsValue be the value of options.[[<key>]].
	                optionsValue = options['[[' + key + ']]'];

	            // ii. If the result of calling the [[Call]] internal method of indexOf
	            //     with keyLocaleData as the this value and an argument list
	            //     containing the single item optionsValue is not -1, then
	            if (indexOf.call(keyLocaleData, optionsValue) !== -1) {
	                // 1. If optionsValue is not equal to value, then
	                if (optionsValue !== value) {
	                    // a. Let value be optionsValue.
	                    value = optionsValue;
	                    // b. Let supportedExtensionAddition be "".
	                    supportedExtensionAddition = '';
	                }
	            }
	        }
	        // i. Set result.[[<key>]] to value.
	        result['[[' + key + ']]'] = value;

	        // j. Append supportedExtensionAddition to supportedExtension.
	        supportedExtension += supportedExtensionAddition;

	        // k. Increase i by 1.
	        i++;
	    }
	    // 12. If the length of supportedExtension is greater than 2, then
	    if (supportedExtension.length > 2) {
	        var
	            // a. Let preExtension be the substring of foundLocale from position 0,
	            //    inclusive, to position extensionIndex, exclusive.
	            preExtension = foundLocale.substring(0, extensionIndex),
	            // b. Let postExtension be the substring of foundLocale from position
	            //    extensionIndex to the end of the string.
	            postExtension = foundLocale.substring(extensionIndex),
	            // c. Let foundLocale be the concatenation of preExtension,
	            //    supportedExtension, and postExtension.
	            foundLocale = preExtension + supportedExtension + postExtension;
	    }
	    // 13. Set result.[[locale]] to foundLocale.
	    result['[[locale]]'] = foundLocale;

	    // 14. Return result.
	    return result;
	}

	/**
	 * The LookupSupportedLocales abstract operation returns the subset of the
	 * provided BCP 47 language priority list requestedLocales for which
	 * availableLocales has a matching locale when using the BCP 47 Lookup algorithm.
	 * Locales appear in the same order in the returned list as in requestedLocales.
	 * The following steps are taken:
	 */
	function /* 9.2.6 */LookupSupportedLocales (availableLocales, requestedLocales) {
	    var
	        // 1. Let len be the number of elements in requestedLocales.
	        len = requestedLocales.length,
	        // 2. Let subset be a new empty List.
	        subset = new List(),
	        // 3. Let k be 0.
	        k = 0;

	    // 4. Repeat while k < len
	    while (k < len) {
	        var
	            // a. Let locale be the element of requestedLocales at 0-origined list
	            //    position k.
	            locale = requestedLocales[k],
	            // b. Let noExtensionsLocale be the String value that is locale with all
	            //    Unicode locale extension sequences removed.
	            noExtensionsLocale = String(locale).replace(expUnicodeExSeq, ''),
	            // c. Let availableLocale be the result of calling the
	            //    BestAvailableLocale abstract operation (defined in 9.2.2) with
	            //    arguments availableLocales and noExtensionsLocale.
	            availableLocale = BestAvailableLocale(availableLocales, noExtensionsLocale);

	        // d. If availableLocale is not undefined, then append locale to the end of
	        //    subset.
	        if (availableLocale !== undefined)
	            arrPush.call(subset, locale);

	        // e. Increment k by 1.
	        k++;
	    }

	    var
	        // 5. Let subsetArray be a new Array object whose elements are the same
	        //    values in the same order as the elements of subset.
	        subsetArray = arrSlice.call(subset);

	    // 6. Return subsetArray.
	    return subsetArray;
	}

	/**
	 * The BestFitSupportedLocales abstract operation returns the subset of the
	 * provided BCP 47 language priority list requestedLocales for which
	 * availableLocales has a matching locale when using the Best Fit Matcher
	 * algorithm. Locales appear in the same order in the returned list as in
	 * requestedLocales. The steps taken are implementation dependent.
	 */
	function /*9.2.7 */BestFitSupportedLocales (availableLocales, requestedLocales) {
	    // ###TODO: implement this function as described by the specification###
	    return LookupSupportedLocales(availableLocales, requestedLocales);
	}

	/**
	 * The SupportedLocales abstract operation returns the subset of the provided BCP
	 * 47 language priority list requestedLocales for which availableLocales has a
	 * matching locale. Two algorithms are available to match the locales: the Lookup
	 * algorithm described in RFC 4647 section 3.4, and an implementation dependent
	 * best-fit algorithm. Locales appear in the same order in the returned list as
	 * in requestedLocales. The following steps are taken:
	 */
	function /*9.2.8 */SupportedLocales (availableLocales, requestedLocales, options) {
	    // 1. If options is not undefined, then
	    if (options !== undefined) {
	        var
	            // a. Let options be ToObject(options).
	            options = new Record(toObject(options)),
	            // b. Let matcher be the result of calling the [[Get]] internal method of
	            //    options with argument "localeMatcher".
	            matcher = options.localeMatcher;

	        // c. If matcher is not undefined, then
	        if (matcher !== undefined) {
	            // i. Let matcher be ToString(matcher).
	            matcher = String(matcher);

	            // ii. If matcher is not "lookup" or "best fit", then throw a RangeError
	            //     exception.
	            if (matcher !== 'lookup' && matcher !== 'best fit')
	                throw new RangeError('matcher should be "lookup" or "best fit"');
	        }
	    }
	    // 2. If matcher is undefined or "best fit", then
	    if (matcher === undefined || matcher === 'best fit')
	        var
	            // a. Let subset be the result of calling the BestFitSupportedLocales
	            //    abstract operation (defined in 9.2.7) with arguments
	            //    availableLocales and requestedLocales.
	            subset = BestFitSupportedLocales(availableLocales, requestedLocales);
	    // 3. Else
	    else
	        var
	            // a. Let subset be the result of calling the LookupSupportedLocales
	            //    abstract operation (defined in 9.2.6) with arguments
	            //    availableLocales and requestedLocales.
	            subset = LookupSupportedLocales(availableLocales, requestedLocales);

	    // 4. For each named own property name P of subset,
	    for (var P in subset) {
	        if (!hop.call(subset, P))
	            continue;

	        // a. Let desc be the result of calling the [[GetOwnProperty]] internal
	        //    method of subset with P.
	        // b. Set desc.[[Writable]] to false.
	        // c. Set desc.[[Configurable]] to false.
	        // d. Call the [[DefineOwnProperty]] internal method of subset with P, desc,
	        //    and true as arguments.
	        defineProperty(subset, P, {
	            writable: false, configurable: false, value: subset[P]
	        });
	    }
	    // "Freeze" the array so no new elements can be added
	    defineProperty(subset, 'length', { writable: false });

	    // 5. Return subset
	    return subset;
	}

	/**
	 * The GetOption abstract operation extracts the value of the property named
	 * property from the provided options object, converts it to the required type,
	 * checks whether it is one of a List of allowed values, and fills in a fallback
	 * value if necessary.
	 */
	function /*9.2.9 */GetOption (options, property, type, values, fallback) {
	    var
	        // 1. Let value be the result of calling the [[Get]] internal method of
	        //    options with argument property.
	        value = options[property];

	    // 2. If value is not undefined, then
	    if (value !== undefined) {
	        // a. Assert: type is "boolean" or "string".
	        // b. If type is "boolean", then let value be ToBoolean(value).
	        // c. If type is "string", then let value be ToString(value).
	        value = type === 'boolean' ? Boolean(value)
	                  : (type === 'string' ? String(value) : value);

	        // d. If values is not undefined, then
	        if (values !== undefined) {
	            // i. If values does not contain an element equal to value, then throw a
	            //    RangeError exception.
	            if (arrIndexOf.call(values, value) === -1)
	                throw new RangeError("'" + value + "' is not an allowed value for `" + property +'`');
	        }

	        // e. Return value.
	        return value;
	    }
	    // Else return fallback.
	    return fallback;
	}

	/**
	 * The GetNumberOption abstract operation extracts a property value from the
	 * provided options object, converts it to a Number value, checks whether it is
	 * in the allowed range, and fills in a fallback value if necessary.
	 */
	function /* 9.2.10 */GetNumberOption (options, property, minimum, maximum, fallback) {
	    var
	        // 1. Let value be the result of calling the [[Get]] internal method of
	        //    options with argument property.
	        value = options[property];

	    // 2. If value is not undefined, then
	    if (value !== undefined) {
	        // a. Let value be ToNumber(value).
	        value = Number(value);

	        // b. If value is NaN or less than minimum or greater than maximum, throw a
	        //    RangeError exception.
	        if (isNaN(value) || value < minimum || value > maximum)
	            throw new RangeError('Value is not a number or outside accepted range');

	        // c. Return floor(value).
	        return Math.floor(value);
	    }
	    // 3. Else return fallback.
	    return fallback;
	}

	// 11.1 The Intl.NumberFormat constructor
	// ======================================

	// Define the NumberFormat constructor internally so it cannot be tainted
	function NumberFormatConstructor () {
	    var locales = arguments[0];
	    var options = arguments[1];

	    if (!this || this === Intl) {
	        return new Intl.NumberFormat(locales, options);
	    }

	    return InitializeNumberFormat(toObject(this), locales, options);
	}

	defineProperty(Intl, 'NumberFormat', {
	    configurable: true,
	    writable: true,
	    value: NumberFormatConstructor
	});

	// Must explicitly set prototypes as unwritable
	defineProperty(Intl.NumberFormat, 'prototype', {
	    writable: false
	});

	/**
	 * The abstract operation InitializeNumberFormat accepts the arguments
	 * numberFormat (which must be an object), locales, and options. It initializes
	 * numberFormat as a NumberFormat object.
	 */
	function /*11.1.1.1 */InitializeNumberFormat (numberFormat, locales, options) {
	    var
	    // This will be a internal properties object if we're not already initialized
	        internal = getInternalProperties(numberFormat),

	    // Create an object whose props can be used to restore the values of RegExp props
	        regexpState = createRegExpRestore();

	    // 1. If numberFormat has an [[initializedIntlObject]] internal property with
	    // value true, throw a TypeError exception.
	    if (internal['[[initializedIntlObject]]'] === true)
	        throw new TypeError('`this` object has already been initialized as an Intl object');

	    // Need this to access the `internal` object
	    defineProperty(numberFormat, '__getInternalProperties', {
	        value: function () {
	            // NOTE: Non-standard, for internal use only
	            if (arguments[0] === secret)
	                return internal;
	        }
	    });

	    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
	    internal['[[initializedIntlObject]]'] = true;

	    var
	    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
	    //    abstract operation (defined in 9.2.1) with argument locales.
	        requestedLocales = CanonicalizeLocaleList(locales);

	    // 4. If options is undefined, then
	    if (options === undefined)
	        // a. Let options be the result of creating a new object as if by the
	        // expression new Object() where Object is the standard built-in constructor
	        // with that name.
	        options = {};

	    // 5. Else
	    else
	        // a. Let options be ToObject(options).
	        options = toObject(options);

	    var
	    // 6. Let opt be a new Record.
	        opt = new Record(),

	    // 7. Let matcher be the result of calling the GetOption abstract operation
	    //    (defined in 9.2.9) with the arguments options, "localeMatcher", "string",
	    //    a List containing the two String values "lookup" and "best fit", and
	    //    "best fit".
	        matcher =  GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

	    // 8. Set opt.[[localeMatcher]] to matcher.
	    opt['[[localeMatcher]]'] = matcher;

	    var
	    // 9. Let NumberFormat be the standard built-in object that is the initial value
	    //    of Intl.NumberFormat.
	    // 10. Let localeData be the value of the [[localeData]] internal property of
	    //     NumberFormat.
	        localeData = internals.NumberFormat['[[localeData]]'],

	    // 11. Let r be the result of calling the ResolveLocale abstract operation
	    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
	    //     NumberFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
	    //     internal property of NumberFormat, and localeData.
	        r = ResolveLocale(
	                internals.NumberFormat['[[availableLocales]]'], requestedLocales,
	                opt, internals.NumberFormat['[[relevantExtensionKeys]]'], localeData
	            );

	    // 12. Set the [[locale]] internal property of numberFormat to the value of
	    //     r.[[locale]].
	    internal['[[locale]]'] = r['[[locale]]'];

	    // 13. Set the [[numberingSystem]] internal property of numberFormat to the value
	    //     of r.[[nu]].
	    internal['[[numberingSystem]]'] = r['[[nu]]'];

	    // The specification doesn't tell us to do this, but it's helpful later on
	    internal['[[dataLocale]]'] = r['[[dataLocale]]'];

	    var
	    // 14. Let dataLocale be the value of r.[[dataLocale]].
	        dataLocale = r['[[dataLocale]]'],

	    // 15. Let s be the result of calling the GetOption abstract operation with the
	    //     arguments options, "style", "string", a List containing the three String
	    //     values "decimal", "percent", and "currency", and "decimal".
	        s = GetOption(options, 'style', 'string', new List('decimal', 'percent', 'currency'), 'decimal');

	    // 16. Set the [[style]] internal property of numberFormat to s.
	    internal['[[style]]'] = s;

	    var
	    // 17. Let c be the result of calling the GetOption abstract operation with the
	    //     arguments options, "currency", "string", undefined, and undefined.
	        c = GetOption(options, 'currency', 'string');

	    // 18. If c is not undefined and the result of calling the
	    //     IsWellFormedCurrencyCode abstract operation (defined in 6.3.1) with
	    //     argument c is false, then throw a RangeError exception.
	    if (c !== undefined && !IsWellFormedCurrencyCode(c))
	        throw new RangeError("'" + c + "' is not a valid currency code");

	    // 19. If s is "currency" and c is undefined, throw a TypeError exception.
	    if (s === 'currency' && c === undefined)
	        throw new TypeError('Currency code is required when style is currency');

	    // 20. If s is "currency", then
	    if (s === 'currency') {
	        // a. Let c be the result of converting c to upper case as specified in 6.1.
	        c = c.toUpperCase();

	        // b. Set the [[currency]] internal property of numberFormat to c.
	        internal['[[currency]]'] = c;

	        var
	        // c. Let cDigits be the result of calling the CurrencyDigits abstract
	        //    operation (defined below) with argument c.
	            cDigits = CurrencyDigits(c);
	    }

	    var
	    // 21. Let cd be the result of calling the GetOption abstract operation with the
	    //     arguments options, "currencyDisplay", "string", a List containing the
	    //     three String values "code", "symbol", and "name", and "symbol".
	        cd = GetOption(options, 'currencyDisplay', 'string', new List('code', 'symbol', 'name'), 'symbol');

	    // 22. If s is "currency", then set the [[currencyDisplay]] internal property of
	    //     numberFormat to cd.
	    if (s === 'currency')
	        internal['[[currencyDisplay]]'] = cd;

	    var
	    // 23. Let mnid be the result of calling the GetNumberOption abstract operation
	    //     (defined in 9.2.10) with arguments options, "minimumIntegerDigits", 1, 21,
	    //     and 1.
	        mnid = GetNumberOption(options, 'minimumIntegerDigits', 1, 21, 1);

	    // 24. Set the [[minimumIntegerDigits]] internal property of numberFormat to mnid.
	    internal['[[minimumIntegerDigits]]'] = mnid;

	    var
	    // 25. If s is "currency", then let mnfdDefault be cDigits; else let mnfdDefault
	    //     be 0.
	        mnfdDefault = s === 'currency' ? cDigits : 0,

	    // 26. Let mnfd be the result of calling the GetNumberOption abstract operation
	    //     with arguments options, "minimumFractionDigits", 0, 20, and mnfdDefault.
	        mnfd = GetNumberOption(options, 'minimumFractionDigits', 0, 20, mnfdDefault);

	    // 27. Set the [[minimumFractionDigits]] internal property of numberFormat to mnfd.
	    internal['[[minimumFractionDigits]]'] = mnfd;

	    var
	    // 28. If s is "currency", then let mxfdDefault be max(mnfd, cDigits); else if s
	    //     is "percent", then let mxfdDefault be max(mnfd, 0); else let mxfdDefault
	    //     be max(mnfd, 3).
	        mxfdDefault = s === 'currency' ? Math.max(mnfd, cDigits)
	                    : (s === 'percent' ? Math.max(mnfd, 0) : Math.max(mnfd, 3)),

	    // 29. Let mxfd be the result of calling the GetNumberOption abstract operation
	    //     with arguments options, "maximumFractionDigits", mnfd, 20, and mxfdDefault.
	        mxfd = GetNumberOption(options, 'maximumFractionDigits', mnfd, 20, mxfdDefault);

	    // 30. Set the [[maximumFractionDigits]] internal property of numberFormat to mxfd.
	    internal['[[maximumFractionDigits]]'] = mxfd;

	    var
	    // 31. Let mnsd be the result of calling the [[Get]] internal method of options
	    //     with argument "minimumSignificantDigits".
	        mnsd = options.minimumSignificantDigits,

	    // 32. Let mxsd be the result of calling the [[Get]] internal method of options
	    //     with argument "maximumSignificantDigits".
	        mxsd = options.maximumSignificantDigits;

	    // 33. If mnsd is not undefined or mxsd is not undefined, then:
	    if (mnsd !== undefined || mxsd !== undefined) {
	        // a. Let mnsd be the result of calling the GetNumberOption abstract
	        //    operation with arguments options, "minimumSignificantDigits", 1, 21,
	        //    and 1.
	        mnsd = GetNumberOption(options, 'minimumSignificantDigits', 1, 21, 1);

	        // b. Let mxsd be the result of calling the GetNumberOption abstract
	        //     operation with arguments options, "maximumSignificantDigits", mnsd,
	        //     21, and 21.
	        mxsd = GetNumberOption(options, 'maximumSignificantDigits', mnsd, 21, 21);

	        // c. Set the [[minimumSignificantDigits]] internal property of numberFormat
	        //    to mnsd, and the [[maximumSignificantDigits]] internal property of
	        //    numberFormat to mxsd.
	        internal['[[minimumSignificantDigits]]'] = mnsd;
	        internal['[[maximumSignificantDigits]]'] = mxsd;
	    }
	    var
	    // 34. Let g be the result of calling the GetOption abstract operation with the
	    //     arguments options, "useGrouping", "boolean", undefined, and true.
	        g = GetOption(options, 'useGrouping', 'boolean', undefined, true);

	    // 35. Set the [[useGrouping]] internal property of numberFormat to g.
	    internal['[[useGrouping]]'] = g;

	    var
	    // 36. Let dataLocaleData be the result of calling the [[Get]] internal method of
	    //     localeData with argument dataLocale.
	        dataLocaleData = localeData[dataLocale],

	    // 37. Let patterns be the result of calling the [[Get]] internal method of
	    //     dataLocaleData with argument "patterns".
	        patterns = dataLocaleData.patterns;

	    // 38. Assert: patterns is an object (see 11.2.3)

	    var
	    // 39. Let stylePatterns be the result of calling the [[Get]] internal method of
	    //     patterns with argument s.
	        stylePatterns = patterns[s];

	    // 40. Set the [[positivePattern]] internal property of numberFormat to the
	    //     result of calling the [[Get]] internal method of stylePatterns with the
	    //     argument "positivePattern".
	    internal['[[positivePattern]]'] = stylePatterns.positivePattern;

	    // 41. Set the [[negativePattern]] internal property of numberFormat to the
	    //     result of calling the [[Get]] internal method of stylePatterns with the
	    //     argument "negativePattern".
	    internal['[[negativePattern]]'] = stylePatterns.negativePattern;

	    // 42. Set the [[boundFormat]] internal property of numberFormat to undefined.
	    internal['[[boundFormat]]'] = undefined;

	    // 43. Set the [[initializedNumberFormat]] internal property of numberFormat to
	    //     true.
	    internal['[[initializedNumberFormat]]'] = true;

	    // In ES3, we need to pre-bind the format() function
	    if (es3)
	        numberFormat.format = GetFormatNumber.call(numberFormat);

	    // Restore the RegExp properties
	    regexpState.exp.test(regexpState.input);

	    // Return the newly initialised object
	    return numberFormat;
	}

	function CurrencyDigits(currency) {
	    // When the CurrencyDigits abstract operation is called with an argument currency
	    // (which must be an upper case String value), the following steps are taken:

	    // 1. If the ISO 4217 currency and funds code list contains currency as an
	    // alphabetic code, then return the minor unit value corresponding to the
	    // currency from the list; else return 2.
	    return currencyMinorUnits[currency] !== undefined
	                ? currencyMinorUnits[currency]
	                : 2;
	}

	/* 11.2.3 */internals.NumberFormat = {
	    '[[availableLocales]]': [],
	    '[[relevantExtensionKeys]]': ['nu'],
	    '[[localeData]]': {}
	};

	/**
	 * When the supportedLocalesOf method of Intl.NumberFormat is called, the
	 * following steps are taken:
	 */
	/* 11.2.2 */defineProperty(Intl.NumberFormat, 'supportedLocalesOf', {
	    configurable: true,
	    writable: true,
	    value: fnBind.call(supportedLocalesOf, internals.NumberFormat)
	});

	/**
	 * This named accessor property returns a function that formats a number
	 * according to the effective locale and the formatting options of this
	 * NumberFormat object.
	 */
	/* 11.3.2 */defineProperty(Intl.NumberFormat.prototype, 'format', {
	    configurable: true,
	    get: GetFormatNumber
	});

	function GetFormatNumber() {
	        var internal = this != null && typeof this === 'object' && getInternalProperties(this);

	        // Satisfy test 11.3_b
	        if (!internal || !internal['[[initializedNumberFormat]]'])
	            throw new TypeError('`this` value for format() is not an initialized Intl.NumberFormat object.');

	        // The value of the [[Get]] attribute is a function that takes the following
	        // steps:

	        // 1. If the [[boundFormat]] internal property of this NumberFormat object
	        //    is undefined, then:
	        if (internal['[[boundFormat]]'] === undefined) {
	            var
	            // a. Let F be a Function object, with internal properties set as
	            //    specified for built-in functions in ES5, 15, or successor, and the
	            //    length property set to 1, that takes the argument value and
	            //    performs the following steps:
	                F = function (value) {
	                    // i. If value is not provided, then let value be undefined.
	                    // ii. Let x be ToNumber(value).
	                    // iii. Return the result of calling the FormatNumber abstract
	                    //      operation (defined below) with arguments this and x.
	                    return FormatNumber(this, /* x = */Number(value));
	                },

	            // b. Let bind be the standard built-in function object defined in ES5,
	            //    15.3.4.5.
	            // c. Let bf be the result of calling the [[Call]] internal method of
	            //    bind with F as the this value and an argument list containing
	            //    the single item this.
	                bf = fnBind.call(F, this);

	            // d. Set the [[boundFormat]] internal property of this NumberFormat
	            //    object to bf.
	            internal['[[boundFormat]]'] = bf;
	        }
	        // Return the value of the [[boundFormat]] internal property of this
	        // NumberFormat object.
	        return internal['[[boundFormat]]'];
	    }

	/**
	 * When the FormatNumber abstract operation is called with arguments numberFormat
	 * (which must be an object initialized as a NumberFormat) and x (which must be a
	 * Number value), it returns a String value representing x according to the
	 * effective locale and the formatting options of numberFormat.
	 */
	function FormatNumber (numberFormat, x) {
	    var n,

	    // Create an object whose props can be used to restore the values of RegExp props
	        regexpState = createRegExpRestore(),

	        internal = getInternalProperties(numberFormat),
	        locale = internal['[[dataLocale]]'],
	        nums   = internal['[[numberingSystem]]'],
	        data   = internals.NumberFormat['[[localeData]]'][locale],
	        ild    = data.symbols[nums] || data.symbols.latn,

	    // 1. Let negative be false.
	        negative = false;

	    // 2. If the result of isFinite(x) is false, then
	    if (isFinite(x) === false) {
	        // a. If x is NaN, then let n be an ILD String value indicating the NaN value.
	        if (isNaN(x))
	            n = ild.nan;

	        // b. Else
	        else {
	            // a. Let n be an ILD String value indicating infinity.
	            n = ild.infinity;
	            // b. If x < 0, then let negative be true.
	            if (x < 0)
	                negative = true;
	        }
	    }
	    // 3. Else
	    else {
	        // a. If x < 0, then
	        if (x < 0) {
	            // i. Let negative be true.
	            negative = true;
	            // ii. Let x be -x.
	            x = -x;
	        }

	        // b. If the value of the [[style]] internal property of numberFormat is
	        //    "percent", let x be 100 × x.
	        if (internal['[[style]]'] === 'percent')
	            x *= 100;

	        // c. If the [[minimumSignificantDigits]] and [[maximumSignificantDigits]]
	        //    internal properties of numberFormat are present, then
	        if (hop.call(internal, '[[minimumSignificantDigits]]') &&
	                hop.call(internal, '[[maximumSignificantDigits]]'))
	            // i. Let n be the result of calling the ToRawPrecision abstract operation
	            //    (defined below), passing as arguments x and the values of the
	            //    [[minimumSignificantDigits]] and [[maximumSignificantDigits]]
	            //    internal properties of numberFormat.
	            n = ToRawPrecision(x,
	                  internal['[[minimumSignificantDigits]]'],
	                  internal['[[maximumSignificantDigits]]']);
	        // d. Else
	        else
	            // i. Let n be the result of calling the ToRawFixed abstract operation
	            //    (defined below), passing as arguments x and the values of the
	            //    [[minimumIntegerDigits]], [[minimumFractionDigits]], and
	            //    [[maximumFractionDigits]] internal properties of numberFormat.
	            n = ToRawFixed(x,
	                  internal['[[minimumIntegerDigits]]'],
	                  internal['[[minimumFractionDigits]]'],
	                  internal['[[maximumFractionDigits]]']);

	        // e. If the value of the [[numberingSystem]] internal property of
	        //    numberFormat matches one of the values in the “Numbering System” column
	        //    of Table 2 below, then
	        if (numSys[nums]) {
	            // i. Let digits be an array whose 10 String valued elements are the
	            //    UTF-16 string representations of the 10 digits specified in the
	            //    “Digits” column of Table 2 in the row containing the value of the
	            //    [[numberingSystem]] internal property.
	            var digits = numSys[internal['[[numberingSystem]]']];
	            // ii. Replace each digit in n with the value of digits[digit].
	            n = String(n).replace(/\d/g, function (digit) {
	                return digits[digit];
	            });
	        }
	        // f. Else use an implementation dependent algorithm to map n to the
	        //    appropriate representation of n in the given numbering system.
	        else
	            n = String(n); // ###TODO###

	        // g. If n contains the character ".", then replace it with an ILND String
	        //    representing the decimal separator.
	        n = n.replace(/\./g, ild.decimal);

	        // h. If the value of the [[useGrouping]] internal property of numberFormat
	        //    is true, then insert an ILND String representing a grouping separator
	        //    into an ILND set of locations within the integer part of n.
	        if (internal['[[useGrouping]]'] === true) {
	            var
	                parts  = n.split(ild.decimal),
	                igr    = parts[0],

	                // Primary group represents the group closest to the decimal
	                pgSize = data.patterns.primaryGroupSize || 3,

	                // Secondary group is every other group
	                sgSize = data.patterns.secondaryGroupSize || pgSize;

	            // Group only if necessary
	            if (igr.length > pgSize) {
	                var
	                    groups = new List(),

	                    // Index of the primary grouping separator
	                    end    = igr.length - pgSize,

	                    // Starting index for our loop
	                    idx    = end % sgSize,

	                    start  = igr.slice(0, idx);

	                if (start.length)
	                    arrPush.call(groups, start);

	                // Loop to separate into secondary grouping digits
	                while (idx < end) {
	                    arrPush.call(groups, igr.slice(idx, idx + sgSize));
	                    idx += sgSize;
	                }

	                // Add the primary grouping digits
	                arrPush.call(groups, igr.slice(end));

	                parts[0] = arrJoin.call(groups, ild.group);
	            }

	            n = arrJoin.call(parts, ild.decimal);
	        }
	    }

	    var
	    // 4. If negative is true, then let result be the value of the [[negativePattern]]
	    //    internal property of numberFormat; else let result be the value of the
	    //    [[positivePattern]] internal property of numberFormat.
	        result = internal[negative === true ? '[[negativePattern]]' : '[[positivePattern]]'];

	    // 5. Replace the substring "{number}" within result with n.
	    result = result.replace('{number}', n);

	    // 6. If the value of the [[style]] internal property of numberFormat is
	    //    "currency", then:
	    if (internal['[[style]]'] === 'currency') {
	        var cd,
	        // a. Let currency be the value of the [[currency]] internal property of
	        //    numberFormat.
	            currency = internal['[[currency]]'],

	        // Shorthand for the currency data
	            cData = data.currencies[currency];

	        // b. If the value of the [[currencyDisplay]] internal property of
	        //    numberFormat is "code", then let cd be currency.
	        // c. Else if the value of the [[currencyDisplay]] internal property of
	        //    numberFormat is "symbol", then let cd be an ILD string representing
	        //    currency in short form. If the implementation does not have such a
	        //    representation of currency, then use currency itself.
	        // d. Else if the value of the [[currencyDisplay]] internal property of
	        //    numberFormat is "name", then let cd be an ILD string representing
	        //    currency in long form. If the implementation does not have such a
	        //    representation of currency, then use currency itself.
	        switch (internal['[[currencyDisplay]]']) {
	            case 'symbol':
	                cd = cData || currency;
	                break;

	            default:
	            case 'code':
	            case 'name':
	                cd = currency;
	        }

	        // e. Replace the substring "{currency}" within result with cd.
	        result = result.replace('{currency}', cd);
	    }

	    // Restore the RegExp properties
	    regexpState.exp.test(regexpState.input);

	    // 7. Return result.
	    return result;
	}

	/**
	 * When the ToRawPrecision abstract operation is called with arguments x (which
	 * must be a finite non-negative number), minPrecision, and maxPrecision (both
	 * must be integers between 1 and 21) the following steps are taken:
	 */
	function ToRawPrecision (x, minPrecision, maxPrecision) {
	    var
	    // 1. Let p be maxPrecision.
	        p = maxPrecision;

	    // 2. If x = 0, then
	    if (x === 0) {
	        var
	        // a. Let m be the String consisting of p occurrences of the character "0".
	            m = arrJoin.call(Array (p + 1), '0'),
	        // b. Let e be 0.
	            e = 0;
	    }
	    // 3. Else
	    else {
	        // a. Let e and n be integers such that 10ᵖ⁻¹ ≤ n < 10ᵖ and for which the
	        //    exact mathematical value of n × 10ᵉ⁻ᵖ⁺¹ – x is as close to zero as
	        //    possible. If there are two such sets of e and n, pick the e and n for
	        //    which n × 10ᵉ⁻ᵖ⁺¹ is larger.
	        var
	            e = log10Floor(Math.abs(x)),

	            // Easier to get to m from here
	            f = Math.round(Math.exp((Math.abs(e - p + 1)) * Math.LN10)),

	        // b. Let m be the String consisting of the digits of the decimal
	        //    representation of n (in order, with no leading zeroes)
	            m = String(Math.round(e - p + 1 < 0 ? x * f : x / f));
	    }

	    // 4. If e ≥ p, then
	    if (e >= p)
	        // a. Return the concatenation of m and e-p+1 occurrences of the character "0".
	        return m + arrJoin.call(Array(e-p+1 + 1), '0');

	    // 5. If e = p-1, then
	    else if (e === p - 1)
	        // a. Return m.
	        return m;

	    // 6. If e ≥ 0, then
	    else if (e >= 0)
	        // a. Let m be the concatenation of the first e+1 characters of m, the character
	        //    ".", and the remaining p–(e+1) characters of m.
	        m = m.slice(0, e + 1) + '.' + m.slice(e + 1);

	    // 7. If e < 0, then
	    else if (e < 0)
	        // a. Let m be the concatenation of the String "0.", –(e+1) occurrences of the
	        //    character "0", and the string m.
	        m = '0.' + arrJoin.call(Array (-(e+1) + 1), '0') + m;

	    // 8. If m contains the character ".", and maxPrecision > minPrecision, then
	    if (m.indexOf(".") >= 0 && maxPrecision > minPrecision) {
	        var
	        // a. Let cut be maxPrecision – minPrecision.
	            cut = maxPrecision - minPrecision;

	        // b. Repeat while cut > 0 and the last character of m is "0":
	        while (cut > 0 && m.charAt(m.length-1) === '0') {
	            //  i. Remove the last character from m.
	            m = m.slice(0, -1);

	            //  ii. Decrease cut by 1.
	            cut--;
	        }

	        // c. If the last character of m is ".", then
	        if (m.charAt(m.length-1) === '.')
	            //    i. Remove the last character from m.
	            m = m.slice(0, -1);
	    }
	    // 9. Return m.
	    return m;
	}

	/**
	 * When the ToRawFixed abstract operation is called with arguments x (which must
	 * be a finite non-negative number), minInteger (which must be an integer between
	 * 1 and 21), minFraction, and maxFraction (which must be integers between 0 and
	 * 20) the following steps are taken:
	 */
	function ToRawFixed (x, minInteger, minFraction, maxFraction) {
	    // (or not because Number.toPrototype.toFixed does a lot of it for us)
	    var idx,

	        // We can pick up after the fixed formatted string (m) is created
	        m   = Number.prototype.toFixed.call(x, maxFraction),

	        // 4. If [maxFraction] ≠ 0, then
	        //    ...
	        //    e. Let int be the number of characters in a.
	        //
	        // 5. Else let int be the number of characters in m.
	        igr = m.split(".")[0].length,  // int is a reserved word

	        // 6. Let cut be maxFraction – minFraction.
	        cut = maxFraction - minFraction,

	        exp = (idx = m.indexOf('e')) > -1 ? m.slice(idx + 1) : 0;

	    if (exp) {
	        m = m.slice(0, idx).replace('.', '');
	        m += arrJoin.call(Array(exp - (m.length - 1) + 1), '0')
	          + '.' + arrJoin.call(Array(maxFraction + 1), '0');

	        igr = m.length;
	    }

	    // 7. Repeat while cut > 0 and the last character of m is "0":
	    while (cut > 0 && m.slice(-1) === "0") {
	        // a. Remove the last character from m.
	        m = m.slice(0, -1);

	        // b. Decrease cut by 1.
	        cut--;
	    }

	    // 8. If the last character of m is ".", then
	    if (m.slice(-1) === ".")
	        // a. Remove the last character from m.
	        m = m.slice(0, -1);

	    // 9. If int < minInteger, then
	    if (igr < minInteger)
	        // a. Let z be the String consisting of minInteger–int occurrences of the
	        //    character "0".
	        var z = arrJoin.call(Array(minInteger - igr + 1), '0');

	    // 10. Let m be the concatenation of Strings z and m.
	    // 11. Return m.
	    return (z ? z : '') + m;
	}

	// Sect 11.3.2 Table 2, Numbering systems
	// ======================================
	var numSys = {
	    arab:    [ '\u0660', '\u0661', '\u0662', '\u0663', '\u0664', '\u0665', '\u0666', '\u0667', '\u0668', '\u0669' ],
	    arabext: [ '\u06F0', '\u06F1', '\u06F2', '\u06F3', '\u06F4', '\u06F5', '\u06F6', '\u06F7', '\u06F8', '\u06F9' ],
	    bali:    [ '\u1B50', '\u1B51', '\u1B52', '\u1B53', '\u1B54', '\u1B55', '\u1B56', '\u1B57', '\u1B58', '\u1B59' ],
	    beng:    [ '\u09E6', '\u09E7', '\u09E8', '\u09E9', '\u09EA', '\u09EB', '\u09EC', '\u09ED', '\u09EE', '\u09EF' ],
	    deva:    [ '\u0966', '\u0967', '\u0968', '\u0969', '\u096A', '\u096B', '\u096C', '\u096D', '\u096E', '\u096F' ],
	    fullwide:[ '\uFF10', '\uFF11', '\uFF12', '\uFF13', '\uFF14', '\uFF15', '\uFF16', '\uFF17', '\uFF18', '\uFF19' ],
	    gujr:    [ '\u0AE6', '\u0AE7', '\u0AE8', '\u0AE9', '\u0AEA', '\u0AEB', '\u0AEC', '\u0AED', '\u0AEE', '\u0AEF' ],
	    guru:    [ '\u0A66', '\u0A67', '\u0A68', '\u0A69', '\u0A6A', '\u0A6B', '\u0A6C', '\u0A6D', '\u0A6E', '\u0A6F' ],
	    hanidec: [ '\u3007', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u4E03', '\u516B', '\u4E5D' ],
	    khmr:    [ '\u17E0', '\u17E1', '\u17E2', '\u17E3', '\u17E4', '\u17E5', '\u17E6', '\u17E7', '\u17E8', '\u17E9' ],
	    knda:    [ '\u0CE6', '\u0CE7', '\u0CE8', '\u0CE9', '\u0CEA', '\u0CEB', '\u0CEC', '\u0CED', '\u0CEE', '\u0CEF' ],
	    laoo:    [ '\u0ED0', '\u0ED1', '\u0ED2', '\u0ED3', '\u0ED4', '\u0ED5', '\u0ED6', '\u0ED7', '\u0ED8', '\u0ED9' ],
	    latn:    [ '\u0030', '\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039' ],
	    limb:    [ '\u1946', '\u1947', '\u1948', '\u1949', '\u194A', '\u194B', '\u194C', '\u194D', '\u194E', '\u194F' ],
	    mlym:    [ '\u0D66', '\u0D67', '\u0D68', '\u0D69', '\u0D6A', '\u0D6B', '\u0D6C', '\u0D6D', '\u0D6E', '\u0D6F' ],
	    mong:    [ '\u1810', '\u1811', '\u1812', '\u1813', '\u1814', '\u1815', '\u1816', '\u1817', '\u1818', '\u1819' ],
	    mymr:    [ '\u1040', '\u1041', '\u1042', '\u1043', '\u1044', '\u1045', '\u1046', '\u1047', '\u1048', '\u1049' ],
	    orya:    [ '\u0B66', '\u0B67', '\u0B68', '\u0B69', '\u0B6A', '\u0B6B', '\u0B6C', '\u0B6D', '\u0B6E', '\u0B6F' ],
	    tamldec: [ '\u0BE6', '\u0BE7', '\u0BE8', '\u0BE9', '\u0BEA', '\u0BEB', '\u0BEC', '\u0BED', '\u0BEE', '\u0BEF' ],
	    telu:    [ '\u0C66', '\u0C67', '\u0C68', '\u0C69', '\u0C6A', '\u0C6B', '\u0C6C', '\u0C6D', '\u0C6E', '\u0C6F' ],
	    thai:    [ '\u0E50', '\u0E51', '\u0E52', '\u0E53', '\u0E54', '\u0E55', '\u0E56', '\u0E57', '\u0E58', '\u0E59' ],
	    tibt:    [ '\u0F20', '\u0F21', '\u0F22', '\u0F23', '\u0F24', '\u0F25', '\u0F26', '\u0F27', '\u0F28', '\u0F29' ]
	};

	/**
	 * This function provides access to the locale and formatting options computed
	 * during initialization of the object.
	 *
	 * The function returns a new object whose properties and attributes are set as
	 * if constructed by an object literal assigning to each of the following
	 * properties the value of the corresponding internal property of this
	 * NumberFormat object (see 11.4): locale, numberingSystem, style, currency,
	 * currencyDisplay, minimumIntegerDigits, minimumFractionDigits,
	 * maximumFractionDigits, minimumSignificantDigits, maximumSignificantDigits, and
	 * useGrouping. Properties whose corresponding internal properties are not present
	 * are not assigned.
	 */
	/* 11.3.3 */defineProperty(Intl.NumberFormat.prototype, 'resolvedOptions', {
	    configurable: true,
	    writable: true,
	    value: function () {
	        var prop,
	            descs = new Record(),
	            props = [
	                'locale', 'numberingSystem', 'style', 'currency', 'currencyDisplay',
	                'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits',
	                'minimumSignificantDigits', 'maximumSignificantDigits', 'useGrouping'
	            ],
	            internal = this != null && typeof this === 'object' && getInternalProperties(this);

	        // Satisfy test 11.3_b
	        if (!internal || !internal['[[initializedNumberFormat]]'])
	            throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.');

	        for (var i = 0, max = props.length; i < max; i++) {
	            if (hop.call(internal, prop = '[['+ props[i] +']]'))
	                descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
	        }

	        return objCreate({}, descs);
	    }
	});

	// 12.1 The Intl.DateTimeFormat constructor
	// ==================================

	// Define the DateTimeFormat constructor internally so it cannot be tainted
	function DateTimeFormatConstructor () {
	    var locales = arguments[0];
	    var options = arguments[1];

	    if (!this || this === Intl) {
	        return new Intl.DateTimeFormat(locales, options);
	    }
	    return InitializeDateTimeFormat(toObject(this), locales, options);
	}

	defineProperty(Intl, 'DateTimeFormat', {
	    configurable: true,
	    writable: true,
	    value: DateTimeFormatConstructor
	});

	// Must explicitly set prototypes as unwritable
	defineProperty(DateTimeFormatConstructor, 'prototype', {
	    writable: false
	});

	/**
	 * The abstract operation InitializeDateTimeFormat accepts the arguments dateTimeFormat
	 * (which must be an object), locales, and options. It initializes dateTimeFormat as a
	 * DateTimeFormat object.
	 */
	function/* 12.1.1.1 */InitializeDateTimeFormat (dateTimeFormat, locales, options) {
	    var
	    // This will be a internal properties object if we're not already initialized
	        internal = getInternalProperties(dateTimeFormat),

	    // Create an object whose props can be used to restore the values of RegExp props
	        regexpState = createRegExpRestore();

	    // 1. If dateTimeFormat has an [[initializedIntlObject]] internal property with
	    //    value true, throw a TypeError exception.
	    if (internal['[[initializedIntlObject]]'] === true)
	        throw new TypeError('`this` object has already been initialized as an Intl object');

	    // Need this to access the `internal` object
	    defineProperty(dateTimeFormat, '__getInternalProperties', {
	        value: function () {
	            // NOTE: Non-standard, for internal use only
	            if (arguments[0] === secret)
	                return internal;
	        }
	    });

	    // 2. Set the [[initializedIntlObject]] internal property of numberFormat to true.
	    internal['[[initializedIntlObject]]'] = true;

	    var
	    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
	    //    abstract operation (defined in 9.2.1) with argument locales.
	        requestedLocales = CanonicalizeLocaleList(locales),

	    // 4. Let options be the result of calling the ToDateTimeOptions abstract
	    //    operation (defined below) with arguments options, "any", and "date".
	        options = ToDateTimeOptions(options, 'any', 'date'),

	    // 5. Let opt be a new Record.
	        opt = new Record();

	    // 6. Let matcher be the result of calling the GetOption abstract operation
	    //    (defined in 9.2.9) with arguments options, "localeMatcher", "string", a List
	    //    containing the two String values "lookup" and "best fit", and "best fit".
	        matcher = GetOption(options, 'localeMatcher', 'string', new List('lookup', 'best fit'), 'best fit');

	    // 7. Set opt.[[localeMatcher]] to matcher.
	    opt['[[localeMatcher]]'] = matcher;

	    var
	    // 8. Let DateTimeFormat be the standard built-in object that is the initial
	    //    value of Intl.DateTimeFormat.
	        DateTimeFormat = internals.DateTimeFormat, // This is what we *really* need

	    // 9. Let localeData be the value of the [[localeData]] internal property of
	    //    DateTimeFormat.
	        localeData = DateTimeFormat['[[localeData]]'],

	    // 10. Let r be the result of calling the ResolveLocale abstract operation
	    //     (defined in 9.2.5) with the [[availableLocales]] internal property of
	    //      DateTimeFormat, requestedLocales, opt, the [[relevantExtensionKeys]]
	    //      internal property of DateTimeFormat, and localeData.
	        r = ResolveLocale(DateTimeFormat['[[availableLocales]]'], requestedLocales,
	                opt, DateTimeFormat['[[relevantExtensionKeys]]'], localeData);

	    // 11. Set the [[locale]] internal property of dateTimeFormat to the value of
	    //     r.[[locale]].
	    internal['[[locale]]'] = r['[[locale]]'];

	    // 12. Set the [[calendar]] internal property of dateTimeFormat to the value of
	    //     r.[[ca]].
	    internal['[[calendar]]'] = r['[[ca]]'];

	    // 13. Set the [[numberingSystem]] internal property of dateTimeFormat to the value of
	    //     r.[[nu]].
	    internal['[[numberingSystem]]'] = r['[[nu]]'];

	    // The specification doesn't tell us to do this, but it's helpful later on
	    internal['[[dataLocale]]'] = r['[[dataLocale]]'];

	    var
	    // 14. Let dataLocale be the value of r.[[dataLocale]].
	        dataLocale = r['[[dataLocale]]'],

	    // 15. Let tz be the result of calling the [[Get]] internal method of options with
	    //     argument "timeZone".
	        tz = options.timeZone;

	    // 16. If tz is not undefined, then
	    if (tz !== undefined) {
	        // a. Let tz be ToString(tz).
	        // b. Convert tz to upper case as described in 6.1.
	        //    NOTE: If an implementation accepts additional time zone values, as permitted
	        //          under certain conditions by the Conformance clause, different casing
	        //          rules apply.
	        tz = toLatinUpperCase(tz);

	        // c. If tz is not "UTC", then throw a RangeError exception.
	        // ###TODO: accept more time zones###
	        if (tz !== 'UTC')
	            throw new RangeError('timeZone is not supported.');
	    }

	    // 17. Set the [[timeZone]] internal property of dateTimeFormat to tz.
	    internal['[[timeZone]]'] = tz;

	    // 18. Let opt be a new Record.
	    opt = new Record();

	    // 19. For each row of Table 3, except the header row, do:
	    for (var prop in dateTimeComponents) {
	        if (!hop.call(dateTimeComponents, prop))
	            continue;

	        var
	        // 20. Let prop be the name given in the Property column of the row.
	        // 21. Let value be the result of calling the GetOption abstract operation,
	        //     passing as argument options, the name given in the Property column of the
	        //     row, "string", a List containing the strings given in the Values column of
	        //     the row, and undefined.
	            value = GetOption(options, prop, 'string', dateTimeComponents[prop]);

	        // 22. Set opt.[[<prop>]] to value.
	        opt['[['+prop+']]'] = value;
	    }

	    var
	        // Assigned a value below
	        bestFormat,

	        // 23. Let dataLocaleData be the result of calling the [[Get]] internal method of
	        //     localeData with argument dataLocale.
	        dataLocaleData = localeData[dataLocale],

	        // 24. Let formats be the result of calling the [[Get]] internal method of
	        //     dataLocaleData with argument "formats".
	        formats = dataLocaleData.formats,
	        // 25. Let matcher be the result of calling the GetOption abstract operation with
	        //     arguments options, "formatMatcher", "string", a List containing the two String
	        //     values "basic" and "best fit", and "best fit".
	        matcher = GetOption(options, 'formatMatcher', 'string', new List('basic', 'best fit'), 'best fit');

	    // 26. If matcher is "basic", then
	    if (matcher === 'basic')
	        // 27. Let bestFormat be the result of calling the BasicFormatMatcher abstract
	        //     operation (defined below) with opt and formats.
	        bestFormat = BasicFormatMatcher(opt, formats);

	    // 28. Else
	    else
	        // 29. Let bestFormat be the result of calling the BestFitFormatMatcher
	        //     abstract operation (defined below) with opt and formats.
	        bestFormat = BestFitFormatMatcher(opt, formats);

	    // 30. For each row in Table 3, except the header row, do
	    for (var prop in dateTimeComponents) {
	        if (!hop.call(dateTimeComponents, prop))
	            continue;

	        // a. Let prop be the name given in the Property column of the row.
	        // b. Let pDesc be the result of calling the [[GetOwnProperty]] internal method of
	        //    bestFormat with argument prop.
	        // c. If pDesc is not undefined, then
	        if (hop.call(bestFormat, prop)) {
	            var
	            // i. Let p be the result of calling the [[Get]] internal method of bestFormat
	            //    with argument prop.
	                p = bestFormat[prop];

	            // ii. Set the [[<prop>]] internal property of dateTimeFormat to p.
	            internal['[['+prop+']]'] = p;
	        }
	    }

	    var
	        // Assigned a value below
	        pattern,

	    // 31. Let hr12 be the result of calling the GetOption abstract operation with
	    //     arguments options, "hour12", "boolean", undefined, and undefined.
	        hr12 = GetOption(options, 'hour12', 'boolean'/*, undefined, undefined*/);

	    // 32. If dateTimeFormat has an internal property [[hour]], then
	    if (internal['[[hour]]']) {
	        // a. If hr12 is undefined, then let hr12 be the result of calling the [[Get]]
	        //    internal method of dataLocaleData with argument "hour12".
	        hr12 = hr12 === undefined ? dataLocaleData.hour12 : hr12;

	        // b. Set the [[hour12]] internal property of dateTimeFormat to hr12.
	        internal['[[hour12]]'] = hr12;

	        // c. If hr12 is true, then
	        if (hr12 === true) {
	            var
	            // i. Let hourNo0 be the result of calling the [[Get]] internal method of
	            //    dataLocaleData with argument "hourNo0".
	                hourNo0 = dataLocaleData.hourNo0;

	            // ii. Set the [[hourNo0]] internal property of dateTimeFormat to hourNo0.
	            internal['[[hourNo0]]'] = hourNo0;

	            // iii. Let pattern be the result of calling the [[Get]] internal method of
	            //      bestFormat with argument "pattern12".
	            pattern = bestFormat.pattern12;
	        }

	        // d. Else
	        else
	            // i. Let pattern be the result of calling the [[Get]] internal method of
	            //    bestFormat with argument "pattern".
	            pattern = bestFormat.pattern;
	    }

	    // 33. Else
	    else
	        // a. Let pattern be the result of calling the [[Get]] internal method of
	        //    bestFormat with argument "pattern".
	        pattern = bestFormat.pattern;

	    // 34. Set the [[pattern]] internal property of dateTimeFormat to pattern.
	    internal['[[pattern]]'] = pattern;

	    // 35. Set the [[boundFormat]] internal property of dateTimeFormat to undefined.
	    internal['[[boundFormat]]'] = undefined;

	    // 36. Set the [[initializedDateTimeFormat]] internal property of dateTimeFormat to
	    //     true.
	    internal['[[initializedDateTimeFormat]]'] = true;

	    // In ES3, we need to pre-bind the format() function
	    if (es3)
	        dateTimeFormat.format = GetFormatDateTime.call(dateTimeFormat);

	    // Restore the RegExp properties
	    regexpState.exp.test(regexpState.input);

	    // Return the newly initialised object
	    return dateTimeFormat;
	}

	/**
	 * Several DateTimeFormat algorithms use values from the following table, which provides
	 * property names and allowable values for the components of date and time formats:
	 */
	var dateTimeComponents = {
	         weekday: [ "narrow", "short", "long" ],
	             era: [ "narrow", "short", "long" ],
	            year: [ "2-digit", "numeric" ],
	           month: [ "2-digit", "numeric", "narrow", "short", "long" ],
	             day: [ "2-digit", "numeric" ],
	            hour: [ "2-digit", "numeric" ],
	          minute: [ "2-digit", "numeric" ],
	          second: [ "2-digit", "numeric" ],
	    timeZoneName: [ "short", "long" ]
	};

	/**
	 * When the ToDateTimeOptions abstract operation is called with arguments options,
	 * required, and defaults, the following steps are taken:
	 */
	function ToDateTimeOptions (options, required, defaults) {
	    // 1. If options is undefined, then let options be null, else let options be
	    //    ToObject(options).
	    if (options === undefined)
	        options = null;

	    else {
	        // (#12) options needs to be a Record, but it also needs to inherit properties
	        var opt2 = toObject(options);
	        options = new Record();

	        for (var k in opt2)
	            options[k] = opt2[k];
	    }

	    var
	    // 2. Let create be the standard built-in function object defined in ES5, 15.2.3.5.
	        create = objCreate,

	    // 3. Let options be the result of calling the [[Call]] internal method of create with
	    //    undefined as the this value and an argument list containing the single item
	    //    options.
	        options = create(options),

	    // 4. Let needDefaults be true.
	        needDefaults = true;

	    // 5. If required is "date" or "any", then
	    if (required === 'date' || required === 'any') {
	        // a. For each of the property names "weekday", "year", "month", "day":
	            // i. If the result of calling the [[Get]] internal method of options with the
	            //    property name is not undefined, then let needDefaults be false.
	        if (options.weekday !== undefined || options.year !== undefined
	                || options.month !== undefined || options.day !== undefined)
	            needDefaults = false;
	    }

	    // 6. If required is "time" or "any", then
	    if (required === 'time' || required === 'any') {
	        // a. For each of the property names "hour", "minute", "second":
	            // i. If the result of calling the [[Get]] internal method of options with the
	            //    property name is not undefined, then let needDefaults be false.
	        if (options.hour !== undefined || options.minute !== undefined || options.second !== undefined)
	                needDefaults = false;
	    }

	    // 7. If needDefaults is true and defaults is either "date" or "all", then
	    if (needDefaults && (defaults === 'date' || defaults === 'all'))
	        // a. For each of the property names "year", "month", "day":
	            // i. Call the [[DefineOwnProperty]] internal method of options with the
	            //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
	            //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
	        options.year = options.month = options.day = 'numeric';

	    // 8. If needDefaults is true and defaults is either "time" or "all", then
	    if (needDefaults && (defaults === 'time' || defaults === 'all'))
	        // a. For each of the property names "hour", "minute", "second":
	            // i. Call the [[DefineOwnProperty]] internal method of options with the
	            //    property name, Property Descriptor {[[Value]]: "numeric", [[Writable]]:
	            //    true, [[Enumerable]]: true, [[Configurable]]: true}, and false.
	        options.hour = options.minute = options.second = 'numeric';

	    // 9. Return options.
	    return options;
	}

	/**
	 * When the BasicFormatMatcher abstract operation is called with two arguments options and
	 * formats, the following steps are taken:
	 */
	function BasicFormatMatcher (options, formats) {
	    return calculateScore(options, formats);
	}

	/**
	 * Calculates score for BestFitFormatMatcher and BasicFormatMatcher.
	 * Abstracted from BasicFormatMatcher section.
	 */
	function calculateScore (options, formats, bestFit) {
	    var
	    // Additional penalty type when bestFit === true
	       diffDataTypePenalty = 8,

	    // 1. Let removalPenalty be 120.
	        removalPenalty = 120,

	    // 2. Let additionPenalty be 20.
	        additionPenalty = 20,

	    // 3. Let longLessPenalty be 8.
	        longLessPenalty = 8,

	    // 4. Let longMorePenalty be 6.
	        longMorePenalty = 6,

	    // 5. Let shortLessPenalty be 6.
	        shortLessPenalty = 6,

	    // 6. Let shortMorePenalty be 3.
	        shortMorePenalty = 3,

	    // 7. Let bestScore be -Infinity.
	        bestScore = -Infinity,

	    // 8. Let bestFormat be undefined.
	        bestFormat,

	    // 9. Let i be 0.
	        i = 0,

	    // 10. Let len be the result of calling the [[Get]] internal method of formats with argument "length".
	        len = formats.length;

	    // 11. Repeat while i < len:
	    while (i < len) {
	        var
	        // a. Let format be the result of calling the [[Get]] internal method of formats with argument ToString(i).
	            format = formats[i],

	        // b. Let score be 0.
	            score = 0;

	        // c. For each property shown in Table 3:
	        for (var property in dateTimeComponents) {
	            if (!hop.call(dateTimeComponents, property))
	                continue;

	            var
	            // i. Let optionsProp be options.[[<property>]].
	                optionsProp = options['[['+ property +']]'],

	            // ii. Let formatPropDesc be the result of calling the [[GetOwnProperty]] internal method of format
	            //     with argument property.
	            // iii. If formatPropDesc is not undefined, then
	            //     1. Let formatProp be the result of calling the [[Get]] internal method of format with argument property.
	                formatProp = hop.call(format, property) ? format[property] : undefined;

	            // iv. If optionsProp is undefined and formatProp is not undefined, then decrease score by
	            //     additionPenalty.
	            if (optionsProp === undefined && formatProp !== undefined)
	                score -= additionPenalty;

	            // v. Else if optionsProp is not undefined and formatProp is undefined, then decrease score by
	            //    removalPenalty.
	            else if (optionsProp !== undefined && formatProp === undefined)
	                score -= removalPenalty;

	            // vi. Else
	            else {
	                var
	                // 1. Let values be the array ["2-digit", "numeric", "narrow", "short",
	                //    "long"].
	                    values = [ '2-digit', 'numeric', 'narrow', 'short', 'long' ],

	                // 2. Let optionsPropIndex be the index of optionsProp within values.
	                    optionsPropIndex = arrIndexOf.call(values, optionsProp),

	                // 3. Let formatPropIndex be the index of formatProp within values.
	                    formatPropIndex = arrIndexOf.call(values, formatProp),

	                // 4. Let delta be max(min(formatPropIndex - optionsPropIndex, 2), -2).
	                    delta = Math.max(Math.min(formatPropIndex - optionsPropIndex, 2), -2);

	                // When the bestFit argument is true, subtract additional penalty where data types are not the same
	                if (bestFit && (
	                    ((optionsProp === 'numeric' || optionsProp === '2-digit') && (formatProp !== 'numeric' && formatProp !== '2-digit'))
	                 || ((optionsProp !== 'numeric' && optionsProp !== '2-digit') && (formatProp === '2-digit' || formatProp === 'numeric'))
	                ))
	                    score -= diffDataTypePenalty;

	                // 5. If delta = 2, decrease score by longMorePenalty.
	                if (delta === 2)
	                    score -= longMorePenalty;

	                // 6. Else if delta = 1, decrease score by shortMorePenalty.
	                else if (delta === 1)
	                    score -= shortMorePenalty;

	                // 7. Else if delta = -1, decrease score by shortLessPenalty.
	                else if (delta === -1)
	                    score -= shortLessPenalty;

	                // 8. Else if delta = -2, decrease score by longLessPenalty.
	                else if (delta === -2)
	                    score -= longLessPenalty;
	            }
	        }

	        // d. If score > bestScore, then
	        if (score > bestScore) {
	            // i. Let bestScore be score.
	            bestScore = score;

	            // ii. Let bestFormat be format.
	            bestFormat = format;
	        }

	        // e. Increase i by 1.
	        i++;
	    }

	    // 12. Return bestFormat.
	    return bestFormat;
	}

	/**
	 * When the BestFitFormatMatcher abstract operation is called with two arguments options
	 * and formats, it performs implementation dependent steps, which should return a set of
	 * component representations that a typical user of the selected locale would perceive as
	 * at least as good as the one returned by BasicFormatMatcher.
	 *
	 * This polyfill defines the algorithm to be the same as BasicFormatMatcher,
	 * with the addition of bonus points awarded where the requested format is of
	 * the same data type as the potentially matching format.
	 *
	 * For example,
	 *
	 *     { month: 'numeric', day: 'numeric' }
	 *
	 * should match
	 *
	 *     { month: '2-digit', day: '2-digit' }
	 *
	 * rather than
	 *
	 *     { month: 'short', day: 'numeric' }
	 *
	 * This makes sense because a user requesting a formatted date with numeric parts would
	 * not expect to see the returned format containing narrow, short or long part names
	 */
	function BestFitFormatMatcher (options, formats) {
	    return calculateScore(options, formats, true);
	}

	/* 12.2.3 */internals.DateTimeFormat = {
	    '[[availableLocales]]': [],
	    '[[relevantExtensionKeys]]': ['ca', 'nu'],
	    '[[localeData]]': {}
	};

	/**
	 * When the supportedLocalesOf method of Intl.DateTimeFormat is called, the
	 * following steps are taken:
	 */
	/* 12.2.2 */defineProperty(Intl.DateTimeFormat, 'supportedLocalesOf', {
	    configurable: true,
	    writable: true,
	    value: fnBind.call(supportedLocalesOf, internals.DateTimeFormat)
	});

	/**
	 * This named accessor property returns a function that formats a number
	 * according to the effective locale and the formatting options of this
	 * DateTimeFormat object.
	 */
	/* 12.3.2 */defineProperty(Intl.DateTimeFormat.prototype, 'format', {
	    configurable: true,
	    get: GetFormatDateTime
	});

	function GetFormatDateTime() {
	    var internal = this != null && typeof this === 'object' && getInternalProperties(this);

	    // Satisfy test 12.3_b
	    if (!internal || !internal['[[initializedDateTimeFormat]]'])
	        throw new TypeError('`this` value for format() is not an initialized Intl.DateTimeFormat object.');

	    // The value of the [[Get]] attribute is a function that takes the following
	    // steps:

	    // 1. If the [[boundFormat]] internal property of this DateTimeFormat object
	    //    is undefined, then:
	    if (internal['[[boundFormat]]'] === undefined) {
	        var
	        // a. Let F be a Function object, with internal properties set as
	        //    specified for built-in functions in ES5, 15, or successor, and the
	        //    length property set to 0, that takes the argument date and
	        //    performs the following steps:
	            F = function () {
	                //   i. If date is not provided or is undefined, then let x be the
	                //      result as if by the expression Date.now() where Date.now is
	                //      the standard built-in function defined in ES5, 15.9.4.4.
	                //  ii. Else let x be ToNumber(date).
	                // iii. Return the result of calling the FormatDateTime abstract
	                //      operation (defined below) with arguments this and x.
	                var x = Number(arguments.length === 0 ? Date.now() : arguments[0]);
	                return FormatDateTime(this, x);
	            },
	        // b. Let bind be the standard built-in function object defined in ES5,
	        //    15.3.4.5.
	        // c. Let bf be the result of calling the [[Call]] internal method of
	        //    bind with F as the this value and an argument list containing
	        //    the single item this.
	            bf = fnBind.call(F, this);
	        // d. Set the [[boundFormat]] internal property of this NumberFormat
	        //    object to bf.
	        internal['[[boundFormat]]'] = bf;
	    }
	    // Return the value of the [[boundFormat]] internal property of this
	    // NumberFormat object.
	    return internal['[[boundFormat]]'];
	}

	/**
	 * When the FormatDateTime abstract operation is called with arguments dateTimeFormat
	 * (which must be an object initialized as a DateTimeFormat) and x (which must be a Number
	 * value), it returns a String value representing x (interpreted as a time value as
	 * specified in ES5, 15.9.1.1) according to the effective locale and the formatting
	 * options of dateTimeFormat.
	 */
	function FormatDateTime(dateTimeFormat, x) {
	    // 1. If x is not a finite Number, then throw a RangeError exception.
	    if (!isFinite(x))
	        throw new RangeError('Invalid valid date passed to format');

	    var
	        internal = dateTimeFormat.__getInternalProperties(secret),

	    // Creating restore point for properties on the RegExp object... please wait
	        regexpState = createRegExpRestore(),

	    // 2. Let locale be the value of the [[locale]] internal property of dateTimeFormat.
	        locale = internal['[[locale]]'],

	    // 3. Let nf be the result of creating a new NumberFormat object as if by the
	    // expression new Intl.NumberFormat([locale], {useGrouping: false}) where
	    // Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
	        nf = new Intl.NumberFormat([locale], {useGrouping: false}),

	    // 4. Let nf2 be the result of creating a new NumberFormat object as if by the
	    // expression new Intl.NumberFormat([locale], {minimumIntegerDigits: 2, useGrouping:
	    // false}) where Intl.NumberFormat is the standard built-in constructor defined in
	    // 11.1.3.
	        nf2 = new Intl.NumberFormat([locale], {minimumIntegerDigits: 2, useGrouping: false}),

	    // 5. Let tm be the result of calling the ToLocalTime abstract operation (defined
	    // below) with x, the value of the [[calendar]] internal property of dateTimeFormat,
	    // and the value of the [[timeZone]] internal property of dateTimeFormat.
	        tm = ToLocalTime(x, internal['[[calendar]]'], internal['[[timeZone]]']),

	    // 6. Let result be the value of the [[pattern]] internal property of dateTimeFormat.
	        result = internal['[[pattern]]'],

	    // Need the locale minus any extensions
	        dataLocale = internal['[[dataLocale]]'],

	    // Need the calendar data from CLDR
	        localeData = internals.DateTimeFormat['[[localeData]]'][dataLocale].calendars,
	        ca = internal['[[calendar]]'];

	    // 7. For each row of Table 3, except the header row, do:
	    for (var p in dateTimeComponents) {
	        // a. If dateTimeFormat has an internal property with the name given in the
	        //    Property column of the row, then:
	        if (hop.call(internal, '[['+ p +']]')) {
	            var
	            // Assigned values below
	                pm, fv,

	            //   i. Let p be the name given in the Property column of the row.
	            //  ii. Let f be the value of the [[<p>]] internal property of dateTimeFormat.
	                f = internal['[['+ p +']]'],

	            // iii. Let v be the value of tm.[[<p>]].
	                v = tm['[['+ p +']]'];

	            //  iv. If p is "year" and v ≤ 0, then let v be 1 - v.
	            if (p === 'year' && v <= 0)
	                v = 1 - v;

	            //   v. If p is "month", then increase v by 1.
	            else if (p === 'month')
	                v++;

	            //  vi. If p is "hour" and the value of the [[hour12]] internal property of
	            //      dateTimeFormat is true, then
	            else if (p === 'hour' && internal['[[hour12]]'] === true) {
	                // 1. Let v be v modulo 12.
	                v = v % 12;

	                // 2. If v is equal to the value of tm.[[<p>]], then let pm be false; else
	                //    let pm be true.
	                pm = v !== tm['[['+ p +']]'];

	                // 3. If v is 0 and the value of the [[hourNo0]] internal property of
	                //    dateTimeFormat is true, then let v be 12.
	                if (v === 0 && internal['[[hourNo0]]'] === true)
	                    v = 12;
	            }

	            // vii. If f is "numeric", then
	            if (f === 'numeric')
	                // 1. Let fv be the result of calling the FormatNumber abstract operation
	                //    (defined in 11.3.2) with arguments nf and v.
	                fv = FormatNumber(nf, v);

	            // viii. Else if f is "2-digit", then
	            else if (f === '2-digit') {
	                // 1. Let fv be the result of calling the FormatNumber abstract operation
	                //    with arguments nf2 and v.
	                fv = FormatNumber(nf2, v);

	                // 2. If the length of fv is greater than 2, let fv be the substring of fv
	                //    containing the last two characters.
	                if (fv.length > 2)
	                    fv = fv.slice(-2);
	            }

	            // ix. Else if f is "narrow", "short", or "long", then let fv be a String
	            //     value representing f in the desired form; the String value depends upon
	            //     the implementation and the effective locale and calendar of
	            //     dateTimeFormat. If p is "month", then the String value may also depend
	            //     on whether dateTimeFormat has a [[day]] internal property. If p is
	            //     "timeZoneName", then the String value may also depend on the value of
	            //     the [[inDST]] field of tm.
	            else if (f in dateWidths) {
	                switch (p) {
	                    case 'month':
	                        fv = resolveDateString(localeData, ca, 'months', f, tm['[['+ p +']]']);
	                        break;

	                    case 'weekday':
	                        try {
	                            fv = resolveDateString(localeData, ca, 'days', f, tm['[['+ p +']]']);
	                            // fv = resolveDateString(ca.days, f)[tm['[['+ p +']]']];
	                        } catch (e) {
	                            throw new Error('Could not find weekday data for locale '+locale);
	                        }
	                        break;

	                    case 'timeZoneName':
	                        fv = ''; // TODO
	                        break;

	                    // TODO: Era
	                    default:
	                        fv = tm['[['+ p +']]'];
	                }
	            }

	            // x. Replace the substring of result that consists of "{", p, and "}", with
	            //    fv.
	            result = result.replace('{'+ p +'}', fv);
	        }
	    }
	    // 8. If dateTimeFormat has an internal property [[hour12]] whose value is true, then
	    if (internal['[[hour12]]'] === true) {
	        // a. If pm is true, then let fv be an implementation and locale dependent String
	        //    value representing “post meridiem”; else let fv be an implementation and
	        //    locale dependent String value representing “ante meridiem”.
	        fv = resolveDateString(localeData, ca, 'dayPeriods', pm ? 'pm' : 'am');

	        // b. Replace the substring of result that consists of "{ampm}", with fv.
	        result = result.replace('{ampm}', fv);
	    }

	    // Restore properties of the RegExp object
	    regexpState.exp.test(regexpState.input);

	    // 9. Return result.
	    return result;
	}

	/**
	 * When the ToLocalTime abstract operation is called with arguments date, calendar, and
	 * timeZone, the following steps are taken:
	 */
	function ToLocalTime(date, calendar, timeZone) {
	    // 1. Apply calendrical calculations on date for the given calendar and time zone to
	    //    produce weekday, era, year, month, day, hour, minute, second, and inDST values.
	    //    The calculations should use best available information about the specified
	    //    calendar and time zone. If the calendar is "gregory", then the calculations must
	    //    match the algorithms specified in ES5, 15.9.1, except that calculations are not
	    //    bound by the restrictions on the use of best available information on time zones
	    //    for local time zone adjustment and daylight saving time adjustment imposed by
	    //    ES5, 15.9.1.7 and 15.9.1.8.
	    // ###TODO###
	    var d = new Date(date),
	        m = 'get' + (timeZone || '');

	    // 2. Return a Record with fields [[weekday]], [[era]], [[year]], [[month]], [[day]],
	    //    [[hour]], [[minute]], [[second]], and [[inDST]], each with the corresponding
	    //    calculated value.
	    return new Record({
	        '[[weekday]]': d[m + 'Day'](),
	        '[[era]]'    : +(d[m + 'FullYear']() >= 0),
	        '[[year]]'   : d[m + 'FullYear'](),
	        '[[month]]'  : d[m + 'Month'](),
	        '[[day]]'    : d[m + 'Date'](),
	        '[[hour]]'   : d[m + 'Hours'](),
	        '[[minute]]' : d[m + 'Minutes'](),
	        '[[second]]' : d[m + 'Seconds'](),
	        '[[inDST]]'  : false // ###TODO###
	    });
	}

	/**
	 * The function returns a new object whose properties and attributes are set as if
	 * constructed by an object literal assigning to each of the following properties the
	 * value of the corresponding internal property of this DateTimeFormat object (see 12.4):
	 * locale, calendar, numberingSystem, timeZone, hour12, weekday, era, year, month, day,
	 * hour, minute, second, and timeZoneName. Properties whose corresponding internal
	 * properties are not present are not assigned.
	 */
	/* 12.3.3 */defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {
	    writable: true,
	    configurable: true,
	    value: function () {
	        var prop,
	            descs = new Record(),
	            props = [
	                'locale', 'calendar', 'numberingSystem', 'timeZone', 'hour12', 'weekday',
	                'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName'
	            ],
	            internal = this != null && typeof this === 'object' && getInternalProperties(this);

	        // Satisfy test 12.3_b
	        if (!internal || !internal['[[initializedDateTimeFormat]]'])
	            throw new TypeError('`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.');

	        for (var i = 0, max = props.length; i < max; i++) {
	            if (hop.call(internal, prop = '[[' + props[i] + ']]'))
	                descs[props[i]] = { value: internal[prop], writable: true, configurable: true, enumerable: true };
	        }

	        return objCreate({}, descs);
	    }
	});

	// Sect 13 Locale Sensitive Functions of the ECMAScript Language Specification
	// ===========================================================================

	var ls = Intl.__localeSensitiveProtos = {
	    Number: {},
	    Date:   {}
	};

	/**
	 * When the toLocaleString method is called with optional arguments locales and options,
	 * the following steps are taken:
	 */
	/* 13.2.1 */ls.Number.toLocaleString = function () {
	    // Satisfy test 13.2.1_1
	    if (Object.prototype.toString.call(this) !== '[object Number]')
	        throw new TypeError('`this` value must be a number for Number.prototype.toLocaleString()');

	    // 1. Let x be this Number value (as defined in ES5, 15.7.4).
	    // 2. If locales is not provided, then let locales be undefined.
	    // 3. If options is not provided, then let options be undefined.
	    // 4. Let numberFormat be the result of creating a new object as if by the
	    //    expression new Intl.NumberFormat(locales, options) where
	    //    Intl.NumberFormat is the standard built-in constructor defined in 11.1.3.
	    // 5. Return the result of calling the FormatNumber abstract operation
	    //    (defined in 11.3.2) with arguments numberFormat and x.
	    return FormatNumber(new NumberFormatConstructor(arguments[0], arguments[1]), this);
	};

	/**
	 * When the toLocaleString method is called with optional arguments locales and options,
	 * the following steps are taken:
	 */
	/* 13.3.1 */ls.Date.toLocaleString = function () {
	    // Satisfy test 13.3.0_1
	    if (Object.prototype.toString.call(this) !== '[object Date]')
	        throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleString()');

	    var
	    // 1. Let x be this time value (as defined in ES5, 15.9.5).
	        x = +this;

	    // 2. If x is NaN, then return "Invalid Date".
	    if (isNaN(x))
	        return 'Invalid Date';

	    var
	    // 3. If locales is not provided, then let locales be undefined.
	        locales = arguments[0],

	    // 4. If options is not provided, then let options be undefined.
	        options = arguments[1],

	    // 5. Let options be the result of calling the ToDateTimeOptions abstract
	    //    operation (defined in 12.1.1) with arguments options, "any", and "all".
	        options = ToDateTimeOptions(options, 'any', 'all'),

	    // 6. Let dateTimeFormat be the result of creating a new object as if by the
	    //    expression new Intl.DateTimeFormat(locales, options) where
	    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
	        dateTimeFormat = new DateTimeFormatConstructor(locales, options);

	    // 7. Return the result of calling the FormatDateTime abstract operation (defined
	    //    in 12.3.2) with arguments dateTimeFormat and x.
	    return FormatDateTime(dateTimeFormat, x);
	};

	/**
	 * When the toLocaleDateString method is called with optional arguments locales and
	 * options, the following steps are taken:
	 */
	/* 13.3.2 */ls.Date.toLocaleDateString = function () {
	    // Satisfy test 13.3.0_1
	    if (Object.prototype.toString.call(this) !== '[object Date]')
	        throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleDateString()');

	    var
	    // 1. Let x be this time value (as defined in ES5, 15.9.5).
	        x = +this;

	    // 2. If x is NaN, then return "Invalid Date".
	    if (isNaN(x))
	        return 'Invalid Date';

	    var
	    // 3. If locales is not provided, then let locales be undefined.
	        locales = arguments[0],

	    // 4. If options is not provided, then let options be undefined.
	        options = arguments[1],

	    // 5. Let options be the result of calling the ToDateTimeOptions abstract
	    //    operation (defined in 12.1.1) with arguments options, "date", and "date".
	        options = ToDateTimeOptions(options, 'date', 'date'),

	    // 6. Let dateTimeFormat be the result of creating a new object as if by the
	    //    expression new Intl.DateTimeFormat(locales, options) where
	    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
	        dateTimeFormat = new DateTimeFormatConstructor(locales, options);

	    // 7. Return the result of calling the FormatDateTime abstract operation (defined
	    //    in 12.3.2) with arguments dateTimeFormat and x.
	    return FormatDateTime(dateTimeFormat, x);
	};

	/**
	 * When the toLocaleTimeString method is called with optional arguments locales and
	 * options, the following steps are taken:
	 */
	/* 13.3.3 */ls.Date.toLocaleTimeString = function () {
	    // Satisfy test 13.3.0_1
	    if (Object.prototype.toString.call(this) !== '[object Date]')
	        throw new TypeError('`this` value must be a Date instance for Date.prototype.toLocaleTimeString()');

	    var
	    // 1. Let x be this time value (as defined in ES5, 15.9.5).
	        x = +this;

	    // 2. If x is NaN, then return "Invalid Date".
	    if (isNaN(x))
	        return 'Invalid Date';

	    var
	    // 3. If locales is not provided, then let locales be undefined.
	        locales = arguments[0],

	    // 4. If options is not provided, then let options be undefined.
	        options = arguments[1],

	    // 5. Let options be the result of calling the ToDateTimeOptions abstract
	    //    operation (defined in 12.1.1) with arguments options, "time", and "time".
	        options = ToDateTimeOptions(options, 'time', 'time'),

	    // 6. Let dateTimeFormat be the result of creating a new object as if by the
	    //    expression new Intl.DateTimeFormat(locales, options) where
	    //    Intl.DateTimeFormat is the standard built-in constructor defined in 12.1.3.
	        dateTimeFormat = new DateTimeFormatConstructor(locales, options);

	    // 7. Return the result of calling the FormatDateTime abstract operation (defined
	    //    in 12.3.2) with arguments dateTimeFormat and x.
	    return FormatDateTime(dateTimeFormat, x);
	};

	defineProperty(Intl, '__applyLocaleSensitivePrototypes', {
	    writable: true,
	    configurable: true,
	    value: function () {
	        defineProperty(Number.prototype, 'toLocaleString', { writable: true, configurable: true, value: ls.Number.toLocaleString });

	        for (var k in ls.Date) {
	            if (hop.call(ls.Date, k))
	                defineProperty(Date.prototype, k, { writable: true, configurable: true, value: ls.Date[k] });
	        }
	    }
	});

	/**
	 * Can't really ship a single script with data for hundreds of locales, so we provide
	 * this __addLocaleData method as a means for the developer to add the data on an
	 * as-needed basis
	 */
	defineProperty(Intl, '__addLocaleData', {
	    value: function (data) {
	        if (!IsStructurallyValidLanguageTag(data.locale))
	            throw new Error("Object passed doesn't identify itself with a valid language tag");

	        addLocaleData(data, data.locale);
	    }
	});

	function addLocaleData (data, tag) {
	    // Both NumberFormat and DateTimeFormat require number data, so throw if it isn't present
	    if (!data.number)
	        throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");

	    var locale,
	        locales = [ tag ],
	        parts   = tag.split('-');

	    // Create fallbacks for locale data with scripts, e.g. Latn, Hans, Vaii, etc
	    if (parts.length > 2 && parts[1].length == 4)
	        arrPush.call(locales, parts[0] + '-' + parts[2]);

	    while (locale = arrShift.call(locales)) {
	        // Add to NumberFormat internal properties as per 11.2.3
	        arrPush.call(internals.NumberFormat['[[availableLocales]]'], locale);
	        internals.NumberFormat['[[localeData]]'][locale] = data.number;

	        // ...and DateTimeFormat internal properties as per 12.2.3
	        if (data.date) {
	            data.date.nu = data.number.nu;
	            arrPush.call(internals.DateTimeFormat['[[availableLocales]]'], locale);
	            internals.DateTimeFormat['[[localeData]]'][locale] = data.date;
	        }
	    }

	    // If this is the first set of locale data added, make it the default
	    if (defaultLocale === undefined)
	        defaultLocale = tag;

	    // 11.3 (the NumberFormat prototype object is an Intl.NumberFormat instance)
	    if (!numberFormatProtoInitialised) {
	        InitializeNumberFormat(Intl.NumberFormat.prototype);
	        numberFormatProtoInitialised = true;
	    }

	    // 11.3 (the NumberFormat prototype object is an Intl.NumberFormat instance)
	    if (data.date && !dateTimeFormatProtoInitialised) {
	        InitializeDateTimeFormat(Intl.DateTimeFormat.prototype);
	        dateTimeFormatProtoInitialised = true;
	    }
	}

	// Helper functions
	// ================

	/**
	 * A function to deal with the inaccuracy of calculating log10 in pre-ES6
	 * JavaScript environments. Math.log(num) / Math.LN10 was responsible for
	 * causing issue #62.
	 */
	function log10Floor (n) {
	    // ES6 provides the more accurate Math.log10
	    if (typeof Math.log10 === 'function')
	        return Math.floor(Math.log10(n));

	    var x = Math.round(Math.log(n) * Math.LOG10E);
	    return x - (Number('1e' + x) > n);
	}

	/**
	 * A merge of the Intl.{Constructor}.supportedLocalesOf functions
	 * To make life easier, the function should be bound to the constructor's internal
	 * properties object.
	 */
	function supportedLocalesOf(locales) {
	    /*jshint validthis:true */

	    // Bound functions only have the `this` value altered if being used as a constructor,
	    // this lets us imitate a native function that has no constructor
	    if (!hop.call(this, '[[availableLocales]]'))
	        throw new TypeError('supportedLocalesOf() is not a constructor');

	    var
	    // Create an object whose props can be used to restore the values of RegExp props
	        regexpState = createRegExpRestore(),

	    // 1. If options is not provided, then let options be undefined.
	        options = arguments[1],

	    // 2. Let availableLocales be the value of the [[availableLocales]] internal
	    //    property of the standard built-in object that is the initial value of
	    //    Intl.NumberFormat.

	        availableLocales = this['[[availableLocales]]'],

	    // 3. Let requestedLocales be the result of calling the CanonicalizeLocaleList
	    //    abstract operation (defined in 9.2.1) with argument locales.
	        requestedLocales = CanonicalizeLocaleList(locales);

	    // Restore the RegExp properties
	    regexpState.exp.test(regexpState.input);

	    // 4. Return the result of calling the SupportedLocales abstract operation
	    //    (defined in 9.2.8) with arguments availableLocales, requestedLocales,
	    //    and options.
	    return SupportedLocales(availableLocales, requestedLocales, options);
	}

	/**
	 * Returns a string for a date component, resolved using multiple inheritance as specified
	 * as specified in the Unicode Technical Standard 35.
	 */
	function resolveDateString(data, ca, component, width, key) {
	    // From http://www.unicode.org/reports/tr35/tr35.html#Multiple_Inheritance:
	    // 'In clearly specified instances, resources may inherit from within the same locale.
	    //  For example, ... the Buddhist calendar inherits from the Gregorian calendar.'
	    var obj = data[ca] && data[ca][component]
	                ? data[ca][component]
	                : data.gregory[component],

	        // "sideways" inheritance resolves strings when a key doesn't exist
	        alts = {
	            narrow: ['short', 'long'],
	            short:  ['long', 'narrow'],
	            long:   ['short', 'narrow']
	        },

	        //
	        resolved = hop.call(obj, width)
	                  ? obj[width]
	                  : hop.call(obj, alts[width][0])
	                      ? obj[alts[width][0]]
	                      : obj[alts[width][1]];

	    // `key` wouldn't be specified for components 'dayPeriods'
	    return key != null ? resolved[key] : resolved;
	}

	/**
	 * A map that doesn't contain Object in its prototype chain
	 */
	Record.prototype = objCreate(null);
	function Record (obj) {
	    // Copy only own properties over unless this object is already a Record instance
	    for (var k in obj) {
	        if (obj instanceof Record || hop.call(obj, k))
	            defineProperty(this, k, { value: obj[k], enumerable: true, writable: true, configurable: true });
	    }
	}

	/**
	 * An ordered list
	 */
	List.prototype = objCreate(null);
	function List() {
	    defineProperty(this, 'length', { writable:true, value: 0 });

	    if (arguments.length)
	        arrPush.apply(this, arrSlice.call(arguments));
	}

	/**
	 * Constructs a regular expression to restore tainted RegExp properties
	 */
	function createRegExpRestore () {
	    var esc = /[.?*+^$[\]\\(){}|-]/g,
	        lm  = RegExp.lastMatch,
	        ml  = RegExp.multiline ? 'm' : '',
	        ret = { input: RegExp.input },
	        reg = new List(),
	        has = false,
	        cap = {};

	    // Create a snapshot of all the 'captured' properties
	    for (var i = 1; i <= 9; i++)
	        has = (cap['$'+i] = RegExp['$'+i]) || has;

	    // Now we've snapshotted some properties, escape the lastMatch string
	    lm = lm.replace(esc, '\\$&');

	    // If any of the captured strings were non-empty, iterate over them all
	    if (has) {
	        for (var i = 1; i <= 9; i++) {
	            var m = cap['$'+i];

	            // If it's empty, add an empty capturing group
	            if (!m)
	                lm = '()' + lm;

	            // Else find the string in lm and escape & wrap it to capture it
	            else {
	                m = m.replace(esc, '\\$&');
	                lm = lm.replace(m, '(' + m + ')');
	            }

	            // Push it to the reg and chop lm to make sure further groups come after
	            arrPush.call(reg, lm.slice(0, lm.indexOf('(') + 1));
	            lm = lm.slice(lm.indexOf('(') + 1);
	        }
	    }

	    // Create the regular expression that will reconstruct the RegExp properties
	    ret.exp = new RegExp(arrJoin.call(reg, '') + lm, ml);

	    return ret;
	}

	/**
	 * Convert only a-z to uppercase as per section 6.1 of the spec
	 */
	function toLatinUpperCase (str) {
	    var i = str.length;

	    while (i--) {
	        var ch = str.charAt(i);

	        if (ch >= "a" && ch <= "z")
	            str = str.slice(0, i) + ch.toUpperCase() + str.slice(i+1);
	    }

	    return str;
	}

	/**
	 * Mimics ES5's abstract ToObject() function
	 */
	function toObject (arg) {
	    if (arg == null)
	        throw new TypeError('Cannot convert null or undefined to object');

	    return Object(arg);
	}

	/**
	 * Returns "internal" properties for an object
	 */
	function getInternalProperties (obj) {
	    if (hop.call(obj, '__getInternalProperties'))
	        return obj.__getInternalProperties(secret);
	    else
	        return objCreate(null);
	}

	return Intl;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports.ActionMethods = __webpack_require__(69);

	exports.ListenerMethods = __webpack_require__(70);

	exports.PublisherMethods = __webpack_require__(71);

	exports.StoreMethods = __webpack_require__(72);

	exports.createAction = __webpack_require__(73);

	exports.createStore = __webpack_require__(74);

	exports.connect = __webpack_require__(75);

	exports.connectFilter = __webpack_require__(76);

	exports.ListenerMixin = __webpack_require__(77);

	exports.listenTo = __webpack_require__(78);

	exports.listenToMany = __webpack_require__(79);


	var maker = __webpack_require__(80).staticJoinCreator;

	exports.joinTrailing = exports.all = maker("last"); // Reflux.all alias for backward compatibility

	exports.joinLeading = maker("first");

	exports.joinStrict = maker("strict");

	exports.joinConcat = maker("all");

	var _ = __webpack_require__(81);

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
	    var _ = __webpack_require__(81);
	    exports.EventEmitter = _.EventEmitter = ctx;
	};


	/**
	 * Sets the Promise library that Reflux uses
	 */
	exports.setPromise = function(ctx) {
	    var _ = __webpack_require__(81);
	    exports.Promise = _.Promise = ctx;
	};


	/**
	 * Sets the Promise factory that creates new promises
	 * @param {Function} factory has the signature `function(resolver) { return [new Promise]; }`
	 */
	exports.setPromiseFactory = function(factory) {
	    var _ = __webpack_require__(81);
	    _.createPromise = factory;
	};


	/**
	 * Sets the method used for deferring actions and stores
	 */
	exports.nextTick = function(nextTick) {
	    var _ = __webpack_require__(81);
	    _.nextTick = nextTick;
	};

	/**
	 * Provides the set of created actions and stores for introspection
	 */
	exports.__keep = __webpack_require__(82);

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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"locale": "en-US",
		"date": {
			"ca": [
				"gregory",
				"buddhist",
				"chinese",
				"coptic",
				"ethioaa",
				"ethiopic",
				"generic",
				"hebrew",
				"indian",
				"islamic",
				"japanese",
				"persian",
				"roc"
			],
			"hourNo0": true,
			"hour12": true,
			"formats": [
				{
					"weekday": "long",
					"month": "long",
					"day": "numeric",
					"year": "numeric",
					"hour": "numeric",
					"minute": "2-digit",
					"second": "2-digit",
					"pattern": "{weekday}, {month} {day}, {year}, {hour}:{minute}:{second}",
					"pattern12": "{weekday}, {month} {day}, {year}, {hour}:{minute}:{second} {ampm}"
				},
				{
					"weekday": "long",
					"month": "long",
					"day": "numeric",
					"year": "numeric",
					"pattern": "{weekday}, {month} {day}, {year}"
				},
				{
					"month": "long",
					"day": "numeric",
					"year": "numeric",
					"pattern": "{month} {day}, {year}"
				},
				{
					"month": "numeric",
					"day": "numeric",
					"year": "numeric",
					"pattern": "{month}/{day}/{year}"
				},
				{
					"month": "numeric",
					"year": "numeric",
					"pattern": "{month}/{year}"
				},
				{
					"month": "long",
					"year": "numeric",
					"pattern": "{month} {year}"
				},
				{
					"month": "long",
					"day": "numeric",
					"pattern": "{month} {day}"
				},
				{
					"month": "numeric",
					"day": "numeric",
					"pattern": "{month}/{day}"
				},
				{
					"hour": "numeric",
					"minute": "2-digit",
					"second": "2-digit",
					"pattern": "{hour}:{minute}:{second}",
					"pattern12": "{hour}:{minute}:{second} {ampm}"
				},
				{
					"hour": "numeric",
					"minute": "2-digit",
					"pattern": "{hour}:{minute}",
					"pattern12": "{hour}:{minute} {ampm}"
				}
			],
			"calendars": {
				"buddhist": {
					"eras": {
						"short": [
							"BE"
						]
					}
				},
				"chinese": {
					"months": {
						"short": [
							"Mo1",
							"Mo2",
							"Mo3",
							"Mo4",
							"Mo5",
							"Mo6",
							"Mo7",
							"Mo8",
							"Mo9",
							"Mo10",
							"Mo11",
							"Mo12"
						],
						"long": [
							"Month1",
							"Month2",
							"Month3",
							"Month4",
							"Month5",
							"Month6",
							"Month7",
							"Month8",
							"Month9",
							"Month10",
							"Month11",
							"Month12"
						]
					}
				},
				"coptic": {
					"months": {
						"long": [
							"Tout",
							"Baba",
							"Hator",
							"Kiahk",
							"Toba",
							"Amshir",
							"Baramhat",
							"Baramouda",
							"Bashans",
							"Paona",
							"Epep",
							"Mesra",
							"Nasie"
						]
					},
					"eras": {
						"short": [
							"ERA0",
							"ERA1"
						]
					}
				},
				"ethiopic": {
					"months": {
						"long": [
							"Meskerem",
							"Tekemt",
							"Hedar",
							"Tahsas",
							"Ter",
							"Yekatit",
							"Megabit",
							"Miazia",
							"Genbot",
							"Sene",
							"Hamle",
							"Nehasse",
							"Pagumen"
						]
					},
					"eras": {
						"short": [
							"ERA0",
							"ERA1"
						]
					}
				},
				"ethioaa": {
					"eras": {
						"short": [
							"ERA0"
						]
					}
				},
				"generic": {
					"months": {
						"long": [
							"M01",
							"M02",
							"M03",
							"M04",
							"M05",
							"M06",
							"M07",
							"M08",
							"M09",
							"M10",
							"M11",
							"M12"
						]
					},
					"eras": {
						"short": [
							"ERA0",
							"ERA1"
						]
					}
				},
				"gregory": {
					"months": {
						"short": [
							"Jan",
							"Feb",
							"Mar",
							"Apr",
							"May",
							"Jun",
							"Jul",
							"Aug",
							"Sep",
							"Oct",
							"Nov",
							"Dec"
						],
						"long": [
							"January",
							"February",
							"March",
							"April",
							"May",
							"June",
							"July",
							"August",
							"September",
							"October",
							"November",
							"December"
						]
					},
					"days": {
						"narrow": [
							"Su",
							"Mo",
							"Tu",
							"We",
							"Th",
							"Fr",
							"Sa"
						],
						"short": [
							"Sun",
							"Mon",
							"Tue",
							"Wed",
							"Thu",
							"Fri",
							"Sat"
						],
						"long": [
							"Sunday",
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday"
						]
					},
					"eras": {
						"narrow": [
							"B",
							"A"
						],
						"short": [
							"BC",
							"AD",
							"BCE",
							"CE"
						],
						"long": [
							"Before Christ",
							"Anno Domini",
							"Before Common Era",
							"Common Era"
						]
					},
					"dayPeriods": {
						"am": "AM",
						"pm": "PM"
					}
				},
				"hebrew": {
					"months": {
						"long": [
							"Tishri",
							"Heshvan",
							"Kislev",
							"Tevet",
							"Shevat",
							"Adar I",
							"Adar",
							"Nisan",
							"Iyar",
							"Sivan",
							"Tamuz",
							"Av",
							"Elul",
							"Adar II"
						]
					},
					"eras": {
						"short": [
							"AM"
						]
					}
				},
				"indian": {
					"months": {
						"long": [
							"Chaitra",
							"Vaisakha",
							"Jyaistha",
							"Asadha",
							"Sravana",
							"Bhadra",
							"Asvina",
							"Kartika",
							"Agrahayana",
							"Pausa",
							"Magha",
							"Phalguna"
						]
					},
					"eras": {
						"short": [
							"Saka"
						]
					}
				},
				"islamic": {
					"months": {
						"short": [
							"Muh.",
							"Saf.",
							"Rab. I",
							"Rab. II",
							"Jum. I",
							"Jum. II",
							"Raj.",
							"Sha.",
							"Ram.",
							"Shaw.",
							"Dhuʻl-Q.",
							"Dhuʻl-H."
						],
						"long": [
							"Muharram",
							"Safar",
							"Rabiʻ I",
							"Rabiʻ II",
							"Jumada I",
							"Jumada II",
							"Rajab",
							"Shaʻban",
							"Ramadan",
							"Shawwal",
							"Dhuʻl-Qiʻdah",
							"Dhuʻl-Hijjah"
						]
					},
					"eras": {
						"short": [
							"AH"
						]
					}
				},
				"japanese": {
					"eras": {
						"narrow": [
							"Taika (645-650)",
							"Hakuchi (650-671)",
							"Hakuhō (672-686)",
							"Shuchō (686-701)",
							"Taihō (701-704)",
							"Keiun (704-708)",
							"Wadō (708-715)",
							"Reiki (715-717)",
							"Yōrō (717-724)",
							"Jinki (724-729)",
							"Tempyō (729-749)",
							"Tempyō-kampō (749-749)",
							"Tempyō-shōhō (749-757)",
							"Tempyō-hōji (757-765)",
							"Temphō-jingo (765-767)",
							"Jingo-keiun (767-770)",
							"Hōki (770-780)",
							"Ten-ō (781-782)",
							"Enryaku (782-806)",
							"Daidō (806-810)",
							"Kōnin (810-824)",
							"Tenchō (824-834)",
							"Jōwa (834-848)",
							"Kajō (848-851)",
							"Ninju (851-854)",
							"Saiko (854-857)",
							"Tennan (857-859)",
							"Jōgan (859-877)",
							"Genkei (877-885)",
							"Ninna (885-889)",
							"Kampyō (889-898)",
							"Shōtai (898-901)",
							"Engi (901-923)",
							"Enchō (923-931)",
							"Shōhei (931-938)",
							"Tengyō (938-947)",
							"Tenryaku (947-957)",
							"Tentoku (957-961)",
							"Ōwa (961-964)",
							"Kōhō (964-968)",
							"Anna (968-970)",
							"Tenroku (970-973)",
							"Ten-en (973-976)",
							"Jōgen (976-978)",
							"Tengen (978-983)",
							"Eikan (983-985)",
							"Kanna (985-987)",
							"Ei-en (987-989)",
							"Eiso (989-990)",
							"Shōryaku (990-995)",
							"Chōtoku (995-999)",
							"Chōhō (999-1004)",
							"Kankō (1004-1012)",
							"Chōwa (1012-1017)",
							"Kannin (1017-1021)",
							"Jian (1021-1024)",
							"Manju (1024-1028)",
							"Chōgen (1028-1037)",
							"Chōryaku (1037-1040)",
							"Chōkyū (1040-1044)",
							"Kantoku (1044-1046)",
							"Eishō (1046-1053)",
							"Tengi (1053-1058)",
							"Kōhei (1058-1065)",
							"Jiryaku (1065-1069)",
							"Enkyū (1069-1074)",
							"Shōho (1074-1077)",
							"Shōryaku (1077-1081)",
							"Eiho (1081-1084)",
							"Ōtoku (1084-1087)",
							"Kanji (1087-1094)",
							"Kaho (1094-1096)",
							"Eichō (1096-1097)",
							"Shōtoku (1097-1099)",
							"Kōwa (1099-1104)",
							"Chōji (1104-1106)",
							"Kashō (1106-1108)",
							"Tennin (1108-1110)",
							"Ten-ei (1110-1113)",
							"Eikyū (1113-1118)",
							"Gen-ei (1118-1120)",
							"Hoan (1120-1124)",
							"Tenji (1124-1126)",
							"Daiji (1126-1131)",
							"Tenshō (1131-1132)",
							"Chōshō (1132-1135)",
							"Hoen (1135-1141)",
							"Eiji (1141-1142)",
							"Kōji (1142-1144)",
							"Tenyō (1144-1145)",
							"Kyūan (1145-1151)",
							"Ninpei (1151-1154)",
							"Kyūju (1154-1156)",
							"Hogen (1156-1159)",
							"Heiji (1159-1160)",
							"Eiryaku (1160-1161)",
							"Ōho (1161-1163)",
							"Chōkan (1163-1165)",
							"Eiman (1165-1166)",
							"Nin-an (1166-1169)",
							"Kaō (1169-1171)",
							"Shōan (1171-1175)",
							"Angen (1175-1177)",
							"Jishō (1177-1181)",
							"Yōwa (1181-1182)",
							"Juei (1182-1184)",
							"Genryuku (1184-1185)",
							"Bunji (1185-1190)",
							"Kenkyū (1190-1199)",
							"Shōji (1199-1201)",
							"Kennin (1201-1204)",
							"Genkyū (1204-1206)",
							"Ken-ei (1206-1207)",
							"Shōgen (1207-1211)",
							"Kenryaku (1211-1213)",
							"Kenpō (1213-1219)",
							"Shōkyū (1219-1222)",
							"Jōō (1222-1224)",
							"Gennin (1224-1225)",
							"Karoku (1225-1227)",
							"Antei (1227-1229)",
							"Kanki (1229-1232)",
							"Jōei (1232-1233)",
							"Tempuku (1233-1234)",
							"Bunryaku (1234-1235)",
							"Katei (1235-1238)",
							"Ryakunin (1238-1239)",
							"En-ō (1239-1240)",
							"Ninji (1240-1243)",
							"Kangen (1243-1247)",
							"Hōji (1247-1249)",
							"Kenchō (1249-1256)",
							"Kōgen (1256-1257)",
							"Shōka (1257-1259)",
							"Shōgen (1259-1260)",
							"Bun-ō (1260-1261)",
							"Kōchō (1261-1264)",
							"Bun-ei (1264-1275)",
							"Kenji (1275-1278)",
							"Kōan (1278-1288)",
							"Shōō (1288-1293)",
							"Einin (1293-1299)",
							"Shōan (1299-1302)",
							"Kengen (1302-1303)",
							"Kagen (1303-1306)",
							"Tokuji (1306-1308)",
							"Enkei (1308-1311)",
							"Ōchō (1311-1312)",
							"Shōwa (1312-1317)",
							"Bunpō (1317-1319)",
							"Genō (1319-1321)",
							"Genkyō (1321-1324)",
							"Shōchū (1324-1326)",
							"Kareki (1326-1329)",
							"Gentoku (1329-1331)",
							"Genkō (1331-1334)",
							"Kemmu (1334-1336)",
							"Engen (1336-1340)",
							"Kōkoku (1340-1346)",
							"Shōhei (1346-1370)",
							"Kentoku (1370-1372)",
							"Bunchũ (1372-1375)",
							"Tenju (1375-1379)",
							"Kōryaku (1379-1381)",
							"Kōwa (1381-1384)",
							"Genchũ (1384-1392)",
							"Meitoku (1384-1387)",
							"Kakei (1387-1389)",
							"Kōō (1389-1390)",
							"Meitoku (1390-1394)",
							"Ōei (1394-1428)",
							"Shōchō (1428-1429)",
							"Eikyō (1429-1441)",
							"Kakitsu (1441-1444)",
							"Bun-an (1444-1449)",
							"Hōtoku (1449-1452)",
							"Kyōtoku (1452-1455)",
							"Kōshō (1455-1457)",
							"Chōroku (1457-1460)",
							"Kanshō (1460-1466)",
							"Bunshō (1466-1467)",
							"Ōnin (1467-1469)",
							"Bunmei (1469-1487)",
							"Chōkyō (1487-1489)",
							"Entoku (1489-1492)",
							"Meiō (1492-1501)",
							"Bunki (1501-1504)",
							"Eishō (1504-1521)",
							"Taiei (1521-1528)",
							"Kyōroku (1528-1532)",
							"Tenmon (1532-1555)",
							"Kōji (1555-1558)",
							"Eiroku (1558-1570)",
							"Genki (1570-1573)",
							"Tenshō (1573-1592)",
							"Bunroku (1592-1596)",
							"Keichō (1596-1615)",
							"Genwa (1615-1624)",
							"Kan-ei (1624-1644)",
							"Shōho (1644-1648)",
							"Keian (1648-1652)",
							"Shōō (1652-1655)",
							"Meiryaku (1655-1658)",
							"Manji (1658-1661)",
							"Kanbun (1661-1673)",
							"Enpō (1673-1681)",
							"Tenwa (1681-1684)",
							"Jōkyō (1684-1688)",
							"Genroku (1688-1704)",
							"Hōei (1704-1711)",
							"Shōtoku (1711-1716)",
							"Kyōhō (1716-1736)",
							"Genbun (1736-1741)",
							"Kanpō (1741-1744)",
							"Enkyō (1744-1748)",
							"Kan-en (1748-1751)",
							"Hōryaku (1751-1764)",
							"Meiwa (1764-1772)",
							"An-ei (1772-1781)",
							"Tenmei (1781-1789)",
							"Kansei (1789-1801)",
							"Kyōwa (1801-1804)",
							"Bunka (1804-1818)",
							"Bunsei (1818-1830)",
							"Tenpō (1830-1844)",
							"Kōka (1844-1848)",
							"Kaei (1848-1854)",
							"Ansei (1854-1860)",
							"Man-en (1860-1861)",
							"Bunkyū (1861-1864)",
							"Genji (1864-1865)",
							"Keiō (1865-1868)",
							"M",
							"T",
							"S",
							"H"
						],
						"short": [
							"Taika (645-650)",
							"Hakuchi (650-671)",
							"Hakuhō (672-686)",
							"Shuchō (686-701)",
							"Taihō (701-704)",
							"Keiun (704-708)",
							"Wadō (708-715)",
							"Reiki (715-717)",
							"Yōrō (717-724)",
							"Jinki (724-729)",
							"Tempyō (729-749)",
							"Tempyō-kampō (749-749)",
							"Tempyō-shōhō (749-757)",
							"Tempyō-hōji (757-765)",
							"Temphō-jingo (765-767)",
							"Jingo-keiun (767-770)",
							"Hōki (770-780)",
							"Ten-ō (781-782)",
							"Enryaku (782-806)",
							"Daidō (806-810)",
							"Kōnin (810-824)",
							"Tenchō (824-834)",
							"Jōwa (834-848)",
							"Kajō (848-851)",
							"Ninju (851-854)",
							"Saiko (854-857)",
							"Tennan (857-859)",
							"Jōgan (859-877)",
							"Genkei (877-885)",
							"Ninna (885-889)",
							"Kampyō (889-898)",
							"Shōtai (898-901)",
							"Engi (901-923)",
							"Enchō (923-931)",
							"Shōhei (931-938)",
							"Tengyō (938-947)",
							"Tenryaku (947-957)",
							"Tentoku (957-961)",
							"Ōwa (961-964)",
							"Kōhō (964-968)",
							"Anna (968-970)",
							"Tenroku (970-973)",
							"Ten-en (973-976)",
							"Jōgen (976-978)",
							"Tengen (978-983)",
							"Eikan (983-985)",
							"Kanna (985-987)",
							"Ei-en (987-989)",
							"Eiso (989-990)",
							"Shōryaku (990-995)",
							"Chōtoku (995-999)",
							"Chōhō (999-1004)",
							"Kankō (1004-1012)",
							"Chōwa (1012-1017)",
							"Kannin (1017-1021)",
							"Jian (1021-1024)",
							"Manju (1024-1028)",
							"Chōgen (1028-1037)",
							"Chōryaku (1037-1040)",
							"Chōkyū (1040-1044)",
							"Kantoku (1044-1046)",
							"Eishō (1046-1053)",
							"Tengi (1053-1058)",
							"Kōhei (1058-1065)",
							"Jiryaku (1065-1069)",
							"Enkyū (1069-1074)",
							"Shōho (1074-1077)",
							"Shōryaku (1077-1081)",
							"Eiho (1081-1084)",
							"Ōtoku (1084-1087)",
							"Kanji (1087-1094)",
							"Kaho (1094-1096)",
							"Eichō (1096-1097)",
							"Shōtoku (1097-1099)",
							"Kōwa (1099-1104)",
							"Chōji (1104-1106)",
							"Kashō (1106-1108)",
							"Tennin (1108-1110)",
							"Ten-ei (1110-1113)",
							"Eikyū (1113-1118)",
							"Gen-ei (1118-1120)",
							"Hoan (1120-1124)",
							"Tenji (1124-1126)",
							"Daiji (1126-1131)",
							"Tenshō (1131-1132)",
							"Chōshō (1132-1135)",
							"Hoen (1135-1141)",
							"Eiji (1141-1142)",
							"Kōji (1142-1144)",
							"Tenyō (1144-1145)",
							"Kyūan (1145-1151)",
							"Ninpei (1151-1154)",
							"Kyūju (1154-1156)",
							"Hogen (1156-1159)",
							"Heiji (1159-1160)",
							"Eiryaku (1160-1161)",
							"Ōho (1161-1163)",
							"Chōkan (1163-1165)",
							"Eiman (1165-1166)",
							"Nin-an (1166-1169)",
							"Kaō (1169-1171)",
							"Shōan (1171-1175)",
							"Angen (1175-1177)",
							"Jishō (1177-1181)",
							"Yōwa (1181-1182)",
							"Juei (1182-1184)",
							"Genryuku (1184-1185)",
							"Bunji (1185-1190)",
							"Kenkyū (1190-1199)",
							"Shōji (1199-1201)",
							"Kennin (1201-1204)",
							"Genkyū (1204-1206)",
							"Ken-ei (1206-1207)",
							"Shōgen (1207-1211)",
							"Kenryaku (1211-1213)",
							"Kenpō (1213-1219)",
							"Shōkyū (1219-1222)",
							"Jōō (1222-1224)",
							"Gennin (1224-1225)",
							"Karoku (1225-1227)",
							"Antei (1227-1229)",
							"Kanki (1229-1232)",
							"Jōei (1232-1233)",
							"Tempuku (1233-1234)",
							"Bunryaku (1234-1235)",
							"Katei (1235-1238)",
							"Ryakunin (1238-1239)",
							"En-ō (1239-1240)",
							"Ninji (1240-1243)",
							"Kangen (1243-1247)",
							"Hōji (1247-1249)",
							"Kenchō (1249-1256)",
							"Kōgen (1256-1257)",
							"Shōka (1257-1259)",
							"Shōgen (1259-1260)",
							"Bun-ō (1260-1261)",
							"Kōchō (1261-1264)",
							"Bun-ei (1264-1275)",
							"Kenji (1275-1278)",
							"Kōan (1278-1288)",
							"Shōō (1288-1293)",
							"Einin (1293-1299)",
							"Shōan (1299-1302)",
							"Kengen (1302-1303)",
							"Kagen (1303-1306)",
							"Tokuji (1306-1308)",
							"Enkei (1308-1311)",
							"Ōchō (1311-1312)",
							"Shōwa (1312-1317)",
							"Bunpō (1317-1319)",
							"Genō (1319-1321)",
							"Genkyō (1321-1324)",
							"Shōchū (1324-1326)",
							"Kareki (1326-1329)",
							"Gentoku (1329-1331)",
							"Genkō (1331-1334)",
							"Kemmu (1334-1336)",
							"Engen (1336-1340)",
							"Kōkoku (1340-1346)",
							"Shōhei (1346-1370)",
							"Kentoku (1370-1372)",
							"Bunchū (1372-1375)",
							"Tenju (1375-1379)",
							"Kōryaku (1379-1381)",
							"Kōwa (1381-1384)",
							"Genchū (1384-1392)",
							"Meitoku (1384-1387)",
							"Kakei (1387-1389)",
							"Kōō (1389-1390)",
							"Meitoku (1390-1394)",
							"Ōei (1394-1428)",
							"Shōchō (1428-1429)",
							"Eikyō (1429-1441)",
							"Kakitsu (1441-1444)",
							"Bun-an (1444-1449)",
							"Hōtoku (1449-1452)",
							"Kyōtoku (1452-1455)",
							"Kōshō (1455-1457)",
							"Chōroku (1457-1460)",
							"Kanshō (1460-1466)",
							"Bunshō (1466-1467)",
							"Ōnin (1467-1469)",
							"Bunmei (1469-1487)",
							"Chōkyō (1487-1489)",
							"Entoku (1489-1492)",
							"Meiō (1492-1501)",
							"Bunki (1501-1504)",
							"Eishō (1504-1521)",
							"Taiei (1521-1528)",
							"Kyōroku (1528-1532)",
							"Tenmon (1532-1555)",
							"Kōji (1555-1558)",
							"Eiroku (1558-1570)",
							"Genki (1570-1573)",
							"Tenshō (1573-1592)",
							"Bunroku (1592-1596)",
							"Keichō (1596-1615)",
							"Genwa (1615-1624)",
							"Kan-ei (1624-1644)",
							"Shōho (1644-1648)",
							"Keian (1648-1652)",
							"Shōō (1652-1655)",
							"Meiryaku (1655-1658)",
							"Manji (1658-1661)",
							"Kanbun (1661-1673)",
							"Enpō (1673-1681)",
							"Tenwa (1681-1684)",
							"Jōkyō (1684-1688)",
							"Genroku (1688-1704)",
							"Hōei (1704-1711)",
							"Shōtoku (1711-1716)",
							"Kyōhō (1716-1736)",
							"Genbun (1736-1741)",
							"Kanpō (1741-1744)",
							"Enkyō (1744-1748)",
							"Kan-en (1748-1751)",
							"Hōryaku (1751-1764)",
							"Meiwa (1764-1772)",
							"An-ei (1772-1781)",
							"Tenmei (1781-1789)",
							"Kansei (1789-1801)",
							"Kyōwa (1801-1804)",
							"Bunka (1804-1818)",
							"Bunsei (1818-1830)",
							"Tenpō (1830-1844)",
							"Kōka (1844-1848)",
							"Kaei (1848-1854)",
							"Ansei (1854-1860)",
							"Man-en (1860-1861)",
							"Bunkyū (1861-1864)",
							"Genji (1864-1865)",
							"Keiō (1865-1868)",
							"Meiji",
							"Taishō",
							"Shōwa",
							"Heisei"
						]
					}
				},
				"persian": {
					"months": {
						"long": [
							"Farvardin",
							"Ordibehesht",
							"Khordad",
							"Tir",
							"Mordad",
							"Shahrivar",
							"Mehr",
							"Aban",
							"Azar",
							"Dey",
							"Bahman",
							"Esfand"
						]
					},
					"eras": {
						"short": [
							"AP"
						]
					}
				},
				"roc": {
					"eras": {
						"short": [
							"Before R.O.C.",
							"Minguo"
						]
					}
				}
			}
		},
		"number": {
			"nu": [
				"latn"
			],
			"patterns": {
				"decimal": {
					"positivePattern": "{number}",
					"negativePattern": "-{number}"
				},
				"currency": {
					"positivePattern": "{currency}{number}",
					"negativePattern": "-{currency}{number}"
				},
				"percent": {
					"positivePattern": "{number}%",
					"negativePattern": "-{number}%"
				}
			},
			"symbols": {
				"latn": {
					"decimal": ".",
					"group": ",",
					"nan": "NaN",
					"percent": "%",
					"infinity": "∞"
				}
			},
			"currencies": {
				"AUD": "A$",
				"BRL": "R$",
				"CAD": "CA$",
				"CNY": "CN¥",
				"EUR": "€",
				"GBP": "£",
				"HKD": "HK$",
				"ILS": "₪",
				"INR": "₹",
				"JPY": "¥",
				"KRW": "₩",
				"MXN": "MX$",
				"NZD": "NZ$",
				"THB": "฿",
				"TWD": "NT$",
				"USD": "$",
				"VND": "₫",
				"XAF": "FCFA",
				"XCD": "EC$",
				"XOF": "CFA",
				"XPF": "CFPF"
			}
		}
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"locale": "pt-BR",
		"date": {
			"ca": [
				"gregory",
				"buddhist",
				"chinese",
				"coptic",
				"ethioaa",
				"ethiopic",
				"generic",
				"hebrew",
				"indian",
				"islamic",
				"japanese",
				"persian",
				"roc"
			],
			"hourNo0": true,
			"hour12": false,
			"formats": [
				{
					"weekday": "long",
					"day": "numeric",
					"month": "long",
					"year": "numeric",
					"hour": "numeric",
					"minute": "2-digit",
					"second": "2-digit",
					"pattern": "{weekday}, {day} de {month} de {year} {hour}:{minute}:{second}",
					"pattern12": "{weekday}, {day} de {month} de {year} {hour}:{minute}:{second} {ampm}"
				},
				{
					"weekday": "long",
					"day": "numeric",
					"month": "long",
					"year": "numeric",
					"pattern": "{weekday}, {day} de {month} de {year}"
				},
				{
					"day": "numeric",
					"month": "long",
					"year": "numeric",
					"pattern": "{day} de {month} de {year}"
				},
				{
					"day": "2-digit",
					"month": "2-digit",
					"year": "numeric",
					"pattern": "{day}/{month}/{year}"
				},
				{
					"month": "2-digit",
					"year": "numeric",
					"pattern": "{month}/{year}"
				},
				{
					"month": "long",
					"year": "numeric",
					"pattern": "{month} de {year}"
				},
				{
					"day": "numeric",
					"month": "long",
					"pattern": "{day} de {month}"
				},
				{
					"day": "numeric",
					"month": "numeric",
					"pattern": "{day}/{month}"
				},
				{
					"hour": "numeric",
					"minute": "2-digit",
					"second": "2-digit",
					"pattern": "{hour}:{minute}:{second}",
					"pattern12": "{hour}:{minute}:{second} {ampm}"
				},
				{
					"hour": "numeric",
					"minute": "2-digit",
					"pattern": "{hour}:{minute}",
					"pattern12": "{hour}:{minute} {ampm}"
				}
			],
			"calendars": {
				"buddhist": {
					"eras": {
						"short": [
							"BE"
						]
					}
				},
				"chinese": {
					"months": {
						"narrow": [
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
							"10",
							"11",
							"12"
						],
						"short": [
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
							"10",
							"11",
							"12"
						],
						"long": [
							"Mês 1",
							"Mês 2",
							"Mês 3",
							"Mês 4",
							"Mês 5",
							"Mês 6",
							"Mês 7",
							"Mês 8",
							"Mês 9",
							"Mês 10",
							"Mês 11",
							"Mês 12"
						]
					}
				},
				"coptic": {
					"months": {
						"narrow": [
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
							"10",
							"11",
							"12",
							"13"
						],
						"short": [
							"Tout",
							"Baba",
							"Hator",
							"Kiahk",
							"Toba",
							"Amshir",
							"Baramhat",
							"Baramouda",
							"Bashans",
							"Paona",
							"Epep",
							"Mesra",
							"Nasie"
						],
						"long": [
							"Tout",
							"Baba",
							"Hator",
							"Kiahk",
							"Toba",
							"Amshir",
							"Baramhat",
							"Baramouda",
							"Bashans",
							"Paona",
							"Epep",
							"Mesra",
							"Nasie"
						]
					},
					"eras": {
						"short": [
							"ERA0",
							"ERA1"
						]
					}
				},
				"ethiopic": {
					"months": {
						"narrow": [
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
							"10",
							"11",
							"12",
							"13"
						],
						"short": [
							"Meskerem",
							"Tekemt",
							"Hedar",
							"Tahsas",
							"Ter",
							"Yekatit",
							"Megabit",
							"Miazia",
							"Genbot",
							"Sene",
							"Hamle",
							"Nehasse",
							"Pagumen"
						],
						"long": [
							"Meskerem",
							"Tekemt",
							"Hedar",
							"Tahsas",
							"Ter",
							"Yekatit",
							"Megabit",
							"Miazia",
							"Genbot",
							"Sene",
							"Hamle",
							"Nehasse",
							"Pagumen"
						]
					},
					"eras": {
						"short": [
							"ERA0",
							"ERA1"
						]
					}
				},
				"ethioaa": {
					"eras": {
						"short": [
							"ERA0"
						]
					}
				},
				"generic": {
					"months": {
						"long": [
							"M01",
							"M02",
							"M03",
							"M04",
							"M05",
							"M06",
							"M07",
							"M08",
							"M09",
							"M10",
							"M11",
							"M12"
						]
					},
					"eras": {
						"short": [
							"ERA0",
							"ERA1"
						]
					}
				},
				"gregory": {
					"months": {
						"narrow": [
							"J",
							"F",
							"M",
							"A",
							"M",
							"J",
							"J",
							"A",
							"S",
							"O",
							"N",
							"D"
						],
						"short": [
							"jan",
							"fev",
							"mar",
							"abr",
							"mai",
							"jun",
							"jul",
							"ago",
							"set",
							"out",
							"nov",
							"dez"
						],
						"long": [
							"janeiro",
							"fevereiro",
							"março",
							"abril",
							"maio",
							"junho",
							"julho",
							"agosto",
							"setembro",
							"outubro",
							"novembro",
							"dezembro"
						]
					},
					"days": {
						"narrow": [
							"dom",
							"seg",
							"ter",
							"qua",
							"qui",
							"sex",
							"sáb"
						],
						"short": [
							"dom",
							"seg",
							"ter",
							"qua",
							"qui",
							"sex",
							"sáb"
						],
						"long": [
							"domingo",
							"segunda-feira",
							"terça-feira",
							"quarta-feira",
							"quinta-feira",
							"sexta-feira",
							"sábado"
						]
					},
					"eras": {
						"short": [
							"a.C.",
							"d.C."
						],
						"long": [
							"Antes de Cristo",
							"Ano do Senhor"
						]
					},
					"dayPeriods": {
						"am": "AM",
						"pm": "PM"
					}
				},
				"hebrew": {
					"months": {
						"short": [
							"Tishri",
							"Heshvan",
							"Kislev",
							"Tevet",
							"Shevat",
							"Adar I",
							"Adar",
							"Nisan",
							"Iyar",
							"Sivan",
							"Tamuz",
							"Av",
							"Elul",
							"Adar II"
						],
						"long": [
							"Tishri",
							"Heshvan",
							"Kislev",
							"Tevet",
							"Shevat",
							"Adar I",
							"Adar",
							"Nisan",
							"Iyar",
							"Sivan",
							"Tamuz",
							"Av",
							"Elul",
							"Adar II"
						]
					},
					"eras": {
						"short": [
							"AM"
						]
					}
				},
				"indian": {
					"months": {
						"narrow": [
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
							"10",
							"11",
							"12"
						],
						"short": [
							"Chaitra",
							"Vaisakha",
							"Jyaistha",
							"Asadha",
							"Sravana",
							"Bhadra",
							"Asvina",
							"Kartika",
							"Agrahayana",
							"Pausa",
							"Magha",
							"Phalguna"
						],
						"long": [
							"Chaitra",
							"Vaisakha",
							"Jyaistha",
							"Asadha",
							"Sravana",
							"Bhadra",
							"Asvina",
							"Kartika",
							"Agrahayana",
							"Pausa",
							"Magha",
							"Phalguna"
						]
					},
					"eras": {
						"short": [
							"Saka"
						]
					}
				},
				"islamic": {
					"months": {
						"short": [
							"Muh.",
							"Saf.",
							"Rab. I",
							"Rab. II",
							"Jum. I",
							"Jum. II",
							"Raj.",
							"Sha.",
							"Ram.",
							"Shaw.",
							"Dhuʻl-Q.",
							"Dhuʻl-H."
						],
						"long": [
							"Muharram",
							"Safar",
							"Rabiʻ I",
							"Rabiʻ II",
							"Jumada I",
							"Jumada II",
							"Rajab",
							"Shaʻban",
							"Ramadan",
							"Shawwal",
							"Dhuʻl-Qiʻdah",
							"Dhuʻl-Hijjah"
						]
					},
					"eras": {
						"short": [
							"AH"
						]
					}
				},
				"japanese": {
					"eras": {
						"narrow": [
							"Taika (645-650)",
							"Hakuchi (650-671)",
							"Hakuhō (672-686)",
							"Shuchō (686-701)",
							"Taihō (701-704)",
							"Keiun (704-708)",
							"Wadō (708-715)",
							"Reiki (715-717)",
							"Yōrō (717-724)",
							"Jinki (724-729)",
							"Tempyō (729-749)",
							"Tempyō-kampō (749-749)",
							"Tempyō-shōhō (749-757)",
							"Tempyō-hōji (757-765)",
							"Temphō-jingo (765-767)",
							"Jingo-keiun (767-770)",
							"Hōki (770-780)",
							"Ten-ō (781-782)",
							"Enryaku (782-806)",
							"Daidō (806-810)",
							"Kōnin (810-824)",
							"Tenchō (824-834)",
							"Jōwa (834-848)",
							"Kajō (848-851)",
							"Ninju (851-854)",
							"Saiko (854-857)",
							"Tennan (857-859)",
							"Jōgan (859-877)",
							"Genkei (877-885)",
							"Ninna (885-889)",
							"Kampyō (889-898)",
							"Shōtai (898-901)",
							"Engi (901-923)",
							"Enchō (923-931)",
							"Shōhei (931-938)",
							"Tengyō (938-947)",
							"Tenryaku (947-957)",
							"Tentoku (957-961)",
							"Ōwa (961-964)",
							"Kōhō (964-968)",
							"Anna (968-970)",
							"Tenroku (970-973)",
							"Ten-en (973-976)",
							"Jōgen (976-978)",
							"Tengen (978-983)",
							"Eikan (983-985)",
							"Kanna (985-987)",
							"Ei-en (987-989)",
							"Eiso (989-990)",
							"Shōryaku (990-995)",
							"Chōtoku (995-999)",
							"Chōhō (999-1004)",
							"Kankō (1004-1012)",
							"Chōwa (1012-1017)",
							"Kannin (1017-1021)",
							"Jian (1021-1024)",
							"Manju (1024-1028)",
							"Chōgen (1028-1037)",
							"Chōryaku (1037-1040)",
							"Chōkyū (1040-1044)",
							"Kantoku (1044-1046)",
							"Eishō (1046-1053)",
							"Tengi (1053-1058)",
							"Kōhei (1058-1065)",
							"Jiryaku (1065-1069)",
							"Enkyū (1069-1074)",
							"Shōho (1074-1077)",
							"Shōryaku (1077-1081)",
							"Eiho (1081-1084)",
							"Ōtoku (1084-1087)",
							"Kanji (1087-1094)",
							"Kaho (1094-1096)",
							"Eichō (1096-1097)",
							"Shōtoku (1097-1099)",
							"Kōwa (1099-1104)",
							"Chōji (1104-1106)",
							"Kashō (1106-1108)",
							"Tennin (1108-1110)",
							"Ten-ei (1110-1113)",
							"Eikyū (1113-1118)",
							"Gen-ei (1118-1120)",
							"Hoan (1120-1124)",
							"Tenji (1124-1126)",
							"Daiji (1126-1131)",
							"Tenshō (1131-1132)",
							"Chōshō (1132-1135)",
							"Hoen (1135-1141)",
							"Eiji (1141-1142)",
							"Kōji (1142-1144)",
							"Tenyō (1144-1145)",
							"Kyūan (1145-1151)",
							"Ninpei (1151-1154)",
							"Kyūju (1154-1156)",
							"Hogen (1156-1159)",
							"Heiji (1159-1160)",
							"Eiryaku (1160-1161)",
							"Ōho (1161-1163)",
							"Chōkan (1163-1165)",
							"Eiman (1165-1166)",
							"Nin-an (1166-1169)",
							"Kaō (1169-1171)",
							"Shōan (1171-1175)",
							"Angen (1175-1177)",
							"Jishō (1177-1181)",
							"Yōwa (1181-1182)",
							"Juei (1182-1184)",
							"Genryuku (1184-1185)",
							"Bunji (1185-1190)",
							"Kenkyū (1190-1199)",
							"Shōji (1199-1201)",
							"Kennin (1201-1204)",
							"Genkyū (1204-1206)",
							"Ken-ei (1206-1207)",
							"Shōgen (1207-1211)",
							"Kenryaku (1211-1213)",
							"Kenpō (1213-1219)",
							"Shōkyū (1219-1222)",
							"Jōō (1222-1224)",
							"Gennin (1224-1225)",
							"Karoku (1225-1227)",
							"Antei (1227-1229)",
							"Kanki (1229-1232)",
							"Jōei (1232-1233)",
							"Tempuku (1233-1234)",
							"Bunryaku (1234-1235)",
							"Katei (1235-1238)",
							"Ryakunin (1238-1239)",
							"En-ō (1239-1240)",
							"Ninji (1240-1243)",
							"Kangen (1243-1247)",
							"Hōji (1247-1249)",
							"Kenchō (1249-1256)",
							"Kōgen (1256-1257)",
							"Shōka (1257-1259)",
							"Shōgen (1259-1260)",
							"Bun-ō (1260-1261)",
							"Kōchō (1261-1264)",
							"Bun-ei (1264-1275)",
							"Kenji (1275-1278)",
							"Kōan (1278-1288)",
							"Shōō (1288-1293)",
							"Einin (1293-1299)",
							"Shōan (1299-1302)",
							"Kengen (1302-1303)",
							"Kagen (1303-1306)",
							"Tokuji (1306-1308)",
							"Enkei (1308-1311)",
							"Ōchō (1311-1312)",
							"Shōwa (1312-1317)",
							"Bunpō (1317-1319)",
							"Genō (1319-1321)",
							"Genkyō (1321-1324)",
							"Shōchū (1324-1326)",
							"Kareki (1326-1329)",
							"Gentoku (1329-1331)",
							"Genkō (1331-1334)",
							"Kemmu (1334-1336)",
							"Engen (1336-1340)",
							"Kōkoku (1340-1346)",
							"Shōhei (1346-1370)",
							"Kentoku (1370-1372)",
							"Bunchũ (1372-1375)",
							"Tenju (1375-1379)",
							"Kōryaku (1379-1381)",
							"Kōwa (1381-1384)",
							"Genchũ (1384-1392)",
							"Meitoku (1384-1387)",
							"Kakei (1387-1389)",
							"Kōō (1389-1390)",
							"Meitoku (1390-1394)",
							"Ōei (1394-1428)",
							"Shōchō (1428-1429)",
							"Eikyō (1429-1441)",
							"Kakitsu (1441-1444)",
							"Bun-an (1444-1449)",
							"Hōtoku (1449-1452)",
							"Kyōtoku (1452-1455)",
							"Kōshō (1455-1457)",
							"Chōroku (1457-1460)",
							"Kanshō (1460-1466)",
							"Bunshō (1466-1467)",
							"Ōnin (1467-1469)",
							"Bunmei (1469-1487)",
							"Chōkyō (1487-1489)",
							"Entoku (1489-1492)",
							"Meiō (1492-1501)",
							"Bunki (1501-1504)",
							"Eishō (1504-1521)",
							"Taiei (1521-1528)",
							"Kyōroku (1528-1532)",
							"Tenmon (1532-1555)",
							"Kōji (1555-1558)",
							"Eiroku (1558-1570)",
							"Genki (1570-1573)",
							"Tenshō (1573-1592)",
							"Bunroku (1592-1596)",
							"Keichō (1596-1615)",
							"Genwa (1615-1624)",
							"Kan-ei (1624-1644)",
							"Shōho (1644-1648)",
							"Keian (1648-1652)",
							"Shōō (1652-1655)",
							"Meiryaku (1655-1658)",
							"Manji (1658-1661)",
							"Kanbun (1661-1673)",
							"Enpō (1673-1681)",
							"Tenwa (1681-1684)",
							"Jōkyō (1684-1688)",
							"Genroku (1688-1704)",
							"Hōei (1704-1711)",
							"Shōtoku (1711-1716)",
							"Kyōhō (1716-1736)",
							"Genbun (1736-1741)",
							"Kanpō (1741-1744)",
							"Enkyō (1744-1748)",
							"Kan-en (1748-1751)",
							"Hōryaku (1751-1764)",
							"Meiwa (1764-1772)",
							"An-ei (1772-1781)",
							"Tenmei (1781-1789)",
							"Kansei (1789-1801)",
							"Kyōwa (1801-1804)",
							"Bunka (1804-1818)",
							"Bunsei (1818-1830)",
							"Tenpō (1830-1844)",
							"Kōka (1844-1848)",
							"Kaei (1848-1854)",
							"Ansei (1854-1860)",
							"Man-en (1860-1861)",
							"Bunkyū (1861-1864)",
							"Genji (1864-1865)",
							"Keiō (1865-1868)",
							"M",
							"T",
							"S",
							"H"
						],
						"short": [
							"Taika (645-650)",
							"Hakuchi (650-671)",
							"Hakuhō (672-686)",
							"Shuchō (686-701)",
							"Taihō (701-704)",
							"Keiun (704-708)",
							"Wadō (708-715)",
							"Reiki (715-717)",
							"Yōrō (717-724)",
							"Jinki (724-729)",
							"Tempyō (729-749)",
							"Tempyō-kampō (749-749)",
							"Tempyō-shōhō (749-757)",
							"Tempyō-hōji (757-765)",
							"Temphō-jingo (765-767)",
							"Jingo-keiun (767-770)",
							"Hōki (770-780)",
							"Ten-ō (781-782)",
							"Enryaku (782-806)",
							"Daidō (806-810)",
							"Kōnin (810-824)",
							"Tenchō (824-834)",
							"Jōwa (834-848)",
							"Kajō (848-851)",
							"Ninju (851-854)",
							"Saiko (854-857)",
							"Tennan (857-859)",
							"Jōgan (859-877)",
							"Genkei (877-885)",
							"Ninna (885-889)",
							"Kampyō (889-898)",
							"Shōtai (898-901)",
							"Engi (901-923)",
							"Enchō (923-931)",
							"Shōhei (931-938)",
							"Tengyō (938-947)",
							"Tenryaku (947-957)",
							"Tentoku (957-961)",
							"Ōwa (961-964)",
							"Kōhō (964-968)",
							"Anna (968-970)",
							"Tenroku (970-973)",
							"Ten-en (973-976)",
							"Jōgen (976-978)",
							"Tengen (978-983)",
							"Eikan (983-985)",
							"Kanna (985-987)",
							"Ei-en (987-989)",
							"Eiso (989-990)",
							"Shōryaku (990-995)",
							"Chōtoku (995-999)",
							"Chōhō (999-1004)",
							"Kankō (1004-1012)",
							"Chōwa (1012-1017)",
							"Kannin (1017-1021)",
							"Jian (1021-1024)",
							"Manju (1024-1028)",
							"Chōgen (1028-1037)",
							"Chōryaku (1037-1040)",
							"Chōkyū (1040-1044)",
							"Kantoku (1044-1046)",
							"Eishō (1046-1053)",
							"Tengi (1053-1058)",
							"Kōhei (1058-1065)",
							"Jiryaku (1065-1069)",
							"Enkyū (1069-1074)",
							"Shōho (1074-1077)",
							"Shōryaku (1077-1081)",
							"Eiho (1081-1084)",
							"Ōtoku (1084-1087)",
							"Kanji (1087-1094)",
							"Kaho (1094-1096)",
							"Eichō (1096-1097)",
							"Shōtoku (1097-1099)",
							"Kōwa (1099-1104)",
							"Chōji (1104-1106)",
							"Kashō (1106-1108)",
							"Tennin (1108-1110)",
							"Ten-ei (1110-1113)",
							"Eikyū (1113-1118)",
							"Gen-ei (1118-1120)",
							"Hoan (1120-1124)",
							"Tenji (1124-1126)",
							"Daiji (1126-1131)",
							"Tenshō (1131-1132)",
							"Chōshō (1132-1135)",
							"Hoen (1135-1141)",
							"Eiji (1141-1142)",
							"Kōji (1142-1144)",
							"Tenyō (1144-1145)",
							"Kyūan (1145-1151)",
							"Ninpei (1151-1154)",
							"Kyūju (1154-1156)",
							"Hogen (1156-1159)",
							"Heiji (1159-1160)",
							"Eiryaku (1160-1161)",
							"Ōho (1161-1163)",
							"Chōkan (1163-1165)",
							"Eiman (1165-1166)",
							"Nin-an (1166-1169)",
							"Kaō (1169-1171)",
							"Shōan (1171-1175)",
							"Angen (1175-1177)",
							"Jishō (1177-1181)",
							"Yōwa (1181-1182)",
							"Juei (1182-1184)",
							"Genryuku (1184-1185)",
							"Bunji (1185-1190)",
							"Kenkyū (1190-1199)",
							"Shōji (1199-1201)",
							"Kennin (1201-1204)",
							"Genkyū (1204-1206)",
							"Ken-ei (1206-1207)",
							"Shōgen (1207-1211)",
							"Kenryaku (1211-1213)",
							"Kenpō (1213-1219)",
							"Shōkyū (1219-1222)",
							"Jōō (1222-1224)",
							"Gennin (1224-1225)",
							"Karoku (1225-1227)",
							"Antei (1227-1229)",
							"Kanki (1229-1232)",
							"Jōei (1232-1233)",
							"Tempuku (1233-1234)",
							"Bunryaku (1234-1235)",
							"Katei (1235-1238)",
							"Ryakunin (1238-1239)",
							"En-ō (1239-1240)",
							"Ninji (1240-1243)",
							"Kangen (1243-1247)",
							"Hōji (1247-1249)",
							"Kenchō (1249-1256)",
							"Kōgen (1256-1257)",
							"Shōka (1257-1259)",
							"Shōgen (1259-1260)",
							"Bun-ō (1260-1261)",
							"Kōchō (1261-1264)",
							"Bun-ei (1264-1275)",
							"Kenji (1275-1278)",
							"Kōan (1278-1288)",
							"Shōō (1288-1293)",
							"Einin (1293-1299)",
							"Shōan (1299-1302)",
							"Kengen (1302-1303)",
							"Kagen (1303-1306)",
							"Tokuji (1306-1308)",
							"Enkei (1308-1311)",
							"Ōchō (1311-1312)",
							"Shōwa (1312-1317)",
							"Bunpō (1317-1319)",
							"Genō (1319-1321)",
							"Genkyō (1321-1324)",
							"Shōchū (1324-1326)",
							"Kareki (1326-1329)",
							"Gentoku (1329-1331)",
							"Genkō (1331-1334)",
							"Kemmu (1334-1336)",
							"Engen (1336-1340)",
							"Kōkoku (1340-1346)",
							"Shōhei (1346-1370)",
							"Kentoku (1370-1372)",
							"Bunchū (1372-1375)",
							"Tenju (1375-1379)",
							"Kōryaku (1379-1381)",
							"Kōwa (1381-1384)",
							"Genchū (1384-1392)",
							"Meitoku (1384-1387)",
							"Kakei (1387-1389)",
							"Kōō (1389-1390)",
							"Meitoku (1390-1394)",
							"Ōei (1394-1428)",
							"Shōchō (1428-1429)",
							"Eikyō (1429-1441)",
							"Kakitsu (1441-1444)",
							"Bun-an (1444-1449)",
							"Hōtoku (1449-1452)",
							"Kyōtoku (1452-1455)",
							"Kōshō (1455-1457)",
							"Chōroku (1457-1460)",
							"Kanshō (1460-1466)",
							"Bunshō (1466-1467)",
							"Ōnin (1467-1469)",
							"Bunmei (1469-1487)",
							"Chōkyō (1487-1489)",
							"Entoku (1489-1492)",
							"Meiō (1492-1501)",
							"Bunki (1501-1504)",
							"Eishō (1504-1521)",
							"Taiei (1521-1528)",
							"Kyōroku (1528-1532)",
							"Tenmon (1532-1555)",
							"Kōji (1555-1558)",
							"Eiroku (1558-1570)",
							"Genki (1570-1573)",
							"Tenshō (1573-1592)",
							"Bunroku (1592-1596)",
							"Keichō (1596-1615)",
							"Genwa (1615-1624)",
							"Kan-ei (1624-1644)",
							"Shōho (1644-1648)",
							"Keian (1648-1652)",
							"Shōō (1652-1655)",
							"Meiryaku (1655-1658)",
							"Manji (1658-1661)",
							"Kanbun (1661-1673)",
							"Enpō (1673-1681)",
							"Tenwa (1681-1684)",
							"Jōkyō (1684-1688)",
							"Genroku (1688-1704)",
							"Hōei (1704-1711)",
							"Shōtoku (1711-1716)",
							"Kyōhō (1716-1736)",
							"Genbun (1736-1741)",
							"Kanpō (1741-1744)",
							"Enkyō (1744-1748)",
							"Kan-en (1748-1751)",
							"Hōryaku (1751-1764)",
							"Meiwa (1764-1772)",
							"An-ei (1772-1781)",
							"Tenmei (1781-1789)",
							"Kansei (1789-1801)",
							"Kyōwa (1801-1804)",
							"Bunka (1804-1818)",
							"Bunsei (1818-1830)",
							"Tenpō (1830-1844)",
							"Kōka (1844-1848)",
							"Kaei (1848-1854)",
							"Ansei (1854-1860)",
							"Man-en (1860-1861)",
							"Bunkyū (1861-1864)",
							"Genji (1864-1865)",
							"Keiō (1865-1868)",
							"Meiji",
							"Taishō",
							"Shōwa",
							"Heisei"
						]
					}
				},
				"persian": {
					"months": {
						"narrow": [
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
							"10",
							"11",
							"12"
						],
						"short": [
							"Farvardin",
							"Ordibehesht",
							"Khordad",
							"Tir",
							"Mordad",
							"Shahrivar",
							"Mehr",
							"Aban",
							"Azar",
							"Dey",
							"Bahman",
							"Esfand"
						],
						"long": [
							"Farvardin",
							"Ordibehesht",
							"Khordad",
							"Tir",
							"Mordad",
							"Shahrivar",
							"Mehr",
							"Aban",
							"Azar",
							"Dey",
							"Bahman",
							"Esfand"
						]
					},
					"eras": {
						"short": [
							"AP"
						]
					}
				},
				"roc": {
					"eras": {
						"short": [
							"Antes de R.O.C.",
							"R.O.C."
						]
					}
				}
			}
		},
		"number": {
			"nu": [
				"latn"
			],
			"patterns": {
				"decimal": {
					"positivePattern": "{number}",
					"negativePattern": "-{number}"
				},
				"currency": {
					"positivePattern": "{currency}{number}",
					"negativePattern": "-{currency}{number}"
				},
				"percent": {
					"positivePattern": "{number}%",
					"negativePattern": "-{number}%"
				}
			},
			"symbols": {
				"latn": {
					"decimal": ",",
					"group": ".",
					"nan": "NaN",
					"percent": "%",
					"infinity": "∞"
				}
			},
			"currencies": {
				"AUD": "AU$",
				"BRL": "R$",
				"CAD": "CA$",
				"CNY": "CN¥",
				"EUR": "€",
				"GBP": "£",
				"HKD": "HK$",
				"ILS": "₪",
				"INR": "₹",
				"JPY": "JP¥",
				"KRW": "₩",
				"MXN": "MX$",
				"NZD": "NZ$",
				"PTE": "Esc.",
				"THB": "฿",
				"TWD": "NT$",
				"USD": "US$",
				"VND": "₫",
				"XAF": "FCFA",
				"XCD": "EC$",
				"XOF": "CFA",
				"XPF": "CFPF"
			}
		}
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* (ignored) */

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext: true */

	"use strict";
	exports.__addLocaleData = __addLocaleData;
	var intl$messageformat$$ = __webpack_require__(95), intl$relativeformat$$ = __webpack_require__(96), src$en$$ = __webpack_require__(85), src$mixin$$ = __webpack_require__(86), src$components$date$$ = __webpack_require__(87), src$components$time$$ = __webpack_require__(88), src$components$relative$$ = __webpack_require__(89), src$components$number$$ = __webpack_require__(90), src$components$message$$ = __webpack_require__(91), src$components$html$message$$ = __webpack_require__(92);
	function __addLocaleData(data) {
	    intl$messageformat$$["default"].__addLocaleData(data);
	    intl$relativeformat$$["default"].__addLocaleData(data);
	}

	__addLocaleData(src$en$$["default"]);
	exports.IntlMixin = src$mixin$$["default"], exports.FormattedDate = src$components$date$$["default"], exports.FormattedTime = src$components$time$$["default"], exports.FormattedRelative = src$components$relative$$["default"], exports.FormattedNumber = src$components$number$$["default"], exports.FormattedMessage = src$components$message$$["default"], exports.FormattedHTMLMessage = src$components$html$message$$["default"];

	//# sourceMappingURL=react-intl.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A module of methods that you want to include in all actions.
	 * This module is consumed by `createAction`.
	 */
	module.exports = {
	};


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(81),
	    maker = __webpack_require__(80).instanceJoinCreator;

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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(81);

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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A module of methods that you want to include in all stores.
	 * This module is consumed by `createStore`.
	 */
	module.exports = {
	};


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(81),
	    Reflux = __webpack_require__(64),
	    Keep = __webpack_require__(82),
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(81),
	    Reflux = __webpack_require__(64),
	    Keep = __webpack_require__(82),
	    mixer = __webpack_require__(93),
	    allowed = {preEmit:1,shouldEmit:1},
	    bindMethods = __webpack_require__(94);

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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(64),
	    _ = __webpack_require__(81);

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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(64),
	  _ = __webpack_require__(81);

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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(81),
	    ListenerMethods = __webpack_require__(70);

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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(64);


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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(64);

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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Internal module used to create static and instance join methods
	 */

	var slice = Array.prototype.slice,
	    _ = __webpack_require__(81),
	    createStore = __webpack_require__(74),
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
/* 81 */
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

	exports.EventEmitter = __webpack_require__(97);

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

	exports.Promise = __webpack_require__(100);

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
/* 82 */
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
/* 83 */
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
/* 84 */
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// GENERATED FILE
	"use strict";
	exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"},"fields":{"year":{"displayName":"Year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"}}},"month":{"displayName":"Month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"}}},"day":{"displayName":"Day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"}}},"hour":{"displayName":"Hour","relativeTime":{"future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}}},"minute":{"displayName":"Minute","relativeTime":{"future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}}},"second":{"displayName":"Second","relative":{"0":"now"},"relativeTime":{"future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}}}}};

	//# sourceMappingURL=en.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */

	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(98), intl$messageformat$$ = __webpack_require__(95), intl$relativeformat$$ = __webpack_require__(96), intl$format$cache$$ = __webpack_require__(104);

	// -----------------------------------------------------------------------------

	var typesSpec = {
	    locales: src$react$$["default"].PropTypes.oneOfType([
	        src$react$$["default"].PropTypes.string,
	        src$react$$["default"].PropTypes.array
	    ]),

	    formats : src$react$$["default"].PropTypes.object,
	    messages: src$react$$["default"].PropTypes.object
	};

	function assertIsDate(date, errMsg) {
	    // Determine if the `date` is valid by checking if it is finite, which is
	    // the same way that `Intl.DateTimeFormat#format()` checks.
	    if (!isFinite(date)) {
	        throw new TypeError(errMsg);
	    }
	}

	exports["default"] = {
	    statics: {
	        filterFormatOptions: function (obj, defaults) {
	            if (!defaults) { defaults = {}; }

	            return (this.formatOptions || []).reduce(function (opts, name) {
	                if (obj.hasOwnProperty(name)) {
	                    opts[name] = obj[name];
	                } else if (defaults.hasOwnProperty(name)) {
	                    opts[name] = defaults[name];
	                }

	                return opts;
	            }, {});
	        }
	    },

	    propTypes        : typesSpec,
	    contextTypes     : typesSpec,
	    childContextTypes: typesSpec,

	    getNumberFormat  : intl$format$cache$$["default"](Intl.NumberFormat),
	    getDateTimeFormat: intl$format$cache$$["default"](Intl.DateTimeFormat),
	    getMessageFormat : intl$format$cache$$["default"](intl$messageformat$$["default"]),
	    getRelativeFormat: intl$format$cache$$["default"](intl$relativeformat$$["default"]),

	    getChildContext: function () {
	        var context = this.context;
	        var props   = this.props;

	        return {
	            locales:  props.locales  || context.locales,
	            formats:  props.formats  || context.formats,
	            messages: props.messages || context.messages
	        };
	    },

	    formatDate: function (date, options) {
	        date = new Date(date);
	        assertIsDate(date, 'A date or timestamp must be provided to formatDate()');
	        return this._format('date', date, options);
	    },

	    formatTime: function (date, options) {
	        date = new Date(date);
	        assertIsDate(date, 'A date or timestamp must be provided to formatTime()');
	        return this._format('time', date, options);
	    },

	    formatRelative: function (date, options, formatOptions) {
	        date = new Date(date);
	        assertIsDate(date, 'A date or timestamp must be provided to formatRelative()');
	        return this._format('relative', date, options, formatOptions);
	    },

	    formatNumber: function (num, options) {
	        return this._format('number', num, options);
	    },

	    formatMessage: function (message, values) {
	        var locales = this.props.locales || this.context.locales;
	        var formats = this.props.formats || this.context.formats;

	        // When `message` is a function, assume it's an IntlMessageFormat
	        // instance's `format()` method passed by reference, and call it. This
	        // is possible because its `this` will be pre-bound to the instance.
	        if (typeof message === 'function') {
	            return message(values);
	        }

	        if (typeof message === 'string') {
	            message = this.getMessageFormat(message, locales, formats);
	        }

	        return message.format(values);
	    },

	    getIntlMessage: function (path) {
	        var messages  = this.props.messages || this.context.messages;
	        var pathParts = path.split('.');

	        var message;

	        try {
	            message = pathParts.reduce(function (obj, pathPart) {
	                return obj[pathPart];
	            }, messages);
	        } finally {
	            if (message === undefined) {
	                throw new ReferenceError('Could not find Intl message: ' + path);
	            }
	        }

	        return message;
	    },

	    getNamedFormat: function (type, name) {
	        var formats = this.props.formats || this.context.formats;
	        var format  = null;

	        try {
	            format = formats[type][name];
	        } finally {
	            if (!format) {
	                throw new ReferenceError(
	                    'No ' + type + ' format named: ' + name
	                );
	            }
	        }

	        return format;
	    },

	    _format: function (type, value, options, formatOptions) {
	        var locales = this.props.locales || this.context.locales;

	        if (options && typeof options === 'string') {
	            options = this.getNamedFormat(type, options);
	        }

	        switch(type) {
	            case 'date':
	            case 'time':
	                return this.getDateTimeFormat(locales, options).format(value);
	            case 'number':
	                return this.getNumberFormat(locales, options).format(value);
	            case 'relative':
	                return this.getRelativeFormat(locales, options).format(value, formatOptions);
	            default:
	                throw new Error('Unrecognized format type: ' + type);
	        }
	    }
	};

	//# sourceMappingURL=mixin.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */

	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(98), src$mixin$$ = __webpack_require__(86);

	var FormattedDate = src$react$$["default"].createClass({
	    displayName: 'FormattedDate',
	    mixins     : [src$mixin$$["default"]],

	    statics: {
	        formatOptions: [
	            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
	            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
	            'timeZoneName'
	        ]
	    },

	    propTypes: {
	        format: src$react$$["default"].PropTypes.string,
	        value : src$react$$["default"].PropTypes.any.isRequired
	    },

	    render: function () {
	        var props    = this.props;
	        var value    = props.value;
	        var format   = props.format;
	        var defaults = format && this.getNamedFormat('date', format);
	        var options  = FormattedDate.filterFormatOptions(props, defaults);

	        return src$react$$["default"].DOM.span(null, this.formatDate(value, options));
	    }
	});

	exports["default"] = FormattedDate;

	//# sourceMappingURL=date.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */

	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(98), src$mixin$$ = __webpack_require__(86);

	var FormattedTime = src$react$$["default"].createClass({
	    displayName: 'FormattedTime',
	    mixins     : [src$mixin$$["default"]],

	    statics: {
	        formatOptions: [
	            'localeMatcher', 'timeZone', 'hour12', 'formatMatcher', 'weekday',
	            'era', 'year', 'month', 'day', 'hour', 'minute', 'second',
	            'timeZoneName'
	        ]
	    },

	    propTypes: {
	        format: src$react$$["default"].PropTypes.string,
	        value : src$react$$["default"].PropTypes.any.isRequired
	    },

	    render: function () {
	        var props    = this.props;
	        var value    = props.value;
	        var format   = props.format;
	        var defaults = format && this.getNamedFormat('time', format);
	        var options  = FormattedTime.filterFormatOptions(props, defaults);

	        return src$react$$["default"].DOM.span(null, this.formatTime(value, options));
	    }
	});

	exports["default"] = FormattedTime;

	//# sourceMappingURL=time.js.map

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */

	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(98), src$mixin$$ = __webpack_require__(86);

	var FormattedRelative = src$react$$["default"].createClass({
	    displayName: 'FormattedRelative',
	    mixins     : [src$mixin$$["default"]],

	    statics: {
	        formatOptions: [
	            'style', 'units'
	        ]
	    },

	    propTypes: {
	        format: src$react$$["default"].PropTypes.string,
	        value : src$react$$["default"].PropTypes.any.isRequired,
	        now   : src$react$$["default"].PropTypes.any
	    },

	    render: function () {
	        var props    = this.props;
	        var value    = props.value;
	        var format   = props.format;
	        var defaults = format && this.getNamedFormat('relative', format);
	        var options  = FormattedRelative.filterFormatOptions(props, defaults);

	        var formattedRelativeTime = this.formatRelative(value, options, {
	            now: props.now
	        });

	        return src$react$$["default"].DOM.span(null, formattedRelativeTime);
	    }
	});

	exports["default"] = FormattedRelative;

	//# sourceMappingURL=relative.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */

	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(98), src$mixin$$ = __webpack_require__(86);

	var FormattedNumber = src$react$$["default"].createClass({
	    displayName: 'FormattedNumber',
	    mixins     : [src$mixin$$["default"]],

	    statics: {
	        formatOptions: [
	            'localeMatcher', 'style', 'currency', 'currencyDisplay',
	            'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits',
	            'maximumFractionDigits', 'minimumSignificantDigits',
	            'maximumSignificantDigits'
	        ]
	    },

	    propTypes: {
	        format: src$react$$["default"].PropTypes.string,
	        value : src$react$$["default"].PropTypes.any.isRequired
	    },

	    render: function () {
	        var props    = this.props;
	        var value    = props.value;
	        var format   = props.format;
	        var defaults = format && this.getNamedFormat('number', format);
	        var options  = FormattedNumber.filterFormatOptions(props, defaults);

	        return src$react$$["default"].DOM.span(null, this.formatNumber(value, options));
	    }
	});

	exports["default"] = FormattedNumber;

	//# sourceMappingURL=number.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */

	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(98), src$mixin$$ = __webpack_require__(86);

	var FormattedMessage = src$react$$["default"].createClass({
	    displayName: 'FormattedMessage',
	    mixins     : [src$mixin$$["default"]],

	    propTypes: {
	        tagName: src$react$$["default"].PropTypes.string,
	        message: src$react$$["default"].PropTypes.string.isRequired
	    },

	    getDefaultProps: function () {
	        return {tagName: 'span'};
	    },

	    render: function () {
	        var props   = this.props;
	        var tagName = props.tagName;
	        var message = props.message;

	        // Creates a token with a random guid that should not be guessable or
	        // conflict with other parts of the `message` string.
	        var guid       = Math.floor(Math.random() * 0x10000000000).toString(16);
	        var tokenRegex = new RegExp('(@__ELEMENT-' + guid + '-\\d+__@)', 'g');
	        var elements   = {};

	        var generateToken = (function () {
	            var counter = 0;
	            return function () {
	                return '@__ELEMENT-' + guid + '-' + (counter += 1) + '__@';
	            };
	        }());

	        // Iterates over the `props` to keep track of any React Element values
	        // so they can be represented by the `token` as a placeholder when the
	        // `message` is formatted. This allows the formatted message to then be
	        // broken-up into parts with references to the React Elements inserted
	        // back in.
	        var values = Object.keys(props).reduce(function (values, name) {
	            var value = props[name];
	            var token;

	            if (src$react$$["default"].isValidElement(value)) {
	                token           = generateToken();
	                values[name]    = token;
	                elements[token] = value;
	            } else {
	                values[name] = value;
	            }

	            return values;
	        }, {});

	        // Formats the `message` with the `values`, including the `token`
	        // placeholders for React Element values.
	        var formattedMessage = this.formatMessage(message, values);

	        // Split the message into parts so the React Element values captured
	        // above can be inserted back into the rendered message. This
	        // approach allows messages to render with React Elements while keeping
	        // React's virtual diffing working properly.
	        var children = formattedMessage.split(tokenRegex)
	            .filter(function (part) {
	                // Ignore empty string parts.
	                return !!part;
	            })
	            .map(function (part) {
	                // When the `part` is a token, get a ref to the React Element.
	                return elements[part] || part;
	            });

	        var elementArgs = [tagName, null].concat(children);
	        return src$react$$["default"].createElement.apply(null, elementArgs);
	    }
	});

	exports["default"] = FormattedMessage;

	//# sourceMappingURL=message.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */

	// TODO: Use `import React from "react";` when external modules are supported.
	"use strict";
	var src$react$$ = __webpack_require__(98), src$escape$$ = __webpack_require__(99), src$mixin$$ = __webpack_require__(86);

	var FormattedHTMLMessage = src$react$$["default"].createClass({
	    displayName: 'FormattedHTMLMessage',
	    mixins     : [src$mixin$$["default"]],

	    propTypes: {
	        tagName: src$react$$["default"].PropTypes.string,
	        message: src$react$$["default"].PropTypes.string.isRequired
	    },

	    getDefaultProps: function () {
	        return {tagName: 'span'};
	    },

	    render: function () {
	        var props   = this.props;
	        var tagName = props.tagName;
	        var message = props.message;

	        // Process all the props before they are used as values when formatting
	        // the ICU Message string. Since the formatted message will be injected
	        // via `innerHTML`, all String-based values need to be HTML-escaped. Any
	        // React Elements that are passed as props will be rendered to a static
	        // markup string that is presumed to be safe.
	        var values = Object.keys(props).reduce(function (values, name) {
	            var value = props[name];

	            if (typeof value === 'string') {
	                value = src$escape$$["default"](value);
	            } else if (src$react$$["default"].isValidElement(value)) {
	                value = src$react$$["default"].renderToStaticMarkup(value);
	            }

	            values[name] = value;
	            return values;
	        }, {});

	        // Since the message presumably has HTML in it, we need to set
	        // `innerHTML` in order for it to be rendered and not escaped by React.
	        // To be safe, all string prop values were escaped before formatting the
	        // message. It is assumed that the message is not UGC, and came from
	        // the developer making it more like a template.
	        //
	        // Note: There's a perf impact of using this component since there's no
	        // way for React to do its virtual DOM diffing.
	        return src$react$$["default"].DOM[tagName]({
	            dangerouslySetInnerHTML: {
	                __html: this.formatMessage(message, values)
	            }
	        });
	    }
	});

	exports["default"] = FormattedHTMLMessage;

	//# sourceMappingURL=html-message.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(81);

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
/* 94 */
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node:true */

	'use strict';

	var IntlMessageFormat = __webpack_require__(105)['default'];

	// Add all locale data to `IntlMessageFormat`. This module will be ignored when
	// bundling for the browser with Browserify/Webpack.
	__webpack_require__(101);

	// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
	// locale data registered, and with English set as the default locale. Define
	// the `default` prop for use with other compiled ES6 Modules.
	exports = module.exports = IntlMessageFormat;
	exports['default'] = exports;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node:true */

	'use strict';

	var IntlRelativeFormat = __webpack_require__(103)['default'];

	// Add all locale data to `IntlRelativeFormat`. This module will be ignored when
	// bundling for the browser with Browserify/Webpack.
	__webpack_require__(102);

	// Re-export `IntlRelativeFormat` as the CommonJS default exports with all the
	// locale data registered, and with English set as the default locale. Define
	// the `default` prop for use with other compiled ES6 Modules.
	exports = module.exports = IntlRelativeFormat;
	exports['default'] = exports;


/***/ },
/* 97 */
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* global React */
	/* jshint esnext:true */

	// TODO: Remove the global `React` binding lookup once the ES6 Module Transpiler
	// supports external modules. This is a hack for now that provides the local
	// modules a referece to React.
	"use strict";
	exports["default"] = React;

	//# sourceMappingURL=react.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint esnext:true */

	/*
	HTML escaping implementation is the same as React's (on purpose.) Therefore, it
	has the following Copyright and Licensing:

	Copyright 2013-2014, Facebook, Inc.
	All rights reserved.

	This source code is licensed under the BSD-style license found in the LICENSE
	file in the root directory of React's source tree.
	*/
	"use strict";
	var ESCAPED_CHARS = {
	    '&' : '&amp;',
	    '>' : '&gt;',
	    '<' : '&lt;',
	    '"' : '&quot;',
	    '\'': '&#x27;'
	};

	var UNSAFE_CHARS_REGEX = /[&><"']/g;

	exports["default"] = function (str) {
	    return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
	        return ESCAPED_CHARS[match];
	    });
	};

	//# sourceMappingURL=escape.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*! Native Promise Only
	    v0.7.6-a (c) Kyle Simpson
	    MIT License: http://getify.mit-license.org
	*/
	!function(t,n,e){n[t]=n[t]||e(),"undefined"!=typeof module&&module.exports?module.exports=n[t]:"function"=="function"&&__webpack_require__(109)&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return n[t]}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}("Promise","undefined"!=typeof global?global:this,function(){"use strict";function t(t,n){l.add(t,n),h||(h=y(l.drain))}function n(t){var n,e=typeof t;return null==t||"object"!=e&&"function"!=e||(n=t.then),"function"==typeof n?n:!1}function e(){for(var t=0;t<this.chain.length;t++)o(this,1===this.state?this.chain[t].success:this.chain[t].failure,this.chain[t]);this.chain.length=0}function o(t,e,o){var r,i;try{e===!1?o.reject(t.msg):(r=e===!0?t.msg:e.call(void 0,t.msg),r===o.promise?o.reject(TypeError("Promise-chain cycle")):(i=n(r))?i.call(r,o.resolve,o.reject):o.resolve(r))}catch(c){o.reject(c)}}function r(o){var c,u,a=this;if(!a.triggered){a.triggered=!0,a.def&&(a=a.def);try{(c=n(o))?(u=new f(a),c.call(o,function(){r.apply(u,arguments)},function(){i.apply(u,arguments)})):(a.msg=o,a.state=1,a.chain.length>0&&t(e,a))}catch(s){i.call(u||new f(a),s)}}}function i(n){var o=this;o.triggered||(o.triggered=!0,o.def&&(o=o.def),o.msg=n,o.state=2,o.chain.length>0&&t(e,o))}function c(t,n,e,o){for(var r=0;r<n.length;r++)!function(r){t.resolve(n[r]).then(function(t){e(r,t)},o)}(r)}function f(t){this.def=t,this.triggered=!1}function u(t){this.promise=t,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function a(n){if("function"!=typeof n)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new u(this);this.then=function(n,r){var i={success:"function"==typeof n?n:!0,failure:"function"==typeof r?r:!1};return i.promise=new this.constructor(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");i.resolve=t,i.reject=n}),o.chain.push(i),0!==o.state&&t(e,o),i.promise},this["catch"]=function(t){return this.then(void 0,t)};try{n.call(void 0,function(t){r.call(o,t)},function(t){i.call(o,t)})}catch(c){i.call(o,c)}}var s,h,l,p=Object.prototype.toString,y="undefined"!=typeof setImmediate?function(t){return setImmediate(t)}:setTimeout;try{Object.defineProperty({},"x",{}),s=function(t,n,e,o){return Object.defineProperty(t,n,{value:e,writable:!0,configurable:o!==!1})}}catch(d){s=function(t,n,e){return t[n]=e,t}}l=function(){function t(t,n){this.fn=t,this.self=n,this.next=void 0}var n,e,o;return{add:function(r,i){o=new t(r,i),e?e.next=o:n=o,e=o,o=void 0},drain:function(){var t=n;for(n=e=h=void 0;t;)t.fn.call(t.self),t=t.next}}}();var g=s({},"constructor",a,!1);return s(a,"prototype",g,!1),s(g,"__NPO__",0,!1),s(a,"resolve",function(t){var n=this;return t&&"object"==typeof t&&1===t.__NPO__?t:new n(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");n(t)})}),s(a,"reject",function(t){return new this(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");e(t)})}),s(a,"all",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):0===t.length?n.resolve([]):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");var r=t.length,i=Array(r),f=0;c(n,t,function(t,n){i[t]=n,++f===r&&e(i)},o)})}),s(a,"race",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");c(n,t,function(t,n){e(n)},o)})}),a});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(110).setImmediate))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* (ignored) */

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* (ignored) */

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	/* jslint esnext: true */

	"use strict";
	var src$core$$ = __webpack_require__(106), src$en$$ = __webpack_require__(107);

	src$core$$["default"].__addLocaleData(src$en$$["default"]);
	src$core$$["default"].defaultLocale = 'en';

	exports["default"] = src$core$$["default"];

	//# sourceMappingURL=main.js.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports = module.exports = __webpack_require__(108)['default'];
	exports['default'] = exports;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	/* jslint esnext: true */

	"use strict";
	var src$core$$ = __webpack_require__(111), src$en$$ = __webpack_require__(112);

	src$core$$["default"].__addLocaleData(src$en$$["default"]);
	src$core$$["default"].defaultLocale = 'en';

	exports["default"] = src$core$$["default"];

	//# sourceMappingURL=main.js.map

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";
	var intl$messageformat$$ = __webpack_require__(95), src$diff$$ = __webpack_require__(113), src$es5$$ = __webpack_require__(114);
	exports["default"] = RelativeFormat;

	// -----------------------------------------------------------------------------

	var FIELDS = ['second', 'minute', 'hour', 'day', 'month', 'year'];
	var STYLES = ['best fit', 'numeric'];

	// -- RelativeFormat -----------------------------------------------------------

	function RelativeFormat(locales, options) {
	    options = options || {};

	    // Make a copy of `locales` if it's an array, so that it doesn't change
	    // since it's used lazily.
	    if (src$es5$$.isArray(locales)) {
	        locales = locales.concat();
	    }

	    src$es5$$.defineProperty(this, '_locale', {value: this._resolveLocale(locales)});
	    src$es5$$.defineProperty(this, '_options', {value: {
	        style: this._resolveStyle(options.style),
	        units: this._isValidUnits(options.units) && options.units
	    }});

	    src$es5$$.defineProperty(this, '_locales', {value: locales});
	    src$es5$$.defineProperty(this, '_fields', {value: this._findFields(this._locale)});
	    src$es5$$.defineProperty(this, '_messages', {value: src$es5$$.objCreate(null)});

	    // "Bind" `format()` method to `this` so it can be passed by reference like
	    // the other `Intl` APIs.
	    var relativeFormat = this;
	    this.format = function format(date, options) {
	        return relativeFormat._format(date, options);
	    };
	}

	// Define internal private properties for dealing with locale data.
	src$es5$$.defineProperty(RelativeFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
	src$es5$$.defineProperty(RelativeFormat, '__addLocaleData', {value: function (data) {
	    if (!(data && data.locale)) {
	        throw new Error(
	            'Locale data provided to IntlRelativeFormat is missing a ' +
	            '`locale` property value'
	        );
	    }

	    RelativeFormat.__localeData__[data.locale.toLowerCase()] = data;

	    // Add data to IntlMessageFormat.
	    intl$messageformat$$["default"].__addLocaleData(data);
	}});

	// Define public `defaultLocale` property which can be set by the developer, or
	// it will be set when the first RelativeFormat instance is created by
	// leveraging the resolved locale from `Intl`.
	src$es5$$.defineProperty(RelativeFormat, 'defaultLocale', {
	    enumerable: true,
	    writable  : true,
	    value     : undefined
	});

	// Define public `thresholds` property which can be set by the developer, and
	// defaults to relative time thresholds from moment.js.
	src$es5$$.defineProperty(RelativeFormat, 'thresholds', {
	    enumerable: true,

	    value: {
	        second: 45,  // seconds to minute
	        minute: 45,  // minutes to hour
	        hour  : 22,  // hours to day
	        day   : 26,  // days to month
	        month : 11   // months to year
	    }
	});

	RelativeFormat.prototype.resolvedOptions = function () {
	    return {
	        locale: this._locale,
	        style : this._options.style,
	        units : this._options.units
	    };
	};

	RelativeFormat.prototype._compileMessage = function (units) {
	    // `this._locales` is the original set of locales the user specified to the
	    // constructor, while `this._locale` is the resolved root locale.
	    var locales        = this._locales;
	    var resolvedLocale = this._locale;

	    var field        = this._fields[units];
	    var relativeTime = field.relativeTime;
	    var future       = '';
	    var past         = '';
	    var i;

	    for (i in relativeTime.future) {
	        if (relativeTime.future.hasOwnProperty(i)) {
	            future += ' ' + i + ' {' +
	                relativeTime.future[i].replace('{0}', '#') + '}';
	        }
	    }

	    for (i in relativeTime.past) {
	        if (relativeTime.past.hasOwnProperty(i)) {
	            past += ' ' + i + ' {' +
	                relativeTime.past[i].replace('{0}', '#') + '}';
	        }
	    }

	    var message = '{when, select, future {{0, plural, ' + future + '}}' +
	                                 'past {{0, plural, ' + past + '}}}';

	    // Create the synthetic IntlMessageFormat instance using the original
	    // locales value specified by the user when constructing the the parent
	    // IntlRelativeFormat instance.
	    return new intl$messageformat$$["default"](message, locales);
	};

	RelativeFormat.prototype._getMessage = function (units) {
	    var messages = this._messages;

	    // Create a new synthetic message based on the locale data from CLDR.
	    if (!messages[units]) {
	        messages[units] = this._compileMessage(units);
	    }

	    return messages[units];
	};

	RelativeFormat.prototype._getRelativeUnits = function (diff, units) {
	    var field = this._fields[units];

	    if (field.relative) {
	        return field.relative[diff];
	    }
	};

	RelativeFormat.prototype._findFields = function (locale) {
	    var localeData = RelativeFormat.__localeData__;
	    var data       = localeData[locale.toLowerCase()];

	    // The locale data is de-duplicated, so we have to traverse the locale's
	    // hierarchy until we find `fields` to return.
	    while (data) {
	        if (data.fields) {
	            return data.fields;
	        }

	        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
	    }

	    throw new Error(
	        'Locale data added to IntlRelativeFormat is missing `fields` for :' +
	        locale
	    );
	};

	RelativeFormat.prototype._format = function (date, options) {
	    var now = options && options.now !== undefined ? options.now : src$es5$$.dateNow();

	    if (date === undefined) {
	        date = now;
	    }

	    // Determine if the `date` and optional `now` values are valid, and throw a
	    // similar error to what `Intl.DateTimeFormat#format()` would throw.
	    if (!isFinite(now)) {
	        throw new RangeError(
	            'The `now` option provided to IntlRelativeFormat#format() is not ' +
	            'in valid range.'
	        );
	    }

	    if (!isFinite(date)) {
	        throw new RangeError(
	            'The date value provided to IntlRelativeFormat#format() is not ' +
	            'in valid range.'
	        );
	    }

	    var diffReport  = src$diff$$["default"](now, date);
	    var units       = this._options.units || this._selectUnits(diffReport);
	    var diffInUnits = diffReport[units];

	    if (this._options.style !== 'numeric') {
	        var relativeUnits = this._getRelativeUnits(diffInUnits, units);
	        if (relativeUnits) {
	            return relativeUnits;
	        }
	    }

	    return this._getMessage(units).format({
	        '0' : Math.abs(diffInUnits),
	        when: diffInUnits < 0 ? 'past' : 'future'
	    });
	};

	RelativeFormat.prototype._isValidUnits = function (units) {
	    if (!units || src$es5$$.arrIndexOf.call(FIELDS, units) >= 0) {
	        return true;
	    }

	    if (typeof units === 'string') {
	        var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);
	        if (suggestion && src$es5$$.arrIndexOf.call(FIELDS, suggestion) >= 0) {
	            throw new Error(
	                '"' + units + '" is not a valid IntlRelativeFormat `units` ' +
	                'value, did you mean: ' + suggestion
	            );
	        }
	    }

	    throw new Error(
	        '"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' +
	        'must be one of: "' + FIELDS.join('", "') + '"'
	    );
	};

	RelativeFormat.prototype._resolveLocale = function (locales) {
	    if (typeof locales === 'string') {
	        locales = [locales];
	    }

	    // Create a copy of the array so we can push on the default locale.
	    locales = (locales || []).concat(RelativeFormat.defaultLocale);

	    var localeData = RelativeFormat.__localeData__;
	    var i, len, localeParts, data;

	    // Using the set of locales + the default locale, we look for the first one
	    // which that has been registered. When data does not exist for a locale, we
	    // traverse its ancestors to find something that's been registered within
	    // its hierarchy of locales. Since we lack the proper `parentLocale` data
	    // here, we must take a naive approach to traversal.
	    for (i = 0, len = locales.length; i < len; i += 1) {
	        localeParts = locales[i].toLowerCase().split('-');

	        while (localeParts.length) {
	            data = localeData[localeParts.join('-')];
	            if (data) {
	                // Return the normalized locale string; e.g., we return "en-US",
	                // instead of "en-us".
	                return data.locale;
	            }

	            localeParts.pop();
	        }
	    }

	    var defaultLocale = locales.pop();
	    throw new Error(
	        'No locale data has been added to IntlRelativeFormat for: ' +
	        locales.join(', ') + ', or the default locale: ' + defaultLocale
	    );
	};

	RelativeFormat.prototype._resolveStyle = function (style) {
	    // Default to "best fit" style.
	    if (!style) {
	        return STYLES[0];
	    }

	    if (src$es5$$.arrIndexOf.call(STYLES, style) >= 0) {
	        return style;
	    }

	    throw new Error(
	        '"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' +
	        'must be one of: "' + STYLES.join('", "') + '"'
	    );
	};

	RelativeFormat.prototype._selectUnits = function (diffReport) {
	    var i, l, units;

	    for (i = 0, l = FIELDS.length; i < l; i += 1) {
	        units = FIELDS[i];

	        if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
	            break;
	        }
	    }

	    return units;
	};

	//# sourceMappingURL=core.js.map

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// GENERATED FILE
	"use strict";
	exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"},"fields":{"year":{"displayName":"Year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"}}},"month":{"displayName":"Month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"}}},"day":{"displayName":"Day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"}}},"hour":{"displayName":"Hour","relativeTime":{"future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}}},"minute":{"displayName":"Minute","relativeTime":{"future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}}},"second":{"displayName":"Second","relative":{"0":"now"},"relativeTime":{"future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}}}}};

	//# sourceMappingURL=en.js.map

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var src$es5$$ = __webpack_require__(118);
	exports["default"] = createFormatCache;

	// -----------------------------------------------------------------------------

	function createFormatCache(FormatConstructor) {
	    var cache = src$es5$$.objCreate(null);

	    return function () {
	        var args    = Array.prototype.slice.call(arguments);
	        var cacheId = getCacheId(args);
	        var format  = cacheId && cache[cacheId];

	        if (!format) {
	            format = src$es5$$.objCreate(FormatConstructor.prototype);
	            FormatConstructor.apply(format, args);

	            if (cacheId) {
	                cache[cacheId] = format;
	            }
	        }

	        return format;
	    };
	}

	// -- Utilities ----------------------------------------------------------------

	function getCacheId(inputs) {
	    // When JSON is not available in the runtime, we will not create a cache id.
	    if (typeof JSON === 'undefined') { return; }

	    var cacheId = [];

	    var i, len, input;

	    for (i = 0, len = inputs.length; i < len; i += 1) {
	        input = inputs[i];

	        if (input && typeof input === 'object') {
	            cacheId.push(orderedProps(input));
	        } else {
	            cacheId.push(input);
	        }
	    }

	    return JSON.stringify(cacheId);
	}

	function orderedProps(obj) {
	    var props = [],
	        keys  = [];

	    var key, i, len, prop;

	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            keys.push(key);
	        }
	    }

	    var orderedKeys = keys.sort();

	    for (i = 0, len = orderedKeys.length; i < len; i += 1) {
	        key  = orderedKeys[i];
	        prop = {};

	        prop[key] = obj[key];
	        props[i]  = prop;
	    }

	    return props;
	}

	//# sourceMappingURL=memoizer.js.map

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(120).nextTick;
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(110).setImmediate, __webpack_require__(110).clearImmediate))

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";
	var src$utils$$ = __webpack_require__(115), src$es5$$ = __webpack_require__(116), src$compiler$$ = __webpack_require__(117), intl$messageformat$parser$$ = __webpack_require__(119);
	exports["default"] = MessageFormat;

	// -- MessageFormat --------------------------------------------------------

	function MessageFormat(message, locales, formats) {
	    // Parse string messages into an AST.
	    var ast = typeof message === 'string' ?
	            MessageFormat.__parse(message) : message;

	    if (!(ast && ast.type === 'messageFormatPattern')) {
	        throw new TypeError('A message must be provided as a String or AST.');
	    }

	    // Creates a new object with the specified `formats` merged with the default
	    // formats.
	    formats = this._mergeFormats(MessageFormat.formats, formats);

	    // Defined first because it's used to build the format pattern.
	    src$es5$$.defineProperty(this, '_locale',  {value: this._resolveLocale(locales)});

	    // Compile the `ast` to a pattern that is highly optimized for repeated
	    // `format()` invocations. **Note:** This passes the `locales` set provided
	    // to the constructor instead of just the resolved locale.
	    var pluralFn = this._findPluralRuleFunction(this._locale);
	    var pattern  = this._compilePattern(ast, locales, formats, pluralFn);

	    // "Bind" `format()` method to `this` so it can be passed by reference like
	    // the other `Intl` APIs.
	    var messageFormat = this;
	    this.format = function (values) {
	        return messageFormat._format(pattern, values);
	    };
	}

	// Default format options used as the prototype of the `formats` provided to the
	// constructor. These are used when constructing the internal Intl.NumberFormat
	// and Intl.DateTimeFormat instances.
	src$es5$$.defineProperty(MessageFormat, 'formats', {
	    enumerable: true,

	    value: {
	        number: {
	            'currency': {
	                style: 'currency'
	            },

	            'percent': {
	                style: 'percent'
	            }
	        },

	        date: {
	            'short': {
	                month: 'numeric',
	                day  : 'numeric',
	                year : '2-digit'
	            },

	            'medium': {
	                month: 'short',
	                day  : 'numeric',
	                year : 'numeric'
	            },

	            'long': {
	                month: 'long',
	                day  : 'numeric',
	                year : 'numeric'
	            },

	            'full': {
	                weekday: 'long',
	                month  : 'long',
	                day    : 'numeric',
	                year   : 'numeric'
	            }
	        },

	        time: {
	            'short': {
	                hour  : 'numeric',
	                minute: 'numeric'
	            },

	            'medium':  {
	                hour  : 'numeric',
	                minute: 'numeric',
	                second: 'numeric'
	            },

	            'long': {
	                hour        : 'numeric',
	                minute      : 'numeric',
	                second      : 'numeric',
	                timeZoneName: 'short'
	            },

	            'full': {
	                hour        : 'numeric',
	                minute      : 'numeric',
	                second      : 'numeric',
	                timeZoneName: 'short'
	            }
	        }
	    }
	});

	// Define internal private properties for dealing with locale data.
	src$es5$$.defineProperty(MessageFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
	src$es5$$.defineProperty(MessageFormat, '__addLocaleData', {value: function (data) {
	    if (!(data && data.locale)) {
	        throw new Error(
	            'Locale data provided to IntlMessageFormat is missing a ' +
	            '`locale` property'
	        );
	    }

	    MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
	}});

	// Defines `__parse()` static method as an exposed private.
	src$es5$$.defineProperty(MessageFormat, '__parse', {value: intl$messageformat$parser$$["default"].parse});

	// Define public `defaultLocale` property which defaults to English, but can be
	// set by the developer.
	src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
	    enumerable: true,
	    writable  : true,
	    value     : undefined
	});

	MessageFormat.prototype.resolvedOptions = function () {
	    // TODO: Provide anything else?
	    return {
	        locale: this._locale
	    };
	};

	MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
	    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
	    return compiler.compile(ast);
	};

	MessageFormat.prototype._findPluralRuleFunction = function (locale) {
	    var localeData = MessageFormat.__localeData__;
	    var data       = localeData[locale.toLowerCase()];

	    // The locale data is de-duplicated, so we have to traverse the locale's
	    // hierarchy until we find a `pluralRuleFunction` to return.
	    while (data) {
	        if (data.pluralRuleFunction) {
	            return data.pluralRuleFunction;
	        }

	        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
	    }

	    throw new Error(
	        'Locale data added to IntlMessageFormat is missing a ' +
	        '`pluralRuleFunction` for :' + locale
	    );
	};

	MessageFormat.prototype._format = function (pattern, values) {
	    var result = '',
	        i, len, part, id, value;

	    for (i = 0, len = pattern.length; i < len; i += 1) {
	        part = pattern[i];

	        // Exist early for string parts.
	        if (typeof part === 'string') {
	            result += part;
	            continue;
	        }

	        id = part.id;

	        // Enforce that all required values are provided by the caller.
	        if (!(values && src$utils$$.hop.call(values, id))) {
	            throw new Error('A value must be provided for: ' + id);
	        }

	        value = values[id];

	        // Recursively format plural and select parts' option — which can be a
	        // nested pattern structure. The choosing of the option to use is
	        // abstracted-by and delegated-to the part helper object.
	        if (part.options) {
	            result += this._format(part.getOption(value), values);
	        } else {
	            result += part.format(value);
	        }
	    }

	    return result;
	};

	MessageFormat.prototype._mergeFormats = function (defaults, formats) {
	    var mergedFormats = {},
	        type, mergedType;

	    for (type in defaults) {
	        if (!src$utils$$.hop.call(defaults, type)) { continue; }

	        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);

	        if (formats && src$utils$$.hop.call(formats, type)) {
	            src$utils$$.extend(mergedType, formats[type]);
	        }
	    }

	    return mergedFormats;
	};

	MessageFormat.prototype._resolveLocale = function (locales) {
	    if (typeof locales === 'string') {
	        locales = [locales];
	    }

	    // Create a copy of the array so we can push on the default locale.
	    locales = (locales || []).concat(MessageFormat.defaultLocale);

	    var localeData = MessageFormat.__localeData__;
	    var i, len, localeParts, data;

	    // Using the set of locales + the default locale, we look for the first one
	    // which that has been registered. When data does not exist for a locale, we
	    // traverse its ancestors to find something that's been registered within
	    // its hierarchy of locales. Since we lack the proper `parentLocale` data
	    // here, we must take a naive approach to traversal.
	    for (i = 0, len = locales.length; i < len; i += 1) {
	        localeParts = locales[i].toLowerCase().split('-');

	        while (localeParts.length) {
	            data = localeData[localeParts.join('-')];
	            if (data) {
	                // Return the normalized locale string; e.g., we return "en-US",
	                // instead of "en-us".
	                return data.locale;
	            }

	            localeParts.pop();
	        }
	    }

	    var defaultLocale = locales.pop();
	    throw new Error(
	        'No locale data has been added to IntlMessageFormat for: ' +
	        locales.join(', ') + ', or the default locale: ' + defaultLocale
	    );
	};

	//# sourceMappingURL=core.js.map

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// GENERATED FILE
	"use strict";
	exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}};

	//# sourceMappingURL=en.js.map

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";

	var round = Math.round;

	function daysToYears(days) {
	    // 400 years have 146097 days (taking into account leap year rules)
	    return days * 400 / 146097;
	}

	exports["default"] = function (from, to) {
	    // Convert to ms timestamps.
	    from = +from;
	    to   = +to;

	    var millisecond = round(to - from),
	        second      = round(millisecond / 1000),
	        minute      = round(second / 60),
	        hour        = round(minute / 60),
	        day         = round(hour / 24),
	        week        = round(day / 7);

	    var rawYears = daysToYears(day),
	        month    = round(rawYears * 12),
	        year     = round(rawYears);

	    return {
	        millisecond: millisecond,
	        second     : second,
	        minute     : minute,
	        hour       : hour,
	        day        : day,
	        week       : week,
	        month      : month,
	        year       : year
	    };
	};

	//# sourceMappingURL=diff.js.map

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";

	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License

	var hop = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;

	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();

	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {

	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};

	var objCreate = Object.create || function (proto, props) {
	    var obj, k;

	    function F() {}
	    F.prototype = proto;
	    obj = new F();

	    for (k in props) {
	        if (hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }

	    return obj;
	};

	var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
	    /*jshint validthis:true */
	    var arr = this;
	    if (!arr.length) {
	        return -1;
	    }

	    for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
	        if (arr[i] === search) {
	            return i;
	        }
	    }

	    return -1;
	};

	var isArray = Array.isArray || function (obj) {
	    return toString.call(obj) === '[object Array]';
	};

	var dateNow = Date.now || function () {
	    return new Date().getTime();
	};
	exports.defineProperty = defineProperty, exports.objCreate = objCreate, exports.arrIndexOf = arrIndexOf, exports.isArray = isArray, exports.dateNow = dateNow;

	//# sourceMappingURL=es5.js.map

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";
	exports.extend = extend;
	var hop = Object.prototype.hasOwnProperty;

	function extend(obj) {
	    var sources = Array.prototype.slice.call(arguments, 1),
	        i, len, source, key;

	    for (i = 0, len = sources.length; i < len; i += 1) {
	        source = sources[i];
	        if (!source) { continue; }

	        for (key in source) {
	            if (hop.call(source, key)) {
	                obj[key] = source[key];
	            }
	        }
	    }

	    return obj;
	}
	exports.hop = hop;

	//# sourceMappingURL=utils.js.map

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";
	var src$utils$$ = __webpack_require__(115);

	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License

	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();

	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {

	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};

	var objCreate = Object.create || function (proto, props) {
	    var obj, k;

	    function F() {}
	    F.prototype = proto;
	    obj = new F();

	    for (k in props) {
	        if (src$utils$$.hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }

	    return obj;
	};
	exports.defineProperty = defineProperty, exports.objCreate = objCreate;

	//# sourceMappingURL=es5.js.map

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/

	/* jslint esnext: true */

	"use strict";
	exports["default"] = Compiler;

	function Compiler(locales, formats, pluralFn) {
	    this.locales  = locales;
	    this.formats  = formats;
	    this.pluralFn = pluralFn;
	}

	Compiler.prototype.compile = function (ast) {
	    this.pluralStack        = [];
	    this.currentPlural      = null;
	    this.pluralNumberFormat = null;

	    return this.compileMessage(ast);
	};

	Compiler.prototype.compileMessage = function (ast) {
	    if (!(ast && ast.type === 'messageFormatPattern')) {
	        throw new Error('Message AST is not of type: "messageFormatPattern"');
	    }

	    var elements = ast.elements,
	        pattern  = [];

	    var i, len, element;

	    for (i = 0, len = elements.length; i < len; i += 1) {
	        element = elements[i];

	        switch (element.type) {
	            case 'messageTextElement':
	                pattern.push(this.compileMessageText(element));
	                break;

	            case 'argumentElement':
	                pattern.push(this.compileArgument(element));
	                break;

	            default:
	                throw new Error('Message element does not have a valid type');
	        }
	    }

	    return pattern;
	};

	Compiler.prototype.compileMessageText = function (element) {
	    // When this `element` is part of plural sub-pattern and its value contains
	    // an unescaped '#', use a `PluralOffsetString` helper to properly output
	    // the number with the correct offset in the string.
	    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
	        // Create a cache a NumberFormat instance that can be reused for any
	        // PluralOffsetString instance in this message.
	        if (!this.pluralNumberFormat) {
	            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
	        }

	        return new PluralOffsetString(
	                this.currentPlural.id,
	                this.currentPlural.format.offset,
	                this.pluralNumberFormat,
	                element.value);
	    }

	    // Unescape the escaped '#'s in the message text.
	    return element.value.replace(/\\#/g, '#');
	};

	Compiler.prototype.compileArgument = function (element) {
	    var format = element.format;

	    if (!format) {
	        return new StringFormat(element.id);
	    }

	    var formats  = this.formats,
	        locales  = this.locales,
	        pluralFn = this.pluralFn,
	        options;

	    switch (format.type) {
	        case 'numberFormat':
	            options = formats.number[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.NumberFormat(locales, options).format
	            };

	        case 'dateFormat':
	            options = formats.date[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.DateTimeFormat(locales, options).format
	            };

	        case 'timeFormat':
	            options = formats.time[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.DateTimeFormat(locales, options).format
	            };

	        case 'pluralFormat':
	            options = this.compileOptions(element);
	            return new PluralFormat(
	                element.id, format.ordinal, format.offset, options, pluralFn
	            );

	        case 'selectFormat':
	            options = this.compileOptions(element);
	            return new SelectFormat(element.id, options);

	        default:
	            throw new Error('Message element does not have a valid format type');
	    }
	};

	Compiler.prototype.compileOptions = function (element) {
	    var format      = element.format,
	        options     = format.options,
	        optionsHash = {};

	    // Save the current plural element, if any, then set it to a new value when
	    // compiling the options sub-patterns. This conforms the spec's algorithm
	    // for handling `"#"` syntax in message text.
	    this.pluralStack.push(this.currentPlural);
	    this.currentPlural = format.type === 'pluralFormat' ? element : null;

	    var i, len, option;

	    for (i = 0, len = options.length; i < len; i += 1) {
	        option = options[i];

	        // Compile the sub-pattern and save it under the options's selector.
	        optionsHash[option.selector] = this.compileMessage(option.value);
	    }

	    // Pop the plural stack to put back the original current plural value.
	    this.currentPlural = this.pluralStack.pop();

	    return optionsHash;
	};

	// -- Compiler Helper Classes --------------------------------------------------

	function StringFormat(id) {
	    this.id = id;
	}

	StringFormat.prototype.format = function (value) {
	    if (!value) {
	        return '';
	    }

	    return typeof value === 'string' ? value : String(value);
	};

	function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
	    this.id         = id;
	    this.useOrdinal = useOrdinal;
	    this.offset     = offset;
	    this.options    = options;
	    this.pluralFn   = pluralFn;
	}

	PluralFormat.prototype.getOption = function (value) {
	    var options = this.options;

	    var option = options['=' + value] ||
	            options[this.pluralFn(value - this.offset, this.useOrdinal)];

	    return option || options.other;
	};

	function PluralOffsetString(id, offset, numberFormat, string) {
	    this.id           = id;
	    this.offset       = offset;
	    this.numberFormat = numberFormat;
	    this.string       = string;
	}

	PluralOffsetString.prototype.format = function (value) {
	    var number = this.numberFormat.format(value - this.offset);

	    return this.string
	            .replace(/(^|[^\\])#/g, '$1' + number)
	            .replace(/\\#/g, '#');
	};

	function SelectFormat(id, options) {
	    this.id      = id;
	    this.options = options;
	}

	SelectFormat.prototype.getOption = function (value) {
	    var options = this.options;
	    return options[value] || options.other;
	};

	//# sourceMappingURL=compiler.js.map

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License

	var hop = Object.prototype.hasOwnProperty;

	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();

	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {

	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};

	var objCreate = Object.create || function (proto, props) {
	    var obj, k;

	    function F() {}
	    F.prototype = proto;
	    obj = new F();

	    for (k in props) {
	        if (hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }

	    return obj;
	};
	exports.defineProperty = defineProperty, exports.objCreate = objCreate;

	//# sourceMappingURL=es5.js.map

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports = module.exports = __webpack_require__(121)['default'];
	exports['default'] = exports;


/***/ },
/* 120 */
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
	    if (queue.length === 1 && !draining) {
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


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports["default"] = (function() {
	  /*
	   * Generated by PEG.js 0.8.0.
	   *
	   * http://pegjs.majda.cz/
	   */

	  function peg$subclass(child, parent) {
	    function ctor() { this.constructor = child; }
	    ctor.prototype = parent.prototype;
	    child.prototype = new ctor();
	  }

	  function SyntaxError(message, expected, found, offset, line, column) {
	    this.message  = message;
	    this.expected = expected;
	    this.found    = found;
	    this.offset   = offset;
	    this.line     = line;
	    this.column   = column;

	    this.name     = "SyntaxError";
	  }

	  peg$subclass(SyntaxError, Error);

	  function parse(input) {
	    var options = arguments.length > 1 ? arguments[1] : {},

	        peg$FAILED = {},

	        peg$startRuleFunctions = { start: peg$parsestart },
	        peg$startRuleFunction  = peg$parsestart,

	        peg$c0 = [],
	        peg$c1 = function(elements) {
	                return {
	                    type    : 'messageFormatPattern',
	                    elements: elements
	                };
	            },
	        peg$c2 = peg$FAILED,
	        peg$c3 = function(text) {
	                var string = '',
	                    i, j, outerLen, inner, innerLen;

	                for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
	                    inner = text[i];

	                    for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
	                        string += inner[j];
	                    }
	                }

	                return string;
	            },
	        peg$c4 = function(messageText) {
	                return {
	                    type : 'messageTextElement',
	                    value: messageText
	                };
	            },
	        peg$c5 = /^[^ \t\n\r,.+={}#]/,
	        peg$c6 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
	        peg$c7 = "{",
	        peg$c8 = { type: "literal", value: "{", description: "\"{\"" },
	        peg$c9 = null,
	        peg$c10 = ",",
	        peg$c11 = { type: "literal", value: ",", description: "\",\"" },
	        peg$c12 = "}",
	        peg$c13 = { type: "literal", value: "}", description: "\"}\"" },
	        peg$c14 = function(id, format) {
	                return {
	                    type  : 'argumentElement',
	                    id    : id,
	                    format: format && format[2]
	                };
	            },
	        peg$c15 = "number",
	        peg$c16 = { type: "literal", value: "number", description: "\"number\"" },
	        peg$c17 = "date",
	        peg$c18 = { type: "literal", value: "date", description: "\"date\"" },
	        peg$c19 = "time",
	        peg$c20 = { type: "literal", value: "time", description: "\"time\"" },
	        peg$c21 = function(type, style) {
	                return {
	                    type : type + 'Format',
	                    style: style && style[2]
	                };
	            },
	        peg$c22 = "plural",
	        peg$c23 = { type: "literal", value: "plural", description: "\"plural\"" },
	        peg$c24 = function(pluralStyle) {
	                return {
	                    type   : pluralStyle.type,
	                    ordinal: false,
	                    offset : pluralStyle.offset || 0,
	                    options: pluralStyle.options
	                };
	            },
	        peg$c25 = "selectordinal",
	        peg$c26 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
	        peg$c27 = function(pluralStyle) {
	                return {
	                    type   : pluralStyle.type,
	                    ordinal: true,
	                    offset : pluralStyle.offset || 0,
	                    options: pluralStyle.options
	                }
	            },
	        peg$c28 = "select",
	        peg$c29 = { type: "literal", value: "select", description: "\"select\"" },
	        peg$c30 = function(options) {
	                return {
	                    type   : 'selectFormat',
	                    options: options
	                };
	            },
	        peg$c31 = "=",
	        peg$c32 = { type: "literal", value: "=", description: "\"=\"" },
	        peg$c33 = function(selector, pattern) {
	                return {
	                    type    : 'optionalFormatPattern',
	                    selector: selector,
	                    value   : pattern
	                };
	            },
	        peg$c34 = "offset:",
	        peg$c35 = { type: "literal", value: "offset:", description: "\"offset:\"" },
	        peg$c36 = function(number) {
	                return number;
	            },
	        peg$c37 = function(offset, options) {
	                return {
	                    type   : 'pluralFormat',
	                    offset : offset,
	                    options: options
	                };
	            },
	        peg$c38 = { type: "other", description: "whitespace" },
	        peg$c39 = /^[ \t\n\r]/,
	        peg$c40 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
	        peg$c41 = { type: "other", description: "optionalWhitespace" },
	        peg$c42 = /^[0-9]/,
	        peg$c43 = { type: "class", value: "[0-9]", description: "[0-9]" },
	        peg$c44 = /^[0-9a-f]/i,
	        peg$c45 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
	        peg$c46 = "0",
	        peg$c47 = { type: "literal", value: "0", description: "\"0\"" },
	        peg$c48 = /^[1-9]/,
	        peg$c49 = { type: "class", value: "[1-9]", description: "[1-9]" },
	        peg$c50 = function(digits) {
	            return parseInt(digits, 10);
	        },
	        peg$c51 = /^[^{}\\\0-\x1F \t\n\r]/,
	        peg$c52 = { type: "class", value: "[^{}\\\\\\0-\\x1F \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F \\t\\n\\r]" },
	        peg$c53 = "\\#",
	        peg$c54 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
	        peg$c55 = function() { return '\\#'; },
	        peg$c56 = "\\{",
	        peg$c57 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
	        peg$c58 = function() { return '\u007B'; },
	        peg$c59 = "\\}",
	        peg$c60 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
	        peg$c61 = function() { return '\u007D'; },
	        peg$c62 = "\\u",
	        peg$c63 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
	        peg$c64 = function(digits) {
	                return String.fromCharCode(parseInt(digits, 16));
	            },
	        peg$c65 = function(chars) { return chars.join(''); },

	        peg$currPos          = 0,
	        peg$reportedPos      = 0,
	        peg$cachedPos        = 0,
	        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
	        peg$maxFailPos       = 0,
	        peg$maxFailExpected  = [],
	        peg$silentFails      = 0,

	        peg$result;

	    if ("startRule" in options) {
	      if (!(options.startRule in peg$startRuleFunctions)) {
	        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	      }

	      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	    }

	    function text() {
	      return input.substring(peg$reportedPos, peg$currPos);
	    }

	    function offset() {
	      return peg$reportedPos;
	    }

	    function line() {
	      return peg$computePosDetails(peg$reportedPos).line;
	    }

	    function column() {
	      return peg$computePosDetails(peg$reportedPos).column;
	    }

	    function expected(description) {
	      throw peg$buildException(
	        null,
	        [{ type: "other", description: description }],
	        peg$reportedPos
	      );
	    }

	    function error(message) {
	      throw peg$buildException(message, null, peg$reportedPos);
	    }

	    function peg$computePosDetails(pos) {
	      function advance(details, startPos, endPos) {
	        var p, ch;

	        for (p = startPos; p < endPos; p++) {
	          ch = input.charAt(p);
	          if (ch === "\n") {
	            if (!details.seenCR) { details.line++; }
	            details.column = 1;
	            details.seenCR = false;
	          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
	            details.line++;
	            details.column = 1;
	            details.seenCR = true;
	          } else {
	            details.column++;
	            details.seenCR = false;
	          }
	        }
	      }

	      if (peg$cachedPos !== pos) {
	        if (peg$cachedPos > pos) {
	          peg$cachedPos = 0;
	          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
	        }
	        advance(peg$cachedPosDetails, peg$cachedPos, pos);
	        peg$cachedPos = pos;
	      }

	      return peg$cachedPosDetails;
	    }

	    function peg$fail(expected) {
	      if (peg$currPos < peg$maxFailPos) { return; }

	      if (peg$currPos > peg$maxFailPos) {
	        peg$maxFailPos = peg$currPos;
	        peg$maxFailExpected = [];
	      }

	      peg$maxFailExpected.push(expected);
	    }

	    function peg$buildException(message, expected, pos) {
	      function cleanupExpected(expected) {
	        var i = 1;

	        expected.sort(function(a, b) {
	          if (a.description < b.description) {
	            return -1;
	          } else if (a.description > b.description) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });

	        while (i < expected.length) {
	          if (expected[i - 1] === expected[i]) {
	            expected.splice(i, 1);
	          } else {
	            i++;
	          }
	        }
	      }

	      function buildMessage(expected, found) {
	        function stringEscape(s) {
	          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

	          return s
	            .replace(/\\/g,   '\\\\')
	            .replace(/"/g,    '\\"')
	            .replace(/\x08/g, '\\b')
	            .replace(/\t/g,   '\\t')
	            .replace(/\n/g,   '\\n')
	            .replace(/\f/g,   '\\f')
	            .replace(/\r/g,   '\\r')
	            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
	            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
	            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
	            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
	        }

	        var expectedDescs = new Array(expected.length),
	            expectedDesc, foundDesc, i;

	        for (i = 0; i < expected.length; i++) {
	          expectedDescs[i] = expected[i].description;
	        }

	        expectedDesc = expected.length > 1
	          ? expectedDescs.slice(0, -1).join(", ")
	              + " or "
	              + expectedDescs[expected.length - 1]
	          : expectedDescs[0];

	        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

	        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
	      }

	      var posDetails = peg$computePosDetails(pos),
	          found      = pos < input.length ? input.charAt(pos) : null;

	      if (expected !== null) {
	        cleanupExpected(expected);
	      }

	      return new SyntaxError(
	        message !== null ? message : buildMessage(expected, found),
	        expected,
	        found,
	        pos,
	        posDetails.line,
	        posDetails.column
	      );
	    }

	    function peg$parsestart() {
	      var s0;

	      s0 = peg$parsemessageFormatPattern();

	      return s0;
	    }

	    function peg$parsemessageFormatPattern() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsemessageFormatElement();
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsemessageFormatElement();
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c1(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsemessageFormatElement() {
	      var s0;

	      s0 = peg$parsemessageTextElement();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseargumentElement();
	      }

	      return s0;
	    }

	    function peg$parsemessageText() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$currPos;
	      s3 = peg$parse_();
	      if (s3 !== peg$FAILED) {
	        s4 = peg$parsechars();
	        if (s4 !== peg$FAILED) {
	          s5 = peg$parse_();
	          if (s5 !== peg$FAILED) {
	            s3 = [s3, s4, s5];
	            s2 = s3;
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        } else {
	          peg$currPos = s2;
	          s2 = peg$c2;
	        }
	      } else {
	        peg$currPos = s2;
	        s2 = peg$c2;
	      }
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$currPos;
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parsechars();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s3 = [s3, s4, s5];
	                s2 = s3;
	              } else {
	                peg$currPos = s2;
	                s2 = peg$c2;
	              }
	            } else {
	              peg$currPos = s2;
	              s2 = peg$c2;
	            }
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c3(s1);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = peg$parsews();
	        if (s1 !== peg$FAILED) {
	          s1 = input.substring(s0, peg$currPos);
	        }
	        s0 = s1;
	      }

	      return s0;
	    }

	    function peg$parsemessageTextElement() {
	      var s0, s1;

	      s0 = peg$currPos;
	      s1 = peg$parsemessageText();
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c4(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parseargument() {
	      var s0, s1, s2;

	      s0 = peg$parsenumber();
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = [];
	        if (peg$c5.test(input.charAt(peg$currPos))) {
	          s2 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c6); }
	        }
	        if (s2 !== peg$FAILED) {
	          while (s2 !== peg$FAILED) {
	            s1.push(s2);
	            if (peg$c5.test(input.charAt(peg$currPos))) {
	              s2 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s2 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c6); }
	            }
	          }
	        } else {
	          s1 = peg$c2;
	        }
	        if (s1 !== peg$FAILED) {
	          s1 = input.substring(s0, peg$currPos);
	        }
	        s0 = s1;
	      }

	      return s0;
	    }

	    function peg$parseargumentElement() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 123) {
	        s1 = peg$c7;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c8); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseargument();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$currPos;
	              if (input.charCodeAt(peg$currPos) === 44) {
	                s6 = peg$c10;
	                peg$currPos++;
	              } else {
	                s6 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c11); }
	              }
	              if (s6 !== peg$FAILED) {
	                s7 = peg$parse_();
	                if (s7 !== peg$FAILED) {
	                  s8 = peg$parseelementFormat();
	                  if (s8 !== peg$FAILED) {
	                    s6 = [s6, s7, s8];
	                    s5 = s6;
	                  } else {
	                    peg$currPos = s5;
	                    s5 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s5;
	                  s5 = peg$c2;
	                }
	              } else {
	                peg$currPos = s5;
	                s5 = peg$c2;
	              }
	              if (s5 === peg$FAILED) {
	                s5 = peg$c9;
	              }
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parse_();
	                if (s6 !== peg$FAILED) {
	                  if (input.charCodeAt(peg$currPos) === 125) {
	                    s7 = peg$c12;
	                    peg$currPos++;
	                  } else {
	                    s7 = peg$FAILED;
	                    if (peg$silentFails === 0) { peg$fail(peg$c13); }
	                  }
	                  if (s7 !== peg$FAILED) {
	                    peg$reportedPos = s0;
	                    s1 = peg$c14(s3, s5);
	                    s0 = s1;
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseelementFormat() {
	      var s0;

	      s0 = peg$parsesimpleFormat();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsepluralFormat();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseselectOrdinalFormat();
	          if (s0 === peg$FAILED) {
	            s0 = peg$parseselectFormat();
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parsesimpleFormat() {
	      var s0, s1, s2, s3, s4, s5, s6;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c15) {
	        s1 = peg$c15;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c16); }
	      }
	      if (s1 === peg$FAILED) {
	        if (input.substr(peg$currPos, 4) === peg$c17) {
	          s1 = peg$c17;
	          peg$currPos += 4;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c18); }
	        }
	        if (s1 === peg$FAILED) {
	          if (input.substr(peg$currPos, 4) === peg$c19) {
	            s1 = peg$c19;
	            peg$currPos += 4;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c20); }
	          }
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s4 = peg$c10;
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s4 !== peg$FAILED) {
	            s5 = peg$parse_();
	            if (s5 !== peg$FAILED) {
	              s6 = peg$parsechars();
	              if (s6 !== peg$FAILED) {
	                s4 = [s4, s5, s6];
	                s3 = s4;
	              } else {
	                peg$currPos = s3;
	                s3 = peg$c2;
	              }
	            } else {
	              peg$currPos = s3;
	              s3 = peg$c2;
	            }
	          } else {
	            peg$currPos = s3;
	            s3 = peg$c2;
	          }
	          if (s3 === peg$FAILED) {
	            s3 = peg$c9;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c21(s1, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parsepluralFormat() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c22) {
	        s1 = peg$c22;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c23); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parsepluralStyle();
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c24(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseselectOrdinalFormat() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 13) === peg$c25) {
	        s1 = peg$c25;
	        peg$currPos += 13;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c26); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parsepluralStyle();
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c27(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseselectFormat() {
	      var s0, s1, s2, s3, s4, s5, s6;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c28) {
	        s1 = peg$c28;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c29); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = [];
	              s6 = peg$parseoptionalFormatPattern();
	              if (s6 !== peg$FAILED) {
	                while (s6 !== peg$FAILED) {
	                  s5.push(s6);
	                  s6 = peg$parseoptionalFormatPattern();
	                }
	              } else {
	                s5 = peg$c2;
	              }
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c30(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseselector() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      s1 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 61) {
	        s2 = peg$c31;
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c32); }
	      }
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parsenumber();
	        if (s3 !== peg$FAILED) {
	          s2 = [s2, s3];
	          s1 = s2;
	        } else {
	          peg$currPos = s1;
	          s1 = peg$c2;
	        }
	      } else {
	        peg$currPos = s1;
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        s1 = input.substring(s0, peg$currPos);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsechars();
	      }

	      return s0;
	    }

	    function peg$parseoptionalFormatPattern() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseselector();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 123) {
	              s4 = peg$c7;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c8); }
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parsemessageFormatPattern();
	                if (s6 !== peg$FAILED) {
	                  s7 = peg$parse_();
	                  if (s7 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 125) {
	                      s8 = peg$c12;
	                      peg$currPos++;
	                    } else {
	                      s8 = peg$FAILED;
	                      if (peg$silentFails === 0) { peg$fail(peg$c13); }
	                    }
	                    if (s8 !== peg$FAILED) {
	                      peg$reportedPos = s0;
	                      s1 = peg$c33(s2, s6);
	                      s0 = s1;
	                    } else {
	                      peg$currPos = s0;
	                      s0 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parseoffset() {
	      var s0, s1, s2, s3;

	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 7) === peg$c34) {
	        s1 = peg$c34;
	        peg$currPos += 7;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c35); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parsenumber();
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c36(s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parsepluralStyle() {
	      var s0, s1, s2, s3, s4;

	      s0 = peg$currPos;
	      s1 = peg$parseoffset();
	      if (s1 === peg$FAILED) {
	        s1 = peg$c9;
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          s4 = peg$parseoptionalFormatPattern();
	          if (s4 !== peg$FAILED) {
	            while (s4 !== peg$FAILED) {
	              s3.push(s4);
	              s4 = peg$parseoptionalFormatPattern();
	            }
	          } else {
	            s3 = peg$c2;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c37(s1, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }

	      return s0;
	    }

	    function peg$parsews() {
	      var s0, s1;

	      peg$silentFails++;
	      s0 = [];
	      if (peg$c39.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c40); }
	      }
	      if (s1 !== peg$FAILED) {
	        while (s1 !== peg$FAILED) {
	          s0.push(s1);
	          if (peg$c39.test(input.charAt(peg$currPos))) {
	            s1 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c40); }
	          }
	        }
	      } else {
	        s0 = peg$c2;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c38); }
	      }

	      return s0;
	    }

	    function peg$parse_() {
	      var s0, s1, s2;

	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsews();
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsews();
	      }
	      if (s1 !== peg$FAILED) {
	        s1 = input.substring(s0, peg$currPos);
	      }
	      s0 = s1;
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c41); }
	      }

	      return s0;
	    }

	    function peg$parsedigit() {
	      var s0;

	      if (peg$c42.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c43); }
	      }

	      return s0;
	    }

	    function peg$parsehexDigit() {
	      var s0;

	      if (peg$c44.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c45); }
	      }

	      return s0;
	    }

	    function peg$parsenumber() {
	      var s0, s1, s2, s3, s4, s5;

	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 48) {
	        s1 = peg$c46;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c47); }
	      }
	      if (s1 === peg$FAILED) {
	        s1 = peg$currPos;
	        s2 = peg$currPos;
	        if (peg$c48.test(input.charAt(peg$currPos))) {
	          s3 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s3 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c49); }
	        }
	        if (s3 !== peg$FAILED) {
	          s4 = [];
	          s5 = peg$parsedigit();
	          while (s5 !== peg$FAILED) {
	            s4.push(s5);
	            s5 = peg$parsedigit();
	          }
	          if (s4 !== peg$FAILED) {
	            s3 = [s3, s4];
	            s2 = s3;
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        } else {
	          peg$currPos = s2;
	          s2 = peg$c2;
	        }
	        if (s2 !== peg$FAILED) {
	          s2 = input.substring(s1, peg$currPos);
	        }
	        s1 = s2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c50(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    function peg$parsechar() {
	      var s0, s1, s2, s3, s4, s5, s6, s7;

	      if (peg$c51.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c52); }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 2) === peg$c53) {
	          s1 = peg$c53;
	          peg$currPos += 2;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c54); }
	        }
	        if (s1 !== peg$FAILED) {
	          peg$reportedPos = s0;
	          s1 = peg$c55();
	        }
	        s0 = s1;
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.substr(peg$currPos, 2) === peg$c56) {
	            s1 = peg$c56;
	            peg$currPos += 2;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c57); }
	          }
	          if (s1 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c58();
	          }
	          s0 = s1;
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 2) === peg$c59) {
	              s1 = peg$c59;
	              peg$currPos += 2;
	            } else {
	              s1 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c60); }
	            }
	            if (s1 !== peg$FAILED) {
	              peg$reportedPos = s0;
	              s1 = peg$c61();
	            }
	            s0 = s1;
	            if (s0 === peg$FAILED) {
	              s0 = peg$currPos;
	              if (input.substr(peg$currPos, 2) === peg$c62) {
	                s1 = peg$c62;
	                peg$currPos += 2;
	              } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c63); }
	              }
	              if (s1 !== peg$FAILED) {
	                s2 = peg$currPos;
	                s3 = peg$currPos;
	                s4 = peg$parsehexDigit();
	                if (s4 !== peg$FAILED) {
	                  s5 = peg$parsehexDigit();
	                  if (s5 !== peg$FAILED) {
	                    s6 = peg$parsehexDigit();
	                    if (s6 !== peg$FAILED) {
	                      s7 = peg$parsehexDigit();
	                      if (s7 !== peg$FAILED) {
	                        s4 = [s4, s5, s6, s7];
	                        s3 = s4;
	                      } else {
	                        peg$currPos = s3;
	                        s3 = peg$c2;
	                      }
	                    } else {
	                      peg$currPos = s3;
	                      s3 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s3;
	                    s3 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s3;
	                  s3 = peg$c2;
	                }
	                if (s3 !== peg$FAILED) {
	                  s3 = input.substring(s2, peg$currPos);
	                }
	                s2 = s3;
	                if (s2 !== peg$FAILED) {
	                  peg$reportedPos = s0;
	                  s1 = peg$c64(s2);
	                  s0 = s1;
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            }
	          }
	        }
	      }

	      return s0;
	    }

	    function peg$parsechars() {
	      var s0, s1, s2;

	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsechar();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parsechar();
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c65(s1);
	      }
	      s0 = s1;

	      return s0;
	    }

	    peg$result = peg$startRuleFunction();

	    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	      return peg$result;
	    } else {
	      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	        peg$fail({ type: "end", description: "end of input" });
	      }

	      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
	    }
	  }

	  return {
	    SyntaxError: SyntaxError,
	    parse:       parse
	  };
	})();

	//# sourceMappingURL=parser.js.map

/***/ }
/******/ ]);