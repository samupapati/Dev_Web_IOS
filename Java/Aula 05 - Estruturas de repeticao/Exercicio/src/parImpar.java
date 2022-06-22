import java.util.Scanner;

public class parImpar {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int pares = 0, impares = 0, contador = 0, perguntas = 10;

        System.out.println("Escreva 10 números");

        while(contador <= perguntas){
            System.out.println("Numero " + contador + ":");
            int num = entrada.nextInt();
            if(num % 2 == 0){
                pares++;
            } else{
                impares++;
            }
            if(contador == perguntas){
                System.out.println(pares + "números são pares");
                System.out.println(impares + "números são impares");
            }
            contador++;
        }
    }
}
