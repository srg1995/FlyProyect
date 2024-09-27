import { FliesAdapter } from "../adapters/Fly";
import fliesData from "../assets/mocks/flies.json"

export function getFlies() {
  const flies = FliesAdapter(fliesData.flies)

  return flies;
}

export function getFly(idfly) {
  const flies = FliesAdapter(fliesData.flies)
  const fly = flies.find(fly => fly.id == idfly)
  return fly;
}