export const formatPrice = (value) => {
    if (!value) return "0";
    return Number(value).toLocaleString("ru-RU"); 
  };