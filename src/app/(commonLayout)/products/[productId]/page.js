export default async function DynamicProductPage({ params, searchParams }) {
  const id = await params; //! this is for use dynamic route query or get
  const query = await searchParams; //! this for dynamic query get form url

  return (
    <div className="text-center text-4xl">
      This is dynamic product page {id.productId}
    </div>
  );
}
