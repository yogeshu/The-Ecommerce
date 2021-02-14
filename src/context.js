import React from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [photos, setPhotos] = React.useState([]);

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <Context.Provider value={{ photos }}>{props.children}</Context.Provider>
  );
}
export { ContextProvider, Context };
