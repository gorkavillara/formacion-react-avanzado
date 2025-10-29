import {
  PlasmicRootProvider,
  PageParamsProvider,
  PlasmicComponent,
} from "@plasmicapp/loader-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { PLASMIC } from "./plasmic-init";

export default function App() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <Router>
        <Routes>
          <Route path="/" element={<CatchAllPage />} />
        </Routes>
      </Router>
    </PlasmicRootProvider>
  );
}

// We try loading the Plasmic page for the current route.
// If it doesn't exist, then return "Not found."
export function CatchAllPage() {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    PLASMIC.maybeFetchComponentData(location.pathname).then((data) => {
      setPageData(data);
      setLoading(false);
    });
  }, [location]);
  if (loading) return <div>Loading...</div>;
  if (!pageData) return <div>Not found</div>;
  return (
    <PageParamsProvider
      route={location.pathname}
      query={Object.fromEntries(searchParams)}
    >
      <PlasmicComponent component={location.pathname} />
    </PageParamsProvider>
  );
}
