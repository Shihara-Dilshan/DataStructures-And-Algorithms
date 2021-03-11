class InsertionSort {
    private final static int[] arr = {
        1,
        6,
        533,
        3,
        999,
        7,
        9,
        10,
        65
    };

    public static void main(String arguments[]) {
        System.out.println("unsorted Array : " + java.util.Arrays.toString(arr));
        Sorting s = new Sorting();
        s.sort(arr);
    }

    static class Sorting {
        private int temp;

        public void sort(int[] arr) {
            for (int i = 0; i <= arr.length - 1; i++) {
                temp = arr[i];
                int j = i - 1;
                while (j >= 0) {
                    if (arr[j] >= temp) {
                        arr[j + 1] = arr[j];
                        j--;
                    } else {
                        arr[j + 1] = temp;
                        break;
                    }

                }
            }
            System.out.println("sorted Array   : " + java.util.Arrays.toString(arr));
        }
    }
}
