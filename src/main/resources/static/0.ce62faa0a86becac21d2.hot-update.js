webpackHotUpdate(0,{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/SignUpPin.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(\"./node_modules/axios/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n  name: 'SignUpPin',\n  data: function data() {\n    return {\n      mail: '',\n      password: '',\n      confirmPassword: '',\n      tempRegistReslut: {}\n    };\n  },\n\n  methods: {\n    testMethod: function testMethod() {\n      var _this = this;\n\n      // 超適当\n      if (this.mail !== '' && this.password === this.confirmPassword) {\n        var payload = { mail: this.mail, password: this.password };\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/signup/temp-regist', payload).then(function (response) {\n          _this.tempRegistReslut = response.data;\n          console.log(_this.tempRegistReslut);\n          _this.$router.push({\n            name: 'Page2',\n            params: {\n              mail: _this.tempRegistReslut.mail,\n              password: _this.tempRegistReslut.password,\n              pin: _this.tempRegistReslut.pin\n            }\n          });\n        }).catch(function (error) {\n          console.log(error);\n        });\n        // alert('mail:' + this.mail + ' password:' + this.password)\n        // this.$router.push({\n        //   name: 'Page2',\n        //   params: {\n        //     mail: this.mail,\n        //     password: this.password\n        //   }\n        // })\n      } else {\n        alert('パスワードと確認用パスワードが異なる');\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvU2lnblVwUGluLnZ1ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9TaWduVXBQaW4udnVlP2VkYzYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyPuODpuODvOOCtuODvOS7rueZu+mMsmY8L2gyPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNCBhbGVydC1pbmZvIHRleHQtbXV0ZWQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPuODoeODvOODq+OCouODieODrOOCuTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00IGFsZXJ0LWluZm8gdGV4dC1tdXRlZCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+44OR44K544Ov44O844OJPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLThcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNCBhbGVydC1pbmZvIHRleHQtbXV0ZWQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPueiuuiqjeeUqOODkeOCueODr+ODvOODiTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiY29uZmlybVBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zIG9mZnNldC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwidGVzdE1ldGhvZFwiIHRhYmluZGV4PVwiXCI+5Luu55m76YyyPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+5oi744KLPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdTaWduVXBQaW4nLFxyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWFpbDogJycsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgY29uZmlybVBhc3N3b3JkOiAnJyxcclxuICAgICAgdGVtcFJlZ2lzdFJlc2x1dDoge31cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHRlc3RNZXRob2QgKCkge1xyXG4gICAgICAvLyDotoXpganlvZNcclxuICAgICAgaWYgKHRoaXMubWFpbCAhPT0gJycgJiYgdGhpcy5wYXNzd29yZCA9PT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICBsZXQgcGF5bG9hZCA9IHttYWlsOiB0aGlzLm1haWwsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkfVxyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9zaWdudXAvdGVtcC1yZWdpc3QnLCBwYXlsb2FkKVxyXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBSZWdpc3RSZXNsdXQgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGVtcFJlZ2lzdFJlc2x1dClcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdQYWdlMicsXHJcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBtYWlsOiB0aGlzLnRlbXBSZWdpc3RSZXNsdXQubWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnRlbXBSZWdpc3RSZXNsdXQucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBwaW46IHRoaXMudGVtcFJlZ2lzdFJlc2x1dC5waW5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIC8vIGFsZXJ0KCdtYWlsOicgKyB0aGlzLm1haWwgKyAnIHBhc3N3b3JkOicgKyB0aGlzLnBhc3N3b3JkKVxyXG4gICAgICAgIC8vIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAvLyAgIG5hbWU6ICdQYWdlMicsXHJcbiAgICAgICAgLy8gICBwYXJhbXM6IHtcclxuICAgICAgICAvLyAgICAgbWFpbDogdGhpcy5tYWlsLFxyXG4gICAgICAgIC8vICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ+ODkeOCueODr+ODvOODieOBqOeiuuiqjeeUqOODkeOCueODr+ODvOODieOBjOeVsOOBquOCiycpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNpZ25VcFBpbi52dWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQ0E7QUFWQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/SignUpPin.vue\n");

/***/ })

})