export class CalculadoraService{
  sumar(n1:number,n2:number):number{
    return n1+n2;
  }
  multiplicar(n1:number,n2:number):number{
    return n1*n2;
  }
  factorial(n:number):number{
    let resultado:number=1;
    for(let i=2;i<=n;i++){
      resultado=resultado*i;
    }
    return resultado;
  }
}
