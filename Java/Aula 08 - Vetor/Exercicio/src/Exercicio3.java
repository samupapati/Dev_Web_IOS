import java.util.Scanner;
import java.util.Random;

public class Exercicio3 {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        Random rand = new Random();

        int array[] = new int[10];
        int menor = 999999999;

        for(var i = 0; i < array.length; i++){
            array[i] = rand.nextInt(10)+1;
            if(array[i] < menor){
                menor = array[i];
            }
        }
        System.out.println("Numeros sorteados:");
        for(var i = 0; i < array.length; i++){
            System.out.print(array[i]);
            System.out.print(" ");
        }
        System.out.println(" ");
        System.out.println("Menor numero:");
        System.out.println(menor);
    }
}
