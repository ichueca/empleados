import { Empleado } from "./empleado";

export class Proyecto {
  constructor(private _id: number, private _nombre: string, private _responsable: Empleado,
    private _miembos: Empleado[]) { }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(nombre: string) {
    this._nombre = nombre;
  }

  public get responsable():Empleado {
    return this._responsable;
  }

  public set responsable(responsable:Empleado){
      this._responsable = responsable;
  }

  public get miembros():Empleado[]{
    return this._miembos;
  }

  public set miembros(miembros:Empleado[]){
    this._miembos = miembros;
  }

}
