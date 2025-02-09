import ProductCard from "@/components/ProductCard";
import React from "react";

export default async function HomePage() {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  console.log(products);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-semibold mb-10">
        Features Product Fetching, Caching and Revalidating with Next Js
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
