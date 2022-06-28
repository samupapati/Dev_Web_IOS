public class SomaVetor {

    public static void main(String[] args) {
        int[] array = {870, 500, 2, -1000, 74, 78, 3, 10000, 25, 87};
        int total = 0;

        // adiciona o valor de cada elemento ao total
        for (int counter = 0; counter < array.length; counter++)
            total += array[counter];

        System.out.printf("A soma dos elementos do array eh: %d%n ", total);
    }
} // fim da classe SomaArray