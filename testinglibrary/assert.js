var assert = {
  isTrue: function(assertionToCheck, description) {
    if (!assertionToCheck) {
      document.getElementById("tests").innerHTML += ("🔴 Test: '" + description + "' failed: " + assertionToCheck + " is not truthy");
      // console.error("test: '" + description + "' failed: " + assertionToCheck + " is not truthy");
    } else {
      document.getElementById("tests").innerHTML += ("💚 Test: '" + description + "' completed successfully!" + "<br />");
      // console.log("test: '" + description + "' completed successfully!");
    }
  }
};
