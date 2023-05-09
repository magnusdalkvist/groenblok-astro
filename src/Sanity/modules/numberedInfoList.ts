import { groq } from "astro-sanity";

export const MODULE_NUMBERED_INFO_LIST = groq`
  _key,
  _type,
  infoList[] {
    blocks[] {
      ...,
    },
  },
`;
