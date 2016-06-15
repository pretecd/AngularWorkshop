class ContactDetailController {
    constructor($stateParams, ContactService) {
    	this.contactService = ContactService;
    	var details = this.contactService.detailContact($stateParams.id);
    	if(details)
    	{
    		details.then(response => {
	        	this.contact = response.data;
	        });
    	}
    }

    saveContact()
    {
    	this.contactService.saveOrUpdate(this.contact);
    }
}

export default [
    '$stateParams',
    'ContactService',
    ContactDetailController
];
