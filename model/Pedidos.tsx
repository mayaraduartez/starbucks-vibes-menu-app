export class Pedido{
    public id: number;
    public item: string;
    public quantidade: string;
    public total: string;
    

    constructor(obj?: Partial<Pedido>){
        if (obj){
            this.id     = obj.id
            this.item   = obj.item
            this.quantidade   = obj.quantidade
            this.total= obj.total
        }
    }

    toObjeto(){
        const pedido = {
            id      : this.id,
            item    : this.item,
            quantidade    : this.quantidade,
            total : this.total,
        }
        return pedido;
    }

    toString() {
        const atributos = Object.values(this).join(',');
        return `Pedido [${atributos}]`;
    }


}