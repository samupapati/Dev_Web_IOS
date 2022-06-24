import java.util.Scanner;

public class Tabuada {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);

        int numero;

        System.out.println("Escreva um número:");
        numero = entrada.nextInt();
        System.out.println("A tabuada do número informado é:");
        for(var i = 0; i <= 10; i++){
            System.out.println(numero + " x " + i + ": " + numero*i);
        }

        System.out.println("A raiz quadrada do número informado é:");
        System.out.println(Math.sqrt(numero));

        if(numero % 2 == 0){
            System.out.println("O número informado é par" );
        } else{
            System.out.println("O número informado é impar");
        }
        entrada.close();
    }
}
