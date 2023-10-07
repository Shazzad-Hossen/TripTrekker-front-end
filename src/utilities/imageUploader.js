import axios from "axios";

export const uploadImage = async(images={})=>{
    const formData = new FormData();
    const uploadedUrls = [];
    await Promise.all(
        Object.keys(images).map(async (key) => {
            if(typeof images[key]==='string') {
                uploadedUrls.push(images[key]);
            }
            else {
                formData.append("image", images[key]);
                try {
                    const response = await axios.post(
                      "https://api.imgbb.com/1/upload",
                      formData,
                      {
                        headers: {
                          "Content-Type": "multipart/form-data",
                        },
                        params: {
                          key: "a8f83831f3e714703a0b98d00fcf8f8a",
                        },
                      }
                    );
                    const url = response?.data?.data?.url;
                    if (url) {
                      uploadedUrls.push(url);
                    }
                  } catch (error) {
                    console.error("Error uploading image:", error);
                  }

            }
          
          
        })
      );

      return uploadedUrls;
}