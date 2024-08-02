const fetchOrders = async (token: string) => {
  /*   const response = await fetch("http://localhost:4000/users/orders", { */
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/orders`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error al solicitar las ordenes");
  }

  const data = await response.json();

  return data;
};

export default fetchOrders;
