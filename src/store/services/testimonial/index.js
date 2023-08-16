import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toaster from "../../../utility/toaster";

export const testimonialService = createApi({
  reducerPath: "testimonialService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sheetdb.io/api/v1/skavg50mxii5b/",
  }),
  tagTypes: ["Testimonial"],
  endpoints: (builder) => ({
    getTestimonial: builder.query({
      query: () => {
        return {
          url: ``,
          method: "GET",
        };
      },
      transformErrorResponse: (response) =>
        toaster.error(response?.data?.message),
      providesTags: ["Testimonial"],
    }),
  }),
});
export const { useGetTestimonialQuery } = testimonialService;
