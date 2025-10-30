import { Database } from "./Database";
import { ItemMenu } from "../model/ItemMenu";

export class ItemMenuService {
    static TABLE = `itemmenu`;

    static async create(obj: ItemMenu) {
        const resultado = await Database.runQuery(`
            INSERT INTO ${this.TABLE} 
            (
                titulo,
                descricao,
                valor,
                favorito
            )
            VALUES (?,?,?, ?)`, 
            [
                obj.titulo,
                obj.descricao,
                obj.valor,
                obj.favorito ?? 0
            ]
        )
        console.log(resultado);
        obj.id = resultado;
        return obj;
    }

    static async update(obj: ItemMenu) {
        const resultado = await Database.runQuery(`
            UPDATE ${this.TABLE} 
            SET titulo=?, descricao=?, valor=?, favorito=?
            WHERE id=?
            `, 
            [
                obj.titulo,
                obj.descricao,
                obj.valor,
                obj.favorito ?? 0,
                obj.id,
                
            ]
        )
        return resultado;
    }

    static async delete(obj: ItemMenu) {
        const resultado = await Database.runQuery(`
                DELETE FROM ${this.TABLE} WHERE id = ?;
            `, [obj.id]);
        
        console.log(resultado);
        return resultado;
    }

    static async setFavorito(id: number, favorito: number) {
    // helper opcional para só alternar o favorito
    return Database.runQuery(
      `UPDATE ${this.TABLE} SET favorito=? WHERE id=?`,
      [favorito, id]
    );
  }
    static async findAll() {
        const allRows = await Database.getAll('itemmenu');
        return allRows.map(row => new ItemMenu(row))
    }

    static async findFavoritos() {
    const allRows = await Database.getAll(this.TABLE);
    const fav = allRows.filter((r: any) => Number(r.favorito) === 1);
    fav.sort((a: any, b: any) => String(a.titulo ?? "").localeCompare(String(b.titulo ?? "")));
    return fav.map((row: any) => new ItemMenu(row));
}
}