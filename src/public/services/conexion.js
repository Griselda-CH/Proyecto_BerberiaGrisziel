import pg from 'pg' ;
const {Client}= pg;

const config={
    user: 'griszielbarberia_db_cmhq_user',
    host: 'dpg-csjv0be8ii6s73d8reag-a.oregon-postgres.render.com',
    database: 'griszielbarberia_db_cmhq',
    password: 'Oi7itv1qe7hbMJyaWYlNHyMhC5rHDvRR',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
}

 export async function Conectar(params) {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error)
    }
}