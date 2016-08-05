'use strict';

var BasePage = require('./basePage.js');

var GridPage = function () {
    var gp = this;
    gp.secondCat = element(by.repeater('cat in pets').row(1));

    gp.table = element(by.id('table'));
    gp.searchField = element(by.id('searchField'));
    gp.tableHeader = gp.table.element(by.tagName('thead')).all(by.css("th"));
    gp.rows = element.all(by.repeater('user in gridController.usersFromExternal'));

    gp.checkHeader = function(header){
        gp.tableHeader.each(function(element,index){
            expect(element.getText()).toEqual(header[index])
        })
    }

};

GridPage.prototype = new BasePage();
module.exports = GridPage;