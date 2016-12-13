// Used to put array of user's selected charities on global scope

'use strict';
var selectedCharities = [];

var selectCharities = (function () {
  // export value
  var publicCharities = [];

  chrome.storage.sync.get({
    charities: []
  }, function(items) {
    console.log(items.charities);
    var charities = items.charities;
    publicCharities = charities;
    selectedCharities = publicCharities;
  })
  return publicCharities;
}());
