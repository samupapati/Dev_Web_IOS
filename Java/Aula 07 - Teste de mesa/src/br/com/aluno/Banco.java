package br.com.aluno;
import java.util.Scanner;

public class Banco {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        int i = 0;

        while(i < 1) {
            System.out.println(".____________--------____________.");
            System.out.println("|              [o]               |");
            System.out.println("|____________--------____________|");
            System.out.println("|                                |");
            System.out.println("|     Bem vindo ao HawkBank!     |");
            System.out.println("|                                |");
            System.out.println("|--------------------------------|");
            System.out.println("|                                |");
            System.out.println("| Qual operacao deseja realizar? |");
            System.out.println("|                                |");
            System.out.println("|       1 - Conta corrente       |");
            System.out.println("|                                |");
            System.out.println("|       2 - Conta poupanca       |");
            System.out.println("|                                |");
            System.out.println("|       3 - Conta estudante      |");
            System.out.println("|                                |");
            System.out.println("|--------------------------------|");
            System.out.print("| ");
            int input = entrada.nextInt();

            switch (input) {
                case 1:
                    System.out.println("|--------------------------------|");
                    System.out.println("|                                |");
                    System.out.println("|            HawBank             |");
                    System.out.println("|                                |");
                    System.out.println("|Voce selecionou a conta corrente|");
                    System.out.println("|                                |");
                    System.out.println("|   Deseja refazer a operacao?   |");
                    System.out.println("|                                |");
                    System.out.println("|--------------------------------|");
                    System.out.println("|                                |");
                    System.out.println("|            1 - Sim             |");
                    System.out.println("|            2 - Nao             |");
                    System.out.println("|                                |");
                    System.out.println("|--------------------------------|");
                    System.out.print("| ");
                    int input2 = entrada.nextInt();
                    if(input2 == 1){
                        break;
                    } else if(input2 == 2) {
                        System.out.println("|--------------------------------|");
                        System.out.println("|                                |");
                        System.out.println("|  Obrigado por usar o HawkBank  |");
                        System.out.println("|                                |");
                        System.out.println("|--------------------------------|");
                        i++;
                        break;
                    }
                case 2:
                    System.out.println("|--------------------------------|");
                    System.out.println("|                                |");
                    System.out.println("|            HawBank             |");
                    System.out.println("|                                |");
                    System.out.println("|Voce selecionou a conta poupanca|");
                    System.out.println("|                                |");
                    System.out.println("|   Deseja refazer a operacao?   |");
                    System.out.println("|                                |");
                    System.out.println("|--------------------------------|");
                    System.out.println("|                                |");
                    System.out.println("|            1 - Sim             |");
                    System.out.println("|            2 - Nao             |");
                    System.out.println("|                                |");
                    System.out.println("|--------------------------------|");
                    System.out.print("| ");
                    int input3 = entrada.nextInt();
                    if(input3 == 1){
                        break;
                    } else if(input3 == 2) {
                        System.out.println("|--------------------------------|");
                        System.out.println("|                                |");
                        System.out.println("|  Obrigado por usar o HawkBank  |");
                        System.out.println("|                                |");
                        System.out.println("|--------------------------------|");
                        i++;
                        break;
                    }
                case 3:
                    System.out.println("|---------------------------------|");
                    System.out.println("|                                 |");
                    System.out.println("|             HawBank             |");
                    System.out.println("|                                 |");
                    System.out.println("|Voce selecionou a conta estudante|");
                    System.out.println("|                                 |");
                    System.out.println("|   Deseja refazer a operacao?    |");
                    System.out.println("|                                 |");
                    System.out.println("|---------------------------------|");
                    System.out.println("|                                 |");
                    System.out.println("|             1 - Sim             |");
                    System.out.println("|             2 - Nao             |");
                    System.out.println("|                                 |");
                    System.out.println("|---------------------------------|");
                    System.out.print("| ");
                    int input4 = entrada.nextInt();
                    if(input4 == 1){
                        break;
                    } else if(input4 == 2) {
                        System.out.println("|--------------------------------|");
                        System.out.println("|                                |");
                        System.out.println("|  Obrigado por usar o HawkBank  |");
                        System.out.println("|                                |");
                        System.out.println("|--------------------------------|");
                        i++;
                        break;
                    }
            }
        }
        entrada.close();
    }
}
