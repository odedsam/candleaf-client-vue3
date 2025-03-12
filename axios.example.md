```ts

import axios from "axios";

const API_URL = "https://api.example.com";

// GET - קבלת נתונים
const getData = async () => {
  const response = await axios.get(`${API_URL}/items`);
  return response.data;
};

// POST - יצירת נתון חדש
const createItem = async (item: any) => {
  const response = await axios.post(`${API_URL}/items`, item);
  return response.data;
};

// PATCH - עדכון נתון קיים
const updateItem = async (id: string, updatedData: any) => {
  const response = await axios.patch(`${API_URL}/items/${id}`, updatedData);
  return response.data;
};

// DELETE - מחיקת נתון
const deleteItem = async (id: string) => {
  await axios.delete(`${API_URL}/items/${id}`);
};

export { getData, createItem, updateItem, deleteItem };

```