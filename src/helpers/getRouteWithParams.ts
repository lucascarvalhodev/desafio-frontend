import { EAppRoutes } from "../AppRoutes";

export function getRouteWithParams(
  route: EAppRoutes,
  params: Record<string, string | undefined>
) {
  const keys = Object.keys(params);

  keys.forEach((key) => {
    route = route.replaceAll(
      ":" + key,
      params[key] ?? "undefined"
    ) as EAppRoutes;
  });

  return route;
}
