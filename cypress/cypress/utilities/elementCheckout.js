import * as allExports from "../models/reference/elements";

export function findElement(element) {
  function searchNested(obj) {
    for (const key in obj) {
      if (key === element) {
        return obj[key];
      }

      const value = obj[key];
      if (typeof value === "object" && value !== null) {
        const result = searchNested(value);
        if (result !== undefined) {
          return result;
        }
      }
    }
    return undefined;
  }

  return searchNested(allExports);
}
