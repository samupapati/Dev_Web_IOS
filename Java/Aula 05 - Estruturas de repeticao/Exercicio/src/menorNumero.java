import java.util.Scanner;

public class menorNumero {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int contador = 0, perguntas = 10;

        System.out.println("Escreva 10 números");

        while (contador <= perguntas) {;
            int num = entrada.nextInt();
            int numBackup = 999999;
            if(num < numBackup){
                numBackup = num;
            }
            if (contador == perguntas) {
                System.out.println("O menor número é: " + numBackup);
            }
            contador++;
        }
    }
}