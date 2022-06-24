public class MultiplosDois {
    public static void main(String[] args){
        for(var i = 0; i <= 1000; i += 2){
            System.out.print(i + " ");

            if(i % 50 == 0){
                System.out.println("");
            }
        }
    }
}
