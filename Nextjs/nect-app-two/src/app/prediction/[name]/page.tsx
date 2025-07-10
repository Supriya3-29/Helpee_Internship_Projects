// import React from 'react'
const getPredictedAge = async (name: string) => {
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  return response.json();
};

const getPredictedGender = async (name: string) => {
  const response = await fetch(`https://api.genderize.io/?name=${name}`);
  return response.json();
};

const getPredictedCountry = async (name: string) => {
  const response = await fetch(`https://api.nationalize.io/?name=${name}`);
  return response.json();
};

interface Params {
  params: {
    name: string;
  }
}


export default async function Prediction({ params }:  Params) {
  const predictedAge = await getPredictedAge(params.name);
  const predictedGender = await getPredictedGender(params.name);
  const predictedCountry = await getPredictedCountry(params.name);

  const [age , gender , country] = await Promise.all([predictedAge , predictedGender , predictedCountry]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold">Hello, {params.name}!</h1>
      <div>Age: {age?.age}</div>
      <div>Gender: {gender?.gender}</div>
      <div>Country: {country.country?.[0]?.country_id}</div>
    </main>
  );
}
