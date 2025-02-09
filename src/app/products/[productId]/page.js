export default async function DynamicProductPage({ params }) {
  const id = await params;
  return (
    <div className="text-center text-4xl">
      This is dynamic product page {id.productId}
    </div>
  );
}
