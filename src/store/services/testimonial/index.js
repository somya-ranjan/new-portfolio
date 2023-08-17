import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { VITE_APP_API_URL } from "../../../config/envConfig";
import toaster from "../../../utility/toaster";

export const testimonialService = createApi({
  reducerPath: "testimonialService",
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_APP_API_URL,
  }),
  tagTypes: ["Testimonial"],
  endpoints: (builder) => ({
    getTestimonial: builder.query({
      query: () => {
        return {
          url: `skavg50mxii5b`,
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
