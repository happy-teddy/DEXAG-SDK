"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectSpread2=_interopRequireDefault(require("@babel/runtime/helpers/objectSpread")),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_ethers=require("ethers"),_api=_interopRequireDefault(require("./api")),_utility=_interopRequireDefault(require("./utility")),web3={setAllowance:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c,d,e){var f,g,h,i,j;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return f="115792089237316195423570985008687907853269984665640564039457584007913129639935",a.next=3,_api["default"].getGas();case 3:return g=a.sent,h={gasPrice:g},a.next=7,b.approve(c,f,h);case 7:return i=a.sent,e("send_approve",i.hash),a.next=11,d.waitForTransaction(i.hash);case 11:return j=a.sent,e("mined_approve",i.hash),a.abrupt("return",!0);case 14:case"end":return a.stop();}},a)}));return function setAllowance(){return a.apply(this,arguments)}}(),wrap:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c,d,e){var f,g,h,i,j;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(0!=c){a.next=2;break}return a.abrupt("return",!0);case 2:return f=_ethers.ethers.utils.bigNumberify(c.toString()),a.next=5,_api["default"].getGas();case 5:return g=a.sent,h={value:f,gasPrice:g},a.next=9,b.deposit(h);case 9:return i=a.sent,e("send_wrap",i.hash),a.next=13,d.waitForTransaction(i.hash);case 13:return j=a.sent,e("mined_wrap",i.hash),a.abrupt("return",!0);case 16:case"end":return a.stop();}},a)}));return function wrap(){return a.apply(this,arguments)}}(),unwrap:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e,f,g,h;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(0!=c){a.next=2;break}return a.abrupt("return",!0);case 2:return a.next=4,_api["default"].getGas();case 4:return d=a.sent,e={gasPrice:d},f=_ethers.ethers.utils.bigNumberify(c.toString()),a.next=9,b.withdraw(f,e);case 9:return g=a.sent,handler("send_unwrap",g.hash),a.next=13,provider.waitForTransaction(g.hash);case 13:return h=a.sent,handler("mined_unwrap",g.hash),a.abrupt("return",!0);case 16:case"end":return a.stop();}},a)}));return function unwrap(){return a.apply(this,arguments)}}(),estimateGas:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c,d,e){var f,g,h;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d.getAddress();case 3:return f=a.sent,g=(0,_objectSpread2["default"])({},b,{from:f}),a.next=7,c.estimateGas(g);case 7:return h=a.sent,a.abrupt("return",1.2*parseInt(h.toString()));case 11:return a.prev=11,a.t0=a["catch"](0),e("bad_tx"),a.abrupt("return");case 15:case"end":return a.stop();}},a,null,[[0,11]])}));return function estimateGas(){return a.apply(this,arguments)}}(),sendTrade:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c,d){return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c.sendTransaction(b);case 3:return status=a.sent,a.abrupt("return",status);case 7:if(a.prev=7,a.t0=a["catch"](0),window&&window.ethereum&&window.ethereum.isImToken){a.next=12;break}return d("rejected"),a.abrupt("return");case 12:if(1001!=a.t0.errorCode){a.next=15;break}return d("rejected"),a.abrupt("return");case 15:if("string"!=typeof a.t0.transactionHash){a.next=17;break}return a.abrupt("return",{hash:a.t0.transactionHash});case 17:return a.abrupt("return");case 18:case"end":return a.stop();}},a,null,[[0,7]])}));return function sendTrade(){return a.apply(this,arguments)}}(),getERC20Balance:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e,f,g;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=_utility["default"].getTokenContract(b,c),a.next=3,c.getAddress();case 3:return e=a.sent,a.next=6,d.balanceOf(e);case 6:return f=a.sent,g=b.metadata.input.amount,a.abrupt("return",f.gte(g));case 9:case"end":return a.stop();}},a)}));return function getERC20Balance(){return a.apply(this,arguments)}}(),getETHBalance:function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function a(b,c){var d,e;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.getBalance();case 2:return d=a.sent,e=b.trade.value,a.abrupt("return",d.gte(e));case 5:case"end":return a.stop();}},a)}));return function getETHBalance(){return a.apply(this,arguments)}}()},_default=web3;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy93ZWIzLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJzZXRBbGxvd2FuY2UiLCJ0b2tlbkNvbnRyYWN0IiwiZXhjaGFuZ2VBZGRyZXNzIiwicHJvdmlkZXIiLCJoYW5kbGVyIiwidWludE1heCIsImFwaSIsImdldEdhcyIsImdhc1ByaWNlIiwidHhPcHRpb25zIiwiYXBwcm92ZSIsInN0YXR1cyIsImhhc2giLCJ3YWl0Rm9yVHJhbnNhY3Rpb24iLCJyZWNlaXB0Iiwid3JhcCIsIndldGhDb250cmFjdCIsImFtb3VudCIsInZhbHVlIiwiZXRoZXJzIiwidXRpbHMiLCJiaWdOdW1iZXJpZnkiLCJ0b1N0cmluZyIsImRlcG9zaXQiLCJ1bndyYXAiLCJhbW91bnROdW1iZXIiLCJ3aXRoZHJhdyIsImVzdGltYXRlR2FzIiwidHJhZGUiLCJzaWduZXIiLCJnZXRBZGRyZXNzIiwic2VuZGVyIiwiZXN0aW1hdGVUeCIsImZyb20iLCJlc3RpbWF0ZSIsInBhcnNlSW50Iiwic2VuZFRyYWRlIiwic2VuZFRyYW5zYWN0aW9uIiwid2luZG93IiwiZXRoZXJldW0iLCJpc0ltVG9rZW4iLCJlcnJvckNvZGUiLCJ0cmFuc2FjdGlvbkhhc2giLCJnZXRFUkMyMEJhbGFuY2UiLCJ1dGlsaXR5IiwiZ2V0VG9rZW5Db250cmFjdCIsImFkZHJlc3MiLCJiYWxhbmNlT2YiLCJ0b2tlbkJhbGFuY2UiLCJ0b2tlbkFtb3VudCIsIm1ldGFkYXRhIiwiaW5wdXQiLCJndGUiLCJnZXRFVEhCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsImV0aEJhbGFuY2UiLCJldGhBbW91bnQiXSwibWFwcGluZ3MiOiJrakJBS01BLElBQUksQ0FBRyxDQUNYQyxZQUFZLDhGQUFFLFdBQU1DLENBQU4sQ0FBcUJDLENBQXJCLENBQXNDQyxDQUF0QyxDQUFnREMsQ0FBaEQsMEdBQ05DLENBQUFBLENBRE0sQ0FDSSxnRkFESixVQUVXQyxnQkFBSUMsTUFBSixFQUZYLGNBRU5DLENBQUFBLENB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RCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFNBTjVDLHdCQU9McEMsQ0FBQUEsQ0FBTyxDQUFDLFVBQUQsQ0FQRiwrQkFVYyxJQUFqQixPQUFJcUMsU0FWRCx3QkFXTHJDLENBQUFBLENBQU8sQ0FBQyxVQUFELENBWEYsK0JBYzJCLFFBQTlCLFFBQU8sTUFBSXNDLGVBZFIsMkNBZUUsQ0FDTDlCLElBQUksQ0FBRSxLQUFJOEIsZUFETCxDQWZGLHlGQUFGLGlFQTVERSxDQWtGWEMsZUFBZSw4RkFBRSxXQUFPZixDQUFQLENBQWNDLENBQWQsd0dBQ1Q1QixDQUFBQSxDQURTLENBQ08yQyxvQkFBUUMsZ0JBQVIsQ0FBeUJqQixDQUF6QixDQUFnQ0MsQ0FBaEMsQ0FEUCxVQUVPQSxDQUFNLENBQUNDLFVBQVAsRUFGUCxjQUVUZ0IsQ0FBQUEsQ0FGUyxpQkFHWTdDLENBQWEsQ0FBQzhDLFNBQWQsQ0FBd0JELENBQXhCLENBSFosY0FHVEUsQ0FBQUEsQ0FIUyxRQUlUQyxDQUpTLENBSUtyQixDQUFLLENBQUNzQixRQUFOLENBQWVDLEtBQWYsQ0FBcUJsQyxNQUoxQixtQkFLUitCLENBQVksQ0FBQ0ksR0FBYixDQUFpQkgsQ0FBakIsQ0FMUSx5Q0FBRix1RUFsRkosQ0F5RlhJLGFBQWEsOEZBQUUsV0FBTXpCLENBQU4sQ0FBYUMsQ0FBYiw4R0FDWUEsQ0FBTSxDQUFDeUIsVUFBUCxFQURaLGNBQ1BDLENBQUFBLENBRE8sUUFFUEMsQ0FGTyxDQUVLNUIsQ0FBSyxDQUFDQSxLQUFOLENBQVlWLEtBRmpCLG1CQUdOcUMsQ0FBVSxDQUFDSCxHQUFYLENBQWVJLENBQWYsQ0FITSx5Q0FBRixxRUF6RkYsQyxVQWdHRXpELEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuXG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcbmltcG9ydCB1dGlsaXR5IGZyb20gJy4vdXRpbGl0eSc7XG5cbmNvbnN0IHdlYjMgPSB7XG4gIHNldEFsbG93YW5jZTogYXN5bmModG9rZW5Db250cmFjdCwgZXhjaGFuZ2VBZGRyZXNzLCBwcm92aWRlciwgaGFuZGxlcikgPT4ge1xuICAgIGNvbnN0IHVpbnRNYXggPSAnMTE1NzkyMDg5MjM3MzE2MTk1NDIzNTcwOTg1MDA4Njg3OTA3ODUzMjY5OTg0NjY1NjQwNTY0MDM5NDU3NTg0MDA3OTEzMTI5NjM5OTM1JztcbiAgICBjb25zdCBnYXNQcmljZSA9IGF3YWl0IGFwaS5nZXRHYXMoKTtcbiAgICBjb25zdCB0eE9wdGlvbnMgPSB7XG4gICAgICBnYXNQcmljZSxcbiAgICB9O1xuICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRva2VuQ29udHJhY3QuYXBwcm92ZShleGNoYW5nZUFkZHJlc3MsIHVpbnRNYXgsIHR4T3B0aW9ucyk7XG4gICAgaGFuZGxlcignc2VuZF9hcHByb3ZlJywgc3RhdHVzLmhhc2gpO1xuICAgIC8vIHdhaXQgZm9yIG1pbmluZyB0byBmaW5pc2hcbiAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgcHJvdmlkZXIud2FpdEZvclRyYW5zYWN0aW9uKHN0YXR1cy5oYXNoKTtcbiAgICAvLyBtaW5lZFxuICAgIGhhbmRsZXIoJ21pbmVkX2FwcHJvdmUnLCBzdGF0dXMuaGFzaCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIHdyYXA6IGFzeW5jKHdldGhDb250cmFjdCwgYW1vdW50LCBwcm92aWRlciwgaGFuZGxlcikgPT4ge1xuICAgIGlmIChhbW91bnQgPT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gZXRoZXJzLnV0aWxzLmJpZ051bWJlcmlmeShhbW91bnQudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZ2FzUHJpY2UgPSBhd2FpdCBhcGkuZ2V0R2FzKCk7XG4gICAgY29uc3QgdHhPcHRpb25zID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBnYXNQcmljZSxcbiAgICB9O1xuICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHdldGhDb250cmFjdC5kZXBvc2l0KHR4T3B0aW9ucyk7XG5cbiAgICBoYW5kbGVyKCdzZW5kX3dyYXAnLCBzdGF0dXMuaGFzaCk7XG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHByb3ZpZGVyLndhaXRGb3JUcmFuc2FjdGlvbihzdGF0dXMuaGFzaCk7XG4gICAgLy8gd3JhcCBtaW5lZFxuICAgIGhhbmRsZXIoJ21pbmVkX3dyYXAnLCBzdGF0dXMuaGFzaCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIHVud3JhcDogYXN5bmMod2V0aENvbnRyYWN0LCBhbW91bnQpID0+IHtcbiAgICBpZiAoYW1vdW50ID09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBnYXNQcmljZSA9IGF3YWl0IGFwaS5nZXRHYXMoKTtcbiAgICBjb25zdCB0eE9wdGlvbnMgPSB7XG4gICAgICBnYXNQcmljZSxcbiAgICB9O1xuICAgIGNvbnN0IGFtb3VudE51bWJlciA9IGV0aGVycy51dGlscy5iaWdOdW1iZXJpZnkoYW1vdW50LnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHdldGhDb250cmFjdC53aXRoZHJhdyhhbW91bnROdW1iZXIsIHR4T3B0aW9ucyk7XG4gICAgaGFuZGxlcignc2VuZF91bndyYXAnLCBzdGF0dXMuaGFzaCk7XG4gICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IHByb3ZpZGVyLndhaXRGb3JUcmFuc2FjdGlvbihzdGF0dXMuaGFzaCk7XG4gICAgLy8gd3JhcCBtaW5lZFxuICAgIGhhbmRsZXIoJ21pbmVkX3Vud3JhcCcsIHN0YXR1cy5oYXNoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZXN0aW1hdGVHYXM6IGFzeW5jKHRyYWRlLCBwcm92aWRlciwgc2lnbmVyLCBoYW5kbGVyKSA9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3Qgc2VuZGVyID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcbiAgICAgIGNvbnN0IGVzdGltYXRlVHggPSB7IC4uLnRyYWRlLCBmcm9tOiBzZW5kZXIgfTtcbiAgICAgIGNvbnN0IGVzdGltYXRlID0gYXdhaXQgcHJvdmlkZXIuZXN0aW1hdGVHYXMoZXN0aW1hdGVUeCk7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoZXN0aW1hdGUudG9TdHJpbmcoKSkgKiAxLjI7XG4gICAgfWNhdGNoKGVycil7XG4gICAgICBoYW5kbGVyKCdiYWRfdHgnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0sXG4gIHNlbmRUcmFkZTogYXN5bmModHJhZGUsIHNpZ25lciwgaGFuZGxlcikgPT4ge1xuICAgIHRyeXtcbiAgICAgIHN0YXR1cyA9IGF3YWl0IHNpZ25lci5zZW5kVHJhbnNhY3Rpb24odHJhZGUpO1xuICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9Y2F0Y2goZXJyKXtcbiAgICAgIC8vIGlzc3VlIHNlbmRpbmcgdHhcbiAgICAgIGlmKCF3aW5kb3cgfHwgIXdpbmRvdy5ldGhlcmV1bSB8fCAhd2luZG93LmV0aGVyZXVtLmlzSW1Ub2tlbil7XG4gICAgICAgIGhhbmRsZXIoJ3JlamVjdGVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlcnIuZXJyb3JDb2RlID09IDEwMDEpIHtcbiAgICAgICAgaGFuZGxlcigncmVqZWN0ZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBlcnIudHJhbnNhY3Rpb25IYXNoID09ICdzdHJpbmcnKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNoOiBlcnIudHJhbnNhY3Rpb25IYXNoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xuICB9LFxuICBnZXRFUkMyMEJhbGFuY2U6IGFzeW5jICh0cmFkZSwgc2lnbmVyKSA9PiB7XG4gICAgY29uc3QgdG9rZW5Db250cmFjdCA9IHV0aWxpdHkuZ2V0VG9rZW5Db250cmFjdCh0cmFkZSwgc2lnbmVyKTtcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcbiAgICBjb25zdCB0b2tlbkJhbGFuY2UgPSBhd2FpdCB0b2tlbkNvbnRyYWN0LmJhbGFuY2VPZihhZGRyZXNzKTtcbiAgICBjb25zdCB0b2tlbkFtb3VudCA9IHRyYWRlLm1ldGFkYXRhLmlucHV0LmFtb3VudDtcbiAgICByZXR1cm4gdG9rZW5CYWxhbmNlLmd0ZSh0b2tlbkFtb3VudCk7XG4gIH0sXG4gIGdldEVUSEJhbGFuY2U6IGFzeW5jKHRyYWRlLCBzaWduZXIpID0+IHtcbiAgICBjb25zdCBldGhCYWxhbmNlID0gYXdhaXQgc2lnbmVyLmdldEJhbGFuY2UoKTtcbiAgICBjb25zdCBldGhBbW91bnQgPSB0cmFkZS50cmFkZS52YWx1ZTtcbiAgICByZXR1cm4gZXRoQmFsYW5jZS5ndGUoZXRoQW1vdW50KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2ViMztcbiJdfQ==