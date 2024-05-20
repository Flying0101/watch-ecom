import ProductOverview from "@/app/components/ProductOverview/ProductOverview";
import ProductSpecification from "@/app/components/ProductSpecification/ProductSpecification";

export default function Page({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const parts = decodedSlug.split("-");
  const id = parts[parts.length - 1];

  const idNumber = parseInt(id);

  if (isNaN(idNumber) || idNumber > 16 || idNumber < 0) {
    return (
      <div className="py-9 min-h-[90vh] flex justify-center items-center">
        <h2>
          Error: watch not found. <br /> Please check your URL or retry later..
        </h2>
      </div>
    );
  }
  return (
    <section className="py-9 min-h-[90vh]">
      <ProductOverview id={id} />
      <ProductSpecification id={id} />
    </section>
  );
}
