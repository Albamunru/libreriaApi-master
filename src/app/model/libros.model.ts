export class Libro
 {
   public Id:number;
    public ISBN:string;
   public Nombre:string;
    public Autor:string;
    public Tema:string;
    public Precio:number;
    public Edicion:string;
    public Formato:string;
    public Cantidad:number;
    public ImgNombre:string;
     
    constructor(){
        this.Id=0;
        this.Nombre="";
        this.Autor="";
        this.Edicion="";
        this.Formato="1";
        this.Tema="";
        this.ISBN="";
        this.Precio=0;
        this.Cantidad=0;
        this.ImgNombre="";
    }
   

}