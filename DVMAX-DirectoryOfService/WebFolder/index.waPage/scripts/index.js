
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var search = {};	// @textField
	var button5 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	search.keyup = function search_keyup (event)// @startlock
	{// @endlock
		waf.sources.Assays.query('code == $1',$$('search').getValue()+'*');
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		importInstruments;
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("search", "keyup", search.keyup, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
// @endregion
};// @endlock
