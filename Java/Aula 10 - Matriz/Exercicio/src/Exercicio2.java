public class Exercicio2 {
    public static void main(String[] args){
        int matriz[][] = {{0,0,0,0,0}, {0,0,0,0,0},{0,0,0,0,0},{0,0,0,0,0},{0,0,0,0,0}};

        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz[i].length; j++){
                if(matriz[i][j] == 0 && matriz[i][j] == 0){
                    matriz[i][j] = 1;
                } else{
                    matriz[i][j] = 0;
                }
                System.out.print(" [" + matriz[i][j] + "] ");
            }
            System.out.println("");
        }
    }
}
