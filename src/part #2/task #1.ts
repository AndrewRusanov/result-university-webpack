interface CalculateDiscount {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = (props: CalculateDiscount): number => {
  const { price, discount, isInstallment, months } = props;

  const discountPrice = price * (1 - discount / 100);
  return isInstallment ? discountPrice / months : discountPrice;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250
