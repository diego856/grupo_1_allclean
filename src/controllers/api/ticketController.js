let db = require("../../database/models")

const sql = require('mssql')



const ticketController = {

    
    api:  function (req, res)  {
       
           db.Tickets.findAll()
                    .then(function(tickets){

                        res.render ("ticket",{tickets:tickets})        
                    })
           /* res.json({
                info:{ 
                    status: 200,
                    count: ticketstotal.length,                    
                    url: "/api/tickets"
                },
                data: ticketstotal                 
            })*/

           
      
    }
}


module.exports= ticketController

