import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [Data, setData] = useState("");
  const fetch1 = async () => {
    const response = await fetch("https://qapi.vercel.app/api/random");
    const quoteData = await response.json();
    setData(quoteData.quote);
  };
  useEffect(() => {
    fetch1();
  }, []);

  return (
    <div class="quote-box">
      <h2>Random Quotes</h2>
      <h6>{Data}</h6>
      <button onClick={fetch1}>Get Quote</button>
    </div>
  );
};

export default Quotes;
