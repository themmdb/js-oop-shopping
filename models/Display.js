class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }

  //  نشون دادن محصولات در یک ارایه جدید
  showProducts() {
    this.toShow = [...new Set(this.products)];
    // empt رو پاک میکنه
    this.parent.innerHTML = "";
    this.toShow.forEach((product) => {
      //لوپ میزنه رو محصولات پروداکت و تو شو  و هرتعداد ار اون ایدی ها باهم بررابر بود تعداد رو میگه
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createCard(product, qty);
      this.calculateTotalPrice();
    });
  }
  
  createCard(data, qty) {
    const cardEle = document.createElement("div");

    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);

    cardEle.innerHTML = imgEle;
    cardEle.innerHTML += infoEle;

    if (this.constructor.name === "Cart") {
      const controlEle = this.productControl(data, qty);
      cardEle.innerHTML += controlEle;
    }
    this.parent.appendChild(cardEle);
  }

  productImg(data) {
    const { image, alt } = data;

    const imgJSX = `<img alt=${alt} src=${image}>`;
    return imgJSX;
  }
}

export default Display;
