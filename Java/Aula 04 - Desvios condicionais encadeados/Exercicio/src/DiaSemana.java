import java.util.Scanner;

public class DiaSemana {
    public static void main ( String [] args ) {
        Scanner entrada = new Scanner(System.in);

        int numero;

        System.out.println("Escreva um número de 1 a 7");
        numero = entrada.nextInt();

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
            default:
                System.out.print("ERRO! Digite um número de 1 a 7");
                break;
        }
        entrada.close();
    }
}
