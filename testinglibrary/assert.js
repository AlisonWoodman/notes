var assert = {
  isTrue: function(assertionToCheck, description) {
    if (!assertionToCheck) {
      console.error("test: '" + description + "' failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("test: '" + description + "' completed successfully!");
    }
  }
};
