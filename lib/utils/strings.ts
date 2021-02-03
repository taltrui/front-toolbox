export const formatAssetsSrc = (utility: string, src: string): string =>
  src.replace("${utility}", utility);

export const capitalize = (string: string): string =>
  `${string[0].toUpperCase()}${string.slice(1)}`;
