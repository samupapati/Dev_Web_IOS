public class Exercicio2 {
    public static void main(String[] args){
        int matriz[][] = new int[5][5];

        matriz[0][0] = 1;
        matriz[1][1] = 1;
        matriz[2][2] = 1;
        matriz[3][3] = 1;
        matriz[4][4] = 1;

        System.out.println("Matriz identidade: ");
        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz[i].length; j++){
                if(matriz[i][j] != 1){
                    matriz[i][j] = 0;
                }
                System.out.print(" [" + matriz[i][j] + "] ");
            }
            System.out.println("");
        }
    }
}
