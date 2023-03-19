"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/weather/[zip]";
exports.ids = ["pages/api/weather/[zip]"];
exports.modules = {

/***/ "(api)/./pages/api/weather/[zip].js":
/*!************************************!*\
  !*** ./pages/api/weather/[zip].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n  const {\n    zip\n  } = req.query;\n  const controller = new AbortController();\n  const signal = controller.signal; // Fetch weather data from an API\n\n  const {\n    NEXT_PUBLIC_OPENWEATHERMAP_API_KEY\n  } = process.env;\n  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&appid=${NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`;\n\n  try {\n    const response = await fetch(apiUrl, {\n      signal\n    });\n    const data = await response.json(); // Send the extracted data back to the client\n\n    res.status(200).json({\n      data\n    });\n  } catch (error) {\n    res.status(500).json({\n      error\n    });\n  } finally {\n    controller.abort();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvd2VhdGhlci9bemlwXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0VBQzlDLE1BQU07SUFBRUM7RUFBRixJQUFVRixHQUFHLENBQUNHLEtBQXBCO0VBRUEsTUFBTUMsVUFBVSxHQUFHLElBQUlDLGVBQUosRUFBbkI7RUFDQSxNQUFNQyxNQUFNLEdBQUdGLFVBQVUsQ0FBQ0UsTUFBMUIsQ0FKOEMsQ0FLOUM7O0VBQ0EsTUFBTTtJQUFFQztFQUFGLElBQ0pDLE9BQU8sQ0FBQ0MsR0FEVjtFQUVBLE1BQU1DLE1BQU0sR0FBSSx3REFBdURSLEdBQUkseUJBQXdCSyxrQ0FBbUMsRUFBdEk7O0VBQ0EsSUFBSTtJQUNGLE1BQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLE1BQUQsRUFBUztNQUFFSjtJQUFGLENBQVQsQ0FBNUI7SUFDQSxNQUFNTyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQW5CLENBRkUsQ0FJRjs7SUFDQWIsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkQsSUFBaEIsQ0FBcUI7TUFBRUQ7SUFBRixDQUFyQjtFQUNELENBTkQsQ0FNRSxPQUFPRyxLQUFQLEVBQWM7SUFDZGYsR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkQsSUFBaEIsQ0FBcUI7TUFBRUU7SUFBRixDQUFyQjtFQUNELENBUkQsU0FRVTtJQUNSWixVQUFVLENBQUNhLEtBQVg7RUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FldGhlci1hcHAvLi9wYWdlcy9hcGkvd2VhdGhlci9bemlwXS5qcz80NDdkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyB6aXAgfSA9IHJlcS5xdWVyeTtcblxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICBjb25zdCBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcbiAgLy8gRmV0Y2ggd2VhdGhlciBkYXRhIGZyb20gYW4gQVBJXG4gIGNvbnN0IHsgTkVYVF9QVUJMSUNfT1BFTldFQVRIRVJNQVBfQVBJX0tFWSB9ID1cbiAgICBwcm9jZXNzLmVudjtcbiAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD96aXA9JHt6aXB9JnVuaXRzPWltcGVyaWFsJmFwcGlkPSR7TkVYVF9QVUJMSUNfT1BFTldFQVRIRVJNQVBfQVBJX0tFWX1gXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHsgc2lnbmFsIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAvLyBTZW5kIHRoZSBleHRyYWN0ZWQgZGF0YSBiYWNrIHRvIHRoZSBjbGllbnRcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGEgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvciB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiemlwIiwicXVlcnkiLCJjb250cm9sbGVyIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwiTkVYVF9QVUJMSUNfT1BFTldFQVRIRVJNQVBfQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJhcGlVcmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImFib3J0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/weather/[zip].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/weather/[zip].js"));
module.exports = __webpack_exports__;

})();