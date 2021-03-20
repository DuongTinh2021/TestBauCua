import React, { Component } from "react";
import ProductList from "./ProductList";

export default class Baitap3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          maSP: 1,
          tenSP: "Vivo 850",
          manHinh: 'AMOLED, 6.2", Full HD+',
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 5700000,
          hinhAnh: "./img/sp_vivo850.png",
        },
        {
          maSP: 2,
          tenSP: "Samsung Note 7",
          manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
          heDieuHanh: "Android 9.0 (Pie); Flyme",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 7600000,
          hinhAnh: "./img/sp_note7.png",
        },
        {
          maSP: 3,
          tenSP: "Iphone XS Max",
          manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
          heDieuHanh: "iOS 12",
          cameraSau: "Chính 12 MP & Phụ 12 MP",
          cameraTruoc: "7 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 27000000,
          hinhAnh: "./img/sp_iphoneX.png",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <ProductList products={this.state.products} />
      </div>
    );
  }
}
