/** @type {import('payload/types').CollectionConfig} */
const Image = {
    slug: "image",
    upload: {
      staticDir: "uploaded_images",
      staticURL: "/uploaded_images",
      adminThumbnail: "thumbnail",
      mimeTypes: ["image/*"],
    },
    fields: [
      {
        name: "Title",
        type: "text",
        required: true,
      },
      {
        name: "Description",
        type: "textarea",
      },
    ],
  };
  
  export default Image;