import ReactThreeTestRenderer from "@react-three/test-renderer";
import App from "../App";

test("CadConverter", async () => {
  const renderer = await ReactThreeTestRenderer.create(<App />);
  const renderedTree = renderer.toTree();
  expect(renderedTree).toBeTruthy();
});
