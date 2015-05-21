function my_req_gas (my_location) {
	var mp={};
	var mfound={};
	var mp=new XMLHttpRequest();
	var my_data='<?xml version="1.0" encoding="UTF-8" ?><SOAP-ENV:Envelope SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><SOAP-ENV:Body><QueryEVUByAddress xmlns="http://tempuri.org/"><query>'+my_location+'</query></QueryEVUByAddress></SOAP-ENV:Body></SOAP-ENV:Envelope> '
	mp.open('POST','http://myuser:mypassword@netze-und-versorger.de/Service/V2/Gas/GasWebService.asmx',true,"","");
	mp.setRequestHeader("Content-Type","text/xml");
	mp.setRequestHeader("Accept","text/xml");
	mp.send(my_data);
	if ((mp.status==200) && (mp.readyState=4)) {
		var test=mp.responseText;
		var temp=XmlToJSON(test,"json-bag","soap:Envelope");
		var mobj=JSON.parse(temp);
		try {
		mobj=mobj['soap:Body'][0]['QueryEVUByAddressResponse'][0]['QueryEVUByAddressResult'][0]['Locations'][0]['Location'][0];
		

		
		mfound.Address				=	mobj['Address'][0].__CDATA;
		
		mfound.BetreiberName			=	mobj['BetreiberInfos'][0]['EvuInfo'][0]['Name'][0].__CDATA;
		mfound.BetreiberBDEW_ID_13N	 =	mobj['BetreiberInfos'][0]['EvuInfo'][0]['DVGW_ID_Nr13NB'][0].__CDATA;
		mfound.BetreiberUrl			=	mobj['BetreiberInfos'][0]['EvuInfo'][0]['Url'][0].__CDATA;
		
		mfound.VersorgerName			=	mobj['VersorgerInfos'][0]['EvuInfo'][0]['Name'][0].__CDATA;
		mfound.VersorgerBDEW_ID_13V	 =	mobj['VersorgerInfos'][0]['EvuInfo'][0]['DVGW_ID_Nr13GV'][0].__CDATA;
		mfound.VersorgerUrl			=	mobj['VersorgerInfos'][0]['EvuInfo'][0]['Url'][0].__CDATA;
		
		mfound.RegelzoneName			=	mobj['MarktgebietInfos'][0]['EvuInfo'][0]['Name'][0].__CDATA;
		mfound.RegelzoneBDEW_ID_13N	 =	mobj['MarktgebietInfos'][0]['EvuInfo'][0]['DVGW_ID_Nr13NB'][0].__CDATA;
		mfound.RegelzoneUrl			=	mobj['MarktgebietInfos'][0]['EvuInfo'][0]['Url'][0].__CDATA;
	}
	catch (error) {mfound.Address="";}

	
		
}
	return mfound;
};