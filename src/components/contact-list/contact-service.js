class ContactService
{
	constructor($http)
	{
		this.http = $http;
	}

	fetchContacts()
	{
		return this.http.get("http://localhost:3000/api/Contacts");
	}

	detailContact(id)
	{
		if(id)
			return this.http.get("http://localhost:3000/api/Contacts/"+id);
		else
			return null;
	}
	saveOrUpdate(contact)
	{
		if(!contact.id)
		{
			this.http.post("http://localhost:3000/api/Contacts/", contact);
		}
		else
		{
			this.http.put("http://localhost:3000/api/Contacts/"+ contact.id, contact);
		}
	}
}

export default ['$http', ContactService];