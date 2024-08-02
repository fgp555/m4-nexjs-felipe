import { toast } from "sonner";

export const createOrder = async (token: string, products: number[]) => {
  if (token && products.length > 0) {
    const confirmPurshase = window.confirm(
      "¿Estas seguro de finalizar tu compra?"
    );
    if (!confirmPurshase) {
      return;
    }
    try {
      /*  const response = await fetch("http://localhost:4000/orders", { */
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            products: products,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al crear la orden");
      }
      const order = await response.json();
      toast.success("Tu compra se realizo exitosamente");
      return order;
    } catch (error: any) {
      toast("Error al crear la orden ", error.message);
    }
  } else {
    alert("Debes estar logueado y tener articulos en tu carrito");
  }
};
