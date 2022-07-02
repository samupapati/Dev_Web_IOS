import java.util.Scanner;

public class Exercicio1 {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);

        int matriz[][] = new int[4][4];
        int cont = 0;

        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz[i].length; j++){
                System.out.println("Digite um numero para a posicao do array: " + "[" + i + "]" + "[" + j + "]");
                System.out.print("--> ");
                matriz[i][j] = entrada.nextInt();
                System.out.println("");
                if(matriz[i][j] > 10){
                    cont++;
                }
            }
        }

        System.out.println("Número de valores maiores que dez: " + cont);
        System.out.println("Os valores maiores que dez são: ");
        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz[i].length; j++) {
                if(matriz[i][j] > 10){
                    System.out.print(matriz[i][j] + " - ");
                }
            }
        }
        System.out.println("");
        System.out.println("Matriz: ");
        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz[i].length; j++) {
                System.out.print(" [" + matriz[i][j] + "] ");
            }
            System.out.println("");
        }
        entrada.close();
    }
}
