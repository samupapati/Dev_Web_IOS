//importa scanner
import java.util.Scanner;

public class Media {
    public static void main(String[] args){
        //criando scanner e instaciando
        Scanner entrada = new Scanner(System.in);

        String aluno;
        double nota1, nota2, media;

        System.out.println("Digite o nome do aluno");
        //recebendo o nome do aluno
        aluno = entrada.nextLine();

        System.out.println("Digite a primeira nota");
        //recebendo o a primeira nota
        nota1 = entrada.nextDouble();

        System.out.println("Digite a segunda nota");
        //recebendo a segunda nota
        nota2 = entrada.nextDouble();

        media = (nota1 + nota2) / 2;

        System.out.println("A média do aluno " + aluno + " é " + media);

        entrada.close();

    }
}
