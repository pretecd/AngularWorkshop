/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function capitalize()
{
    return function(x)
    {
        if (typeof x !== 'string')
        {
            return x;
        }
        return x.charAt(0).toUpperCase() + x.substring(1);
    }
}

export default [capitalize];