export class ItemMenu{
    public id: number;
    public titulo: string;
    public descricao: string;
    public valor: string;
    public favorito: number;

    constructor(obj?: Partial<ItemMenu>){
        if (obj){
            this.id     = obj.id
            this.titulo   = obj.titulo
            this.descricao   = obj.descricao
            this.valor= obj.valor
            this.favorito = Number(obj?.favorito ?? 0);
        }
    }

    toObjeto(){
        const itemmenu = {
            id      : this.id,
            titulo    : this.titulo,
            descricao    : this.descricao,
            valor : this.valor,
            favorito  : this.favorito,
        }
        return itemmenu;
    }

    toString() {
        const atributos = Object.values(this).join(',');
        return `ItemMenu [${atributos}]`;
    }


}