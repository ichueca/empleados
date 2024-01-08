export class Empleado {
  /*private _id:number;
    private _nombre:string;
    private _apellido:string;
    private _departamento:string;
    private _foto:string

    constructor(id:number,nombre:string,apellido:string,departamento:string,foto:string){
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._departamento = departamento;
        this._foto = foto;
    }*/

    constructor(private _id:number,private _nombre:string, private _apellido:string,
      private _departamento:string,
      private _foto:string|null){
    }

    public get id():number {
        return this._id;
    }

    public set id(id:number){
        this._id = id;
    }

    public nombreCompleto():string{
        return `${this.nombre} ${this.apellido}`;
    }

    public get nombre():string {
        return this._nombre;
    }

    public set nombre(nombre:string){
        this._nombre = nombre;
    }

    public get apellido():string {
        return this._apellido;
    }

    public set apellido(apellido:string){
        this._apellido = apellido;
    }

    public get departamento():string {
        return this._departamento;
    }

    public set departamento(departamento:string){
        this._departamento = departamento;
    }

    public get foto():string|null {
        return this._foto;
    }

    public set foto(foto:string){
        this._foto = foto;
    }
}

