import java.util.Scanner;

public class parImpar {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int pares = 0, impares = 0, contador = 1, perguntas = 11;

        System.out.println("Escreva 10 números");

        do{
            System.out.println("Numero " + contador + ":");
            int num = entrada.nextInt();
            if(num % 2 == 0){
                pares++;
            } else{
                impares++;
            }
            contador++;
        }while(contador < perguntas);
        System.out.println("Quantidade de números pares: " + pares);
        System.out.println("Quanditade de números impares: " + impares);
    }
}
