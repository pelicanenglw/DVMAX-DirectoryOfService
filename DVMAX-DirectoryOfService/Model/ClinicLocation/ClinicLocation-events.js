

model.ClinicLocation.fullAddress.onSet = function() {
	// Add your code here;
	var spacer = ' ';
	ClinicLocation.fullAddress = ClinicLocation.addressLine1 + spacer + ClinicLocation.addressLine2 + spacer + ClinicLocation.city + spacer + ClinicLocation.province + ClinicLocation.ppostalCode + ClinicLocation.country;
};
