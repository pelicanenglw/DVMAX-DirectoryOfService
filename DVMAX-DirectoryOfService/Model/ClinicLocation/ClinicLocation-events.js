

model.ClinicLocation.fullAddress.onSet = function() {
	// Add your code here;
	var spacer = ' ';
	this.fullAddress = this.addressLine1 + spacer + this.addressLine2 + spacer + this.city + spacer + this.province + this.ppostalCode + this.country;
};
