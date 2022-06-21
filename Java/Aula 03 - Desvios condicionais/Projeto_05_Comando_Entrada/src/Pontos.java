//importa scanner
import java.util.Scanner;

public class Pontos {
    public static void main(String[] args){
        //instacia scanner
        Scanner entrada = new Scanner(System.in);

        //declarando variaveis
        String nomeJogador;
        double pontos;

        System.out.println("Digite o nome do jogador");
        //recebendo nome do jogador
        nomeJogador = entrada.nextLine();

        System.out.println("Digite os pontos ");
        //recebendo pontos do jogador
        pontos = entrada.nextDouble();

        //verificando se os pontos é maior que 1000
        if(pontos >= 1000){
            System.out.println("Voce passou para a fase 2!");
        }

        //
        entrada.close();
    }
}
