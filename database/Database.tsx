import * as SQLite from 'expo-sqlite';

interface Query {
    sql: string;
    args?: (string | number)[];
}

const tablePedidos = "pedidos";
const tableItemMenu = "itemmenu";

export class Database {
    static getConnection() {
        return SQLite.openDatabaseAsync("appStarbucks.db");
    }

    static async initDb(syncDb?: boolean) {
        const db = this.getConnection();
        console.log(db);

        if (syncDb || !(await this.isDbCreated())) {
            await this.dropDb();
            await this.createDb();
        }
    }

    static async ReinitDb(syncDb?: boolean) {
        const db = this.getConnection();
        console.log(db);

        await this.dropDb();
        await this.createDb();
    }

    private static async isDbCreated() {
        try {
            await this.runQuery(`SELECT 1 FROM ${tablePedidos} LIMIT 1;`);
            return true;
        } catch (e) {
            return false;
        }
    }

    private static async dropDb() {
        const db = this.getConnection();
        const queries = `
            
            DROP TABLE IF EXISTS ${tablePedidos};
            DROP TABLE IF EXISTS ${tableItemMenu};
            
        `;
        (await db).runAsync(queries);
    }

    private static async createDb() {
        const db = this.getConnection();
        const queries = `
            CREATE TABLE IF NOT EXISTS ${tableItemMenu} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT,
                descricao TEXT,
                valor TEXT,
                favorito  INTEGER NOT NULL DEFAULT 0
            );
        `;
        (await db).runAsync(queries);

        const querie_pedido = `
            CREATE TABLE IF NOT EXISTS ${tablePedidos} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                item TEXT,
                quantidade INTEGER,
                total TEXT
                );
        `;
        (await db).runAsync(querie_pedido);
    }

    static async runQuery(sql: Query['sql'], args?: Query['args']) {
        const db = this.getConnection();
        const result = (await db).runAsync(sql, args);
        return (await result).lastInsertRowId;
    }

    static async getAll(table: string) {
        const db = this.getConnection();
        const result = (await db).getAllAsync(`SELECT * FROM ${table};`);
        return result;
    }
}
