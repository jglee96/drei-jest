import ReactThreeTestRenderer from "@react-three/test-renderer";
import ViewOne from "../components/ViewOne";
import ViewTwo from "../components/ViewTwo";

test("ViewOne", async () => {
  const renderer = await ReactThreeTestRenderer.create(<ViewOne />);
  const renderedTree = renderer.toTree();
  expect(renderedTree).toBeTruthy();
});

test("ViewTwo", async () => {
  const renderer = await ReactThreeTestRenderer.create(<ViewTwo />);
  const renderedTree = renderer.toTree();
  expect(renderedTree).toBeTruthy();
});
