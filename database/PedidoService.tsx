import { Database } from "./Database";
import { Pedido } from "../model/Pedidos";

export class PedidosService {
    static TABLE = `pedidos`;

    static async create(obj: Pedido) {
        const resultado = await Database.runQuery(`
            INSERT INTO ${this.TABLE} 
            (
                item,
                quantidade,
                total
            )
            VALUES (?,?,?)`, 
            [
                obj.item,
                obj.quantidade,
                obj.total,
            ]
        )
        console.log(resultado);
        obj.id = resultado;exp://owf4c6u-anonymous-8081.exp.direct
        return obj;
    }

    static async update(obj: Pedido) {
        const resultado = await Database.runQuery(`
            UPDATE ${this.TABLE} 
            SET item=?, quantidade=?, total=?
            WHERE id=?
            `, 
            [
                obj.item,
                obj.quantidade,
                obj.total,
                obj.id
                
            ]
        )
        return resultado;
    }

    static async delete(obj: Pedido) {
        const resultado = await Database.runQuery(`
                DELETE FROM ${this.TABLE} WHERE id = ?;
            `, [obj.id]);
        
        console.log(resultado);
        return resultado;
    }

    static async findAll() {
        const allRows = await Database.getAll(this.TABLE);
        return allRows.map(row => new Pedido(row))
    }
}