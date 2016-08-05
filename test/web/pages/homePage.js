'use strict';

var BasePage = require('./basePage.js');

var HomePage = function () {
    var hp = this;
    hp.goToGridLink = element(by.id('goToGridLink'));

    hp.nameInput = element(by.id('nameInput'));
    hp.nameInputDiv = element.all(by.css('.ng-binding')).get(0);
    hp.nameInputDivBinding = element(by.binding('home.name'));
    hp.emailInput = element(by.id('emailInput'));
    hp.cancelBtn = element(by.id("cancelBtn"));
    hp.saveBtn = element(by.id("saveBtn"));

    hp.divWithNgHide = element(by.id("divWithNgHide"));
    hp.divWithNgIf = element(by.id("divWithNgIf"));
    hp.divWithNgShow = element(by.id("divWithNgShow"));
    hp.showHideBtn = element(by.id("showHideBtn"));

    hp.inputSearchCriteria = function (category, searchInput) {
        expect(hp.searchCategory.isEnabled()).toBeTruthy();
        element(by.cssContainingText('option', category)).click();
        expect(hp.searchInput.isEnabled()).toBeTruthy();
        hp.searchInput.sendKeys(searchInput);
    };
};

HomePage.prototype = new BasePage();
module.exports = HomePage;