

//model.ClinicLocation.fullAddress.onSet = function() {
//	// Add your code here;
//	var spacer = ' ';
//	ClinicLocation.fullAddress = ClinicLocation.addressLine1 + spacer + ClinicLocation.addressLine2 + spacer + ClinicLocation.city + spacer + ClinicLocation.province + ClinicLocation.postalCode + ClinicLocation.country;
//};


model.ClinicLocation.events.save = function(event) {
	var spacer = ' ';
	this.fullAddress = this.addressLine1 + spacer + this.addressLine2 + spacer + this.city + spacer + this.province + this.postalCode + this.country;
};
