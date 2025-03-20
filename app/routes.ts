import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("buy", "routes/buy.tsx"),
  route("mockups", "routes/mockups.tsx"),
  route("mockup/1", "routes/mockup/1.tsx"),
] satisfies RouteConfig;
