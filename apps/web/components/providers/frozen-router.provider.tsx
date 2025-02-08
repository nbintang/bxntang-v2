

import usePreviousValue from "../../hooks/use-prev-value";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useSelectedLayoutSegment } from "next/navigation";
import { useContext } from "react";

 export default function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext);
    const prevContext = usePreviousValue(context) || null;
  
    const segment = useSelectedLayoutSegment();
    const prevSegment = usePreviousValue(segment);
  
    const changed =
      segment !== prevSegment &&
      segment !== undefined &&
      prevSegment !== undefined;
  
    return (
      <LayoutRouterContext.Provider value={changed ? prevContext : context}>
        {props.children}
      </LayoutRouterContext.Provider>
    );
  }
  