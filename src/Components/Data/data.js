import React from 'react';

export async function getData() {
  const request = await fetch(`http://localhost:3001/data`);
  const response = await request.json();
  return response;
}