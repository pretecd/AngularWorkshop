class ContactListController {
    constructor(ContactService) {
        /*ContactService.fetchContacts().then(
            function(response){
                this.contacts = response.data;
        },
            function(error){
                console.log(error);
        });*/

        ContactService.fetchContacts().then(response => {
            this.contacts = response.data;
        });

        
    }
}

export default [

    'ContactService',
    ContactListController
];
