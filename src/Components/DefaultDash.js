import { AddRounded } from "@mui/icons-material";
import React, { useState, useRef } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { SHA256 } from "crypto-js";

const storage = getStorage();

export default function DefaultDash() {
  const [plantImage, setPlantImage] = useState();
  const inputFile = useRef(null);

  const uploadImage = (plantImageFile) => {
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log(r)
    const storageRef = ref(storage, SHA256(Date.now().toString()));

    uploadBytes(storageRef, plantImageFile).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log(downloadURL);
      });
    });
  };

  return (
    <div className="flex-1 flex justify-center">
      <div className="h-[30rem] w-[45rem] mt-18 border-2 border-green-600 rounded-xl border-dashed grid grid-rows-3 p-3">
        <div
          className="p-12 cursor-pointer bg-gray-200 text-green-600 text-5xl flex justify-center items-center rounded-xl hover:bg-green-600 hover:text-white row-span-2"
          onClick={() => inputFile.current.click()}
        >
          <AddRounded fontSize="inherit" />
          <input
            type="file"
            ref={inputFile}
            className=" hidden"
            onChange={(e) => {
              uploadImage(e.target.files[0]);
            }}
          />
        </div>
        <div className="text-center font-Ps font-bold py-4 flex flex-col justify-center items-center">
          <h1 className="text-xl uppercase tracking-wide">
            Click To Upload Images
          </h1>
          <h1 className=" text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
            purus fringilla, aliquam urna nec, lacinia augue. Aliquam erat
            volutpat. Aliquam erat volutpat.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
