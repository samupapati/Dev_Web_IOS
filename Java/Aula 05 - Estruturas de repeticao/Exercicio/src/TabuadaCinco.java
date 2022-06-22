public class TabuadaCinco {
    public static void main(String[] args) {
        int contador = 0, tabuada = 5;

        System.out.println("Tabuada do cinco:");
        do{
            System.out.println(tabuada + " x " + contador + " = " + tabuada*contador);
            contador++;
        } while(contador <= 10);
    }
}
