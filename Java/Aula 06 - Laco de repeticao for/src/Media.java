import java.util.Scanner;

public class Media {
    public static void main(String[] args){

    Scanner entrada = new Scanner(System.in);

    double nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0, nota5 = 0, nota6 = 0, nota7 = 0, nota8 = 0, notas = 0 ;
    double numero = 0;

    System.out.println("Escreva as 8 notas do aluno:");
    for(var i = 1; i < 9; i++){
        System.out.println("Nota " + i);
        numero = entrada.nextDouble();

        if(i == 1){
            nota1 = numero;
        } else if (i == 2){
            nota2 = numero;
        } else if(i == 3){
            nota3 = numero;
        } else if(i == 4){
            nota4 = numero;
        } else if(i == 5){
            nota5 = numero;
        } else if(i == 6){
            nota6 = numero;
        } else if(i == 7){
            nota7 = numero;
        } else if (i == 8){
            nota8 = numero;
            notas = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8;
        }
    }
    System.out.println("A média do aluno é " + notas / 8);

    entrada.close();
    }
}
