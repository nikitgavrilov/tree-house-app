import React from "react";
export const useCheckUserStatus = () => {
  const [isUserAuth, setIsUserAuth] = React.useState({
    isAuth: false,
    login: "",
  });

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/users", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          if (data.status !== "Success") {
            setIsUserAuth({ ...data, isAuth: false, login: "" });
          } else if (data.status === "Success") {
            setIsUserAuth({ ...data, isAuth: true, login: data.login });
          }
        }
      } catch {
        console.error("Ошибка при выполнении запроса:");
      }
    };

    fetchUser();
  }, []);

  return isUserAuth;
};
