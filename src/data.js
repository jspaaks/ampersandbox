let AmpersandCollection = require("ampersand-collection");

module.exports = (function () {

    "use strict";

    // make up some data
    let persons = [
        {firstname: "John", lastname: "Smith"},
        {firstname: "Lewis", lastname: "Johnson"},
        {firstname: "Michael", lastname: "Fox"},
        {firstname: "Jane", lastname: "Fonda"}];

    let repositories = [
        {id: 156568, name: "repo1", language: "JavaScript"},
        {id: 264673, name: "repo2", language: "Shell"},
        {id: 364534, name: "repo3", language: "Python"}];
        
    return {persons, repositories};
    
})();
