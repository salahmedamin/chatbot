const client = require('twilio')("AC86669fc9079cc95a8ef6d568de373027", "55b90d435bf4760c74f92ff9364c9dc2");
module.exports = async ({to,code})=>{
    const created = await client.messages
      .create({
         body: 'Votre code de sécurité AmiAssurances est '+code,
         from: '+18124145393',
         to: '+21693072229'
       })
    return created.body
}