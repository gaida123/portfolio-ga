export type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | Record<string, boolean>
  | ClassValue[];

export function cn(...inputs: ClassValue[]) {
  const classes: string[] = [];

  const push = (val: ClassValue) => {
    if (!val) return;
    if (typeof val === "string" || typeof val === "number") {
      classes.push(String(val));
      return;
    }
    if (Array.isArray(val)) {
      val.forEach(push);
      return;
    }
    if (typeof val === "object") {
      for (const [k, v] of Object.entries(val)) {
        if (v) classes.push(k);
      }
    }
  };

  inputs.forEach(push);
  return classes.join(" ");
}

