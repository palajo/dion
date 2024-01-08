import React from 'react';
import Link from 'next/link';

function BlockProduct({ product }) {
  return (
    <div className="block block-product">
      <div className="block-image">
        <Link href={`/products/${product.Slug}`}>
          <img src={product.Images[0].src} alt={product.Images[0].alt} width={product.Images[0].width}
               height={product.Images[0].height}/>
        </Link>
      </div>
      <div className="block-content text-center">
        <Link href={`/products/${product.Slug}`}>
          <div className="block-title">{product.Model}, {product.Title}</div>
        </Link>
        <div className="block-price">{product.Price} грн</div>
        <div className="block-benefits">
          <div className="block block-benefits-item">
            {product.Volume}
          </div>
          <div className="block block-benefits-item">
            {product.Type}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockProduct;