function ConvertirUnidades () {
    const valorEnCm = parseFloat(document.getElementById("valor_centimetros").value);

    // Resolver conversiones
    const resultadoMilimetros = valorEnCm /.1;
    const resultadoMetros = valorEnCm / 100;
    const resultadoKilometros = valorEnCm / 100000;
    const resultadoPulgadas = valorEnCm / 2.54;
    const resultadoPies = valorEnCm / 12;
    const resultadoYardas = valorEnCm / 3;

     // Mostrar los resultados
     document.getElementById("resultado_milimetros").textContent = resultadoMilimetros.toFixed(2);
     document.getElementById("resultado_metros").textContent = resultadoMetros.toFixed(4);
     document.getElementById("resultado_kilometros").textContent = resultadoKilometros.toFixed(6);
     document.getElementById("resultado_pulgadas").textContent = resultadoPulgadas.toFixed(2);
     document.getElementById("resultado_pies").textContent = resultadoPies.toFixed(3);
     document.getElementById("resultado_yardas").textContent = resultadoYardas.toFixed(3);
}





























  

  
   
  