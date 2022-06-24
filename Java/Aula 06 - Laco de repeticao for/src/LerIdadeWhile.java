import java.util.Scanner;

public class LerIdadeWhile {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);

        int contador = 0;
        int idade, idade1 = 0, idade2 = 0, idade3 = 0, idade4 = 0, idade5 = 0;

        while(contador < 5){
            System.out.println("Escreva sua idade");
            idade = entrada.nextInt();

            if(contador == 0){
                idade1 = idade;
            } else if(contador == 1){
                idade2 = idade;
            } else if (contador == 2) {
                idade3 = idade;
            } else if(contador == 3){
                idade4 = idade;
            } else{
                idade5 = idade;
            }

            contador++;
        }
        System.out.println("As idades são :");
        System.out.println("idade um: " + idade1);
        System.out.println("idade dois: " + idade2);
        System.out.println("idade tres: " + idade3);
        System.out.println("idade quatro: " + idade4);
        System.out.println("idade cinco: " + idade5);

        entrada.close();
    }
}
