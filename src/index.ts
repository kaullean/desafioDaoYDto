import app from './services/server'

import { ProductsRepository } from './repositories/ProductsRepository'
import { Producto } from './entities/Products';
import { newProduct } from './models/products/products.interface';

import minimist from 'minimist'
const puerto = process.env.PORT || 8080;

const server = app.listen(puerto,()=>{
    console.log("SERVER UP EN PUERTO "+puerto);
    
})

server.on('error',(err : Error)=>{
    console.log("Error",err);
});


ejecutarCmds()

async function ejecutarCmds() {
    try {
        console.log('Base de datos conectada')

        const argv = minimist(process.argv.slice(2))
        let {cmd,
            _id,
            nombre,
            descripcion,
            codigo,
            fotoUrl,
            precio,
            stock} = argv

        cmd = cmd? cmd.toLowerCase() : ''
        /* -------------------------------------------------------- */
        /*          Creación de un repositorio Persona              */
        /* -------------------------------------------------------- */
        console.log('Instanciando el Repository personas')
        const repositoryProduct = new ProductsRepository();
        let resultProduct;

        switch(cmd) {
            case 'buscar':
                if(_id) console.log(await repositoryProduct.findOne(_id))
                else console.log(await repositoryProduct.find())
                break

            case 'agregar':
                const producto = new Producto(
                    nombre,
                    descripcion,
                    codigo,
                    fotoUrl,
                    precio,
                    stock);
                resultProduct = await repositoryProduct.create(producto);
                console.log(`Product inserted with ${resultProduct ? 'success' : 'fail'}`)
                break

            case 'borrar':
                resultProduct = await repositoryProduct.delete(_id);
                console.log(`Persona deleted with ${resultProduct ? 'success' : 'fail'}`)
               break             
    
            default:
                console.log('comando no válido:',cmd)
        }
        console.log('Base de datos desconectada')
        server.close();
    }
    catch(error) {
        console.log(error)
    }
}