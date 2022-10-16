// packages
import { DocumentAddIcon } from "@heroicons/react/outline";
// components
import Container from "@components/ui/contaienr";
import Button from "@/components/ui/button";
import Card from "./card";
// types
import type { SiteData } from "@/types";

export interface PanelProps {
  data: SiteData[] | undefined;
  onOpen: () => void;
}

export default function Panel({ data, onOpen }: PanelProps) {
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="py-8">
      {data.length === 0 && (
        <Button
          variant="slim"
          className="border border-dashed border-black-normal rounded-md flex flex-col items-center justify-center px-6 py-9 w-full font-semibold text-lg mt-4"
          onClick={onOpen}
        >
          <DocumentAddIcon className="w-8 text-gray-800 mb-3.5" />
          Add First Site
        </Button>
      )}
      {data.length > 0 && (
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-14 gap-8">
          {data.map((site) => (
            <Card key={site.id} data={site} />
          ))}
        </div>
      )}
    </div>
  );
}
