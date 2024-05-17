import ProductOverview from "@/app/components/ProductOverview/ProductOverview";

export default function Page({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const parts = decodedSlug.split('-');
  const id = parts[parts.length - 1]; 

    return (
    <section className="relative max-w-screen-xl mx-auto px-5 py-9 min-h-[90vh]">
      <ProductOverview id={id} />
    </section>
  );
}
