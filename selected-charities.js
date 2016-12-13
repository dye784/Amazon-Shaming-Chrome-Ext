// Used to put array of user's selected charities on global scope

'use strict';

var selectedCharities = (function () {
  // export value
  var publicCharities = [];

  chrome.storage.sync.get({
    charities: []
  }, function(items) {
    console.log(items);
    var charities = items.charities;
    publicCharities = charities;
  })
  return publicCharities;
}());
