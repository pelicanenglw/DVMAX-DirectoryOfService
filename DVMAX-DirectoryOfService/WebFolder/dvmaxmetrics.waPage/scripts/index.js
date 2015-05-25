
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var Tab2GoToList = {};	// @button
	var dataGrid5 = {};	// @dataGrid
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		waf.sources.ClinicData.query("version == :1", versionQueryString + "*");
	};// @lock

	Tab2GoToList.click = function Tab2GoToList_click (event)// @startlock
	{// @endlock
		$$('tabView1').selectTab(1);
	};// @lock

	dataGrid5.onRowDblClick = function dataGrid5_onRowDblClick (event)// @startlock
	{// @endlock
		$$('tabView1').selectTab(2);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("Tab2GoToList", "click", Tab2GoToList.click, "WAF");
	WAF.addListener("dataGrid5", "onRowDblClick", dataGrid5.onRowDblClick, "WAF");
// @endregion
};// @endlock
