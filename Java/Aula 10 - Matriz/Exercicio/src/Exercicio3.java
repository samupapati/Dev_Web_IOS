import java.util.Random;

public class Exercicio3 {
    public static void main(String[] args){
        Random rand = new Random();

        int matriz[][] = new int[100][100];

        System.out.println("Números normais");
        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz[i].length; j++){
                int numAleatorio = rand.nextInt(100+1);
                matriz[i][j] = numAleatorio;
                System.out.print(" [" + matriz[i][j] + "] ");
            }
            System.out.println("");
        }

        System.out.println("\n");
        System.out.println("Números substituidos");
        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz[i].length; j++){
                if(matriz[i][j] % 2 == 0){
                    matriz[i][j] = 1;
                } else{
                    matriz[i][j] = -1;
                }
                System.out.print(" [" + matriz[i][j] + "] ");
            }
            System.out.println("");
        }
    }
}
