/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



class DetailController
{
    constructor($stateParams)
    {
        let [firstname, lastname] = $stateParams.name.split(' ');
        this.firstname = firstname;
        this.lastname = lastname;
    }
};

export default [
        '$stateParams',
        DetailController];