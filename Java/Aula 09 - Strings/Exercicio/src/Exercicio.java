import java.util.Scanner;

public class Exercicio {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        String str1 = "", str2 = "", str3 = "", str4 = "", str5 = "";

        String frutas[] = new String[5];
        String frutasLower[] = new String[5];

        System.out.println("Digite 5 frutas");
        for(int i = 0; i < frutas.length;){
            System.out.print("--> ");
            String input = entrada.nextLine();
            System.out.println("");

            //Verificando se o input está vazio
            if(!input.isEmpty()) {
                //Verificando se o input tem no minimo 3 letras
                if (input.length() >= 3) {
                    //Verificando se o usuario já informou a fruta
                    if (input.toUpperCase().trim().compareTo(str1.toUpperCase().trim()) != 0 &&
                        input.toUpperCase().trim().compareTo(str2.toUpperCase().trim()) != 0 &&
                        input.toUpperCase().trim().compareTo(str3.toUpperCase().trim()) != 0 &&
                        input.toUpperCase().trim().compareTo(str4.toUpperCase().trim()) != 0 &&
                        input.toUpperCase().trim().compareTo(str5.toUpperCase().trim()) != 0)
                    {
                        if(i == 0){ //verificando indice para inserir a fruta no array
                            str1 = input.toUpperCase();
                            frutas[i] = str1;
                            i++;
                        } else if(i == 1){ //verificando indice para inserir a fruta no array
                            str2 = input.toUpperCase();
                            frutas[i] = str2;
                            i++;
                        } else if(i == 2){ //verificando indice para inserir a fruta no array
                            str3 = input.toUpperCase();
                            frutas[i] = str3;
                            i++;
                        } else if(i == 3){ //verificando indice para inserir a fruta no array
                            str4 = input.toUpperCase();
                            frutas[i] = str4;
                            i++;
                        } else if(i == 4){ //verificando indice para inserir a fruta no array
                            str5 = input.toUpperCase();
                            frutas[i] = str5;
                            i++;}
                    } else{
                        System.out.println("Não pode haver frutas iguais");
                    }
                } else {
                    System.out.println("A fruta precisa de 3 ou mais letras");
                }
            } else{
                System.out.println("Escreva alguma fruta");
            }
        }
        System.out.println("Frutas:");
        for(int i = 0; i < frutas.length; i++){
            //alterando as palavras para minusculas
            frutasLower[i] = frutas[i].replace(frutas[i], frutas[i].toLowerCase());
            System.out.println(frutasLower[i]);
        }
    }
}

