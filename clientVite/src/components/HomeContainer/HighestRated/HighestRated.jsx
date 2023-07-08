import React, { useEffect, useState } from "react";
import axios from "axios";
import AttractionCard from "../AttractionCard/AttractionCard";
import gif from "../../../assets/gih.gif";

const HighestRated = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const getPackages = async () => {
      const { data } = await axios.get(`http://localhost:9999/review/highest`);
      // console.log(data);
      setPackages(data);
    };

    getPackages();
  }, []);
    // console.log(packages);

  return (
    <>
      {packages.length == 0 ? (
        <img src={gif} className="mx-auto" style={{ width: "150px" }} />
      ) : (
        <div className="container p-5 mx-auto">
          <h3 className="text-3xl text-center mb-8">Highest Rated packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {packages.map((pkg, i) => (
              <AttractionCard key={i} attr={pkg} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HighestRated;
