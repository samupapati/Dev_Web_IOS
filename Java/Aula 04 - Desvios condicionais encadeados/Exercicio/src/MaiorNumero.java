import java.util.Scanner;

public class MaiorNumero {
    public static void main ( String [] args ) {
        Scanner entrada = new Scanner(System.in);

        int num1, num2, num3;

        System.out.println("Escreva 3 números");
        num1 = entrada.nextInt();
        num2 = entrada.nextInt();
        num3 = entrada.nextInt();

        if(num1 == num2 & num1 == num3){
            System.out.println("Os números sao iguais");
        } else {
            if(num1 > num2 & num1 > num2){
                System.out.println("O " + num1 + "é o maior");
            } else if(num2 > num1 & num2 > num3){
                System.out.println("O " + num2 + "é o maior");
            } else{
                System.out.println("O " + num3 + "é o maior");
            }
        }
        entrada.close();
    }
}
