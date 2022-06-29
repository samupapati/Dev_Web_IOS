import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        String array[] = new String[5];

        for(var i = 0; i < 5; i++){
            array[i] = entrada.nextLine();
        }
        System.out.println("Ordem inversa:");
        for(var i = 4; i >= 0; i--){
            System.out.println(array[i]);
        }
        entrada.close();
    }
}
