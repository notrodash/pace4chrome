/*
 *	The MIT License (MIT)
 *
 *	Copyright (c) 2014 Niklas Vangerow
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:
 *
 *	The above copyright notice and this permission notice shall be included in all
 *	copies or substantial portions of the Software.
 *
 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *	SOFTWARE.
 */
var presets = [
	".pace .pace-progress {\n  background: `args.color || \"#29d\"`;\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  left: 0;\n  height: 2px;\n\n  -webkit-transition: width 1s;\n  -moz-transition: width 1s;\n  -o-transition: width 1s;\n  transition: width 1s;\n}\n\n.pace-inactive {\n  display: none;\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.pace-inactive {\n  display: none;\n}\n\n.pace .pace-progress {\n  background: `args.color || \"#29d\"`;\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  left: 0;\n  height: 2px;\n\n  -webkit-transition: width 1s;\n  -moz-transition: width 1s;\n  -o-transition: width 1s;\n  transition: width 1s;\n}\n\n.pace .pace-progress-inner {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px `args.color || '#29d'`, 0 0 5px `args.color || '#29d'`;\n  opacity: 1.0;\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n  -moz-transform: rotate(3deg) translate(0px, -4px);\n  -ms-transform: rotate(3deg) translate(0px, -4px);\n  -o-transform: rotate(3deg) translate(0px, -4px);\n  transform: rotate(3deg) translate(0px, -4px);\n}\n\n.pace .pace-activity {\n  display: block;\n  position: fixed;\n  z-index: 2000;\n  top: 15px;\n  right: 15px;\n  width: 14px;\n  height: 14px;\n  border: solid 2px transparent;\n  border-top-color: `args.color || '#29d'`;\n  border-left-color: `args.color || '#29d'`;\n  border-radius: 10px;\n  -webkit-animation: pace-spinner 400ms linear infinite;\n  -moz-animation: pace-spinner 400ms linear infinite;\n  -ms-animation: pace-spinner 400ms linear infinite;\n  -o-animation: pace-spinner 400ms linear infinite;\n  animation: pace-spinner 400ms linear infinite;\n}\n\n@-webkit-keyframes pace-spinner {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@-moz-keyframes pace-spinner {\n  0% { -moz-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -moz-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@-o-keyframes pace-spinner {\n  0% { -o-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -o-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@-ms-keyframes pace-spinner {\n  0% { -ms-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -ms-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@keyframes pace-spinner {\n  0% { transform: rotate(0deg); transform: rotate(0deg); }\n  100% { transform: rotate(360deg); transform: rotate(360deg); }\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.pace-inactive {\n  display: none;\n}\n\n.pace .pace-progress {\n  background: `args.color || \"#29d\"`;\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  left: 0;\n  height: 2px;\n\n  -webkit-transition: width 1s;\n  -moz-transition: width 1s;\n  -o-transition: width 1s;\n  transition: width 1s;\n}\n\n.pace .pace-progress-inner {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px `args.color || '#29d'`, 0 0 5px `args.color || '#29d'`;\n  opacity: 1.0;\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n  -moz-transform: rotate(3deg) translate(0px, -4px);\n  -ms-transform: rotate(3deg) translate(0px, -4px);\n  -o-transform: rotate(3deg) translate(0px, -4px);\n  transform: rotate(3deg) translate(0px, -4px);\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.pace-inactive {\n  display: none;\n}\n\n.pace .pace-progress {\n  background-color: `args.color ||\"#29d\"`;\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  left: 0;\n  height: 12px;\n  overflow: hidden;\n\n  -webkit-transition: width 1s;\n  -moz-transition: width 1s;\n  -o-transition: width 1s;\n  transition: width 1s;\n}\n\n.pace .pace-progress-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: -32px;\n  bottom: 0;\n\n  background-image: -webkit-gradient(linear, 0 100%, 100% 0, color-stop(0.25, rgba(255, 255, 255, 0.2)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.2)), color-stop(0.75, rgba(255, 255, 255, 0.2)), color-stop(0.75, transparent), to(transparent));\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n  background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);\n  -webkit-background-size: 32px 32px;\n  -moz-background-size: 32px 32px;\n  -o-background-size: 32px 32px;\n  background-size: 32px 32px;\n\n  -webkit-animation: pace-stripe-animation 500ms linear infinite;\n  -moz-animation: pace-stripe-animation 500ms linear infinite;\n  -ms-animation: pace-stripe-animation 500ms linear infinite;\n  -o-animation: pace-stripe-animation 500ms linear infinite;\n  animation: pace-stripe-animation 500ms linear infinite;\n}\n\n@-webkit-keyframes pace-stripe-animation {\n  0% { -webkit-transform: none; transform: none; }\n  100% { -webkit-transform: translate(-32px, 0); transform: translate(-32px, 0); }\n}\n@-moz-keyframes pace-stripe-animation {\n  0% { -moz-transform: none; transform: none; }\n  100% { -moz-transform: translate(-32px, 0); transform: translate(-32px, 0); }\n}\n@-o-keyframes pace-stripe-animation {\n  0% { -o-transform: none; transform: none; }\n  100% { -o-transform: translate(-32px, 0); transform: translate(-32px, 0); }\n}\n@-ms-keyframes pace-stripe-animation {\n  0% { -ms-transform: none; transform: none; }\n  100% { -ms-transform: translate(-32px, 0); transform: translate(-32px, 0); }\n}\n@keyframes pace-stripe-animation {\n  0% { transform: none; transform: none; }\n  100% { transform: translate(-32px, 0); transform: translate(-32px, 0); }\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.pace-inactive {\n  display: none;\n}\n\n.pace .pace-progress {\n  background-color: `args.color || \"#78c0f0\"`;\n\n  color: `Color(args.color || \"#78c0f0\").lighten(0.25).hexString();`;\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  left: 0;\n  height: 12px;\n  overflow: hidden;\n\n  -webkit-border-radius: 0 0 4px 0;\n  -moz-border-radius: 0 0 4px 0;\n  -o-border-radius: 0 0 4px 0;\n  border-radius: 0 0 4px 0;\n\n  -webkit-box-shadow: inset -1px 0 rgba(0, 0, 0, 0.3), inset 0 -1px rgba(0, 0, 0, 0.3), inset 0 2px rgba(255, 255, 255, 0.5), inset 0 6px rgba(255, 255, 255, 0.3);\n  -moz-box-shadow: inset -1px 0 rgba(0, 0, 0, 0.3), inset 0 -1px rgba(0, 0, 0, 0.3), inset 0 2px rgba(255, 255, 255, 0.5), inset 0 6px rgba(255, 255, 255, 0.3);\n  -o-box-shadow: inset -1px 0 rgba(0, 0, 0, 0.3), inset 0 -1px rgba(0, 0, 0, 0.3), inset 0 2px rgba(255, 255, 255, 0.5), inset 0 6px rgba(255, 255, 255, 0.3);\n  box-shadow: inset -1px 0 rgba(0, 0, 0, 0.3), inset 0 -1px rgba(0, 0, 0, 0.3), inset 0 2px rgba(255, 255, 255, 0.5), inset 0 6px rgba(255, 255, 255, 0.3);\n\n  -webkit-transition: width 1s;\n  -moz-transition: width 1s;\n  -o-transition: width 1s;\n  transition: width 1s;\n}\n\n.pace .pace-progress-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: -28px;\n  bottom: 0;\n\n  `var out = '';var prefixes = ['-o-', '-moz-', '-webkit-', ''];var baseColor = args.color || '#78c0f0';var startColor = Color(baseColor).darken(0.3).clearer(0.4);var endColor = Color(baseColor).clearer(1);for(var i in prefixes){var prefix = prefixes[i];out += \"  background-image: \" + prefix + \"radial-gradient(\" + startColor.rgbString() + \" 0%, \" + endColor.rgbString() + \" 100%);\";};return out.substring(2);`\n\n  -webkit-background-size: 28px 100%;\n  -moz-background-size: 28px 100%;\n  -o-background-size: 28px 100%;\n  background-size: 28px 100%;\n\n  -webkit-animation: pace-stripe-animation 500ms linear infinite;\n  -moz-animation: pace-stripe-animation 500ms linear infinite;\n  -ms-animation: pace-stripe-animation 500ms linear infinite;\n  -o-animation: pace-stripe-animation 500ms linear infinite;\n  animation: pace-stripe-animation 500ms linear infinite;\n}\n\n@-webkit-keyframes pace-stripe-animation {\n  0% { -webkit-transform: none; transform: none; }\n  100% { -webkit-transform: translate(-28px, 0); transform: translate(-28px, 0); }\n}\n@-moz-keyframes pace-stripe-animation {\n  0% { -moz-transform: none; transform: none; }\n  100% { -moz-transform: translate(-28px, 0); transform: translate(-28px, 0); }\n}\n@-o-keyframes pace-stripe-animation {\n  0% { -o-transform: none; transform: none; }\n  100% { -o-transform: translate(-28px, 0); transform: translate(-28px, 0); }\n}\n@-ms-keyframes pace-stripe-animation {\n  0% { -ms-transform: none; transform: none; }\n  100% { -ms-transform: translate(-28px, 0); transform: translate(-28px, 0); }\n}\n@keyframes pace-stripe-animation {\n  0% { transform: none; transform: none; }\n  100% { transform: translate(-28px, 0); transform: translate(-28px, 0); }\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.pace .pace-progress {\n  background-color: `Color(args.color).clearer(0.8).rgbString() || \"rgba(0, 0, 0, 0.2)\"`;\n  position: fixed;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  bottom: 0;\n\n  -webkit-transition: width 1s;\n  -moz-transition: width 1s;\n  -o-transition: width 1s;\n  transition: width 1s;\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.pace .pace-progress {\n  display: block;\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  left: 0;\n  height: 12px;\n  background: `args.color || \"#29d\"`;\n\n  -webkit-transition: -webkit-transform .3s, width 1s;\n  -moz-transition: width 1s;\n  -o-transform: width 1s;\n  transition: transform .3s, width 1s;\n\n  -webkit-transform: translateY(-50px);\n  transform: translateY(-50px);\n\n  pointer-events: none;\n}\n\n.pace.pace-active .pace-progress {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.pace.pace-inactive .pace-progress {\n  display: none;\n}\n\n.pace .pace-progress {\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  right: 0;\n  height: 5rem;\n  width: 5rem;\n}\n\n.pace .pace-progress:after {\n  display: block;\n  position: absolute;\n  top: 0;\n  right: .5rem;\n  content: attr(data-progress-text);\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-weight: 100;\n  font-size: 5rem;\n  line-height: 1;\n  text-align: right;\n  color: `Color(args.color || '#000').clearer(0.8).rgbString()`;\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.pace .pace-activity {\n  display: block;\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  right: 0;\n  width: 300px;\n  height: 300px;\n  background: `args.color || \"#29d\"`;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  -webkit-transform: translateX(100%) translateY(-100%) rotate(45deg);\n  transform: translateX(100%) translateY(-100%) rotate(45deg);\n  pointer-events: none;\n}\n\n.pace.pace-active .pace-activity {\n  -webkit-transform: translateX(50%) translateY(-50%) rotate(45deg);\n  transform: translateX(50%) translateY(-50%) rotate(45deg);\n}\n\n.pace .pace-activity::before,\n.pace .pace-activity::after {\n    position: absolute;\n    bottom: 30px;\n    left: 50%;\n    display: block;\n    border: 5px solid #fff;\n    border-radius: 50%;\n    content: '';\n}\n\n.pace .pace-activity::before {\n    margin-left: -40px;\n    width: 80px;\n    height: 80px;\n    border-right-color: rgba(0, 0, 0, .2);\n    border-left-color: rgba(0, 0, 0, .2);\n    -webkit-animation: pace-rotation 3s linear infinite;\n    animation: pace-rotation 3s linear infinite;\n}\n\n.pace .pace-activity::after {\n    bottom: 50px;\n    margin-left: -20px;\n    width: 40px;\n    height: 40px;\n    border-top-color: rgba(0, 0, 0, .2);\n    border-bottom-color: rgba(0, 0, 0, .2);\n    -webkit-animation: pace-rotation 1s linear infinite;\n    animation: pace-rotation 1s linear infinite;\n}\n\n@-webkit-keyframes pace-rotation {\n  0% { -webkit-transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(359deg); }\n}\n@keyframes pace-rotation {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(359deg); }\n}",
	".pace {\n  width: 140px;\n  height: 300px;\n  position: fixed;\n  top: -90px;\n  right: -20px;\n  z-index: 2000;\n  -webkit-transform: scale(0);\n  -moz-transform: scale(0);\n  -ms-transform: scale(0);\n  -o-transform: scale(0);\n  transform: scale(0);\n  opacity: 0;\n  -webkit-transition: all 2s linear 0s;\n  -moz-transition: all 2s linear 0s;\n  transition: all 2s linear 0s;\n}\n\n.pace.pace-active {\n  -webkit-transform: scale(.25);\n  -moz-transform: scale(.25);\n  -ms-transform: scale(.25);\n  -o-transform: scale(.25);\n  transform: scale(.25);\n  opacity: 1;\n}\n\n.pace .pace-activity {\n  width: 140px;\n  height: 140px;\n  border-radius: 70px;\n  background: `args.color || \"#29d\"`;\n  position: absolute;\n  top: 0;\n  z-index: 1911;\n  -webkit-animation: pace-bounce 1s infinite;\n  -moz-animation: pace-bounce 1s infinite;\n  -o-animation: pace-bounce 1s infinite;\n  -ms-animation: pace-bounce 1s infinite;\n  animation: pace-bounce 1s infinite;\n}\n\n.pace .pace-progress {\n  position: absolute;\n  display: block;\n  left: 50%;\n  bottom: 0;\n  z-index: 1910;\n  margin-left: -30px;\n  width: 60px;\n  height: 75px;\n  background: rgba(20, 20, 20, .1);\n  box-shadow: 0 0 20px 35px rgba(20, 20, 20, .1);\n  border-radius: 30px / 40px;\n  -webkit-transform: scaleY(.3);\n  -moz-transform: scaleY(.3);\n  -ms-transform: scaleY(.3);\n  -o-transform: scaleY(.3);\n  transform: scaleY(.3);\n  -webkit-animation: pace-compress .5s infinite alternate;\n  -moz-animation: pace-compress .5s infinite alternate;\n  -o-animation: pace-compress .5s infinite alternate;\n  -ms-animation: pace-compress .5s infinite alternate;\n  animation: pace-compress .5s infinite alternate;\n}\n\n@-webkit-keyframes pace-bounce {\n  0% {\n    top: 0;\n    -webkit-animation-timing-function: ease-in;\n  }\n  40% {}\n  50% {\n    top: 140px;\n    height: 140px;\n    -webkit-animation-timing-function: ease-out;\n  }\n  55% {\n    top: 160px;\n    height: 120px;\n    border-radius: 70px / 60px;\n    -webkit-animation-timing-function: ease-in;\n  }\n  65% {\n    top: 120px;\n    height: 140px;\n    border-radius: 70px;\n    -webkit-animation-timing-function: ease-out;\n  }\n  95% {\n    top: 0;\n    -webkit-animation-timing-function: ease-in;\n  }\n  100% {\n    top: 0;\n    -webkit-animation-timing-function: ease-in;\n  }\n}\n\n@-moz-keyframes pace-bounce {\n  0% {\n    top: 0;\n    -moz-animation-timing-function: ease-in;\n  }\n  40% {}\n  50% {\n    top: 140px;\n    height: 140px;\n    -moz-animation-timing-function: ease-out;\n  }\n  55% {\n    top: 160px;\n    height: 120px;\n    border-radius: 70px / 60px;\n    -moz-animation-timing-function: ease-in;\n  }\n  65% {\n    top: 120px;\n    height: 140px;\n    border-radius: 70px;\n    -moz-animation-timing-function: ease-out;}\n  95% {\n    top: 0;\n    -moz-animation-timing-function: ease-in;\n  }\n  100% {top: 0;\n    -moz-animation-timing-function: ease-in;\n  }\n}\n\n@keyframes pace-bounce {\n  0% {\n    top: 0;\n    animation-timing-function: ease-in;\n  }\n  50% {\n    top: 140px;\n    height: 140px;\n    animation-timing-function: ease-out;\n  }\n  55% {\n    top: 160px;\n    height: 120px;\n    border-radius: 70px / 60px;\n    animation-timing-function: ease-in;\n  }\n  65% {\n    top: 120px;\n    height: 140px;\n    border-radius: 70px;\n    animation-timing-function: ease-out;\n  }\n  95% {\n    top: 0;\n    animation-timing-function: ease-in;\n  }\n  100% {\n    top: 0;\n    animation-timing-function: ease-in;\n  }\n}\n\n@-webkit-keyframes pace-compress {\n  0% {\n    bottom: 0;\n    margin-left: -30px;\n    width: 60px;\n    height: 75px;\n    background: rgba(20, 20, 20, .1);\n    box-shadow: 0 0 20px 35px rgba(20, 20, 20, .1);\n    border-radius: 30px / 40px;\n    -webkit-animation-timing-function: ease-in;\n  }\n  100% {\n    bottom: 30px;\n    margin-left: -10px;\n    width: 20px;\n    height: 5px;\n    background: rgba(20, 20, 20, .3);\n    box-shadow: 0 0 20px 35px rgba(20, 20, 20, .3);\n    border-radius: 20px / 20px;\n    -webkit-animation-timing-function: ease-out;\n  }\n}\n\n@-moz-keyframes pace-compress {\n  0% {\n    bottom: 0;\n    margin-left: -30px;\n    width: 60px;\n    height: 75px;\n    background: rgba(20, 20, 20, .1);\n    box-shadow: 0 0 20px 35px rgba(20, 20, 20, .1);\n    border-radius: 30px / 40px;\n    -moz-animation-timing-function: ease-in;\n  }\n  100% {\n    bottom: 30px;\n    margin-left: -10px;\n    width: 20px;\n    height: 5px;\n    background: rgba(20, 20, 20, .3);\n    box-shadow: 0 0 20px 35px rgba(20, 20, 20, .3);\n    border-radius: 20px / 20px;\n    -moz-animation-timing-function: ease-out;\n  }\n}\n\n@keyframes pace-compress {\n  0% {\n    bottom: 0;\n    margin-left: -30px;\n    width: 60px;\n    height: 75px;\n    background: rgba(20, 20, 20, .1);\n    box-shadow: 0 0 20px 35px rgba(20, 20, 20, .1);\n    border-radius: 30px / 40px;\n    animation-timing-function: ease-in;\n  }\n  100% {\n    bottom: 30px;\n    margin-left: -10px;\n    width: 20px;\n    height: 5px;\n    background: rgba(20, 20, 20, .3);\n    box-shadow: 0 0 20px 35px rgba(20, 20, 20, .3);\n    border-radius: 20px / 20px;\n    animation-timing-function: ease-out;\n  }\n}",
	".pace {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  box-sizing: border-box;\n\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  border-radius: 10px;\n\n  -moz-background-clip: padding;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n\n  z-index: 2000;\n  position: fixed;\n  margin: auto;\n  top: 12px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 200px;\n  height: 25px;\n  border: 2px solid `args.color || \"#29d\"`;\n  background-color: #fff;\n}\n\n.pace .pace-progress {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  box-sizing: border-box;\n\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n\n  -webkit-transition: width 1s ease-in-out 1s linear;\n  -moz-transition: width 1s ease-in-out 1s linear;\n  -ms-transition: width 1s ease-in-out 1s linear;\n  -o-transition: width 1s ease-in-out 1s linear;\n  transition: width 1s ease-in-out 1s linear;\n\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n\n  max-width: 190px;\n  position: fixed;\n  z-index: 2000;\n  display: block;\n  position: absolute;\n  left: 3px;\n  top: 3px;\n  height: 15px;\n  font-size: 12px;\n  background: `args.color || \"#29d\"`;\n  color: `args.color || \"#29d\"`;\n  line-height: 60px;\n  font-weight: bold;\n  font-family:  Helvetica, Arial, \"Lucida Grande\", sans-serif;\n}\n\n.pace .pace-progress:after {\n  content: attr(data-progress-text);\n  display: inline-block;\n}\n\n.pace.pace-inactive {\n  display: none;\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n\n  -webkit-perspective: 12rem;\n  -moz-perspective: 12rem;\n  -ms-perspective: 12rem;\n  -o-perspective: 12rem;\n  perspective: 12rem;\n\n  z-index: 2000;\n  position: fixed;\n  height: 6rem;\n  width: 6rem;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.pace.pace-inactive .pace-progress {\n  display: none;\n}\n\n.pace .pace-progress {\n  position: fixed;\n  z-index: 2000;\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 6rem;\n  width: 6rem !important;\n  line-height: 6rem;\n  font-size: 2rem;\n  border-radius: 50%;\n  background: `Color(args.color || '#29d').clearer(0.2).rgbString()`;\n  color: #fff;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-weight: 100;\n  text-align: center;\n\n  -webkit-animation: pace-3d-spinner linear infinite 2s;\n  -moz-animation: pace-3d-spinner linear infinite 2s;\n  -ms-animation: pace-3d-spinner linear infinite 2s;\n  -o-animation: pace-3d-spinner linear infinite 2s;\n  animation: pace-3d-spinner linear infinite 2s;\n\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n\n.pace .pace-progress:after {\n  content: attr(data-progress-text);\n  display: block;\n}\n\n@-webkit-keyframes pace-3d-spinner {\n  from {\n    -webkit-transform: rotateY(0deg);\n  }\n  to {\n    -webkit-transform: rotateY(360deg);\n  }\n}\n\n@-moz-keyframes pace-3d-spinner {\n  from {\n    -moz-transform: rotateY(0deg);\n  }\n  to {\n    -moz-transform: rotateY(360deg);\n  }\n}\n\n@-ms-keyframes pace-3d-spinner {\n  from {\n    -ms-transform: rotateY(0deg);\n  }\n  to {\n    -ms-transform: rotateY(360deg);\n  }\n}\n\n@-o-keyframes pace-3d-spinner {\n  from {\n    -o-transform: rotateY(0deg);\n  }\n  to {\n    -o-transform: rotateY(360deg);\n  }\n}\n\n@keyframes pace-3d-spinner {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(360deg);\n  }\n}",
	".pace.pace-inactive {\n  display: none;\n}\n\n.pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n\n  z-index: 2000;\n  position: fixed;\n  height: 60px;\n  width: 100px;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.pace .pace-progress {\n  z-index: 2000;\n  position: absolute;\n  height: 60px;\n  width: 100px !important;\n}\n\n.pace .pace-progress:before {\n  content: attr(data-progress-text);\n  text-align: center;\n  color: #fff;\n  background: `args.color || \"#29d\"`;\n  border-radius: 50%;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 1;\n  padding: 20% 0 7px;\n  width: 50%;\n  height: 40%;\n  margin: 10px 0 0 30px;\n  display: block;\n  z-index: 999;\n  position: absolute;\n}\n\n.pace .pace-progress:after {\n  border-radius: 50%;\n  border: 5px solid `args.color || \"#29d\"`;\n  content: ' ';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 60px;\n  width: 100px;\n\n  -webkit-transform: rotate(90deg);\n     -moz-transform: rotate(90deg);\n       -o-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-animation: spin-3 2s linear infinite;\n     -moz-animation: spin-3 2s linear infinite;\n       -o-animation: spin-3 2s linear infinite;\n          animation: spin-3 2s linear infinite;\n}\n\n.pace .pace-activity {\n  font-size: 15px;\n  line-height: 1;\n  z-index: 2000;\n  position: absolute;\n  height: 60px;\n  width: 100px;\n\n  display: block;\n}\n\n.pace .pace-activity:before {\n  border-radius: 50%;\n  border: 5px solid `args.color || \"#29d\"`;\n  content: ' ';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 60px;\n  width: 100px;\n\n  -webkit-animation: spin-1 2s linear infinite;\n     -moz-animation: spin-1 2s linear infinite;\n       -o-animation: spin-1 2s linear infinite;\n          animation: spin-1 2s linear infinite;\n}\n\n.pace .pace-activity:after{\n  border-radius: 50%;\n  border: 5px solid `args.color || \"#29d\"`;\n  content: ' ';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 60px;\n  width: 100px;\n\n  -webkit-transform: rotate(45deg);\n     -moz-transform: rotate(45deg);\n       -o-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-animation: spin-2 2s linear infinite;\n     -moz-animation: spin-2 2s linear infinite;\n       -o-animation: spin-2 2s linear infinite;\n          animation: spin-2 2s linear infinite;\n}\n\n@-webkit-keyframes spin-1 {\n  0%  { -webkit-transform: rotate(0deg); }\n  100%{ -webkit-transform: rotate(359deg);}\n}\n@-moz-keyframes spin-1 {\n  0%  { -moz-transform: rotate(0deg); }\n  100%{ -moz-transform: rotate(359deg);}\n}\n@-o-keyframes spin-1 {\n  0%  { -o-transform: rotate(0deg); }\n  100%{ -o-transform: rotate(359deg);}\n}\n@keyframes spin-1 {\n  0%  { transform: rotate(0deg); }\n  100%{ transform: rotate(359deg);}\n}\n\n@-webkit-keyframes spin-2 {\n  0%  { -webkit-transform: rotate(59.8deg); }\n  100%{ -webkit-transform: rotate(418.8deg);}\n}\n@-moz-keyframes spin-2 {\n  0%  { -moz-transform: rotate(59.8deg); }\n  100%{ -moz-transform: rotate(418.8deg);}\n}\n@-o-keyframes spin-2 {\n  0%  { -o-transform: rotate(59.8deg); }\n  100%{ -o-transform: rotate(418.8deg);}\n}\n@keyframes spin-2 {\n  0%  { transform: rotate(59.8deg); }\n  100%{ transform: rotate(418.8deg);}\n}\n\n@-webkit-keyframes spin-3 {\n  0%  { -webkit-transform: rotate(119.6deg); }\n  100%{ -webkit-transform: rotate(478.6deg);}\n}\n@-moz-keyframes spin-3 {\n  0%  { -moz-transform: rotate(119.6deg); }\n  100%{ -moz-transform: rotate(478.6deg);}\n}\n@-o-keyframes spin-3 {\n  0%  { -o-transform: rotate(119.6deg); }\n  100%{ -o-transform: rotate(478.6deg);}\n}\n@keyframes spin-3 {\n  0%  { transform: rotate(119.6deg); }\n  100%{ transform: rotate(478.6deg);}\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n\n  z-index: 2000;\n  position: fixed;\n  height: 90px;\n  width: 90px;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.pace.pace-inactive .pace-activity {\n  display: none;\n}\n\n.pace .pace-activity {\n  position: fixed;\n  z-index: 2000;\n  display: block;\n  position: absolute;\n  left: -30px;\n  top: -30px;\n  height: 90px;\n  width: 90px;\n  display: block;\n  border-width: 30px;\n  border-style: double;\n  border-color: `args.color || \"#29d\"` transparent transparent;\n  border-radius: 50%;\n\n  -webkit-animation: spin 1s linear infinite;\n     -moz-animation: spin 1s linear infinite;\n       -o-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n.pace .pace-activity:before {\n  content: ' ';\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  height: 50px;\n  width: 50px;\n  display: block;\n  border-width: 10px;\n  border-style: solid;\n  border-color: `args.color || \"#29d\"` transparent transparent;\n  border-radius: 50%;\n}\n\n\n@-webkit-keyframes spin {\n  100% { -webkit-transform: rotate(359deg); }\n}\n\n@-moz-keyframes spin {\n  100% { -moz-transform: rotate(359deg); }\n}\n\n@-o-keyframes spin {\n  100% { -moz-transform: rotate(359deg); }\n}\n\n@keyframes spin {\n  100% {  transform: rotate(359deg); }\n}",
	".pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n\n  z-index: 2000;\n  position: fixed;\n  margin: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 5px;\n  width: 200px;\n  background: #fff;\n  border: 1px solid `args.color || \"#29d\"`;\n}\n\n.pace .pace-progress {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  box-sizing: border-box;\n\n  -webkit-transition: width 1s ease-in-out 1s linear;\n  -moz-transition: width 1s ease-in-out 1s linear;\n  -ms-transition: width 1s ease-in-out 1s linear;\n  -o-transition: width 1s ease-in-out 1s linear;\n  transition: width 1s ease-in-out 1s linear;\n\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n\n  max-width: 200px;\n  position: fixed;\n  z-index: 2000;\n  display: block;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  height: 100%;\n  background: `args.color || \"#29d\"`;\n}\n\n.pace.pace-inactive {\n  display: none;\n}",
];
var currentPreset = 0;

function refreshArea(){
	chrome.runtime.sendMessage(null, {"id" : "pace4chrome-cssget"}, function(response){
		applyCSS(response.css);
	});
}

function saveArea(){
	save.innerHTML = "Saving...";
	chrome.runtime.sendMessage(null, {"id" : "pace4chrome-cssset", "newCSS":paceCSSArea.value});
	save.innerHTML = "Changes Saved!";
	setTimeout(function(){
		save.innerHTML = "Save Changes";
	}, 2000);
}

function resetArea(){
	colPicker.value = "29d";
	loadPreset(0);
}

save.onclick = saveArea;
reset.onclick = resetArea;

var els = document.getElementsByClassName("pres");
for(var i = 0; i < els.length; i++){
	els[i].onclick = function(){
		loadPreset(parseInt(this.getAttribute("presID")));
	}
}

colPicker.onchange = function(){
	compileCSS(this.value, presets[currentPreset]);
}

function loadPreset(index){
	currentPreset = index;
	compileCSS(colPicker.value, presets[index]);
}

showAdvanced.onclick = function(){
	if(showAdvanced.className == "pure-button pure-button-primary shidden"){
		showAdvanced.className = "pure-button pure-button-primary sshown";
		showAdvanced.innerHTML = "Hide Advanced Options";
		advanced.className = "sshown";
	}else{
		showAdvanced.className = "pure-button pure-button-primary shidden";
		showAdvanced.innerHTML = "Show Advanced Options";
		advanced.className = "";
	}
}

function applyCSS(css){
	themeTester.innerHTML = css;
	paceCSSArea.value = css;
}

paceCSSArea.onchange = function(){
	applyCSS(paceCSSArea.value);
}

paceCSSArea.onkeyup = function(){
	applyCSS(paceCSSArea.value);
}

function compileCSS(hex, css){
	var newCSS = css.replace(/`([\s\S]*?)`/gm, function(match, code){
		var args = {color:"#" + hex};
		var ret = "#fff";
		try{
			ret = eval(code);
		}catch(e){
			var fakeFunc = "function evfal(){" + code + "}";
			eval(fakeFunc);
			ret = evfal();
		}
		return ret;
	});
	applyCSS(newCSS);
}

refreshArea();

// Stop the pace bar for preview.
Pace.stop();
setTimeout(function(){
	Pace.bar.el.className = "pace pace-active";
	Pace.bar.progress = 50;
	Pace.bar.lastRenderedProgress = 50;
	var progressBar = Pace.bar.el.getElementsByClassName("pace-progress")[0];
	progressBar.style.width = "50%";
	progressBar.setAttribute("data-progress-text", "50%");
	progressBar.setAttribute("data-progress", "50");
	document.body.className = "pace-running";
	Pace.running = true;
}, 1000);