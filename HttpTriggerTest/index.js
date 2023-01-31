module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if(req.query.num1 && req.query.num2 || (req.body && req.body.name)){
        const responseMessage = {
            //status:200,Defaults to 200
            body:req.query.num1 - req.query.num2
        }

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }
    else{
        context.res = {
            status: 400, /* Defaults to 200 */
            body: "Pass two numbers (num1 & num2) as query parameters"
        }
    }

}