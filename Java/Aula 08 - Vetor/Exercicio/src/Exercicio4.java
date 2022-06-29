import java.util.Scanner;

public class Exercicio4 {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);

        String arrayA[] = new String[4];
        String arrayB[] = new String[7];
        String arrayC[] = new String[11];

        System.out.println("Primeiro Array:");
        for(var i = 0; i < arrayA.length; i++){
            System.out.println("Digite uma letra: ");
            System.out.print("--> ");
            arrayA[i] = entrada.nextLine();
        }
        System.out.println("Primeiro Array concluido!");
        System.out.println("\n");
        System.out.println("Segundo Array:");
        for(var i = 0; i < arrayB.length; i++){
            System.out.println("Digite uma letra: ");
            System.out.print("--> ");
            arrayB[i] = entrada.nextLine();
        }
        System.out.println("Segundo Array concluido!");
        System.out.println("\n");
        System.out.println("Juntando os arrays: ");
        for(var i = 0; i < arrayA.length; i++){
            arrayC[i] = arrayA[i];
        }
        for(var i = 4; i < arrayB.length + 4; i++){
            arrayC[i] = arrayB[i-4];
        }
        for(var i = 0; i < arrayC.length; i++){
            System.out.println(arrayC[i]);
        }
    }
}
