import java.util.Scanner;

public class menorNumero {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int contador = 1, perguntas = 11, numBackup = 999999999;

        System.out.println("Escreva 10 números");


        while (contador < perguntas) {;
            System.out.println("Número " + contador + ":");
            int num = entrada.nextInt();
            if(num < numBackup){
                numBackup = num;
            }
            contador++;
        }
        System.out.println("O menor número informado é: " + numBackup);
        entrada.close();
    }
}