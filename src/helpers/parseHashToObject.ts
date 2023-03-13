export function parseHashToObject(str: string) {
  let pieces = str.replace("#", "").split("&");
  let data: any = {};
  let i;
  let parts;
  for (i = 0; i < pieces.length; i++) {
    parts = pieces[i].split("=");
    if (parts.length < 2) {
      parts.push("");
    }
    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }
  return data;
}
