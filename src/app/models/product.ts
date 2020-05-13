export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public imageURL = 'https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/6e145c78367b48efb606ab17012331e0_9366/Tenis_NMD_R1_Negro_EF4268_01_standard.jpg'
  ) {}
}
