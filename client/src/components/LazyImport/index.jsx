import { Suspense } from "react";
import LazyLoading from "@/components/LazyLoading";

export const LazyImport = ({ lazy }) => {
  const Component = lazy ? lazy : () => null;
  return (
    <Suspense fallback={<LazyLoading />}>
      <Component />
    </Suspense>
  );
};
