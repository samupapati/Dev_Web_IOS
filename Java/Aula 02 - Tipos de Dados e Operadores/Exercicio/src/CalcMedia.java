public class CalcMedia {
    public static void main(String[] args){
        int media = 6;
        String nomeAluno = "Carlos";
        int n1 = 6;
        int n2 = 8;
        int n3 = 5;
        int n4 = 9;

        System.out.println("Media: " + media);
        int notaFinal = (n1 + n2+ n3 + n4) / 4;
        if(notaFinal >= media){
            System.out.println("O aluno " + nomeAluno + " tirou " + notaFinal + " e foi aprovado!");
        } else{
            System.out.println("O aluno " + nomeAluno + " tirou " + notaFinal + " e foi reprovado!");
        }
    }
}
