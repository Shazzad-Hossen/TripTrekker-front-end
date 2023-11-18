import axios from "axios";

export const uploadImage = async(images={})=>{
    const uploadedUrls = [];
    await Promise.all(
        Object.keys(images).map(async (key) => {
            if(typeof images[key]==='string') {
                uploadedUrls.push(images[key]);
            }
            else {
               const formData = new FormData();
                formData.append("file", images[key]);
                try {
                    const response = await axios.post(
                      `${import.meta.env.VITE_SERVER_URL}/api/file`,
                      formData,
                      {
                        headers: {
                          "Content-Type": "multipart/form-data",
                        },
                      }
                    );
                    if(response.status===201) {
                      uploadedUrls.push(response.data);

                    }
                   
                  } catch (error) {
                    console.error("Error uploading image:", error);
                  }

            }
          
          
        })
      );

      return uploadedUrls;
}