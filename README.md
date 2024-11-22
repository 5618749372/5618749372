def suma(a, b):
    return a + b

def resta(a, b):
    return a - b

def multiplicacion(a, b):
    return a * b

def division(a, b):
    if b != 0:
        return a / b
    else:
        return "Error: División por cero no permitida."

def calculadora():
    while True:
        print("\n=== Calculadora ===")
        print("Selecciona una operación:")
        print("1. Suma")
        print("2. Resta")
        print("3. Multiplicación")
        print("4. División")
        print("5. Salir")

        opcion = input("Ingresa el número de la operación que deseas realizar: ")

        if opcion == '5':
            print("¡Gracias por usar la calculadora!")
            break

        if opcion in ['1', '2', '3', '4']:
            try:
                num1 = float(input("Ingresa el primer número: "))
                num2 = float(input("Ingresa el segundo número: "))

                if opcion == '1':
                    print(f"El resultado de la suma es: {suma(num1, num2)}")
                elif opcion == '2':
                    print(f"El resultado de la resta es: {resta(num1, num2)}")
                elif opcion == '3':
                    print(f"El resultado de la multiplicación es: {multiplicacion(num1, num2)}")
                elif opcion == '4':
                    print(f"El resultado de la división es: {division(num1, num2)}")
            except ValueError:
                print("Por favor, ingresa valores numéricos válidos.")
        else:
            print("Opción no válida. Por favor, elige una opción entre 1 y 5.")

# Ejecutar la calculadora
calculadora()
<!---
5618749372/5618749372 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
