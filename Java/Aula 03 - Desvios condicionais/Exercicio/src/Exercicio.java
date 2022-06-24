import java.util.Scanner;

public class Exercicio {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);

        String mes = "s";

        System.out.println("Escreva um mês: ");
        mes = entrada.nextLine();

        if(mes.equalsIgnoreCase("janeiro")){
            System.out.println("A estação de " + mes + " é " + " Verão.");
        } else if(mes.equalsIgnoreCase("fevereiro")){
            System.out.println("A estação de " + mes + " é " + " Verão.");
        } else if(mes.equalsIgnoreCase("março")){
            System.out.println("A estação de " + mes + " é " + " Verão.");
        } else if(mes.equalsIgnoreCase("abril")){
            System.out.println("A estação de " + mes + " é " + " Outono.");
        } else if(mes.equalsIgnoreCase("maio")){
            System.out.println("A estação de " + mes + " é " + " Outono.");
        } else if(mes.equalsIgnoreCase("junho")){
            System.out.println("A estação de " + mes + " é " + " Outono.");
        } else if(mes.equalsIgnoreCase("julho")){
            System.out.println("A estação de " + mes + " é " + " Inverno.");
        } else if(mes.equalsIgnoreCase("agosto")){
            System.out.println("A estação de " + mes + " é " + " Inverno.");
        } else if(mes.equalsIgnoreCase("setembro")){
            System.out.println("A estação de " + mes + " é " + " Inverno.");
        } else if(mes.equalsIgnoreCase("outubro")){
            System.out.println("A estação de " + mes + " é " + " Primavera.");
        } else if(mes.equalsIgnoreCase("novembro")){
            System.out.println("A estação de " + mes + " é " + " Primavera.");
        } else if(mes.equalsIgnoreCase("dezembro")){
            System.out.println("A estação de " + mes + " é " + " Primavera.");
        }
        entrada.close();
    }
}
