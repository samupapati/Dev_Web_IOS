import java.util.Scanner;

public class DiaSemana {
    public static void main ( String [] args ) {
        Scanner entrada = new Scanner(System.in);

        int numero;

        System.out.println("Escreva um número de 1 a 7");
        numero = entrada.nextInt();

        if(numero > 7 || numero < 1){
            System.out.print("ERRO! Não foi informado um numero de 1 a 7");
        }

        switch(numero){
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda");
                break;
            case 3:
                System.out.println("Terça");
                break;
            case 4:
                System.out.println("Quarta");
                break;
            case 5:
                System.out.println("Quinta");
                break;
            case 6:
                System.out.println("Sexta");
                break;
            case 7:
                System.out.println("Sábado");
                break;
        }
    }
}
