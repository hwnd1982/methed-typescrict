export const product: {
  title: string;
  price: number;
  count: number;
  arrived: boolean;
  options: {
    color: string;
    distance: number;
    weight: number;
  }
} = {
  title: 'Квадрокоптер',
  price: 150_000,
  count: 5,
  arrived: false,
  options: {
    color: 'grey',
    distance: 4000,
    weight: 250,
  }
};
