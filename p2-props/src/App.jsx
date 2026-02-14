import React from "react";
import Card from "./components/card";
export const App = () => {
  return (
    <div>
      <div className="cards">
        <Card
          name="Yogesh"
          description="This is my first card using props in React."
          image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop"
        />

        <Card
          name="Rathia"
          description="This is another card component."
          image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1283&auto=format&fit=crop"
        />
      </div>
    </div>
  );
};

export default App;
