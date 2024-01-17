import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import GPU from "@/public/products/rtx-4090.jpg";
import Image from "next/image";
import { getProducts } from "@/app/lib/data";

// const iconMap = {

// }

export default async function CardWrapper() {
  // const productModel = await getProducts();
  return (
    <>
      <Card title="RTX 4090" value="$2000" productType="GPU" />
      <Card title="RTX 4090" value="$2000" productType="GPU" />
      <Card title="RTX 4090" value="$2000" productType="GPU" />
    </>
  );
}

export function Card({
  title,
  value,
  productType,
}: {
  title: string;
  value: number | string;
  productType: "GPU" | "CPU" | "RAM";
}) {
  // const Icon = iconMap[type]
  return (
    <div className="max-w-sm lg:max-w-4xl lg:flex m-10">
      {/* insert {product.image} here */}
      <Image
        src={GPU}
        alt="RTX 4090"
        className="max-w-sm flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l"
      />
      <div className=" text-black bg-green-500 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="flex flex-col p-4">
          <h2 className="ml-2 mb-2 text-2xl font-medium">{title}</h2>
          <p className="text-sm overflow-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            dolore laudantium ea animi nesciunt, omnis quidem provident
            architecto illum molestias quae odit illo tenetur assumenda magnam
            magni doloribus iusto? Possimus!
          </p>
          <p className="truncate rounded-xl px-4 py-8 text-end text-xl">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
