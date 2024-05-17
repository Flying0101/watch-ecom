import ProductOverview from "@/app/components/ProductOverview/ProductOverview";
import ProductSpecification from "@/app/components/ProductSpecification/ProductSpecification";

export default function Page({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const parts = decodedSlug.split('-');
  const id = parts[parts.length - 1]; 

    return (
    <section className="py-9 min-h-[90vh]">
      <ProductOverview id={id} />
      <ProductSpecification id={id}/>
    </section>
  );
}
