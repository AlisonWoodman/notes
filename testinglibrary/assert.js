var assert = {
  isTrue: function(assertionToCheck, description) {
    if (!assertionToCheck) {
      document.getElementById("tests").innerHTML += ("🔴 Test: '" + description + "' failed: " + assertionToCheck + " is not truthy");
    } else {
      document.getElementById("tests").innerHTML += ("💚 Test: '" + description + "' completed successfully!" + "<br />");
    }
  }
};
