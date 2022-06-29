import java.util.Scanner;

public class Exercicio1 {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);

        int array[] = new int[10];
        int maior = 0, menor = 999999999;
        double media = 0;

        for(var i = 1; i < array.length; i++){
            System.out.println("Digite um numero:");
            array[i] = entrada.nextInt();

            if(array[i] > maior){
                maior = array[i];
            }
            if(array[i] < menor){
                menor = array[i];
            }
            media += array[i];

        }
        System.out.println("Maior valor: " + maior);
        System.out.println("Menor valor: " + menor);
        System.out.println("Media: " + (media / array.length));
        entrada.close();
    }
}
