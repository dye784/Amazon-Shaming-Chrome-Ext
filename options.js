// Saves options to chrome.storage
function save_options() {
  // var checkboxes = document.getElementById('charity-checkboxes');
  var charities = [];
  [].forEach.call(document.querySelectorAll('input[type="checkbox"]:checked'), function(cb) {
    // addElement(cb.value);
    charities.push(cb.value);
  });

  chrome.storage.sync.set({
    charities: charities
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    charities: []
  }, function(items) {
    // addElement(JSON.stringify(items))
    items.charities.forEach(function(value) {
      // addElement(value)
      document.getElementById(value).setAttribute('checked', 'checked')
      // $(`input[value=${value}]`).attr('checked', 'checked')
    })
    // document.getElementById('charity-checkboxes').value = items.favoriteColor;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);


function addElement (text) {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(text);
  newDiv.appendChild(newContent); //add the text node to the newly created div.

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("charity-checkboxes");
  document.body.insertBefore(newDiv, currentDiv);
}