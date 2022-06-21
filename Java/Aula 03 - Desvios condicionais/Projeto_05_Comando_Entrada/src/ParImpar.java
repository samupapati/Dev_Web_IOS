import java.util.Scanner;

public class ParImpar {
    public static void main(String[] args) {
        //Instanciando o scanner
        Scanner entrada = new Scanner(System.in);

        //criando variaveis
        int numero;

        System.out.println("Digite um número");
        //recebendo o numero
        numero = entrada.nextInt();

        //verificando se o número é par ou impar

        if(numero % 2 == 0){
            System.out.println("O número é par");
        } else{
            System.out.println("O número é impar");
        }
    }
}