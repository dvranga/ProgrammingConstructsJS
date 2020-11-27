var prompt = require("prompt");
prompt.start();
console.log("I will now ask you for your name.");
prompt.get(["name"], function(err, res){
console.log("Hello ".concat(res.name, ". How are you"));
});
