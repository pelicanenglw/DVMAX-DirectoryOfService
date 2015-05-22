

model.Reports.events.init = function(event) {
	this.date = new Date();
	//this.version = '';
};


model.Reports.events.validate = function(event) {
	// Add your code here;
	
	if(this.version != ds.ClinicData.version){
		ds.ClinicData.version = this.version;
	};
	
};
