import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ComplexProps, ConditionalProps, DefaultProps, PropsExample } from "./PropsExample";
import Card from "./Card";
import { ModalEx } from "./components/ModalEx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <div style={{ display: "flex", gap: "10px" }}>
      <PropsExample />
      <DefaultProps />
      <ConditionalProps /> <ComplexProps />
      <div style={{ display: "flex", gap: "10px" }}>
        <Card
          title="고양이 카드"
          imgUrl="https://picsum.photos/200"
          tags={["귀여움", "동물", "인기"]}
          highlight={true}
          style={{ border: "2px solid orange", padding: "10px", borderRadius: "10px" }}
        />
        <Card
          title="강아지 카드"
          imgUrl="https://picsum.photos/201"
          tags={["귀여움", "동물", "인기"]}
          highlight={false}
          style={{ border: "2px solid blue", padding: "10px", borderRadius: "10px" }}
        />
      </div>
    </div>

    <ModalEx />
  </>
);
