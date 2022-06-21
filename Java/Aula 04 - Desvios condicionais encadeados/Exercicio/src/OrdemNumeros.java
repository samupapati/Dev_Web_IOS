import java.util.Scanner;

public class OrdemNumeros {
    public static void main ( String [] args ) {
        Scanner entrada = new Scanner(System.in);

        double numero1, numero2;

        System.out.println("Escreva um número: ");
        numero1 = entrada.nextDouble();

        System.out.println("Escreva outro número: ");
        numero2 = entrada.nextDouble();

        System.out.println("Ordem decrescente: ");
        if(numero1 == numero2){
            System.out.println("Números iguais não podem ser mostrados em ordem");
        } else{
            if(numero1 > numero2){
                System.out.println(numero1);
                System.out.println(numero2);
            } else{
                System.out.println(numero2);
                System.out.println(numero1);
            }
        }
        entrada.close();
    }
}
