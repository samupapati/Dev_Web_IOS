public class MultiplosDoisWhile {
    public static void main(String[] args){
        int contador = 0;

        while(contador <= 1000){
            System.out.print(contador + " ");
            contador+=2;

            if(contador % 50 == 0){
                System.out.println("");
            }
        }
    }
}
