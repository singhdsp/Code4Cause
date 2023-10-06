import { AddRounded, Close } from "@mui/icons-material";
import React, { useState, useRef } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { SHA256 } from "crypto-js";
import sha256 from "crypto-js/sha256";

const storage = getStorage();

export default function DefaultDash() {
  const [plantImage, setPlantImage] = useState();
  const [downloadURL1, setDownloadURL1] = useState();
  const [loading, setLoading] = useState(false);
  const [plantResult, setPlantResult] = useState();
  const inputFile = useRef(null);
  const localBucket = {
    data: []
  }

  const saveToLocal = () => {
    if (localStorage.getItem("MyPlants") !== null) {
      const bucket = localStorage.getItem("MyPlants")
      const newPlant = {
        plantData: plantResult,
        downloadURL: downloadURL1
      }
      bucket.data.push(newPlant)
      localStorage.setItem("MyPlants", bucket)
      console.log(localStorage.getItem("MyPlants"))
    } else {
      const newPlant = {
        plantData: plantResult,
        downloadURL: downloadURL1
      }
      localBucket.data.push(newPlant)
      localStorage.setItem("MyPlants", localBucket)
      console.log(localStorage.getItem("MyPlants"))
    }
  }

  const randomInt = () => {
    const c = Math.floor(Math.random() * 26)
    localStorage.setItem("Points", c)
    return c
  }

  const uploadImage = (plantImageFile) => {
    setLoading(true)
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log(r)
    const storageRef = ref(storage, sha256(r).toString());

    uploadBytes(storageRef, plantImageFile).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log(downloadURL);
        setDownloadURL1(downloadURL)
        const myUrlWithParams = new URL("https://my-api.plantnet.org/v2/identify/all");

        myUrlWithParams.searchParams.append("images", downloadURL);
        fetch(`${myUrlWithParams.href}&include-related-images=false&no-reject=false&lang=en&api-key=2b100BZfguBqshkNq3FDCa9dCe`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data.results[0])
            setPlantResult(data.results[0])
            setLoading(false)
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    });
  };

  return (
    <div className="flex-1 flex justify-center">
      {plantResult && (
        <div className="h-screen w-screen absolute bg-[rgba(255,255,255,0.7)] top-0 left-0 flex justify-center items-center">
          <div className="p-4 pt-16 rounded-2xl bg-green-600 grid grid-cols-4 relative">
            <div className="absolute top-0 left-0 bg-gradient-to-br from-green-600 to-green-800 w-full rounded-t-2xl flex justify-between font-bold font-Ps text-white uppercase tracking-wider items-center">
              <h1 className="pl-2">Result</h1>
              <div className="p-3 bg-red-500 rounded-tr-2xl hover:bg-red-700 cursor-pointer" onClick={() => setPlantResult(null)}>
                <Close />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src={downloadURL1} className=" h-40 w-40 object-cover rounded-xl" />
            </div>
            <div className="flex flex-col col-span-2 text-white font-semibold font-Ps p-2 justify-center ">
              <h1>Common Name : {plantResult.species.commonNames[0]}</h1>
              <h1>Scientific Name : {plantResult.species.scientificName}</h1>
              <h1>Family Name : {plantResult.species.family.scientificName}</h1>
            </div>
            <div className="flex flex-col justify-between">
              <div className="px-3 py-1 border-blue-600 border-2 bg-blue-600 rounded-full text-white font-semibold font-Ps">
                <h1>Accurancy : {plantResult.score}</h1>
              </div>
              <img src={process.env.PUBLIC_URL + '/Success.gif'} alt="loading..." />
              <div className="px-3 py-1 border-purple-600 border-2 bg-purple-600 rounded-full text-white font-semibold font-Ps flex">
                <h1>Rarity : </h1>
                <h1 className="mx-auto">{randomInt()}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="h-screen w-screen absolute bg-[rgba(255,255,255,0.6)] top-0 left-0 flex justify-center items-center">
          <div className="p-4 bg-white rounded-2xl">
            <img src={process.env.PUBLIC_URL + '/Loading.gif'} />
          </div>
        </div>
      )}
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
