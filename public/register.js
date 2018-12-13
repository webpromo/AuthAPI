
// for register.html - Jess
// var cereal = require('form-serialize');


function shipIt(req,res) {
  alert("I'm in!");
  const formData = serialize(formNode, { hash: true });
  console.log("#####  FORM DATA  #######",formData)
}
